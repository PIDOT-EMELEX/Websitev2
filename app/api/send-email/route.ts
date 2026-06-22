import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { jobTitle, name, email, linkedinUrl, resumeUrl, message } = body;

    const resendApiKey = process.env.RESEND_API_KEY;
    const notificationEmail = process.env.NOTIFICATION_EMAIL || "vamshi@pidot.in";

    if (!resendApiKey) {
      console.warn("RESEND_API_KEY is not defined. Email notifications are simulated in local development.");
      return NextResponse.json({ 
        success: true, 
        simulated: true, 
        message: "Email simulated successfully (RESEND_API_KEY missing)." 
      });
    }

    // Call Resend's API directly using fetch to avoid requiring npm install of the resend SDK
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${resendApiKey}`
      },
      body: JSON.stringify({
        from: "Pi Dot Careers <onboarding@resend.dev>", // Sandbox domain default, customizable if domain registered
        to: notificationEmail,
        subject: `New Job Application: ${name} - ${jobTitle}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
            <h2 style="color: #f69507; border-bottom: 2px solid #f69507; padding-bottom: 10px;">New Candidate Application</h2>
            <p style="font-size: 16px;">A new candidate has submitted an application on the website.</p>
            
            <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; width: 150px; color: #555;">Job Position:</td>
                <td style="padding: 8px 0; font-size: 15px;">${jobTitle}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Candidate Name:</td>
                <td style="padding: 8px 0; font-size: 15px;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Email Address:</td>
                <td style="padding: 8px 0; font-size: 15px;"><a href="mailto:${email}">${email}</a></td>
              </tr>
              ${linkedinUrl ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">LinkedIn Profile:</td>
                <td style="padding: 8px 0; font-size: 15px;"><a href="${linkedinUrl}" target="_blank">${linkedinUrl}</a></td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Resume Link:</td>
                <td style="padding: 8px 0; font-size: 15px;"><a href="${resumeUrl}" target="_blank">${resumeUrl}</a></td>
              </tr>
            </table>
            
            ${message ? `
              <div style="margin-top: 20px; padding: 15px; background: #f9f9f9; border-left: 4px solid #f69507; border-radius: 4px;">
                <h4 style="margin: 0 0 10px 0; color: #333;">Cover Message:</h4>
                <p style="margin: 0; font-size: 14px; line-height: 1.5; color: #555; white-space: pre-wrap;">${message}</p>
              </div>
            ` : ''}
            
            <hr style="border: 0; border-top: 1px solid #eee; margin: 30px 0 20px 0;" />
            <p style="font-size: 12px; color: #999; text-align: center;">This notification was automatically sent by the Pi Dot Careers application platform.</p>
          </div>
        `
      })
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Failed to send email via Resend API");
    }

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("Error in email notification API route:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
