# Project Structure

## Directory Overview

```
merged-project/
├── public/                      # Static assets
│   ├── favicon.ico
│   ├── placeholder.svg
│   └── robots.txt
│
├── src/
│   ├── components/              # React components
│   │   │
│   │   ├── layout/              # HR Dashboard Layout
│   │   │   ├── Header.tsx       # Top header with user menu
│   │   │   ├── Sidebar.tsx      # Left sidebar navigation
│   │   │   └── MainLayout.tsx   # Main layout wrapper
│   │   │
│   │   ├── employees/           # Employee Management (HR)
│   │   │   ├── EmployeeTable.tsx
│   │   │   └── AddEmployeeModal.tsx
│   │   │
│   │   ├── hr-dashboard/        # HR Dashboard Widgets
│   │   │   ├── StatCard.tsx
│   │   │   ├── AttendanceChart.tsx
│   │   │   └── RecentActivity.tsx
│   │   │
│   │   ├── hr-attendance/       # HR Attendance Management
│   │   │   ├── AttendanceTable.tsx
│   │   │   └── MarkAttendanceModal.tsx
│   │   │
│   │   ├── dashboard/           # Employee Dashboard Components
│   │   │   ├── Announcements.tsx
│   │   │   ├── AttendanceCard.tsx
│   │   │   ├── DashboardHeader.tsx
│   │   │   ├── EmployeeSidebar.tsx
│   │   │   ├── PerformanceMetrics.tsx
│   │   │   └── QuickActions.tsx
│   │   │
│   │   ├── employee/            # Employee-specific Components
│   │   │   └── (employee components)
│   │   │
│   │   ├── ui/                  # Shared UI Components (shadcn)
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── input.tsx
│   │   │   ├── table.tsx
│   │   │   └── ... (50+ components)
│   │   │
│   │   └── Homepage Components  # Landing Page
│   │       ├── Navbar.tsx
│   │       ├── HeroSection.tsx
│   │       ├── FeaturesSection.tsx
│   │       ├── LoginSection.tsx
│   │       ├── Footer.tsx
│   │       ├── Logo.tsx
│   │       └── NavLink.tsx
│   │
│   ├── pages/                   # Page Components
│   │   │
│   │   ├── hr/                  # HR Dashboard Pages
│   │   │   ├── Dashboard.tsx    # Main HR dashboard
│   │   │   ├── Employees.tsx    # Employee management
│   │   │   ├── Attendance.tsx   # Attendance tracking
│   │   │   └── Settings.tsx     # Settings page
│   │   │
│   │   ├── employee/            # Employee Dashboard Pages
│   │   │   ├── Attendance.tsx   # Employee attendance view
│   │   │   ├── Tasks.tsx        # Task management
│   │   │   └── Documents.tsx    # Document access
│   │   │
│   │   ├── Index.tsx            # Homepage (landing page)
│   │   ├── Login.tsx            # Login page (both roles)
│   │   ├── EmployeeDashboard.tsx # Employee dashboard main
│   │   └── NotFound.tsx         # 404 page
│   │
│   ├── hooks/                   # Custom React Hooks
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   │
│   ├── lib/                     # Utility Functions
│   │   └── utils.ts             # Helper functions
│   │
│   ├── test/                    # Test Files
│   │   ├── setup.ts
│   │   └── example.test.ts
│   │
│   ├── App.tsx                  # Main App Component (Routing)
│   ├── App.css                  # App-specific styles
│   ├── main.tsx                 # Entry point
│   ├── index.css                # Global styles
│   └── vite-env.d.ts            # Vite type definitions
│
├── Configuration Files
├── .gitignore                   # Git ignore rules
├── components.json              # shadcn/ui config
├── eslint.config.js             # ESLint configuration
├── index.html                   # HTML template
├── package.json                 # Dependencies & scripts
├── postcss.config.js            # PostCSS config
├── tailwind.config.ts           # Tailwind CSS config
├── tsconfig.json                # TypeScript config (base)
├── tsconfig.app.json            # TypeScript config (app)
├── tsconfig.node.json           # TypeScript config (node)
├── vite.config.ts               # Vite configuration
├── vitest.config.ts             # Vitest configuration
│
└── Documentation
    ├── README.md                # Main documentation
    ├── MIGRATION_GUIDE.md       # Merge documentation
    └── PROJECT_STRUCTURE.md     # This file
```

## Component Categories

### 1. Layout Components (`src/components/layout/`)
Used by HR Dashboard pages to provide consistent layout with sidebar and header.

**Usage:**
```tsx
import { MainLayout } from "@/components/layout/MainLayout";

const MyPage = () => (
  <MainLayout title="Page Title" description="Description">
    {/* Page content */}
  </MainLayout>
);
```

### 2. HR Components
- **`hr-dashboard/`** - Dashboard widgets (stats, charts, activity)
- **`hr-attendance/`** - Attendance management tables and modals
- **`employees/`** - Employee CRUD operations

### 3. Employee Components
- **`dashboard/`** - Employee dashboard widgets
- **`employee/`** - Employee-specific functionality

### 4. Shared Components
- **`ui/`** - Reusable UI components from shadcn/ui
- Homepage components - Marketing/landing page sections

## Page Routes

### Public Routes
| Route | Component | Description |
|-------|-----------|-------------|
| `/` | `pages/Index.tsx` | Homepage/Landing page |
| `/login/hr` | `pages/Login.tsx` | HR login |
| `/login/employee` | `pages/Login.tsx` | Employee login |

### HR Routes (Protected)
| Route | Component | Description |
|-------|-----------|-------------|
| `/hr/dashboard` | `pages/hr/Dashboard.tsx` | HR main dashboard |
| `/hr/employees` | `pages/hr/Employees.tsx` | Employee management |
| `/hr/attendance` | `pages/hr/Attendance.tsx` | Attendance tracking |
| `/hr/settings` | `pages/hr/Settings.tsx` | Settings |

### Employee Routes (Protected)
| Route | Component | Description |
|-------|-----------|-------------|
| `/employee/dashboard` | `pages/EmployeeDashboard.tsx` | Employee main dashboard |
| `/employee/attendance` | `pages/employee/Attendance.tsx` | Attendance history |
| `/employee/tasks` | `pages/employee/Tasks.tsx` | Task management |
| `/employee/documents` | `pages/employee/Documents.tsx` | Document access |

## Key Files

### `src/App.tsx`
Main application component with routing configuration. All routes are defined here.

### `src/main.tsx`
Application entry point. Renders the App component into the DOM.

### `src/index.css`
Global styles including:
- Tailwind CSS imports
- CSS variables for theming
- Custom utility classes
- Animation keyframes

### `tailwind.config.ts`
Tailwind CSS configuration including:
- Custom colors
- Theme extensions
- Plugin configurations
- Animation definitions

### `vite.config.ts`
Vite build configuration including:
- Path aliases (`@/` → `src/`)
- Plugin configurations
- Build optimizations

## Import Aliases

The project uses path aliases for cleaner imports:

```typescript
// Instead of: import { Button } from "../../components/ui/button"
import { Button } from "@/components/ui/button";

// Instead of: import { cn } from "../../lib/utils"
import { cn } from "@/lib/utils";
```

Configured in `vite.config.ts` and `tsconfig.json`.

## Naming Conventions

### Components
- PascalCase for component files: `MyComponent.tsx`
- PascalCase for component names: `export const MyComponent`

### Utilities
- camelCase for utility files: `utils.ts`
- camelCase for function names: `export function myFunction()`

### Hooks
- camelCase with `use` prefix: `use-toast.ts`
- Export as: `export const useToast`

### Pages
- PascalCase: `Dashboard.tsx`, `Employees.tsx`
- Default export: `export default Dashboard`

## Styling Approach

1. **Tailwind CSS** - Primary styling method
2. **CSS Variables** - Theme colors and spacing
3. **shadcn/ui** - Pre-built component styles
4. **Custom CSS** - Animations and special effects in `index.css`

## State Management

- **React Query** - Server state and data fetching
- **React State** - Local component state
- **React Context** - Shared state (if needed)

## Type Safety

- Full TypeScript coverage
- Strict mode enabled
- Type definitions for all components
- Zod schemas for form validation
