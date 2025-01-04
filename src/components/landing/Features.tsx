
import { Package, ShoppingCart, Users, BarChart2 } from 'lucide-react';

const features = [
    {
        name: 'Inventory Management',
        description: 'Track stock levels, manage expiry dates, and automate reordering.',
        icon: Package
    },
    {
        name: 'Sales & Billing',
        description: 'Process sales, manage prescriptions, and handle insurance claims.',
        icon: ShoppingCart
    },
    {
        name: 'Customer Management',
        description: 'Maintain patient records, prescription history, and loyalty programs.',
        icon: Users
    },
    {
        name: 'Analytics & Reports',
        description: 'Get insights into sales trends, inventory turnover, and profitability.',
        icon: BarChart2
    }
];

function Features() {
    return (
        <div id="features" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Everything you need to run your pharmacy
                    </p>
                </div>

                <div className="mt-20">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {features.map((feature) => {
                            const Icon = feature.icon;
                            return (
                                <div key={feature.name} className="relative">
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                        <Icon className="h-6 w-6" aria-hidden="true" />
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                                    <p className="mt-2 ml-16 text-base text-gray-500">{feature.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Features;