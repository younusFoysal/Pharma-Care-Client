import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Sale } from '../../types/sale';

interface PaymentModalProps {
    sale: Sale;
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (saleId: string, amount: number) => Promise<void>;
}

function PaymentModal({ sale, isOpen, onClose, onSubmit }: PaymentModalProps) {
    const [amount, setAmount] = useState<number>(sale.dueAmount);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await onSubmit(sale._id, amount);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-md w-full">
                <div className="flex justify-between items-center p-6 border-b">
                    <h2 className="text-xl font-semibold text-gray-900">Pay Due Amount</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
                        <X className="h-6 w-6" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <div>
                        <p className="text-sm text-gray-500">Invoice: {sale.invoiceNumber}</p>
                        <p className="text-sm text-gray-500">Total Due: ${sale.dueAmount.toFixed(2)}</p>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Payment Amount</label>
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(Number(e.target.value))}
                            min="0"
                            max={sale.dueAmount}
                            step="0.01"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            required
                        />
                    </div>

                    <div className="flex justify-end space-x-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                        >
                            Submit Payment
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default PaymentModal;