import React, { useState, useEffect } from 'react';
import { X, Plus, Minus } from 'lucide-react';
import { api } from '../../utils/api';
import { Product } from '../../types/product';
import { Customer } from '../../types/customer';
import CustomerSelect from './CustomerSelect';
import PaymentSection from './PaymentSection';

interface SaleModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
}

interface SaleItem {
  product: string;
  quantity: number;
  price: number;
  subtotal: number;
}

function SaleModal({ isOpen, onClose, onSubmit }: SaleModalProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
  const [customerInfo, setCustomerInfo] = useState({ name: '', phone: '' });
  const [items, setItems] = useState<SaleItem[]>([]);
  const [payment, setPayment] = useState({
    amount: 0,
    method: 'cash',
    isDue: false
  });
  const [formData, setFormData] = useState({
    customerName: '',
    customerPhone: '',
    items: [] as SaleItem[],
    paymentMethod: 'cash',
    status: 'paid',
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await api.get('/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const addItem = () => {
    setFormData({
      ...formData,
      items: [
        ...formData.items,
        { product: '', quantity: 1, price: 0, subtotal: 0 },
      ],
    });
  };

  const removeItem = (index: number) => {
    const newItems = formData.items.filter((_, i) => i !== index);
    setFormData({ ...formData, items: newItems });
  };

  const updateItem = (index: number, field: string, value: string | number) => {
    const newItems = [...formData.items];
    const item = newItems[index];

    if (field === 'product') {
      const product = products.find(p => p._id === value);
      if (product) {
        item.price = product.price;
        item.subtotal = item.quantity * product.price;
      }
    } else if (field === 'quantity') {
      item.quantity = Number(value);
      item.subtotal = item.quantity * item.price;
    }

    item[field as keyof SaleItem] = value;
    setFormData({ ...formData, items: newItems });
  };

  const calculateTotal = () => {
    return formData.items.reduce((total, item) => total + item.subtotal, 0);
  };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   try {
  //     await api.post('/sales', {
  //       ...formData,
  //       total: calculateTotal(),
  //     });
  //     onSubmit();
  //     onClose();
  //   } catch (error) {
  //     console.error('Error creating sale:', error);
  //   }
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const total = calculateTotal();
      await api.post('/sales', {
        customerId: selectedCustomer?._id,
        customerName: selectedCustomer?.name || customerInfo.name,
        customerPhone: selectedCustomer?.phone || customerInfo.phone,
        items: formData.items,
        total,
        paidAmount: payment.amount,
        dueAmount: total - payment.amount,
        paymentMethod: payment.method,
        status: payment.isDue ? 'partial' : 'paid',
      });
      onSubmit();
      onClose();
    } catch (error) {
      console.error('Error creating sale:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-900">New Sale</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <X className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">

          {/* Customer Selection */}
          <CustomerSelect
              onSelect={setSelectedCustomer}
              onCustomerInfoChange={setCustomerInfo}
          />

          {/*<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">*/}
          {/*  <div>*/}
          {/*    <label className="block text-sm font-medium text-gray-700">Customer Name</label>*/}
          {/*    <input*/}
          {/*      type="text"*/}
          {/*      value={formData.customerName}*/}
          {/*      onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}*/}
          {/*      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"*/}
          {/*      required*/}
          {/*    />*/}
          {/*  </div>*/}

          {/*  <div>*/}
          {/*    <label className="block text-sm font-medium text-gray-700">Customer Phone</label>*/}
          {/*    <input*/}
          {/*      type="text"*/}
          {/*      value={formData.customerPhone}*/}
          {/*      onChange={(e) => setFormData({ ...formData, customerPhone: e.target.value })}*/}
          {/*      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"*/}
          {/*    />*/}
          {/*  </div>*/}
          {/*</div>*/}

          {/* Items Section */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium text-gray-900">Items</h3>
              <button
                type="button"
                onClick={addItem}
                className="flex items-center text-indigo-600 hover:text-indigo-700"
              >
                <Plus className="h-5 w-5 mr-1" />
                Add Item
              </button>
            </div>

            {formData.items.map((item, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="flex-1">
                  <select
                    value={item.product}
                    onChange={(e) => updateItem(index, 'product', e.target.value)}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    required
                  >
                    <option value="">Select Product</option>
                    {products.map((product) => (
                      <option key={product._id} value={product._id}>
                        {product.name} - ${product.price}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="w-24">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => updateItem(index, 'quantity', e.target.value)}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    required
                  />
                </div>
                <div className="w-24">
                  <span className="block w-full text-right">${item.subtotal.toFixed(2)}</span>
                </div>
                <button
                  type="button"
                  onClick={() => removeItem(index)}
                  className="text-red-600 hover:text-red-700"
                >
                  <Minus className="h-5 w-5" />
                </button>
              </div>
            ))}
          </div>

          {/*<div className="border-t pt-4">*/}
          {/*  <div className="flex justify-between items-center">*/}
          {/*    <div>*/}
          {/*      <label className="block text-sm font-medium text-gray-700">Payment Method</label>*/}
          {/*      <select*/}
          {/*        value={formData.paymentMethod}*/}
          {/*        onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}*/}
          {/*        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"*/}
          {/*      >*/}
          {/*        <option value="cash">Cash</option>*/}
          {/*        <option value="card">Card</option>*/}
          {/*      </select>*/}
          {/*    </div>*/}
          {/*    <div className="text-right">*/}
          {/*      <span className="text-sm text-gray-500">Total</span>*/}
          {/*      <p className="text-2xl font-semibold text-gray-900">*/}
          {/*        ${calculateTotal().toFixed(2)}*/}
          {/*      </p>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}

          {/* Payment Section */}
          <PaymentSection
              total={calculateTotal()}
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
              Complete Sale
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SaleModal;