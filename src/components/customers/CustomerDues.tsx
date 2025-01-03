import React from 'react';
import { format } from 'date-fns';
import { Sale } from '../../types/sale';
import PaymentModal from './PaymentModal';

interface CustomerDuesProps {
    dues: Sale[];
    onPaymentUpdate: (saleId: string, amount: number) => Promise<void>;
}

function CustomerDues({ dues, onPaymentUpdate }: CustomerDuesProps) {
    const [selectedSale, setSelectedSale] = React.useState<Sale | null>(null);

    return (
        <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">Due Payments</h3>

            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Invoice</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Paid</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Due</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                    </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                    {dues.map((sale) => (
                        <tr key={sale._id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                {sale.invoiceNumber}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {format(new Date(sale.date), 'MMM dd, yyyy')}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                ${sale.total.toFixed(2)}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                ${sale.paidAmount.toFixed(2)}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600 font-medium">
                                ${sale.dueAmount.toFixed(2)}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                                <button
                                    onClick={() => setSelectedSale(sale)}
                                    className="text-indigo-600 hover:text-indigo-900"
                                >
                                    Pay Due
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {selectedSale && (
                <PaymentModal
                    sale={selectedSale}
                    isOpen={!!selectedSale}
                    onClose={() => setSelectedSale(null)}
                    onSubmit={onPaymentUpdate}
                />
            )}
        </div>
    );
}

export default CustomerDues;