import  {useState,useEffect} from 'react';
import { Package, DollarSign, ShoppingCart, Users } from 'lucide-react';
import { format } from 'date-fns';
import { api } from '../utils/api';
import DashboardCard from '../components/DashboardCard';
import AlertsCard from '../components/dashboard/AlertsCard';
import { useInventoryAlerts } from '../hooks/useInventoryAlerts';
import { Sale } from '../types/sale';
import ProductMetrics from "../components/analytics/ProductMetrics.tsx";
import RevenueAnalysis from "../components/analytics/RevenueAnalysis.tsx";
import StockTrends from "../components/analytics/StockTrends.tsx";

const dummyStockTrends = [
  { date: '2023-01-01', inStock: 100, reorderPoint: 20 },
  { date: '2023-02-01', inStock: 85, reorderPoint: 20 },
  { date: '2023-03-01', inStock: 110, reorderPoint: 20 },
  { date: '2023-04-01', inStock: 95, reorderPoint: 20 },
  { date: '2023-05-01', inStock: 75, reorderPoint: 20 },
  { date: '2023-06-01', inStock: 120, reorderPoint: 20 },
];

function Dashboard() {

  const [metrics, setMetrics] = useState({
    totalProducts: 0,
    totalRevenue: 0,
    totalSales: 0,
    totalCustomers: 0
  });
  const [recentSales, setRecentSales] = useState<Sale[]>([]);

  const {
    lowStockProducts, 
    expiringProducts, 
    isLoading, 
    error, 
    updateReorderLevel 
  } = useInventoryAlerts();

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const [products, sales, customers] = await Promise.all([
        api.get('/products'),
        api.get('/sales'),
        api.get('/customers')
      ]);

      const totalRevenue = sales.data.reduce((sum: number, sale: Sale) => sum + sale.total, 0);

      setMetrics({
        totalProducts: products.data.length,
        totalRevenue,
        totalSales: sales.data.length,
        totalCustomers: customers.data.length
      });

      // Get 5 most recent sales
      setRecentSales(sales.data.slice(0, 5));
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    }
  };

  return (
      <div className="space-y-6">

        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <DashboardCard
              title="Total Products"
              value={metrics.totalProducts.toString()}
              icon={Package}
          />
          <DashboardCard
              title="Total Revenue"
              value={`$${metrics.totalRevenue.toLocaleString()}`}
              icon={DollarSign}
          />
          <DashboardCard
              title="Total Sales"
              value={metrics.totalSales.toString()}
              icon={ShoppingCart}
          />
          <DashboardCard
              title="Total Customers"
              value={metrics.totalCustomers.toString()}
              icon={Users}
          />
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Alerts Card */}
          {error ? (
              <div className="bg-red-50 p-4 rounded-md text-red-700">{error}</div>
          ) : isLoading ? (
              <div className="bg-white rounded-lg shadow p-6">
                <div className="animate-pulse flex space-x-4">
                  <div className="flex-1 space-y-4 py-1">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-200 rounded"></div>
                      <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                    </div>
                  </div>
                </div>
              </div>
          ) : (
              <AlertsCard
                  lowStockProducts={lowStockProducts}
                  expiringProducts={expiringProducts}
                  onThresholdChange={updateReorderLevel}
              />
          )}

          {/* Recent Sales */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Sales</h2>
            <div className="space-y-4">
              {recentSales.length > 0 ? (
                  <div className="divide-y divide-gray-200">
                    {recentSales.map((sale) => (
                        <div key={sale._id} className="py-3">
                          <div className="flex justify-between items-start">
                            <div>
                              <p className="text-sm font-medium text-gray-900">
                                {sale.customerName}
                              </p>
                              <p className="text-sm text-gray-500">
                                {format(new Date(sale.date), 'MMM dd, yyyy')}
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm font-medium text-gray-900">
                                ${sale.total.toFixed(2)}
                              </p>
                              <span
                                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                      sale.status === 'paid'
                                          ? 'bg-green-100 text-green-800'
                                          : 'bg-yellow-100 text-yellow-800'
                                  }`}>
                          {sale.status}
                        </span>
                            </div>
                          </div>
                        </div>
                    ))}
                  </div>
              ) : (
                  <p className="text-gray-500">No recent sales</p>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <StockTrends data={dummyStockTrends}/>
          {/*<RevenueAnalysis data={revenueData}/>*/}
          {/*<ProductMetrics data={productMetricsData}/>*/}
        </div>


      </div>
  );
}

export default Dashboard;