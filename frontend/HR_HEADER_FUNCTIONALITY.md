# HR Header Functionality Update

## Overview

Added functional dropdown menus to the bell icon (notifications) and user icon (profile) in the HR portal header.

## Changes Made

### ✅ Notifications Dropdown (Bell Icon)

**Features:**
- Click bell icon to open notifications dropdown
- Shows unread notification count badge
- Displays 4 dummy notifications with:
  - Title
  - Message
  - Timestamp
  - Read/Unread status
- Unread notifications highlighted with primary color background
- "View all notifications" link at bottom
- Scrollable list (max-height: 400px)

**Dummy Data:**
```typescript
const notifications = [
  {
    id: 1,
    title: "New Employee Added",
    message: "John Smith has been added to the system",
    time: "5 minutes ago",
    unread: true,
  },
  {
    id: 2,
    title: "Attendance Alert",
    message: "3 employees marked absent today",
    time: "1 hour ago",
    unread: true,
  },
  {
    id: 3,
    title: "Leave Request",
    message: "Sarah Johnson requested leave for next week",
    time: "2 hours ago",
    unread: false,
  },
  {
    id: 4,
    title: "System Update",
    message: "New features have been added to the dashboard",
    time: "1 day ago",
    unread: false,
  },
];
```

**Visual Features:**
- Badge shows count of unread notifications (2)
- Unread notifications have light primary background
- Blue dot indicator on unread items
- Hover effects on each notification
- Clean, organized layout

### ✅ User Profile Dropdown (User Icon)

**Features:**
- Click user icon to open profile dropdown
- Shows user information:
  - Name: "Admin User"
  - Email: "hr@staffsync.com"
  - Role: "HR Manager"
- Menu options:
  - **Profile** - Links to HR Dashboard
  - **Settings** - Links to HR Settings page
  - **Messages** - Placeholder for future feature
  - **Logout** - Redirects to homepage

**Dummy Data:**
```typescript
const currentUser = {
  name: "Admin User",
  email: "hr@staffsync.com",
  role: "HR Manager",
  avatar: null,
};
```

**Menu Items:**
1. **Profile** (UserCircle icon) → `/hr/dashboard`
2. **Settings** (Settings icon) → `/hr/settings`
3. **Messages** (Mail icon) → Placeholder
4. **Logout** (LogOut icon) → `/` (Homepage)

**Visual Features:**
- User info displayed at top
- Icons for each menu item
- Hover effects
- Logout in destructive color (red)
- Smooth transitions

## Technical Implementation

### Components Used
- `DropdownMenu` from shadcn/ui
- `DropdownMenuContent`
- `DropdownMenuItem`
- `DropdownMenuLabel`
- `DropdownMenuSeparator`
- `DropdownMenuTrigger`

### State Management
```typescript
const [notificationCount] = useState(
  notifications.filter(n => n.unread).length
);
```

### Navigation
- Uses React Router's `useNavigate` hook
- Uses `Link` component for internal navigation
- Uses `ROUTES` constants for route paths

### Styling
- Consistent with app design system
- Responsive dropdown positioning
- Smooth animations
- Proper z-index layering
- Accessible keyboard navigation

## User Interactions

### Notifications Dropdown
```
Click Bell Icon
    ↓
Opens Dropdown (width: 320px)
    ↓
Shows:
- Header with unread count
- List of notifications
- Unread items highlighted
- Timestamps
- "View all" link
    ↓
Click notification → Can be made interactive
Click outside → Closes dropdown
```

### User Profile Dropdown
```
Click User Icon
    ↓
Opens Dropdown (width: 224px)
    ↓
Shows:
- User name, email, role
- Profile link
- Settings link
- Messages option
- Logout button
    ↓
Click option → Navigates or performs action
Click outside → Closes dropdown
```

## Visual Preview

### Notifications Dropdown
```
┌─────────────────────────────────┐
│ Notifications        2 unread   │
├─────────────────────────────────┤
│ ● New Employee Added            │
│   John Smith has been added...  │
│   5 minutes ago                 │
├─────────────────────────────────┤
│ ● Attendance Alert              │
│   3 employees marked absent...  │
│   1 hour ago                    │
├─────────────────────────────────┤
│   Leave Request                 │
│   Sarah Johnson requested...    │
│   2 hours ago                   │
├─────────────────────────────────┤
│   System Update                 │
│   New features have been...     │
│   1 day ago                     │
├─────────────────────────────────┤
│     View all notifications      │
└─────────────────────────────────┘
```

### User Profile Dropdown
```
┌─────────────────────────────┐
│ Admin User                  │
│ hr@staffsync.com            │
│ HR Manager                  │
├─────────────────────────────┤
│ 👤 Profile                  │
│ ⚙️  Settings                │
│ ✉️  Messages                │
├─────────────────────────────┤
│ 🚪 Logout                   │
└─────────────────────────────┘
```

## Testing

### Test Notifications
1. Navigate to http://localhost:8080/hr/dashboard
2. Click the bell icon (top-right)
3. Verify dropdown opens
4. Check unread count badge (should show "2")
5. Verify unread items are highlighted
6. Hover over notifications
7. Click outside to close

### Test User Profile
1. Navigate to http://localhost:8080/hr/dashboard
2. Click the user icon (top-right)
3. Verify dropdown opens
4. Check user information displayed
5. Click "Profile" → Should stay on dashboard
6. Click "Settings" → Should navigate to settings
7. Click "Logout" → Should navigate to homepage

## Future Enhancements

### Notifications
- [ ] Mark as read functionality
- [ ] Delete notifications
- [ ] Real-time notifications
- [ ] Notification preferences
- [ ] Filter by type
- [ ] Load more/pagination

### User Profile
- [ ] Edit profile functionality
- [ ] Upload avatar
- [ ] Change password
- [ ] Theme preferences
- [ ] Language settings
- [ ] Activity log

## Code Quality

- ✅ No TypeScript errors
- ✅ Uses shadcn/ui components
- ✅ Follows design system
- ✅ Accessible (keyboard navigation)
- ✅ Responsive design
- ✅ Clean, maintainable code
- ✅ Uses constants for routes
- ✅ Proper state management

## Files Modified

- `src/components/hr/layout/Header.tsx`

## Hot Reload Status

✅ Changes applied via Vite HMR
✅ No server restart required
✅ Live at http://localhost:8080/hr/dashboard

## Dependencies

No new dependencies added. Uses existing:
- `@/components/ui/dropdown-menu`
- `lucide-react` icons
- `react-router-dom` navigation
- `@/lib/constants` for routes
- `@/lib/utils` for styling
