# 🚀 Complete Deployment Guide

Deploy StaffSync to production with Render (Backend) and Vercel (Frontend).

---

## 📋 Prerequisites

- GitHub account with your code pushed
- Render account (free): https://render.com
- Vercel account (free): https://vercel.com
- Your repository: https://github.com/yugallohani/StaffSync

---

## Part 1: Deploy Backend to Render

### Step 1: Create PostgreSQL Database on Render

1. **Go to Render Dashboard**
   - Visit: https://dashboard.render.com
   - Click "New +" → "PostgreSQL"

2. **Configure Database**
   - **Name**: `staffsync-db`
   - **Database**: `staffsync`
   - **User**: `staffsync_user` (auto-generated)
   - **Region**: Oregon (US West)
   - **Plan**: Free
   - Click "Create Database"

3. **Save Database Credentials**
   - Wait for database to be created (~2 minutes)
   - Copy the **Internal Database URL** (starts with `postgresql://`)
   - Example: `postgresql://staffsync_user:password@dpg-xxx.oregon-postgres.render.com/staffsync`
   - **Keep this URL safe - you'll need it!**

### Step 2: Deploy Backend Web Service

1. **Create New Web Service**
   - Click "New +" → "Web Service"
   - Connect your GitHub account if not already connected
   - Select repository: `yugallohani/StaffSync`

2. **Configure Web Service**
   ```
   Name: staffsync-backend
   Region: Oregon (US West)
   Branch: main
   Root Directory: backend
   Runtime: Python 3
   Build Command: pip install -r requirements.txt
   Start Command: python run.py
   Plan: Free
   ```

3. **Add Environment Variables**
   Click "Advanced" → "Add Environment Variable"
   
   Add these variables:
   ```
   DATABASE_URL = [Paste your PostgreSQL Internal Database URL from Step 1]
   SECRET_KEY = [Generate a random string, e.g., use: openssl rand -hex 32]
   CORS_ORIGINS = http://localhost:3000,http://localhost:8080
   PORT = 8000
   DEBUG = False
   ```

   **Important**: We'll update CORS_ORIGINS after deploying frontend!

4. **Deploy**
   - Click "Create Web Service"
   - Wait for deployment (~5-10 minutes)
   - You'll see build logs in real-time

5. **Verify Deployment**
   - Once deployed, you'll get a URL like: `https://staffsync-backend.onrender.com`
   - Visit: `https://staffsync-backend.onrender.com/docs`
   - You should see the Swagger API documentation
   - **Save this URL - you'll need it for frontend!**

### Step 3: Seed the Database

1. **Open Render Shell**
   - In your web service dashboard, click "Shell" tab
   - Or use the "Connect" button

2. **Run Seed Script**
   ```bash
   python seed_data.py
   ```

3. **Verify**
   - Check the output - should show users, attendance, etc. created
   - Test login at: `https://staffsync-backend.onrender.com/docs`
   - Try the `/api/auth/login` endpoint with:
     ```json
     {
       "email": "hr@staffsync.com",
       "password": "demo123"
     }
     ```

---

## Part 2: Deploy Frontend to Vercel

### Step 1: Prepare Frontend

1. **Create Production Environment File**
   
   In your local `frontend/` directory, create `.env.production`:
   ```bash
   VITE_API_BASE_URL=https://staffsync-backend.onrender.com
   ```
   
   Replace with your actual Render backend URL!

2. **Update package.json (if needed)**
   
   Verify your `frontend/package.json` has:
   ```json
   {
     "scripts": {
       "dev": "vite",
       "build": "tsc && vite build",
       "preview": "vite preview"
     }
   }
   ```

3. **Commit and Push**
   ```bash
   git add frontend/.env.production
   git commit -m "Add production environment config"
   git push origin main
   ```

### Step 2: Deploy to Vercel

1. **Go to Vercel Dashboard**
   - Visit: https://vercel.com/dashboard
   - Click "Add New..." → "Project"

2. **Import Repository**
   - Click "Import Git Repository"
   - Select: `yugallohani/StaffSync`
   - Click "Import"

3. **Configure Project**
   ```
   Framework Preset: Vite
   Root Directory: frontend
   Build Command: npm run build
   Output Directory: dist
   Install Command: npm install
   ```

4. **Add Environment Variables**
   Click "Environment Variables" and add:
   ```
   VITE_API_BASE_URL = https://staffsync-backend.onrender.com
   ```
   (Replace with your actual Render backend URL)

5. **Deploy**
   - Click "Deploy"
   - Wait for deployment (~2-3 minutes)
   - You'll get a URL like: `https://staff-sync-xxx.vercel.app`

6. **Verify Deployment**
   - Visit your Vercel URL
   - You should see the StaffSync homepage
   - Try logging in with:
     - Email: `hr@staffsync.com`
     - Password: `demo123`

---

## Part 3: Update CORS Settings

### Important: Update Backend CORS

1. **Go to Render Dashboard**
   - Open your `staffsync-backend` web service
   - Click "Environment" tab

2. **Update CORS_ORIGINS**
   - Find the `CORS_ORIGINS` variable
   - Update it to include your Vercel URL:
   ```
   https://staff-sync-xxx.vercel.app,http://localhost:3000,http://localhost:8080
   ```
   (Replace with your actual Vercel URL)

3. **Save and Redeploy**
   - Click "Save Changes"
   - Render will automatically redeploy (~2 minutes)

4. **Test Again**
   - Visit your Vercel URL
   - Try logging in - should work now!

---

## 🎯 Final URLs

After deployment, you'll have:

- **Frontend**: `https://staff-sync-xxx.vercel.app`
- **Backend API**: `https://staffsync-backend.onrender.com`
- **API Docs**: `https://staffsync-backend.onrender.com/docs`
- **Database**: PostgreSQL on Render (internal)

---

## 🔧 Troubleshooting

### Backend Issues

**Problem**: "Application failed to start"
- Check logs in Render dashboard
- Verify all environment variables are set
- Ensure DATABASE_URL is correct

**Problem**: "Database connection failed"
- Verify PostgreSQL database is running
- Check DATABASE_URL format
- Ensure database is in same region as web service

**Problem**: "Module not found"
- Check requirements.txt includes all dependencies
- Verify build command ran successfully

### Frontend Issues

**Problem**: "API calls failing"
- Check VITE_API_BASE_URL is correct
- Verify CORS_ORIGINS includes your Vercel URL
- Check browser console for errors

**Problem**: "Build failed"
- Check build logs in Vercel
- Verify all dependencies in package.json
- Ensure TypeScript has no errors

**Problem**: "Environment variables not working"
- Vercel requires `VITE_` prefix for client-side variables
- Redeploy after adding environment variables

---

## 📊 Free Tier Limitations

### Render Free Tier
- ✅ 750 hours/month (enough for 1 service)
- ✅ PostgreSQL database (1GB storage)
- ⚠️ Spins down after 15 minutes of inactivity
- ⚠️ First request after spin-down takes ~30 seconds

### Vercel Free Tier
- ✅ Unlimited deployments
- ✅ 100GB bandwidth/month
- ✅ Automatic HTTPS
- ✅ Global CDN

---

## 🔄 Continuous Deployment

Both platforms support automatic deployment:

### Render
- Automatically deploys when you push to `main` branch
- Can configure deploy hooks for manual triggers

### Vercel
- Automatically deploys on every push to `main`
- Creates preview deployments for pull requests
- Can configure production branch

---

## 🔐 Security Checklist

- [x] SECRET_KEY is randomly generated
- [x] DEBUG is set to False in production
- [x] CORS_ORIGINS only includes your domains
- [x] Database credentials are secure
- [x] No sensitive data in repository
- [x] HTTPS enabled (automatic on both platforms)

---

## 📝 Post-Deployment Tasks

1. **Test All Features**
   - Login as HR and Employee
   - Test CRUD operations
   - Verify attendance tracking
   - Check leave requests

2. **Monitor Performance**
   - Check Render logs for errors
   - Monitor Vercel analytics
   - Watch for slow queries

3. **Set Up Custom Domain (Optional)**
   - Render: Add custom domain in settings
   - Vercel: Add custom domain in project settings
   - Update CORS_ORIGINS accordingly

---

## 🎉 Success!

Your StaffSync application is now live and accessible worldwide!

- **Frontend**: Professional UI on Vercel
- **Backend**: Scalable API on Render
- **Database**: Managed PostgreSQL on Render

**Share your live URLs and enjoy your deployed application!** 🚀

---

## 📞 Support

### Render Documentation
- https://render.com/docs

### Vercel Documentation
- https://vercel.com/docs

### Common Issues
- Check deployment logs first
- Verify environment variables
- Test API endpoints directly
- Check browser console for frontend errors

---

**Deployment Date**: February 8, 2026  
**Status**: Ready to Deploy  
**Estimated Time**: 30-45 minutes total
