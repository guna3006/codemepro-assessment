import { jsPDF } from 'jspdf';

const generatePDF = (orderReceipt) => {
  const currentDate = new Date().toISOString().split('T')[0];
  const timezoneOffset = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kuala_Lumpur', timeZoneName: 'short' }).split(' ')[2];
  const filename = `order_summary_${currentDate}_${timezoneOffset}.pdf`;

  const pdfDoc = new jsPDF();

  pdfDoc.text("Order Summary", 20, 20);
  pdfDoc.text(`Total Packages: ${orderReceipt.totalPackage}`, 20, 30);
  pdfDoc.text(`Total Package Weight: ${orderReceipt.totalPackageWeight} grams`, 20, 40);
  pdfDoc.text(`Total Package Charge: $${orderReceipt.totalPackageCharge}`, 20, 50);

  orderReceipt.packages.forEach((pkg, index) => {
    pdfDoc.text(`Package ${index + 1}`, 20, 60 + index * 30);
    pdfDoc.text(`Package Weight: ${pkg.packageWeight} grams`, 20, 70 + index * 30);
    pdfDoc.text(`Package Charge: $${pkg.packageCharge}`, 20, 80 + index * 30);

    pkg.details.forEach((item, itemIndex) => {
      const yPosition = 90 + index * 30 + itemIndex * 10;
      pdfDoc.text(`Item ${itemIndex + 1}: ${item.Name}, Price: $${item.Price}, Weight: ${item.Weight} grams`, 20, yPosition);
    });
  });

  pdfDoc.save(filename);
};

export default generatePDF;
