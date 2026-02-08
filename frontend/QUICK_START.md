# Quick Start Guide

## Installation

```bash
# Navigate to the project directory
cd merged-project

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

## First Steps

### 1. Visit the Homepage
Open `http://localhost:5173` in your browser to see the landing page.

### 2. Choose Your Role

**For HR Dashboard:**
- Click "HR Login" button on the homepage
- Or navigate directly to `/login/hr`
- Use demo credentials:
  - Email: `hr@staffsync.com`
  - Password: `demo123`
- You'll be redirected to `/hr/dashboard`

**For Employee Dashboard:**
- Click "Employee Login" button on the homepage
- Or navigate directly to `/login/employee`
- Use demo credentials:
  - Email: `employee@staffsync.com`
  - Password: `demo123`
- You'll be redirected to `/employee/dashboard`

## Navigation

### HR Dashboard Navigation
Once logged in as HR, use the left sidebar to navigate:
- **Dashboard** - Overview with stats and charts
- **Employees** - Manage employee records
- **Attendance** - Track and mark attendance
- **Settings** - Configure application

### Employee Dashboard Navigation
Once logged in as Employee, use the sidebar to navigate:
- **Dashboard** - Personal overview
- **Attendance** - View attendance history
- **Tasks** - Manage tasks
- **Documents** - Access documents

## Key Features to Test

### HR Dashboard
1. **View Statistics** - See employee counts and attendance rates
2. **Add Employee** - Click "Add Employee" button
3. **Mark Attendance** - Click "Mark Attendance" button
4. **Search & Filter** - Use search bars to filter data

### Employee Dashboard
1. **View Personal Stats** - See your attendance and performance
2. **Check Announcements** - View company announcements
3. **Quick Actions** - Use quick action buttons
4. **View Attendance** - Check your attendance history

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint

# Run tests
npm run test

# Run tests in watch mode
npm run test:watch
```

## Project Structure (Simplified)

```
merged-project/
├── src/
│   ├── pages/
│   │   ├── Index.tsx              # Homepage
│   │   ├── Login.tsx              # Login page
│   │   ├── hr/                    # HR pages
│   │   └── employee/              # Employee pages
│   ├── components/
│   │   ├── layout/                # HR layout
│   │   ├── hr-dashboard/          # HR widgets
│   │   ├── dashboard/             # Employee widgets
│   │   └── ui/                    # Shared UI
│   └── App.tsx                    # Main routing
└── package.json
```

## Common Tasks

### Adding a New HR Page
1. Create file in `src/pages/hr/NewPage.tsx`
2. Add route in `src/App.tsx`
3. Add navigation item in `src/components/layout/Sidebar.tsx`

### Adding a New Employee Page
1. Create file in `src/pages/employee/NewPage.tsx`
2. Add route in `src/App.tsx`
3. Add navigation in employee sidebar

### Creating a New Component
1. Create file in appropriate `src/components/` subdirectory
2. Use TypeScript for type safety
3. Import and use in your pages

### Styling Components
Use Tailwind CSS classes:
```tsx
<div className="flex items-center gap-4 p-6 rounded-lg bg-card">
  <Button variant="default" size="lg">
    Click Me
  </Button>
</div>
```

## Troubleshooting

### Port Already in Use
If port 5173 is busy:
```bash
# Kill the process using the port
lsof -ti:5173 | xargs kill -9

# Or specify a different port
npm run dev -- --port 3000
```

### Module Not Found
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors
```bash
# Check for type errors
npx tsc --noEmit
```

### Build Errors
```bash
# Clear Vite cache
rm -rf node_modules/.vite
npm run dev
```

## Next Steps

1. **Explore the Code** - Check out the component structure
2. **Customize Styling** - Modify Tailwind config or CSS variables
3. **Add Features** - Extend functionality as needed
4. **Connect Backend** - Replace mock data with API calls
5. **Add Authentication** - Implement real auth system

## Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com)
- [Vite Guide](https://vitejs.dev/guide/)
- [React Router](https://reactrouter.com)

## Support

For issues or questions:
1. Check `README.md` for detailed documentation
2. Review `MIGRATION_GUIDE.md` for architecture details
3. See `PROJECT_STRUCTURE.md` for file organization

## Demo Credentials

**HR Login:**
- Email: `hr@staffsync.com`
- Password: `demo123`

**Employee Login:**
- Email: `employee@staffsync.com`
- Password: `demo123`

Note: These are demo credentials only. No real authentication is implemented.
