import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://jzdhbzyffucxjlbdtsve.supabase.co";

export const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp6ZGhienlmZnVjeGpsYmR0c3ZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIwMDMwNzMsImV4cCI6MjA1NzU3OTA3M30.oXUacKED8KWnwOrrDwaxXUeoqQ8dF-jRniJkkVU5faY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
