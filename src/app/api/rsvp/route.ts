// app/api/rsvp/route.ts

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name } = await request.json();

    if (!name) {
      return NextResponse.json({ error: "Name is required." }, { status: 400 });
    }

    const webhookUrl = process.env.SLACK_WEBHOOK_URL;

    if (!webhookUrl) {
      return NextResponse.json(
        { error: "Slack webhook URL is not configured." },
        { status: 500 }
      );
    }

    const payload = {
      text: `🎉 New RSVP from ${name}!`,
    };

    const slackResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!slackResponse.ok) {
      return NextResponse.json(
        { error: "Failed to send message to Slack." },
        { status: 500 }
      );
    }

    return NextResponse.json({ message: "RSVP received successfully." });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "An error occurred while processing your request." },
      { status: 500 }
    );
  }
}
