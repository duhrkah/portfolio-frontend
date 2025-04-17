export const ROLES = {
  ADMIN: 'admin',
  EDITOR: 'editor',
  VIEWER: 'viewer'
};

// Basis-Berechtigungen (Viewer)
const VIEWER_PERMISSIONS = {
  VIEW_PROJECTS: 'view_projects',
  VIEW_MESSAGES: 'view_messages',
  VIEW_PROFILE: 'view_profile',
  VIEW_CALENDAR: 'view_calendar',
  DOWNLOAD_PROJECTS: 'download_projects'
};

// Editor-Berechtigungen (Viewer + Editor)
const EDITOR_PERMISSIONS = {
  ...VIEWER_PERMISSIONS,
  EDIT_PROJECTS: 'edit_projects',
  CREATE_PROJECTS: 'create_projects',
  DELETE_PROJECTS: 'delete_projects',
  UPLOAD_MEDIA: 'upload_media',
  VIEW_ANALYTICS: 'view_analytics'
};

// Admin-Berechtigungen (Viewer + Editor + Admin)
export const PERMISSIONS = {
  ...EDITOR_PERMISSIONS,
  MANAGE_USERS: 'manage_users',
  MANAGE_ROLES: 'manage_roles',
  MANAGE_SETTINGS: 'manage_settings',
  VIEW_SYSTEM_LOGS: 'view_system_logs',
  MANAGE_SYSTEM: 'manage_system'
};

// Rollen-Berechtigungs-Mapping
export const ROLE_PERMISSIONS = {
  [ROLES.VIEWER]: Object.values(VIEWER_PERMISSIONS),
  [ROLES.EDITOR]: Object.values(EDITOR_PERMISSIONS),
  [ROLES.ADMIN]: Object.values(PERMISSIONS)
}; 