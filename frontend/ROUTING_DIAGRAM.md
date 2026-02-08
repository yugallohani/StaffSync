# Routing Diagram

## Visual Navigation Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                         Homepage (/)                             │
│                                                                  │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  • Hero Section                                           │  │
│  │  • Features Section                                       │  │
│  │  • Login Section with two buttons:                       │  │
│  │    ┌──────────────────┐    ┌──────────────────┐         │  │
│  │    │   HR Login       │    │ Employee Login   │         │  │
│  │    └──────────────────┘    └──────────────────┘         │  │
│  │  • Footer                                                 │  │
│  └──────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
                    │                           │
                    │                           │
                    ▼                           ▼
        ┌───────────────────┐       ┌───────────────────┐
        │  /login/hr        │       │ /login/employee   │
        │                   │       │                   │
        │  HR Login Page    │       │ Employee Login    │
        │  with form        │       │ Page with form    │
        └───────────────────┘       └───────────────────┘
                    │                           │
                    │                           │
                    ▼                           ▼
        ┌───────────────────┐       ┌───────────────────┐
        │  /hr/dashboard    │       │ /employee/        │
        │                   │       │  dashboard        │
        └───────────────────┘       └───────────────────┘
                    │                           │
                    │                           │
                    ▼                           ▼
```

## HR Dashboard Routes

```
┌─────────────────────────────────────────────────────────────┐
│                    HR Dashboard Layout                       │
│  ┌──────────┐  ┌──────────────────────────────────────┐    │
│  │          │  │                                       │    │
│  │ Sidebar  │  │         Main Content Area            │    │
│  │          │  │                                       │    │
│  │ • Dash   │  │  Route: /hr/dashboard                │    │
│  │ • Emp    │  │  ┌────────────────────────────────┐  │    │
│  │ • Attend │  │  │ • Stats Cards                  │  │    │
│  │ • Set    │  │  │ • Attendance Chart             │  │    │
│  │          │  │  │ • Recent Activity              │  │    │
│  │          │  │  └────────────────────────────────┘  │    │
│  │          │  │                                       │    │
│  │          │  │  Route: /hr/employees                │    │
│  │          │  │  ┌────────────────────────────────┐  │    │
│  │          │  │  │ • Search & Filter              │  │    │
│  │          │  │  │ • Employee Table               │  │    │
│  │          │  │  │ • Add Employee Modal           │  │    │
│  │          │  │  └────────────────────────────────┘  │    │
│  │          │  │                                       │    │
│  │          │  │  Route: /hr/attendance               │    │
│  │          │  │  ┌────────────────────────────────┐  │    │
│  │          │  │  │ • Date Filter                  │  │    │
│  │          │  │  │ • Attendance Table             │  │    │
│  │          │  │  │ • Mark Attendance Modal        │  │    │
│  │          │  │  └────────────────────────────────┘  │    │
│  │          │  │                                       │    │
│  │          │  │  Route: /hr/settings                 │    │
│  │          │  │  ┌────────────────────────────────┐  │    │
│  │          │  │  │ • Settings Cards               │  │    │
│  │          │  │  │ • Configuration Options        │  │    │
│  │          │  │  └────────────────────────────────┘  │    │
│  └──────────┘  └──────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
```

## Employee Dashboard Routes

```
┌─────────────────────────────────────────────────────────────┐
│                 Employee Dashboard Layout                    │
│  ┌──────────┐  ┌──────────────────────────────────────┐    │
│  │          │  │                                       │    │
│  │ Sidebar  │  │         Main Content Area            │    │
│  │          │  │                                       │    │
│  │ • Dash   │  │  Route: /employee/dashboard          │    │
│  │ • Attend │  │  ┌────────────────────────────────┐  │    │
│  │ • Tasks  │  │  │ • Personal Stats               │  │    │
│  │ • Docs   │  │  │ • Announcements                │  │    │
│  │          │  │  │ • Quick Actions                │  │    │
│  │          │  │  └────────────────────────────────┘  │    │
│  │          │  │                                       │    │
│  │          │  │  Route: /employee/attendance         │    │
│  │          │  │  ┌────────────────────────────────┐  │    │
│  │          │  │  │ • Attendance History           │  │    │
│  │          │  │  │ • Calendar View                │  │    │
│  │          │  │  └────────────────────────────────┘  │    │
│  │          │  │                                       │    │
│  │          │  │  Route: /employee/tasks              │    │
│  │          │  │  ┌────────────────────────────────┐  │    │
│  │          │  │  │ • Task List                    │  │    │
│  │          │  │  │ • Task Management              │  │    │
│  │          │  │  └────────────────────────────────┘  │    │
│  │          │  │                                       │    │
│  │          │  │  Route: /employee/documents          │    │
│  │          │  │  ┌────────────────────────────────┐  │    │
│  │          │  │  │ • Document List                │  │    │
│  │          │  │  │ • Document Access              │  │    │
│  │          │  │  └────────────────────────────────┘  │    │
│  └──────────┘  └──────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
```

## Route Hierarchy

```
/
├── (Homepage - Landing Page)
│
├── login/
│   ├── hr (HR Login Page)
│   └── employee (Employee Login Page)
│
├── hr/
│   ├── dashboard (HR Dashboard)
│   ├── employees (Employee Management)
│   ├── attendance (Attendance Tracking)
│   └── settings (Settings)
│
└── employee/
    ├── dashboard (Employee Dashboard)
    ├── attendance (Employee Attendance View)
    ├── tasks (Task Management)
    └── documents (Document Access)
```

## Navigation Patterns

### From Homepage
```
Homepage (/)
  ├─→ Click "HR Login" → /login/hr → Login → /hr/dashboard
  └─→ Click "Employee Login" → /login/employee → Login → /employee/dashboard
```

### Within HR Dashboard
```
/hr/dashboard (Sidebar Navigation)
  ├─→ Dashboard → /hr/dashboard
  ├─→ Employees → /hr/employees
  ├─→ Attendance → /hr/attendance
  └─→ Settings → /hr/settings
```

### Within Employee Dashboard
```
/employee/dashboard (Sidebar Navigation)
  ├─→ Dashboard → /employee/dashboard
  ├─→ Attendance → /employee/attendance
  ├─→ Tasks → /employee/tasks
  └─→ Documents → /employee/documents
```

## Component Mapping

### Homepage Components
```
/ (Index.tsx)
├── Navbar.tsx
├── HeroSection.tsx
├── FeaturesSection.tsx
├── LoginSection.tsx
└── Footer.tsx
```

### HR Dashboard Components
```
/hr/* (uses MainLayout)
├── layout/
│   ├── Sidebar.tsx (navigation)
│   ├── Header.tsx (top bar)
│   └── MainLayout.tsx (wrapper)
├── hr-dashboard/ (widgets)
├── hr-attendance/ (attendance)
└── employees/ (employee mgmt)
```

### Employee Dashboard Components
```
/employee/* (uses EmployeeSidebar)
├── dashboard/ (widgets)
│   ├── DashboardHeader.tsx
│   ├── EmployeeSidebar.tsx
│   ├── AttendanceCard.tsx
│   ├── Announcements.tsx
│   ├── PerformanceMetrics.tsx
│   └── QuickActions.tsx
└── employee/ (specific features)
```

## Authentication Flow

```
┌─────────────┐
│  Homepage   │
└──────┬──────┘
       │
       ├─→ Click HR Login
       │   └─→ /login/hr
       │       └─→ Enter credentials
       │           └─→ Submit form
       │               └─→ navigate("/hr/dashboard")
       │
       └─→ Click Employee Login
           └─→ /login/employee
               └─→ Enter credentials
                   └─→ Submit form
                       └─→ navigate("/employee/dashboard")
```

## URL Structure

```
Protocol: http://
Host: localhost:5173
Paths:
  /                           → Homepage
  /login/hr                   → HR Login
  /login/employee             → Employee Login
  /hr/dashboard               → HR Dashboard
  /hr/employees               → Employee Management
  /hr/attendance              → HR Attendance
  /hr/settings                → HR Settings
  /employee/dashboard         → Employee Dashboard
  /employee/attendance        → Employee Attendance
  /employee/tasks             → Employee Tasks
  /employee/documents         → Employee Documents
  /*                          → 404 Not Found
```

## Quick Reference

| User Type | Entry Point | Login Route | Dashboard Route |
|-----------|-------------|-------------|-----------------|
| HR Admin | Homepage | `/login/hr` | `/hr/dashboard` |
| Employee | Homepage | `/login/employee` | `/employee/dashboard` |

| Section | Base Route | Pages |
|---------|-----------|-------|
| Public | `/` | Homepage, Login |
| HR | `/hr/*` | Dashboard, Employees, Attendance, Settings |
| Employee | `/employee/*` | Dashboard, Attendance, Tasks, Documents |
