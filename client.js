import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://zajjiytoxifltgikdxdy.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InphamppeXRveGlmbHRnaWtkeGR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjkwMzY0ODMsImV4cCI6MTk4NDYxMjQ4M30.p0Hte_CCqR8lcOIOlLaiY-IlEWjjQgim2q44F4QxZXU')

export default supabase;