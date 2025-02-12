// filepath: /c:/my_files/my_code/carbon11/src/lib/initsupabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Test function to check the connection
export async function testConnection() {
  const { data, error } = await supabase.from('productTables').select('*').limit(1);
  if (error) {
    console.error('Error connecting to Supabase:', error);
  } else {
    console.log('Successfully connected to Supabase:', data);
  }
  return data;
}