import { NextResponse } from "next/server";
import { z } from "zod";
import { pool } from "@/lib/db";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  company: z.string().optional(),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(6, "Valid phone number is required"),
  serviceInterest: z.string(),
  message: z.string().min(10, "Please provide more details"),
  honeypot: z.string().max(0, "Spam detected").optional(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validatedData = contactSchema.parse(body);

    // Spam protection check
    if (validatedData.honeypot) {
      return NextResponse.json({ error: "Spam detected" }, { status: 400 });
    }

    // Insert into MySQL
    const [result] = await pool.execute(
      "INSERT INTO leads (name, company, email, phone, service_interest, message, source_page) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [
        validatedData.name,
        validatedData.company || null,
        validatedData.email,
        validatedData.phone,
        validatedData.serviceInterest,
        validatedData.message,
        "/contact" // Alternatively pass from client
      ]
    );

    // TODO: Trigger email notification to sales team here

    return NextResponse.json({ success: true, id: (result as any).insertId });
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: (error as any).errors }, { status: 400 });
    }
    console.error("Contact API Error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
