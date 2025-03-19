import fs from "fs";
import path from "path";
import * as XLSX from "xlsx";
import { NextResponse } from "next/server";

const filePath = path.join(process.cwd(), "emails.xlsx");

type Data = {
  Email: string;
  Product: string;
  Timestamp: string;
};

export async function POST(req: Request) {
  try {
    const { email, productName } = await req.json();

    if (!email || !productName) {
      return NextResponse.json(
        { error: "Email and Product Name are required" },
        { status: 400 }
      );
    }

    let data: Data[] = [];

    // Check if the Excel file exists
    if (fs.existsSync(filePath)) {
      const fileBuffer = fs.readFileSync(filePath);
      const workbook = XLSX.read(fileBuffer, { type: "buffer" });
      const sheetName = workbook.SheetNames[0];
      data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
    }

    // Append new email entry
    data.push({
      Email: email,
      Product: productName,
      Timestamp: new Date().toISOString(),
    });

    // Create a new worksheet and save it
    const newWorkbook = XLSX.utils.book_new();
    const newWorksheet = XLSX.utils.json_to_sheet(data);
    XLSX.utils.book_append_sheet(newWorkbook, newWorksheet, "Emails");

    const excelBuffer = XLSX.write(newWorkbook, {
      type: "buffer",
      bookType: "xlsx",
    });
    fs.writeFileSync(filePath, excelBuffer);

    return NextResponse.json(
      { message: "Email saved successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error saving email:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
