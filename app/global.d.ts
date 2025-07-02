import { Database } from "@/lib/types/supabasetypes";

declare global{
    type Participant = Database['public']['Tables']['participants']['Row'];
    type Meeting = Database['public']['Tables']['meetings']['Row'];
    type Activity = Database['public']['Tables']['activity_log']['Row'];
}