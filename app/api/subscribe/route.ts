import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email requis' }, { status: 400 });
    }

    const { data, error } = await resend.contacts.create({
      email: email,
      unsubscribed: false,
      audienceId: process.env.RESEND_AUDIENCE_ID as string,
    });

    if (error) {
      console.error('Erreur Resend:', error);
      return NextResponse.json({ error: 'Erreur lors de l\'inscription' }, { status: 400 });
    }

    return NextResponse.json({ success: true });
    
  } catch (error) {
    console.error('Erreur Serveur:', error);
    return NextResponse.json({ error: 'Erreur interne' }, { status: 500 });
  }
}