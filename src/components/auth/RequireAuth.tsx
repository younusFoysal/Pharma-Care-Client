import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { UserRole, hasPermission } from '../../utils/roles';

interface RequireAuthProps {
  children: React.ReactNode;
  requiredRole?: UserRole;
}

function RequireAuth({ children, requiredRole }: RequireAuthProps) {
  const { user, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (requiredRole && !hasPermission(user.role as UserRole, requiredRole)) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}

export default RequireAuth;