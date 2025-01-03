import React, { useState, useEffect } from 'react';
import { api } from '../../utils/api';
import { Customer } from '../../types/customer';

interface CustomerSelectProps {
    onSelect: (customer: Customer | null) => void;
    onCustomerInfoChange: (info: { name: string; phone: string }) => void;
}

function CustomerSelect({ onSelect, onCustomerInfoChange }: CustomerSelectProps) {
    const [customers, setCustomers] = useState<Customer[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [isNewCustomer, setIsNewCustomer] = useState(false);

    useEffect(() => {
        fetchCustomers();
    }, []);

    const fetchCustomers = async () => {
        try {
            const response = await api.get('/customers');
            setCustomers(response.data);
        } catch (error) {
            console.error('Error fetching customers:', error);
        }
    };

    const handleCustomerSelect = (customerId: string) => {
        const customer = customers.find(c => c._id === customerId);
        onSelect(customer || null);
        if (customer) {
            onCustomerInfoChange({ name: customer.name, phone: customer.phone });
        }
    };

    return (
        <div className="space-y-4">
            <div className="flex items-center space-x-2">
                <input
                    type="checkbox"
                    id="newCustomer"
                    checked={isNewCustomer}
                    onChange={(e) => {
                        setIsNewCustomer(e.target.checked);
                        if (e.target.checked) {
                            onSelect(null);
                        }
                    }}
                    className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label htmlFor="newCustomer" className="text-sm text-gray-700">
                    New Customer
                </label>
            </div>

            {isNewCustomer ? (
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            onChange={(e) => onCustomerInfoChange({ name: e.target.value, phone: '' })}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Phone</label>
                        <input
                            type="text"
                            onChange={(e) => onCustomerInfoChange({ name: '', phone: e.target.value })}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        />
                    </div>
                </div>
            ) : (
                <div>
                    <label className="block text-sm font-medium text-gray-700">Select Customer</label>
                    <select
                        onChange={(e) => handleCustomerSelect(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    >
                        <option value="">Select a customer</option>
                        {customers.map((customer) => (
                            <option key={customer._id} value={customer._id}>
                                {customer.name} - {customer.phone}
                            </option>
                        ))}
                    </select>
                </div>
            )}
        </div>
    );
}

export default CustomerSelect;