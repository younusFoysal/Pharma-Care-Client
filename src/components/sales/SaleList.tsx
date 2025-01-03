import  {useState} from 'react';
import { format } from 'date-fns';
import {FileText, Edit} from 'lucide-react';
import { Sale } from '../../types/sale';
import InvoiceModal from './InvoiceModal';

interface SaleListProps {
    sales: Sale[];
    onEdit: (sale: Sale) => void;
}

function SaleList({ sales, onEdit }: SaleListProps) {
    const [selectedSale, setSelectedSale] = useState<Sale | null>(null);

    const handleViewInvoice = (sale: Sale) => {
        setSelectedSale(sale);
    };

    return (
        <>
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Invoice</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Items</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {sales.map((sale) => (
                    <tr key={sale._id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{sale.invoiceNumber}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {format(new Date(sale.date), 'MMM dd, yyyy')}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{sale.customerName}</div>
                            <div className="text-sm text-gray-500">{sale.customerPhone}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {sale.items.length} items
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            ${sale.total.toFixed(2)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    sale.status === 'paid'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {sale.status}
                </span>
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            {sale.status !== 'paid' && (
                                <button
                                    onClick={() => onEdit(sale)}
                                    className="text-indigo-600 hover:text-indigo-900 mr-4"
                                    title="Edit Sale"
                                >
                                    <Edit className="h-5 w-5"/>
                                </button>
                            )}
                            <button
                                onClick={() => handleViewInvoice(sale)}
                                className="text-gray-600 hover:text-gray-900"
                                title="View Invoice"
                            >
                                <FileText className="h-5 w-5"/>
                            </button>
                        </td>

                    </tr>
                ))}
                </tbody>
            </table>
        </div>

            {selectedSale && (
                <InvoiceModal
                    isOpen={!!selectedSale}
                    onClose={() => setSelectedSale(null)}
                    sale={selectedSale}
                />
            )}
        </>
    );
}

export default SaleList;