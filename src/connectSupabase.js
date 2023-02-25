import { createClient } from '@supabase/supabase-js';

// const supabaseUrl: string | undefined = process.env.REACT_APP_SUPABASE_URL;
// const supabaseAnonKey: string | undefined = process.env.REACT_APP_SUPABASE_ANON_KEY;

const supabaseUrl = 'https://lwssxufycttewiwhxzbt.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx3c3N4dWZ5Y3R0ZXdpd2h4emJ0Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3NzIyMzIyOSwiZXhwIjoxOTkyNzk5MjI5fQ.HTp4x2W2IeVt7blHOsFxuqA7emGSwOEFPWJ8KLDCXbk';
//

// @ts-ignore
export const supabase = createClient(supabaseUrl, supabaseAnonKey);