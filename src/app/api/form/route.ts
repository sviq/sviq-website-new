import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type FormDataType = {
  formType: "productInquiry" | "jobApplication" | "contactUs";
  fullname?: string;
  email?: string;
  number?: string;
  product?: string;
  message?: string;
  jobId?: string;
  subject?: string;
  resume?: File;
};

function generateEmailTemplate(
  formType: FormDataType["formType"],
  fullname: string,
  email: string,
  number?: string,
  product?: string,
  message?: string,
  jobId?: string
) {
  return `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
    <h2 style="color: #463DEB; text-align: center;">${
      formType === "productInquiry"
        ? "Product Inquiry"
        : formType === "jobApplication"
        ? "Job Application"
        : "Contact Us"
    }</h2>
    
    <p><strong>Name:</strong> ${fullname}</p>
    <p><strong>Email:</strong> ${email}</p>
    ${number ? `<p><strong>Phone:</strong> ${number}</p>` : ""}
    ${product ? `<p><strong>Product:</strong> ${product}</p>` : ""}
    ${jobId ? `<p><strong>Job ID:</strong> ${jobId}</p>` : ""}
    <p><strong>Message:</strong> ${message}</p>

    <hr>
    <p style="text-align: center; font-size: 12px; color: #555;">This email was sent from the contact form on your website.</p>
  </div>
  `;
}

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const formType = formData.get("formType") as FormDataType["formType"];

    // Common Fields
    const fullname = formData.get("fullname") as string;
    const email = formData.get("email") as string;
    const number = formData.get("number") as string;
    const message = formData.get("message") as string;

    // Declare variables before switch
    let subject = "";
    let mailText = "";
    let attachments = [];
    let jobId: string | undefined = undefined;
    let product: string | undefined = undefined;

    switch (formType) {
      case "productInquiry":
        product = formData.get("product") as string;
        subject = `Product Inquiry - ${product}`;
        mailText = `Name: ${fullname}\nEmail: ${email}\nNumber: ${number}\nProduct: ${product}\nMessage: ${message}`;
        break;

      case "jobApplication":
        jobId = formData.get("jobId") as string;
        const resume = formData.get("resume") as File | null;

        if (resume) {
          const fileBuffer = await resume.arrayBuffer();
          const fileData = Buffer.from(fileBuffer);

          attachments.push({
            filename: resume.name,
            content: fileData,
            contentType: resume.type,
          });
        }

        subject = `Job Application - ${fullname} (Job ID: ${jobId})`;
        mailText = `Name: ${fullname}\nEmail: ${email}\nNumber: ${number}\nMessage: ${message}`;
        break;

      case "contactUs":
        subject = `Contact Us - ${formData.get("subject") as string}`;
        mailText = `Name: ${fullname}\nEmail: ${email}\nMessage: ${message}`;
        break;

      default:
        return NextResponse.json(
          { success: false, error: "Invalid form type" },
          { status: 400 }
        );
    }

    // Configure Nodemailer transport
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.RECEIVER_EMAIL,
      subject,
      text: mailText,
      html: generateEmailTemplate(
        formType,
        fullname,
        email,
        number,
        product,
        message,
        jobId
      ),
      attachments,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    const err = error as Error;
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}
