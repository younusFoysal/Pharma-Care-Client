import React from 'react';
import { format } from 'date-fns';
import {Edit, Trash2, Phone, Mail, User, HandCoins} from 'lucide-react';
import { Customer } from '../../types/customer';

interface CustomerListProps {
  customers: Customer[];
  onEdit: (customer: Customer) => void;
  onDelete: (id: string) => void;
  fetchCustomerDues: (id: string) => void;
}

function CustomerList({ customers, onEdit, onDelete, fetchCustomerDues }: CustomerListProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Health Info</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {customers.map((customer) => (
            <tr key={customer._id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <User className="h-8 w-8 text-gray-400" />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">{customer.name}</div>
                    <div className="text-sm text-gray-500">
                      {format(new Date(customer.dateOfBirth || ''), 'MMM dd, yyyy')}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center text-sm text-gray-500">
                  <Phone className="h-4 w-4 mr-1" />
                  {customer.phone}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Mail className="h-4 w-4 mr-1" />
                  {customer.email}
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm text-gray-900">{customer.address.street}</div>
                <div className="text-sm text-gray-500">
                  {[
                    customer.address.city,
                    customer.address.state,
                    customer.address.zipCode
                  ].filter(Boolean).join(', ')}
                </div>
              </td>
              <td className="px-6 py-4">
                {customer.healthInfo?.conditions.length ? (
                  <div className="space-y-1">
                    {customer.healthInfo.conditions.map((condition, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 mr-1"
                      >
                        {condition}
                      </span>
                    ))}
                  </div>
                ) : (
                  <span className="text-sm text-gray-500">No conditions listed</span>
                )}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">

                <button
                    className="text-orange-600 hover:text-orange-900 mr-4"
                    onClick={() => fetchCustomerDues(customer._id)}
                >
                   <HandCoins className="h-5 w-5" />
                </button>


                <button
                    onClick={() => onEdit(customer)}
                    className="text-indigo-600 hover:text-indigo-900 mr-4"
                >
                  <Edit className="h-5 w-5"/>
                </button>
                <button
                    onClick={() => onDelete(customer._id)}
                    className="text-red-600 hover:text-red-900"
                >
                  <Trash2 className="h-5 w-5"/>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CustomerList;