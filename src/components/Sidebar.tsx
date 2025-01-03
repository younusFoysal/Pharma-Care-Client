import {Link, NavLink} from 'react-router-dom';
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Truck,
  Users,
  UserCircle,
  BarChart2, LineChart, X,
  Settings, Pill
} from 'lucide-react';
import {useSidebar} from "../context/SidebarContext.tsx";

const navigation = [
  { name: 'Dashboard', to: '/dashboard', icon: LayoutDashboard },
  { name: 'Inventory', to: '/dashboard/inventory', icon: Package },
  { name: 'Sales', to: '/dashboard/sales', icon: ShoppingCart },
  { name: 'Purchases', to: '/dashboard/purchases', icon: Truck },
  { name: 'Suppliers', to: '/dashboard/suppliers', icon: Users },
  { name: 'Customers', to: '/dashboard/customers', icon: UserCircle },
  { name: 'Analytics', to: '/dashboard/analytics', icon: LineChart },
  { name: 'Reports', to: '/dashboard/reports', icon: BarChart2 },
  { name: 'Settings', to: '/dashboard/settings', icon: Settings },
];

function Sidebar() {
  const { isOpen, close } = useSidebar();

  return (
      <>
        {/* Mobile backdrop */}
        {isOpen && (
            <div
                className="fixed inset-0 z-20 bg-gray-900 bg-opacity-50 transition-opacity md:hidden"
                onClick={close}
            />
        )}

        {/* Sidebar */}
        <div className={`
        fixed inset-y-0 left-0 z-30 w-64 bg-white transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between px-4 py-5">
              <div className="flex items-center">
                <Link to="/" className="flex items-center">
                  <Pill className="h-8 w-8 text-indigo-600"/>


                  <h1 className="text-2xl/tight sm:text-2xl/tight lg:text-2xl/tight font-semibold ml-2">
                    PharmaCare
                  </h1>

                </Link>
              </div>
              <button
                  onClick={close}
                  className="p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
              >
                <X className="h-6 w-6"/>
              </button>
            </div>
            <nav className="flex-1 px-2 space-y-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                    <NavLink
                        key={item.name}
                        to={item.to}
                        onClick={() => close()}
                        className={({isActive}) =>
                            `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                                isActive
                                    ? 'bg-gray-100 text-gray-900'
                                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                            }`
                        }
                    >
                      <Icon className="mr-3 h-5 w-5" />
                      {item.name}
                    </NavLink>
                );
              })}
            </nav>
          </div>
        </div>
      </>
  );
}

export default Sidebar;