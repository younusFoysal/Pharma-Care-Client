import { useRef } from 'react';
import { Sale } from '../types/sale';

export function useInvoicePrint() {
    const printInvoice = (sale: Sale) => {
        const printWindow = window.open('', '_blank');
        if (!printWindow) return;

        const content = document.getElementById('invoice-content');
        if (!content) return;

        printWindow.document.write(`
      <html>
        <head>
          <title>Invoice #${sale.invoiceNumber}</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; }
            table { width: 100%; border-collapse: collapse; margin: 20px 0; }
            th, td { padding: 12px; text-align: left; border-bottom: 1px solid #ddd; }
            th { background-color: #f8f9fa; }
          </style>
        </head>
        <body>
          ${content.innerHTML}
        </body>
      </html>
    `);

        printWindow.document.close();
        printWindow.focus();
        printWindow.print();
        printWindow.close();
    };

    return { printInvoice };
}