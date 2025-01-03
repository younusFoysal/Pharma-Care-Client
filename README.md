# PharmaCare - Pharmacy Management System

A modern, full-stack pharmacy management system built with React and Node.js that helps pharmacies streamline their operations, manage inventory, and provide better patient care.

![PharmaCare Dashboard](https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80)

## Features

### 1. Inventory Management
- Real-time stock tracking
- Low stock alerts
- Expiry date monitoring
- Batch number tracking
- Stock adjustments
- Automatic reorder level management

### 2. Sales Management
- Quick sale processing
- Invoice generation
- Multiple payment methods
- Partial payments handling
- Due payment tracking
- Invoice printing
- Sales history

### 3. Purchase Management
- Purchase order creation
- Supplier management
- Order tracking
- Stock receiving
- Purchase history
- Cost tracking

### 4. Customer Management
- Customer profiles
- Medical history
- Prescription tracking
- Purchase history
- Due payments
- Insurance information

### 5. Supplier Management
- Supplier profiles
- Order history
- Contact information
- Performance tracking
- Payment history

### 6. Reports & Analytics
- Sales analytics
- Inventory reports
- Revenue tracking
- Product performance
- Customer insights
- Category distribution
- Stock movement analysis

### 7. User Management
- Role-based access control
- Staff management
- Activity logging
- Profile management
- Security controls

### 8. System Settings
- Business information
- Tax settings
- Notification preferences
- System preferences
- Backup & restore

## Technology Stack

### Frontend
- React 18
- TypeScript
- Tailwind CSS
- Lucide Icons
- React Router
- Axios
- Recharts
- Date-fns

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- Bcrypt
- CORS

### Development Tools
- Vite
- ESLint
- TypeScript
- Git

## Getting Started

### Prerequisites
- Node.js 18 or higher
- MongoDB
- Git

### Installation

1. Clone the repository
```bash
git clone https://github.com/younusFoysal/pharmacare.git
cd pharmacare
```

2. Install dependencies
```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd server
npm install
```

3. Environment Setup

Create `.env` file in the root directory:
```env
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret_key
PORT=3000
```

4. Start the Development Server
```bash
# Start backend server
npm run server

# In another terminal, start frontend
npm run dev
```

The application will be available at `http://localhost:5173`

### Default Login Credentials
```
Email: admin@example.com
Password: admin123
```

## Project Structure

```
pharmacare/
├── src/                    # Frontend source files
│   ├── components/         # React components
│   ├── context/           # React context providers
│   ├── hooks/             # Custom React hooks
│   ├── pages/             # Page components
│   ├── types/             # TypeScript type definitions
│   └── utils/             # Utility functions
├── server/                # Backend source files
│   ├── models/           # MongoDB models
│   ├── routes/           # API routes
│   └── middleware/       # Express middleware
└── public/               # Static files
```

## API Documentation

### Authentication Endpoints
- POST `/api/auth/login` - User login
- POST `/api/auth/register` - User registration
- GET `/api/auth/me` - Get current user

### Product Endpoints
- GET `/api/products` - Get all products
- POST `/api/products` - Create product
- PUT `/api/products/:id` - Update product
- DELETE `/api/products/:id` - Delete product

### Sales Endpoints
- GET `/api/sales` - Get all sales
- POST `/api/sales` - Create sale
- PUT `/api/sales/:id` - Update sale
- GET `/api/sales/customer/:id` - Get customer sales

### Purchase Endpoints
- GET `/api/purchases` - Get all purchases
- POST `/api/purchases` - Create purchase
- PUT `/api/purchases/:id` - Update purchase
- DELETE `/api/purchases/:id` - Delete purchase

### Customer Endpoints
- GET `/api/customers` - Get all customers
- POST `/api/customers` - Create customer
- PUT `/api/customers/:id` - Update customer
- DELETE `/api/customers/:id` - Delete customer

### Supplier Endpoints
- GET `/api/suppliers` - Get all suppliers
- POST `/api/suppliers` - Create supplier
- PUT `/api/suppliers/:id` - Update supplier
- DELETE `/api/suppliers/:id` - Delete supplier

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, email support@pharmacare.com or join our Slack channel.

## Acknowledgments

- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)