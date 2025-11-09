# Deployment Guide - GitHub + Vercel

This guide will walk you through deploying your GymFit Tracker app to GitHub and Vercel.

## Prerequisites

- ✅ Your code is working locally
- ✅ Supabase database is set up
- ✅ Environment variables are configured locally (`.env` file)

## Step 1: Push to GitHub

### 1.1 Initialize Git (if not already done)

```bash
git init
git add .
git commit -m "Initial commit: GymFit Tracker with Supabase integration"
```

### 1.2 Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. **Important**: Do NOT initialize it with README, .gitignore, or license (if you already have these)
3. Copy the repository URL

### 1.3 Push to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

**Note**: Your `.env` file is already in `.gitignore`, so it won't be pushed to GitHub (this is good for security!)

## Step 2: Deploy to Vercel

### 2.1 Connect GitHub to Vercel

1. Go to [Vercel](https://vercel.com)
2. Sign in (or create an account)
3. Click **"Add New"** → **"Project"**
4. Import your GitHub repository
5. Vercel will automatically detect it's a Create React App project

### 2.2 Configure Environment Variables in Vercel

**This is the most important step!**

1. In the Vercel project setup, go to **"Environment Variables"** section
2. Add the following variables:

   **Variable 1:**
   - Name: `REACT_APP_SUPABASE_URL`
   - Value: `https://ydwzftcnoavbdkmfuuby.supabase.co`
   - Environments: ☑ Production ☑ Preview ☑ Development

   **Variable 2:**
   - Name: `REACT_APP_SUPABASE_ANON_KEY`
   - Value: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlkd3pmdGNub2F2YmRrbWZ1dWJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI2OTY0MTgsImV4cCI6MjA3ODI3MjQxOH0.dESwH-QPNM0ITM0phhzNypDo9kIRGVQzgC1IO0IIbbw`
   - Environments: ☑ Production ☑ Preview ☑ Development

3. **Important**: Make sure to check all three environments (Production, Preview, Development)

### 2.3 Deploy

1. Click **"Deploy"**
2. Vercel will:
   - Install dependencies (`npm install`)
   - Build your app (`npm run build`)
   - Deploy it to a URL like `your-app.vercel.app`

### 2.4 Verify Deployment

1. Once deployed, click on the deployment URL
2. Your app should load
3. Try logging a workout - it should save to Supabase
4. Refresh the page - your workout should persist

## Step 3: Set Up Automatic Deployments

Vercel automatically deploys when you push to GitHub:

1. **Production**: Automatically deploys when you push to `main` branch
2. **Preview**: Creates a preview deployment for every pull request

### To update your app:

```bash
# Make your changes locally
git add .
git commit -m "Your commit message"
git push origin main
```

Vercel will automatically rebuild and redeploy!

## Step 4: Custom Domain (Optional)

1. Go to your Vercel project settings
2. Click **"Domains"**
3. Add your custom domain
4. Follow Vercel's instructions to configure DNS

## Troubleshooting

### Build Fails

- **Check**: Environment variables are set in Vercel
- **Check**: All three environments (Production, Preview, Development) are selected
- **Check**: Variable names are exactly `REACT_APP_SUPABASE_URL` and `REACT_APP_SUPABASE_ANON_KEY`
- **Check**: No typos in the values

### App Works Locally But Not on Vercel

- **Check**: Environment variables are set in Vercel (they're different from local `.env`)
- **Check**: You've redeployed after adding environment variables
- **Check**: Supabase database is set up (run `supabase-schema.sql`)

### Environment Variables Not Working

- Make sure variable names start with `REACT_APP_` (required for Create React App)
- Redeploy after adding/changing environment variables
- Check Vercel deployment logs for errors

## Security Notes

- ✅ `.env` file is in `.gitignore` (won't be pushed to GitHub)
- ✅ Only the anon key is exposed (this is safe for client-side use)
- ✅ Row Level Security (RLS) is enabled in Supabase
- ⚠️ Never commit your `.env` file to GitHub
- ⚠️ Never expose your Supabase service role key (only anon key)

## Quick Checklist

Before deploying, make sure:

- [ ] Code works locally
- [ ] `.env` is in `.gitignore`
- [ ] Code is pushed to GitHub
- [ ] Supabase database schema is set up
- [ ] Environment variables are added to Vercel
- [ ] All three environments are selected in Vercel
- [ ] Deployment is successful
- [ ] App works on Vercel URL

## Need Help?

- Check Vercel deployment logs for specific errors
- Verify environment variables in Vercel project settings
- Make sure Supabase database is accessible
- Check browser console for runtime errors

Happy deploying! 🚀

