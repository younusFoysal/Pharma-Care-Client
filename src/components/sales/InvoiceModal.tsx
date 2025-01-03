
import { X, Printer } from 'lucide-react';
import { format } from 'date-fns';
import { Sale } from '../../types/sale';
import { useInvoicePrint } from '../../hooks/useInvoicePrint';

interface InvoiceModalProps {
    isOpen: boolean;
    onClose: () => void;
    sale: Sale;
}

function InvoiceModal({ isOpen, onClose, sale }: InvoiceModalProps) {
    const { printInvoice } = useInvoicePrint();

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full">
                <div className="flex justify-between items-center p-6 border-b">
                    <h2 className="text-xl font-semibold text-gray-900">Invoice Details</h2>
                    <div className="flex items-center space-x-2">
                        <button
                            onClick={() => printInvoice(sale)}
                            className="text-indigo-600 hover:text-indigo-900"
                        >
                            <Printer className="h-5 w-5" />
                        </button>
                        <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
                            <X className="h-6 w-6" />
                        </button>
                    </div>
                </div>

                <div className="p-6" id="invoice-content">
                    {/* Invoice Header */}
                    <div className="flex justify-between mb-8">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">INVOICE</h1>
                            <p className="text-gray-600">#{sale.invoiceNumber}</p>
                        </div>
                        <div className="text-right">
                            <p className="text-gray-600">Date: {format(new Date(sale.date), 'MMM dd, yyyy')}</p>
                            <p className="text-gray-600">Time: {format(new Date(sale.date), 'HH:mm')}</p>
                        </div>
                    </div>

                    {/* Customer Info */}
                    <div className="mb-8">
                        <h2 className="text-lg font-semibold text-gray-900 mb-2">Customer Information</h2>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-gray-700">Name: {sale.customerName}</p>
                            {sale.customerPhone && (
                                <p className="text-gray-700">Phone: {sale.customerPhone}</p>
                            )}
                        </div>
                    </div>

                    {/* Items Table */}
                    <div className="mb-8">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Item</th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Quantity</th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Price</th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Total</th>
                            </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                            {sale?.items?.map((item, index) => (
                                <tr key={index}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item?.product?.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">{item.quantity}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">${item.price.toFixed(2)}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">${(item.quantity * item.price).toFixed(2)}</td>

                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">${item.subtotal.toFixed(2)}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Payment Info */}
                    <div className="border-t pt-4">
                        <div className="flex justify-between mb-2">
                            <span className="text-gray-600">Subtotal:</span>
                            <span className="text-gray-900">${sale.total.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span className="text-gray-600">Paid Amount:</span>
                            <span className="text-gray-900">${sale?.paidAmount.toFixed(2)}</span>
                        </div>
                        {sale?.dueAmount > 0 && (
                            <div className="flex justify-between mb-2">
                                <span className="text-gray-600">Due Amount:</span>
                                <span className="text-red-600">${sale?.dueAmount.toFixed(2)}</span>
                            </div>
                        )}
                        <div className="flex justify-between mb-2">
                            <span className="text-gray-600">Payment Method:</span>
                            <span className="text-gray-900">{sale.paymentMethod.toUpperCase()}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">Status:</span>
                            <span className={`font-semibold ${
                                sale.status === 'paid' ? 'text-green-600' : 'text-yellow-600'
                            }`}>
                {sale.status.toUpperCase()}
              </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InvoiceModal;