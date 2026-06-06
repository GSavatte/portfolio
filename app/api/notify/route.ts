import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

  if (!webhookUrl) {
    return NextResponse.json({ error: 'Webhook URL missing' }, { status: 500 });
  }

  const forwardedFor = request.headers.get('x-forwarded-for');

  const ip = forwardedFor ? forwardedFor.split(',')[0] : 'IP inconnue';

  const userAgent = request.headers.get('user-agent') || 'Navigateur inconnu';

  try {
    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        embeds: [
          {
            title: "Nouveau visiteur sur le Portfolio",
            color: 3447003,
            description: "Un nouveau visiteur a été détecté sur le portfolio. Détails :",
            fields: [
              {
                name: "🌍 Adresse IP",
                value: `\`${ip}\``,
                inline: true
              },
              {
                name: "💻 Navigateur & OS",
                value: `\`${userAgent}\``,
                inline: false
              }
            ],
            timestamp: new Date().toISOString() 
          }
        ]
      }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}