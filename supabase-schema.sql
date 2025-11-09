-- Supabase Database Schema for GymFit Tracker
-- Run this SQL in your Supabase SQL Editor to create the necessary tables

-- Create workout_logs table
CREATE TABLE IF NOT EXISTS workout_logs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  exercise_id TEXT NOT NULL,
  exercise_name TEXT NOT NULL,
  category TEXT NOT NULL,
  movement_type TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('reps', 'timed')),
  reps INTEGER,
  weight INTEGER,
  duration INTEGER,
  timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on timestamp for faster queries
CREATE INDEX IF NOT EXISTS idx_workout_logs_timestamp ON workout_logs(timestamp DESC);

-- Create an index on exercise_id for filtering
CREATE INDEX IF NOT EXISTS idx_workout_logs_exercise_id ON workout_logs(exercise_id);

-- Enable Row Level Security (RLS)
ALTER TABLE workout_logs ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows all operations for authenticated users
-- For now, we'll allow public read/write (you can restrict this later)
CREATE POLICY "Allow public read access" ON workout_logs
  FOR SELECT USING (true);

CREATE POLICY "Allow public insert" ON workout_logs
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public update" ON workout_logs
  FOR UPDATE USING (true);

CREATE POLICY "Allow public delete" ON workout_logs
  FOR DELETE USING (true);

-- Optional: If you want to add user authentication later, you can modify the policies:
-- CREATE POLICY "Users can view their own logs" ON workout_logs
--   FOR SELECT USING (auth.uid() = user_id);
-- 
-- CREATE POLICY "Users can insert their own logs" ON workout_logs
--   FOR INSERT WITH CHECK (auth.uid() = user_id);

