import { createClient } from "@supabase/supabase-js"
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useNavigate } from "react-router-dom"

const supabase = createClient(
  "https://ovvmujbqcqubwjzerqwu.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im92dm11amJxY3F1YndqemVycXd1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA4MTI5ODcsImV4cCI6MjAwNjM4ODk4N30.rT_ZNHEH5Ttv0kE3XcMGkjsR8cQ4xXVl08Q_e0wNXyk"
)

export default function Login() {

  const navigate = useNavigate()

  supabase.auth.onAuthStateChange(async (event) => {
    if (event == "SIGNED_IN") {
      // forward to dashboard
      navigate("/dashboard")
    }else{
      // forward to localhost:3000
      navigate("/")
    }
  })

  return (
    <div className='App'>
      <header className='App-header'>
        <Auth 
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            theme="dark"
            providers={["discord"]}
        />
      </header>
    </div>
  )
}
