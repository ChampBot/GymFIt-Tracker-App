-- Workout logs table
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

-- Indexes for faster queries
CREATE INDEX IF NOT EXISTS idx_workout_logs_timestamp ON workout_logs(timestamp DESC);
CREATE INDEX IF NOT EXISTS idx_workout_logs_exercise_id ON workout_logs(exercise_id);

-- Enable RLS
ALTER TABLE workout_logs ENABLE ROW LEVEL SECURITY;

-- Public access policies (can restrict later if needed)
CREATE POLICY "Allow public read access" ON workout_logs
  FOR SELECT USING (true);

CREATE POLICY "Allow public insert" ON workout_logs
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public update" ON workout_logs
  FOR UPDATE USING (true);

CREATE POLICY "Allow public delete" ON workout_logs
  FOR DELETE USING (true);

