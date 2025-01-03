import React from 'react';

interface PaymentSectionProps {
    total: number;
    onPaymentChange: (payment: { amount: number; method: string; isDue: boolean }) => void;
}

function PaymentSection({ total, onPaymentChange }: PaymentSectionProps) {
    const [paidAmount, setPaidAmount] = React.useState(total);
    const [paymentMethod, setPaymentMethod] = React.useState('cash');

    const handlePaidAmountChange = (amount: number) => {
        setPaidAmount(amount);
        onPaymentChange({
            amount,
            method: paymentMethod,
            isDue: amount < total
        });
    };

    const handlePaymentMethodChange = (method: string) => {
        setPaymentMethod(method);
        onPaymentChange({
            amount: paidAmount,
            method,
            isDue: paidAmount < total
        });
    };

    return (
        <div className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700">Payment Method</label>
                <select
                    value={paymentMethod}
                    onChange={(e) => handlePaymentMethodChange(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                >
                    <option value="cash">Cash</option>
                    <option value="card">Card</option>
                </select>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Paid Amount</label>
                <input
                    type="number"
                    value={paidAmount}
                    onChange={(e) => handlePaidAmountChange(Number(e.target.value))}
                    min="0"
                    max={total}
                    step="0.01"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
            </div>

            {paidAmount < total && (
                <div className="bg-yellow-50 p-4 rounded-md">
                    <p className="text-sm text-yellow-700">
                        Due Amount: ${(total - paidAmount).toFixed(2)}
                    </p>
                </div>
            )}
        </div>
    );
}

export default PaymentSection;