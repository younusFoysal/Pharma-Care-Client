import  { useState, useEffect } from 'react';
import { Plus, Search } from 'lucide-react';
import { api } from '../utils/api';
import SaleModal from '../components/sales/SaleModal';
import { Sale } from '../types/sale';
import UpdateSaleModal from '../components/sales/UpdateSaleModal';
import SaleList from '../components/sales/SaleList';

function Sales() {
  const [sales, setSales] = useState<Sale[]>([]);
  const [isNewSaleModalOpen, setIsNewSaleModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [selectedSale, setSelectedSale] = useState<Sale | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchSales();
  }, []);

  const fetchSales = async () => {
    try {
      const response = await api.get('/sales');
      setSales(response.data);
    } catch (error) {
      console.error('Error fetching sales:', error);
    }
  };

  const handleEdit = (sale: Sale) => {
    setSelectedSale(sale);
    setIsUpdateModalOpen(true);
  };

  const filteredSales = sales.filter(sale =>
    sale.invoiceNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
    sale.customerName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Sales Management</h1>
        <button
          onClick={() => setIsNewSaleModalOpen(true)}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 flex items-center"
        >
          <Plus className="h-5 w-5 mr-2" />
          New Sale
        </button>
      </div>

      <div className="bg-white shadow rounded-lg">
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search sales..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        <SaleList
            sales={filteredSales}
            onEdit={handleEdit}
        />
      </div>

      <SaleModal
          isOpen={isNewSaleModalOpen}
          onClose={() => setIsNewSaleModalOpen(false)}
          onSubmit={fetchSales}
      />


      {selectedSale && (
          <UpdateSaleModal
              isOpen={isUpdateModalOpen}
              onClose={() => {
                setIsUpdateModalOpen(false);
                setSelectedSale(null);
              }}
              sale={selectedSale}
              onUpdate={fetchSales}
          />
      )}

    </div>
  );
}

export default Sales;