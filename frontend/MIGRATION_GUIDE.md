# Migration Guide - Project Merge

## Overview

This document explains how two separate Lovable AI projects were merged into a single unified application.

## Original Projects

### Project 1 - HR Dashboard
- **Purpose:** HR management interface
- **Pages:** Dashboard, Employees, Attendance, Settings
- **Route Base:** `/` (root level)
- **Components:** HR-specific dashboard widgets, employee tables, attendance management

### Project 2 - Homepage + Employee Dashboard
- **Purpose:** Landing page and employee portal
- **Pages:** Homepage, Login, Employee Dashboard, Employee Attendance, Tasks, Documents
- **Route Base:** `/` for homepage, `/employee/*` for dashboard
- **Components:** Marketing homepage, employee dashboard widgets

## Merge Strategy

### Base Project Selection
**Project 2** was chosen as the base because:
- Already had the homepage/landing page
- Had the login flow infrastructure
- Contained employee dashboard functionality

### Changes Made

#### 1. Routing Structure
```
Before (Project 1):
/ → HR Dashboard
/employees → Employees
/attendance → Attendance
/settings → Settings

Before (Project 2):
/ → Homepage
/login/:role → Login
/employee/dashboard → Employee Dashboard
/employee/attendance → Employee Attendance
/employee/tasks → Tasks
/employee/documents → Documents

After (Merged):
/ → Homepage (landing page)
/login/hr → HR Login
/login/employee → Employee Login
/hr/dashboard → HR Dashboard
/hr/employees → Employees Management
/hr/attendance → HR Attendance Management
/hr/settings → Settings
/employee/dashboard → Employee Dashboard
/employee/attendance → Employee Attendance
/employee/tasks → Tasks
/employee/documents → Documents
```

#### 2. Component Organization

**HR Components:**
- `src/components/layout/` - HR dashboard layout (Sidebar, Header, MainLayout)
- `src/components/employees/` - Employee management components
- `src/components/hr-dashboard/` - HR dashboard widgets (renamed from `dashboard/`)
- `src/components/hr-attendance/` - HR attendance components (renamed from `attendance/`)

**Employee Components:**
- `src/components/dashboard/` - Employee dashboard components
- `src/components/employee/` - Employee-specific components

**Shared Components:**
- `src/components/ui/` - shadcn/ui components (shared)
- `src/components/Navbar.tsx` - Homepage navbar
- `src/components/HeroSection.tsx` - Homepage hero
- `src/components/FeaturesSection.tsx` - Homepage features
- `src/components/LoginSection.tsx` - Homepage login section
- `src/components/Footer.tsx` - Homepage footer

#### 3. Page Structure

**HR Pages** (moved to `src/pages/hr/`):
- `Dashboard.tsx` - HR dashboard with stats and charts
- `Employees.tsx` - Employee management
- `Attendance.tsx` - Attendance tracking
- `Settings.tsx` - Settings page

**Employee Pages** (kept in `src/pages/employee/`):
- `EmployeeDashboard.tsx` - Employee dashboard
- `Attendance.tsx` - Employee attendance view
- `Tasks.tsx` - Task management
- `Documents.tsx` - Document access

**Common Pages** (in `src/pages/`):
- `Index.tsx` - Homepage/landing page
- `Login.tsx` - Unified login for both roles
- `NotFound.tsx` - 404 page

#### 4. Import Path Updates

All HR components were updated to use new paths:
```typescript
// Before
import { StatCard } from "@/components/dashboard/StatCard";
import { AttendanceTable } from "@/components/attendance/AttendanceTable";

// After
import { StatCard } from "@/components/hr-dashboard/StatCard";
import { AttendanceTable } from "@/components/hr-attendance/AttendanceTable";
```

#### 5. Navigation Updates

**HR Sidebar** (`src/components/layout/Sidebar.tsx`):
```typescript
// Updated navigation paths
const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/hr/dashboard" },
  { icon: Users, label: "Employees", path: "/hr/employees" },
  { icon: CalendarCheck, label: "Attendance", path: "/hr/attendance" },
  { icon: Settings, label: "Settings", path: "/hr/settings" },
];
```

**Login Redirects** (`src/pages/Login.tsx`):
```typescript
// HR login redirects to /hr/dashboard
if (isHR) {
  navigate("/hr/dashboard");
} else {
  navigate("/employee/dashboard");
}
```

## File Structure Comparison

### Before (Separate Projects)

```
project-1/
├── src/
│   ├── components/
│   │   ├── dashboard/
│   │   ├── attendance/
│   │   ├── employees/
│   │   └── layout/
│   └── pages/
│       ├── Index.tsx (HR Dashboard)
│       ├── Employees.tsx
│       ├── Attendance.tsx
│       └── Settings.tsx

project-2/
├── src/
│   ├── components/
│   │   ├── dashboard/
│   │   ├── employee/
│   │   ├── Navbar.tsx
│   │   └── ...homepage components
│   └── pages/
│       ├── Index.tsx (Homepage)
│       ├── Login.tsx
│       ├── EmployeeDashboard.tsx
│       └── employee/
```

### After (Merged)

```
merged-project/
├── src/
│   ├── components/
│   │   ├── layout/              # HR layout
│   │   ├── employees/           # HR employee mgmt
│   │   ├── hr-dashboard/        # HR dashboard widgets
│   │   ├── hr-attendance/       # HR attendance
│   │   ├── dashboard/           # Employee dashboard
│   │   ├── employee/            # Employee components
│   │   ├── ui/                  # Shared UI
│   │   └── ...homepage components
│   └── pages/
│       ├── Index.tsx            # Homepage
│       ├── Login.tsx            # Unified login
│       ├── hr/                  # HR pages
│       │   ├── Dashboard.tsx
│       │   ├── Employees.tsx
│       │   ├── Attendance.tsx
│       │   └── Settings.tsx
│       └── employee/            # Employee pages
│           ├── EmployeeDashboard.tsx
│           ├── Attendance.tsx
│           ├── Tasks.tsx
│           └── Documents.tsx
```

## Testing Checklist

- [x] Homepage loads correctly at `/`
- [x] HR login button navigates to `/login/hr`
- [x] Employee login button navigates to `/login/employee`
- [x] HR login redirects to `/hr/dashboard`
- [x] Employee login redirects to `/employee/dashboard`
- [x] HR sidebar navigation works
- [x] All HR pages render correctly
- [x] All Employee pages render correctly
- [x] No TypeScript errors
- [x] Build completes successfully
- [x] No broken imports

## Known Issues & Limitations

1. **No Authentication:** The login is demo-only, no real authentication backend
2. **Mock Data:** All data is hardcoded in components
3. **No Persistence:** Data is not saved between sessions
4. **Single User:** Designed for single admin scenario

## Future Enhancements

1. Add real authentication with JWT tokens
2. Connect to backend API
3. Add data persistence (localStorage or backend)
4. Implement role-based access control
5. Add more comprehensive error handling
6. Optimize bundle size with code splitting
7. Add loading states and skeleton screens
8. Implement real-time updates with WebSockets

## Rollback Plan

If issues arise, you can:
1. Keep the original `project 1` and `project 2` folders as backups
2. Each project can still run independently
3. The merge is non-destructive to original projects

## Support

For issues or questions about the merged application:
1. Check the README.md for setup instructions
2. Review this migration guide for architectural decisions
3. Refer to original project documentation if needed
