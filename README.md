# GymFit Tracker

A simple workout tracking app to log your exercises, track sets and reps, and follow workout plans.

## Features

- Track workouts with sets, reps, and weights
- Timer for timed exercises
- Pre-built workout plans (Push/Pull/Legs, body part splits)
- Workout history with persistent storage
- Clear workout logs option

## Setup

### Prerequisites

- Node.js installed
- A Supabase account (free tier works fine)

### Installation

1. Clone the repo and install dependencies:
```bash
npm install
```

2. Set up Supabase:
   - Create a project at [supabase.com](https://supabase.com)
   - Run the SQL from `supabase-schema.sql` in the Supabase SQL Editor
   - Get your project URL and anon key from Settings > API

3. Create a `.env` file in the root directory:
```
REACT_APP_SUPABASE_URL=your_supabase_url
REACT_APP_SUPABASE_ANON_KEY=your_anon_key
```

4. Run the app:
```bash
npm start
```

### Deployment

For Vercel deployment, add the same environment variables in your Vercel project settings. Make sure to select all environments (Production, Preview, Development).

## Tech Stack

- React
- Supabase (database)
- Tailwind CSS

## License

MIT
