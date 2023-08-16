import { createClient } from '@supabase/supabase-js';

export const supabase= createClient(
    'https://omtpiezdwkphryiwaqhk.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9tdHBpZXpkd2twaHJ5aXdhcWhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTg5NTY2MDIsImV4cCI6MTk3NDUzMjYwMn0.2b1R_jAZ4oRfLxLKJyuwQqiy9FSIJDwX13v2uXDwCLg'
);