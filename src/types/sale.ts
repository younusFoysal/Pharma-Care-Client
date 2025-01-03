// export interface Sale {
//   _id: string;
//   invoiceNumber: string;
//   date: string;
//   customerName: string;
//   customerPhone?: string;
//   items: {
//     product: string;
//     quantity: number;
//     price: number;
//     subtotal: number;
//   }[];
//   total: number;
//   paymentMethod: 'cash' | 'card';
//   status: 'paid' | 'pending';
//   createdAt: string;
//   updatedAt: string;
// }
export interface Sale {
  _id: string;
  invoiceNumber: string;
  date: string;
  customerId?: string;
  customerName: string;
  customerPhone?: string;
  items: {
    product: string;
    quantity: number;
    price: number;
    subtotal: number;
  }[];
  total: number;
  paidAmount: number;
  dueAmount: number;
  paymentMethod: 'cash' | 'card';
  status: 'paid' | 'partial' | 'pending';
  createdAt: string;
  updatedAt: string;
}