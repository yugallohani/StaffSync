# Homepage Credentials & Branding Update

## Changes Made

### 1. Updated Branding in index.html
- Changed page title from "Lovable App" to "StaffSync - Unified HR & Employee Management System"
- Updated meta descriptions to reflect StaffSync branding
- Updated Open Graph and Twitter card metadata
- Added favicon reference to `/placeholder.svg`

### 2. Modified Login Credentials Display

#### HR Dashboard Card
- Shows admin demo credentials:
  - Email: `hr@staffsync.com`
  - Password: `demo123`
- Labeled as "Admin Demo Credentials" to clarify HR is the admin role

#### Employee Portal Card
- **Removed** demo credentials completely
- Added message: "Create an account to get started with the Employee Portal"
- Employees must create their own accounts to access the portal

### 3. Updated Constants
- Removed `DEMO_CREDENTIALS.EMPLOYEE` from `lib/constants.ts`
- Kept only `DEMO_CREDENTIALS.HR` for admin access
- Added comment clarifying HR credentials are for admin only

## User Flow

### For HR Users (Admin)
1. Visit homepage
2. Click "HR Login" button
3. Use provided demo credentials to access HR Dashboard
4. Full administrative access to manage employees, attendance, and analytics

### For Employees
1. Visit homepage
2. Click "Employee Login" button
3. Must create a new account (no demo credentials provided)
4. Login with their created credentials
5. Access personal portal with attendance, tasks, and documents

## Files Modified
- `merged-project/index.html` - Updated branding and metadata
- `merged-project/src/components/homepage/LoginSection.tsx` - Conditional credentials display
- `merged-project/src/lib/constants.ts` - Removed employee demo credentials

## Security Note
This approach ensures:
- HR admin access is controlled via known demo credentials
- Employees cannot use generic demo accounts
- Each employee must have unique credentials
- Clear separation between admin and employee access levels
