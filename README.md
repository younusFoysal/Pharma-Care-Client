# PharmaCare - Pharmacy Management System

A modern, full-stack pharmacy management system built with React and Node.js that helps pharmacies streamline their operations, manage inventory, and provide better patient care.

![PharmaCare Dashboard](https://github.com/younusFoysal/Pharma-Care-Client/blob/master/public/home.gif)

### Live Link: https://pharmacyclient.vercel.app/

## Features


1. **Inventory Management:** Track stock in real-time, monitor expiries, get low-stock alerts, and automate reorders.
2. **Sales Management:** Quick sales, multi-payment methods, invoice generation, and due payment tracking.
3. **Purchase Management:** Manage suppliers, create purchase orders, track orders, and monitor purchase history.
4. **Customer Management:** Handle profiles, prescriptions, medical history, and due payments with ease.
5. **Supplier Management:** Maintain supplier records, contact info, order history, and performance tracking.
6. **Reports & Analytics:** Gain insights with sales analytics, inventory reports, and revenue tracking.
7. **User Management:** Role-based access, staff management, activity logs, and security controls.
8. **System Settings:** Configure business info, tax rates, notifications, and data backup options.

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


## Getting Started

### Installation

1. Clone the repository
```bash
git clone https://github.com/younusFoysal/Pharma-Care-Client.git
cd Pharma-Care-Client
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
The server will be available at `http://localhost:3000`

### Default Login Credentials
```
Email: admin@gmail.com
Password: admin123
```



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