import jsPDF from "jspdf";
import img1 from "./1-removebg-preview.png";
import img2 from "./2-removebg-preview.png";

interface DonationReceiptData {
  panDetails: string;
  // date: string;
  // receiptno: string;
  name: string;
  amount: number;
  payment_id: string;
  // payment_method: string;
  mobileNumber: string;
  email: string;
  // org_add: string;
  // reg_no: string;
}

const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString("en-IN", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

export const generateDonationReceiptPDF = ({
  panDetails,
  name,
  amount,
  payment_id,
  mobileNumber,
  email,
}: DonationReceiptData): void => {
  const pdf = new jsPDF("p", "mm", "a4");

  pdf.addImage(img1, "PNG", 15, 15, 20 * 2.41, 20);
  pdf.addImage(img2, "PNG", 160, 7, 25, 25);

  pdf.setFontSize(16);
  pdf.text("DONATION RECEIPT", 105, 20, { align: "center" });

  // Location and Reg. No
  pdf.setFontSize(10);
  pdf.text("NASHIK, MAHARASHTRA", 105, 30, { align: "center" });
  pdf.text(`Reg. no - '0000000000'`, 105, 35, { align: "center" });

  // Main content box
  pdf.rect(10, 40, 190, 170);

  // Date
  pdf.text("Date:", 20, 50);
  pdf.text(formattedDate, 70, 50);

  // Donor Name
  pdf.text("Donor Name:", 20, 60);
  pdf.text(name, 70, 60);

  // Mobile
  pdf.text("Mobile:", 20, 70);
  pdf.text(`+${mobileNumber}`, 70, 70);

  // Email
  pdf.text("Email ID:", 20, 80);
  pdf.text(email, 70, 80);

  // PAN
  pdf.text("PAN:", 20, 90);
  pdf.text(panDetails, 70, 90);

  // Amount
  pdf.text("Amount:", 20, 100);
  pdf.text(`Rs.${amount}`, 70, 100);

  // Transaction ID
  pdf.text("Transaction ID:", 20, 110);
  pdf.text(payment_id, 70, 110);

  // Payment Method
  pdf.text("Payment Method:", 20, 120);
  pdf.text("Online", 70, 120);

  // Thank you message
  pdf.setFontSize(12);
  pdf.text("[ ^_^ Thank you for your generous support ]", 105, 200, {
    align: "center",
  });

  const fileName = `donation_receipt.pdf`;
  pdf.save(fileName);
};
