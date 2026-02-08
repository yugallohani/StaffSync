# ✅ Deployment Checklist

Quick reference for deploying StaffSync to production.

---

## 🎯 Before You Start

- [ ] Code pushed to GitHub: https://github.com/yugallohani/StaffSync
- [ ] Render account created: https://render.com
- [ ] Vercel account created: https://vercel.com

---

## 📦 Part 1: Render (Backend + Database)

### Database Setup
- [ ] Create PostgreSQL database on Render
- [ ] Name: `staffsync-db`
- [ ] Copy Internal Database URL
- [ ] Save URL securely

### Backend Deployment
- [ ] Create new Web Service on Render
- [ ] Connect GitHub repository
- [ ] Set Root Directory: `backend`
- [ ] Set Build Command: `pip install -r requirements.txt`
- [ ] Set Start Command: `python run.py`
- [ ] Add environment variables:
  - [ ] `DATABASE_URL` (from database)
  - [ ] `SECRET_KEY` (generate random)
  - [ ] `CORS_ORIGINS` (temporary)
  - [ ] `PORT` = 8000
  - [ ] `DEBUG` = False
- [ ] Deploy and wait for completion
- [ ] Save backend URL: `https://staffsync-backend.onrender.com`
- [ ] Test API docs: `/docs` endpoint

### Seed Database
- [ ] Open Render Shell
- [ ] Run: `python seed_data.py`
- [ ] Verify users created
- [ ] Test login endpoint

---

## 🌐 Part 2: Vercel (Frontend)

### Prepare Frontend
- [ ] Create `frontend/.env.production`
- [ ] Add: `VITE_API_BASE_URL=https://staffsync-backend.onrender.com`
- [ ] Commit and push to GitHub

### Deploy to Vercel
- [ ] Import repository on Vercel
- [ ] Set Root Directory: `frontend`
- [ ] Framework: Vite
- [ ] Build Command: `npm run build`
- [ ] Output Directory: `dist`
- [ ] Add environment variable:
  - [ ] `VITE_API_BASE_URL` = your Render backend URL
- [ ] Deploy
- [ ] Save frontend URL: `https://staff-sync-xxx.vercel.app`

---

## 🔄 Part 3: Final Configuration

### Update CORS
- [ ] Go to Render backend settings
- [ ] Update `CORS_ORIGINS` to include Vercel URL
- [ ] Format: `https://staff-sync-xxx.vercel.app,http://localhost:3000`
- [ ] Save and wait for redeploy

### Test Everything
- [ ] Visit Vercel URL
- [ ] Login as HR: `hr@staffsync.com` / `demo123`
- [ ] Test dashboard
- [ ] Test employee management
- [ ] Login as Employee: `rahul.sharma@staffsync.com` / `employee123`
- [ ] Test employee features

---

## 📝 Save These URLs

```
Frontend: https://staff-sync-xxx.vercel.app
Backend:  https://staffsync-backend.onrender.com
API Docs: https://staffsync-backend.onrender.com/docs
```

---

## ⚠️ Important Notes

1. **First Load**: Render free tier spins down after 15 min inactivity
   - First request may take 30 seconds
   - Subsequent requests are fast

2. **Database**: PostgreSQL on Render
   - 1GB storage on free tier
   - Automatic backups

3. **HTTPS**: Automatic on both platforms
   - No configuration needed

4. **Monitoring**: Check logs if issues occur
   - Render: Dashboard → Logs tab
   - Vercel: Dashboard → Deployments → View logs

---

## 🎉 Done!

- [ ] Application is live
- [ ] All features working
- [ ] URLs saved
- [ ] Ready to share!

**Total Time**: ~30-45 minutes

---

**Quick Links**:
- Full Guide: `DEPLOYMENT_GUIDE.md`
- Render: https://dashboard.render.com
- Vercel: https://vercel.com/dashboard
