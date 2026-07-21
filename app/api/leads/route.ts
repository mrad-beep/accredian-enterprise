import { NextRequest, NextResponse } from "next/server";

// In-memory mock store. Resets on every cold start / deploy —
// swap for a real database (Postgres, Supabase, Airtable, etc.)
// in production.
const leads: Array<{
  id: string;
  name: string;
  workEmail: string;
  company: string;
  teamSize: string;
  message: string;
  createdAt: string;
}> = [];

export async function GET() {
  return NextResponse.json({ count: leads.length, leads });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, workEmail, company, teamSize, message } = body ?? {};

    if (!name || !workEmail || !company) {
      return NextResponse.json(
        { error: "name, workEmail, and company are required." },
        { status: 400 }
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(workEmail)) {
      return NextResponse.json(
        { error: "Please provide a valid work email." },
        { status: 400 }
      );
    }

    const lead = {
      id: crypto.randomUUID(),
      name,
      workEmail,
      company,
      teamSize: teamSize ?? "Not specified",
      message: message ?? "",
      createdAt: new Date().toISOString(),
    };

    leads.push(lead);

    return NextResponse.json({ success: true, lead }, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { error: "Invalid request payload." },
      { status: 400 }
    );
  }
}
