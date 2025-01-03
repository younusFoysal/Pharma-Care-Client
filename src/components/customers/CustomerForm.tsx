import React, { useState, useEffect } from 'react';
import { X, Plus, Minus } from 'lucide-react';
import { Customer } from '../../types/customer';

interface CustomerFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: Partial<Customer>) => Promise<void>;
  customer?: Customer;
}

function CustomerForm({ isOpen, onClose, onSubmit, customer }: CustomerFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: {
      street: '',
      city: '',
      state: '',
      zipCode: '',
      country: ''
    },
    dateOfBirth: '',
    gender: 'other' as const,
    healthInfo: {
      allergies: [''],
      conditions: [''],
      medications: ['']
    },
    insuranceInfo: {
      provider: '',
      policyNumber: ''
    }
  });

  useEffect(() => {
    if (customer) {
      setFormData({
        name: customer.name,
        email: customer.email,
        phone: customer.phone,
        address: customer.address,
        dateOfBirth: customer.dateOfBirth || '',
        gender: customer.gender || 'other',
        healthInfo: customer.healthInfo || {
          allergies: [''],
          conditions: [''],
          medications: ['']
        },
        insuranceInfo: customer.insuranceInfo || {
          provider: '',
          policyNumber: ''
        }
      });
    }
  }, [customer]);

  const handleArrayFieldChange = (
    category: 'allergies' | 'conditions' | 'medications',
    index: number,
    value: string
  ) => {
    setFormData(prev => ({
      ...prev,
      healthInfo: {
        ...prev.healthInfo,
        [category]: prev.healthInfo[category].map((item, i) =>
          i === index ? value : item
        )
      }
    }));
  };

  const addArrayField = (category: 'allergies' | 'conditions' | 'medications') => {
    setFormData(prev => ({
      ...prev,
      healthInfo: {
        ...prev.healthInfo,
        [category]: [...prev.healthInfo[category], '']
      }
    }));
  };

  const removeArrayField = (
    category: 'allergies' | 'conditions' | 'medications',
    index: number
  ) => {
    setFormData(prev => ({
      ...prev,
      healthInfo: {
        ...prev.healthInfo,
        [category]: prev.healthInfo[category].filter((_, i) => i !== index)
      }
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-900">
            {customer ? 'Edit Customer' : 'Add New Customer'}
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <X className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Basic Information */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
              <input
                type="date"
                value={formData.dateOfBirth}
                onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
          </div>

          {/* Address */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">Address</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700">Street</label>
                <input
                  type="text"
                  value={formData.address.street}
                  onChange={(e) => setFormData({
                    ...formData,
                    address: { ...formData.address, street: e.target.value }
                  })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">City</label>
                <input
                  type="text"
                  value={formData.address.city}
                  onChange={(e) => setFormData({
                    ...formData,
                    address: { ...formData.address, city: e.target.value }
                  })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">State</label>
                <input
                  type="text"
                  value={formData.address.state}
                  onChange={(e) => setFormData({
                    ...formData,
                    address: { ...formData.address, state: e.target.value }
                  })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">ZIP Code</label>
                <input
                  type="text"
                  value={formData.address.zipCode}
                  onChange={(e) => setFormData({
                    ...formData,
                    address: { ...formData.address, zipCode: e.target.value }
                  })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
            </div>
          </div>

          {/* Health Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">Health Information</h3>
            
            {/* Allergies */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-medium text-gray-700">Allergies</label>
                <button
                  type="button"
                  onClick={() => addArrayField('allergies')}
                  className="text-indigo-600 hover:text-indigo-900"
                >
                  <Plus className="h-5 w-5" />
                </button>
              </div>
              {formData.healthInfo.allergies.map((allergy, index) => (
                <div key={index} className="flex items-center space-x-2 mb-2">
                  <input
                    type="text"
                    value={allergy}
                    onChange={(e) => handleArrayFieldChange('allergies', index, e.target.value)}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                  <button
                    type="button"
                    onClick={() => removeArrayField('allergies', index)}
                    className="text-red-600 hover:text-red-900"
                  >
                    <Minus className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>

            {/* Medical Conditions */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-medium text-gray-700">Medical Conditions</label>
                <button
                  type="button"
                  onClick={() => addArrayField('conditions')}
                  className="text-indigo-600 hover:text-indigo-900"
                >
                  <Plus className="h-5 w-5" />
                </button>
              </div>
              {formData.healthInfo.conditions.map((condition, index) => (
                <div key={index} className="flex items-center space-x-2 mb-2">
                  <input
                    type="text"
                    value={condition}
                    onChange={(e) => handleArrayFieldChange('conditions', index, e.target.value)}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                  <button
                    type="button"
                    onClick={() => removeArrayField('conditions', index)}
                    className="text-red-600 hover:text-red-900"
                  >
                    <Minus className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>

            {/* Current Medications */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-medium text-gray-700">Current Medications</label>
                <button
                  type="button"
                  onClick={() => addArrayField('medications')}
                  className="text-indigo-600 hover:text-indigo-900"
                >
                  <Plus className="h-5 w-5" />
                </button>
              </div>
              {formData.healthInfo.medications.map((medication, index) => (
                <div key={index} className="flex items-center space-x-2 mb-2">
                  <input
                    type="text"
                    value={medication}
                    onChange={(e) => handleArrayFieldChange('medications', index, e.target.value)}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                  <button
                    type="button"
                    onClick={() => removeArrayField('medications', index)}
                    className="text-red-600 hover:text-red-900"
                  >
                    <Minus className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Insurance Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">Insurance Information</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">Insurance Provider</label>
                <input
                  type="text"
                  value={formData.insuranceInfo.provider}
                  onChange={(e) => setFormData({
                    ...formData,
                    insuranceInfo: { ...formData.insuranceInfo, provider: e.target.value }
                  })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Policy Number</label>
                <input
                  type="text"
                  value={formData.insuranceInfo.policyNumber}
                  onChange={(e) => setFormData({
                    ...formData,
                    insuranceInfo: { ...formData.insuranceInfo, policyNumber: e.target.value }
                  })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
            </div>
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
              {customer ? 'Update' : 'Create'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CustomerForm;