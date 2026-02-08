// Application Routes
export const ROUTES = {
  HOME: "/",
  LOGIN: {
    HR: "/login/hr",
    EMPLOYEE: "/login/employee",
  },
  HR: {
    DASHBOARD: "/hr/dashboard",
    EMPLOYEES: "/hr/employees",
    ATTENDANCE: "/hr/attendance",
    LEAVE_REQUESTS: "/hr/leave-requests",
    SETTINGS: "/hr/settings",
  },
  EMPLOYEE: {
    DASHBOARD: "/employee/dashboard",
    ATTENDANCE: "/employee/attendance",
    TASKS: "/employee/tasks",
    DOCUMENTS: "/employee/documents",
  },
} as const;

// Demo Credentials (HR Admin Only)
export const DEMO_CREDENTIALS = {
  HR: {
    email: "hr@staffsync.com",
    password: "demo123",
  },
} as const;

// Application Config
export const APP_CONFIG = {
  name: "StaffSync",
  description: "Unified HR & Employee Management System",
  version: "1.0.0",
} as const;

// Query Keys for React Query
export const QUERY_KEYS = {
  EMPLOYEES: "employees",
  ATTENDANCE: "attendance",
  TASKS: "tasks",
  DOCUMENTS: "documents",
  ANNOUNCEMENTS: "announcements",
} as const;
