# Supabase Setup Guide for GymFit Tracker

## Quick Setup Steps

### 1. Install Dependencies

First, install the Supabase client library:

```bash
npm install
```

This will install `@supabase/supabase-js` which was added to `package.json`.

### 2. Set Up Supabase Database

1. **Go to your Supabase Dashboard**
   - Visit [https://app.supabase.com/](https://app.supabase.com/)
   - Sign in or create an account
   - Create a new project or select an existing one

2. **Run the Database Schema**
   - In your Supabase project, go to the **SQL Editor** (left sidebar)
   - Click **New Query**
   - Copy the entire contents of `supabase-schema.sql` from this project
   - Paste it into the SQL Editor
   - Click **Run** to execute the SQL
   - This will create the `workout_logs` table and set up the necessary permissions

### 3. Get Your Supabase Credentials

1. In your Supabase project, go to **Settings** (gear icon in left sidebar)
2. Click on **API** under Project Settings
3. You'll see:
   - **Project URL** - This is your `REACT_APP_SUPABASE_URL`
   - **anon/public key** - This is your `REACT_APP_SUPABASE_ANON_KEY`

### 4. Configure Environment Variables

#### For Local Development:

1. Create a `.env` file in the root directory of your project (same level as `package.json`)
2. Add the following lines:

```env
REACT_APP_SUPABASE_URL=your_project_url_here
REACT_APP_SUPABASE_ANON_KEY=your_anon_key_here
```

Replace `your_project_url_here` and `your_anon_key_here` with your actual values from Step 3.

3. **Important:** Restart your development server after creating/updating the `.env` file:
   ```bash
   npm start
   ```

#### For Vercel Deployment:

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add the following environment variables:
   - `REACT_APP_SUPABASE_URL` = your Supabase project URL
   - `REACT_APP_SUPABASE_ANON_KEY` = your Supabase anon key
4. Make sure to select the environments where these should be available (Production, Preview, Development)
5. **Redeploy your application** for the changes to take effect

### 5. Verify the Setup

1. Start your development server:
   ```bash
   npm start
   ```

2. Open the app in your browser
3. Try logging a workout - it should save to Supabase
4. Refresh the page - your workout logs should persist

### 6. Check Your Database

To verify that data is being saved:

1. Go to your Supabase Dashboard
2. Navigate to **Table Editor** (left sidebar)
3. Click on the `workout_logs` table
4. You should see your logged workouts there!

## Troubleshooting

### Error: "Supabase is not configured"

- Make sure you created a `.env` file in the root directory
- Verify that the environment variable names are correct: `REACT_APP_SUPABASE_URL` and `REACT_APP_SUPABASE_ANON_KEY`
- Restart your development server after creating/updating the `.env` file
- For Vercel, make sure you added the environment variables in the project settings and redeployed

### Error: "Failed to load workout logs" or "Failed to save workout log"

- Verify that you ran the SQL schema in Supabase (Step 2)
- Check that the `workout_logs` table exists in your Supabase database
- Verify that your Supabase URL and anon key are correct
- Check the browser console for more detailed error messages

### Database Connection Issues

- Make sure your Supabase project is active (not paused)
- Check that your Supabase URL is correct (should start with `https://`)
- Verify that your anon key is correct (it's a long string)

## Security Notes

The current setup uses public read/write access for simplicity. For production use, consider:

1. Implementing user authentication with Supabase Auth
2. Restricting Row Level Security (RLS) policies to user-specific data
3. Using service role keys only on the server-side (never expose them in client code)

## Next Steps

- ✅ Your app is now connected to Supabase!
- 📊 Workout logs are persisted to the database
- 🔄 Data persists across page refreshes
- 🌐 Works in both development and production (Vercel)

Enjoy tracking your workouts! 💪

