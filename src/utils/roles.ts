export const ROLES = {
  ADMIN: 'admin',
  STAFF: 'staff',
} as const;

export type UserRole = typeof ROLES[keyof typeof ROLES];

export const hasPermission = (userRole: UserRole, requiredRole: UserRole): boolean => {
  if (userRole === ROLES.ADMIN) return true;
  return userRole === requiredRole;
};

export const rolePermissions = {
  [ROLES.ADMIN]: {
    canManageUsers: true,
    canManageRoles: true,
    canViewReports: true,
    canManageInventory: true,
    canManageSales: true,
    canManagePurchases: true,
    canManageSuppliers: true,
    canManageCustomers: true,
  },
  [ROLES.STAFF]: {
    canManageUsers: false,
    canManageRoles: false,
    canViewReports: true,
    canManageInventory: true,
    canManageSales: true,
    canManagePurchases: false,
    canManageSuppliers: false,
    canManageCustomers: true,
  },
};