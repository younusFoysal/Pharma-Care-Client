import React, { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';
import { api } from '../utils/api';
import { Customer } from '../types/customer';
import CustomerList from '../components/customers/CustomerList';
import CustomerForm from '../components/customers/CustomerForm';
import CustomerSearch from '../components/customers/CustomerSearch';
import CustomerDues from '../components/customers/CustomerDues';
import { Sale } from '../types/sale';

function Customers() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | undefined>();
  const [searchQuery, setSearchQuery] = useState('');
  const [customerDues, setCustomerDues] = useState<Sale[]>([]);
  const [selectedCustomerId, setSelectedCustomerId] = useState<string | null>(null);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const response = await api.get('/customers');
      setCustomers(response?.data || []);
    } catch (error) {
      console.error('Error fetching customers:', error);
    }
  };

  const handleSubmit = async (data: Partial<Customer>) => {
    try {
      if (selectedCustomer) {
        await api.put(`/customers/${selectedCustomer._id}`, data);
      } else {
        await api.post('/customers', data);
      }
      await fetchCustomers();
      setIsModalOpen(false);
      setSelectedCustomer(undefined);
    } catch (error) {
      console.error('Error saving customer:', error);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this customer?')) {
      try {
        await api.delete(`/customers/${id}`);
        await fetchCustomers();
      } catch (error) {
        console.error('Error deleting customer:', error);
      }
    }
  };

  const filteredCustomers = customers.filter((customer) =>
      customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.phone.includes(searchQuery)
  );

  const fetchCustomerDues = async (customerId: string) => {
    try {
      const response = await api.get(`/sales/customer-dues/${customerId}`);
      console.log('Customer Dues Response:', response.data); // Debugging
      setCustomerDues(response?.data || []);
      setSelectedCustomerId(customerId);
    } catch (error) {
      console.error('Error fetching customer dues:', error);
    }
  };

  const handlePaymentUpdate = async (saleId: string, amount: number) => {
    try {
      await api.patch(`/sales/${saleId}/payment`, { paidAmount: amount });
      if (selectedCustomerId) {
        await fetchCustomerDues(selectedCustomerId);
      }
    } catch (error) {
      console.error('Error updating payment:', error);
    }
  };

  return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-900">Customer Management</h1>
          <button
              onClick={() => {
                setSelectedCustomer(undefined);
                setIsModalOpen(true);
              }}
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 flex items-center"
          >
            <Plus className="h-5 w-5 mr-2" />
            Add Customer
          </button>
        </div>

        <div className="bg-white shadow rounded-lg">
          <div className="p-4 border-b border-gray-200">
            <CustomerSearch value={searchQuery} onChange={setSearchQuery} />
          </div>

          <CustomerList
              customers={filteredCustomers}
              onEdit={(customer) => {
                setSelectedCustomer(customer);
                setIsModalOpen(true);
              }}
              fetchCustomerDues={fetchCustomerDues}
              onDelete={handleDelete}
          />
        </div>

        <CustomerForm
            isOpen={isModalOpen}
            onClose={() => {
              setIsModalOpen(false);
              setSelectedCustomer(undefined);
            }}
            onSubmit={handleSubmit}
            customer={selectedCustomer}
        />

        {/* Customer Dues Section */}
        {selectedCustomerId && (
            <div className="mt-6">
              <h2 className="text-xl font-bold text-gray-900">
                Dues for Customer ID: {selectedCustomerId}
              </h2>
              {customerDues.length > 0 ? (
                  <CustomerDues
                      dues={customerDues}
                      onPaymentUpdate={handlePaymentUpdate}
                  />
              ) : (
                  <p className="text-gray-500">No dues found for this customer.</p>
              )}
            </div>
        )}
      </div>
  );
}

export default Customers;
