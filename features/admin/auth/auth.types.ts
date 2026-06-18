export type AdminRole =
  | 'SUPER_ADMIN'
  | 'ADMIN'
  | 'SALE_MANAGER'
  | 'SALE'
  | 'SEO_EDITOR'
  | 'CONTENT_EDITOR'
  | 'VIEWER';

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: AdminRole;
  avatar?: string;
}

export const adminMenuPermissions: Record<string, AdminRole[]> = {
  dashboard: ['SUPER_ADMIN', 'ADMIN', 'SALE_MANAGER', 'SEO_EDITOR'],
  projects: ['SUPER_ADMIN', 'ADMIN', 'SALE_MANAGER'],
  products: ['SUPER_ADMIN', 'ADMIN', 'SALE_MANAGER'],
  leads: ['SUPER_ADMIN', 'ADMIN', 'SALE_MANAGER', 'SALE'],
  contact: ['SUPER_ADMIN', 'ADMIN', 'SALE_MANAGER', 'SALE'],
  posts: ['SUPER_ADMIN', 'ADMIN', 'SEO_EDITOR', 'CONTENT_EDITOR'],
  seo: ['SUPER_ADMIN', 'ADMIN', 'SEO_EDITOR'],
  reports: ['SUPER_ADMIN', 'ADMIN', 'SALE_MANAGER'],
  users: ['SUPER_ADMIN', 'ADMIN'],
  permissions: ['SUPER_ADMIN'],
  settings: ['SUPER_ADMIN', 'ADMIN'],
};
