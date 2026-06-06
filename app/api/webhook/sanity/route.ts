import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const post = await request.json();

    const audience = await resend.contacts.list({
      audienceId: process.env.RESEND_AUDIENCE_ID as string,
    });

    const emails = audience.data?.data.map((contact) => contact.email) || [];

    if (emails.length === 0) {
      return NextResponse.json({ message: 'Aucun abonné pour le moment.' });
    }

    const { error } = await resend.emails.send({
      from: 'Gabriel <newsletter@sgabriel.fr>',
      to: 'newsletter@sgabriel.fr',
      bcc: emails, 
      subject: `🇨🇦 Nouveau post : ${post.title}`,
      html: `
        <div style="font-family: sans-serif; max-w: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #1a1a1a;">Salut ! 👋</h2>
          <p style="font-size: 16px; color: #4a4a4a; line-height: 1.5;">
            Je viens tout juste de publier un nouveau post sur mon blog.
          </p>
          <div style="background-color: #f4f4f5; padding: 20px; border-radius: 12px; margin: 24px 0;">
            <h3 style="margin-top: 0;">${post.title}</h3>
            <p style="color: #666;">${post.excerpt || 'Cliquez ci-dessous pour découvrir de quoi ça parle !'}</p>
          </div>
          <a href="https://sgabriel.fr/blog/${post.slug}" 
             style="display: inline-block; background-color: #000; color: #fff; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: bold;">
            Lire le post
          </a>
          <p style="margin-top: 40px; font-size: 12px; color: #999;">
            Vous recevez ce mail car vous êtes inscrit sur sgabriel.fr
          </p>
        </div>
      `,
    });

    if (error) throw new Error(error.message);

    return NextResponse.json({ success: true, message: 'Emails envoyés !' });

  } catch (error) {
    console.error('Erreur Webhook:', error);
    return NextResponse.json({ error: 'Erreur lors de l\'envoi' }, { status: 500 });
  }
}