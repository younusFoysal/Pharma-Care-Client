import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Sale } from '../../types/sale';
import { api } from '../../utils/api';
import PaymentSection from './PaymentSection';

interface UpdateSaleModalProps {
    isOpen: boolean;
    onClose: () => void;
    sale: Sale;
    onUpdate: () => void;
}

function UpdateSaleModal({ isOpen, onClose, sale, onUpdate }: UpdateSaleModalProps) {
    const [payment, setPayment] = useState({
        amount: 0,
        method: sale.paymentMethod,
        isDue: sale.status !== 'paid'
    });

    useEffect(() => {
        if (sale) {
            setPayment({
                amount: sale.dueAmount,
                method: sale.paymentMethod,
                isDue: sale.status !== 'paid'
            });
        }
    }, [sale]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await api.patch(`/sales/${sale._id}/payment`, {
                paidAmount: payment.amount,
                paymentMethod: payment.method
            });
            onUpdate();
            onClose();
        } catch (error) {
            console.error('Error updating sale:', error);
        }
    };

    if (!isOpen) return null;

    // @ts-ignore
    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-md w-full">
                <div className="flex justify-between items-center p-6 border-b">
                    <h2 className="text-xl font-semibold text-gray-900">Update Sale</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
                        <X className="h-6 w-6" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                    <div className="space-y-2">
                        <p className="text-sm text-gray-500">Invoice: {sale.invoiceNumber}</p>
                        <p className="text-sm text-gray-500">Customer: {sale.customerName}</p>
                        <p className="text-sm text-gray-500">Total Amount: ${sale.total.toFixed(2)}</p>
                        <p className="text-sm text-gray-500">Due Amount: ${sale.dueAmount.toFixed(2)}</p>
                    </div>

                    <PaymentSection
                        total={sale.dueAmount}
                        onPaymentChange={setPayment}
                    />

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
                            Update Payment
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default UpdateSaleModal;