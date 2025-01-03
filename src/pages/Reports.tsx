import React, {useEffect, useState} from 'react';
import {
  DollarSign,
  Package,
  Users,
  ShoppingCart,
  TrendingUp,
  AlertTriangle
} from 'lucide-react';
import { api } from '../utils/api';
import MetricsCard from '../components/reports/MetricsCard';
import TopItemsList from '../components/reports/TopItemsList';
import DateRangeSelector from '../components/reports/DateRangeSelector';
import ChartContainer from '../components/reports/ChartContainer';
import SalesTrendChart from '../components/reports/SalesTrendChart';
import InventoryStatusChart from '../components/reports/InventoryStatusChart';
import { useReportData } from '../hooks/useReportData';
import {CustomerMetrics, InventoryMetrics, PurchaseMetrics, SalesMetrics} from "../types/report.ts";

function Reports() {
  const [dateRange, setDateRange] = useState({
    startDate: new Date(new Date().setDate(new Date().getDate() - 30)).toISOString().split('T')[0],
    endDate: new Date().toISOString().split('T')[0]
  });

  const {
    salesTrendData,
    inventoryStatusData,
    isLoading,
    error
  } = useReportData(dateRange.startDate, dateRange.endDate);






  const [metrics, setMetrics] = useState<{
    sales?: SalesMetrics;
    inventory?: InventoryMetrics;
    customers?: CustomerMetrics;
    purchases?: PurchaseMetrics;
  }>({});

  useEffect(() => {
    fetchMetrics();
  }, [dateRange]);

  const fetchMetrics = async () => {
    try {
      const [sales, inventory, customers, purchases] = await Promise.all([
        api.get('/reports/sales', { params: dateRange }),
        api.get('/reports/inventory'),
        api.get('/reports/customers', { params: dateRange }),
        api.get('/reports/purchases', { params: dateRange })
      ]);

      setMetrics({
        sales: sales.data,
        inventory: inventory.data,
        customers: customers.data,
        purchases: purchases.data
      });
    } catch (error) {
      console.error('Error fetching metrics:', error);
    }
  };

  if (error) {
    return <div className="bg-red-50 p-4 rounded-md text-red-700">{error}</div>;
  }

  if (isLoading) {
    return (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
        </div>
    );
  }

  return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-900">Reports & Analytics</h1>
          <DateRangeSelector
              startDate={dateRange.startDate}
              endDate={dateRange.endDate}
              onStartDateChange={(date) => setDateRange(prev => ({...prev, startDate: date}))}
              onEndDateChange={(date) => setDateRange(prev => ({...prev, endDate: date}))}
          />
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <MetricsCard
              title="Total Sales"
              value={`$${metrics.sales?.totalRevenue.toLocaleString() || 0}`}
              icon={DollarSign}
              trend={{value: 12, isPositive: true}}
              description={`${metrics.sales?.totalSales || 0} orders`}
          />
          <MetricsCard
              title="Inventory Value"
              value={`$${metrics.inventory?.totalValue.toLocaleString() || 0}`}
              icon={Package}
              description={`${metrics.inventory?.totalProducts || 0} products`}
          />
          <MetricsCard
              title="Active Customers"
              value={metrics.customers?.activeCustomers || 0}
              icon={Users}
              trend={{value: 5, isPositive: true}}
              description={`${metrics.customers?.newCustomers || 0} new this period`}
          />
          <MetricsCard
              title="Purchase Orders"
              value={metrics.purchases?.totalPurchases || 0}
              icon={ShoppingCart}
              description={`${metrics.purchases?.pendingOrders || 0} pending orders`}
          />
        </div>

        {/* Alerts Section */}
        {metrics.inventory?.lowStockProducts ? (
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <div className="flex">
                <AlertTriangle className="h-5 w-5 text-yellow-400"/>
                <div className="ml-3">
                  <p className="text-sm text-yellow-700">
                    {metrics.inventory.lowStockProducts} products are running low on stock
                  </p>
                </div>
              </div>
            </div>
        ) : null}

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Top Selling Products */}
          {metrics.sales?.topSellingProducts && (
              <TopItemsList
                  title="Top Selling Products"
                  items={metrics.sales.topSellingProducts.map(product => ({
                    id: product.productId,
                    name: product.name,
                    value: product.revenue,
                    secondaryValue: product.quantity
                  }))}
                  valuePrefix="$"
                  secondaryValuePrefix="Qty: "
              />
          )}

          {/* Top Customers */}
          {metrics.customers?.topCustomers && (
              <TopItemsList
                  title="Top Customers"
                  items={metrics.customers.topCustomers.map(customer => ({
                    id: customer.customerId,
                    name: customer.name,
                    value: customer.totalSpent,
                    secondaryValue: customer.totalPurchases
                  }))}
                  valuePrefix="$"
                  secondaryValuePrefix="Orders: "
              />
          )}
        </div>

        {/* Additional Metrics */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <ChartContainer
              title="Sales Trend"
              description="Daily sales revenue for the selected period"
          >
            <SalesTrendChart data={salesTrendData}/>
          </ChartContainer>

          <ChartContainer
              title="Inventory Status"
              description="Current inventory levels and reorder points"
          >
            <InventoryStatusChart data={inventoryStatusData}/>
          </ChartContainer>
        </div>
      </div>
  );
}

export default Reports;