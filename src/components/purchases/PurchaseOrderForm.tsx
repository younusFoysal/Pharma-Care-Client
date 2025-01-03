import React, { useState, useEffect } from 'react';
import { X, Plus, Minus } from 'lucide-react';
import { PurchaseOrder, PurchaseOrderItem } from '../../types/purchaseOrder';
import { Product } from '../../types/product';
import { Supplier } from '../../types/supplier';
import { api } from '../../utils/api';

interface PurchaseOrderFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: Partial<PurchaseOrder>) => Promise<void>;
  purchaseOrder?: PurchaseOrder;
}

function PurchaseOrderForm({ isOpen, onClose, onSubmit, purchaseOrder }: PurchaseOrderFormProps) {
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [formData, setFormData] = useState({
    supplier: '',
    items: [] as Partial<PurchaseOrderItem>[],
    expectedDeliveryDate: '',
    notes: '',
    status: 'draft' as const
  });

  useEffect(() => {
    fetchSuppliers();
    fetchProducts();
  }, []);

  useEffect(() => {
    if (purchaseOrder) {
      setFormData({
        supplier: purchaseOrder.supplier._id,
        items: purchaseOrder.items.map(item => ({
          product: item.product._id,
          quantity: item.quantity,
          unitCost: item.unitCost,
          subtotal: item.subtotal
        })),
        expectedDeliveryDate: purchaseOrder.expectedDeliveryDate || '',
        notes: purchaseOrder.notes || '',
        status: purchaseOrder.status
      });
    }
  }, [purchaseOrder]);

  const fetchSuppliers = async () => {
    try {
      const response = await api.get('/suppliers');
      setSuppliers(response.data);
    } catch (error) {
      console.error('Error fetching suppliers:', error);
    }
  };

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
        { product: '', quantity: 1, unitCost: 0, subtotal: 0 }
      ]
    });
  };

  const removeItem = (index: number) => {
    const newItems = formData.items.filter((_, i) => i !== index);
    setFormData({ ...formData, items: newItems });
  };

  // const updateItem = (index: number, field: string, value: string | number) => {
  //   const newItems = [...formData.items];
  //   const item = newItems[index];
  //
  //   if (field === 'product') {
  //     const product = products.find(p => p._id === value);
  //     if (product) {
  //       item.unitCost = product.cost;
  //       item.subtotal = item.quantity! * product.cost;
  //     }
  //   } else if (field === 'quantity' || field === 'unitCost') {
  //     item[field as keyof PurchaseOrderItem] = Number(value);
  //     item.subtotal = item.quantity! * item.unitCost!;
  //   }
  //
  //   setFormData({ ...formData, items: newItems });
  // };

  const updateItem = (index: number, field: string, value: string | number) => {
    const newItems = [...formData.items];
    const item = { ...newItems[index] }; // Create a copy of the specific item to avoid direct mutation

    if (field === 'product') {
      item.product = value as string; // Update the product field
      const product = products.find((p) => p._id === value);
      if (product) {
        item.unitCost = product.cost;
        item.subtotal = item.quantity! * product.cost;
      }
    } else if (field === 'quantity' || field === 'unitCost') {
      item[field as keyof PurchaseOrderItem] = Number(value);
      item.subtotal = item.quantity! * item.unitCost!;
    }

    newItems[index] = item; // Update the specific item in the array
    setFormData({ ...formData, items: newItems }); // Update the state with the new items array
  };

  const calculateTotal = () => {
    return formData.items.reduce((total, item) => total + (item.subtotal || 0), 0);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit({
      ...formData,
      totalAmount: calculateTotal()
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-900">
            {purchaseOrder ? 'Edit Purchase Order' : 'New Purchase Order'}
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <X className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">Supplier</label>
              <select
                value={formData.supplier}
                onChange={(e) => setFormData({ ...formData, supplier: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              >
                <option value="">Select Supplier</option>
                {suppliers.map((supplier) => (
                  <option key={supplier._id} value={supplier._id}>
                    {supplier.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Expected Delivery Date</label>
              <input
                type="date"
                value={formData.expectedDeliveryDate}
                onChange={(e) => setFormData({ ...formData, expectedDeliveryDate: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
          </div>

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
                        {product.name}
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
                <div className="w-32">
                  <input
                    type="number"
                    step="0.01"
                    value={item.unitCost}
                    onChange={(e) => updateItem(index, 'unitCost', e.target.value)}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    required
                  />
                </div>
                <div className="w-32">
                  <span className="block w-full text-right">${item.subtotal?.toFixed(2)}</span>
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

          <div>
            <label className="block text-sm font-medium text-gray-700">Notes</label>
            <textarea
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          <div className="flex justify-between items-center pt-4 border-t">
            <div>
              <label className="block text-sm font-medium text-gray-700">Status</label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="draft">Draft</option>
                <option value="ordered">Ordered</option>
                <option value="received">Received</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
            <div className="text-right">
              <span className="text-sm text-gray-500">Total Amount</span>
              <p className="text-2xl font-semibold text-gray-900">
                ${calculateTotal().toFixed(2)}
              </p>
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
              {purchaseOrder ? 'Update' : 'Create'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PurchaseOrderForm;