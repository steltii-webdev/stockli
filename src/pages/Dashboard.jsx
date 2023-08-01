import { createClient } from "@supabase/supabase-js"
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";

const supabase = createClient(
  "https://ovvmujbqcqubwjzerqwu.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im92dm11amJxY3F1YndqemVycXd1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA4MTI5ODcsImV4cCI6MjAwNjM4ODk4N30.rT_ZNHEH5Ttv0kE3XcMGkjsR8cQ4xXVl08Q_e0wNXyk"
)

export default function Dashboard() {

    const [user, setUser] = useState({})
    const navigate = useNavigate()

    useEffect(() =>{
        async function getUserData() {
            await supabase.auth.getUser().then((value) => {
                if(value.data?.user){
                    console.log(value.data.user)
                    setUser(value.data.user)
                }
            })
        }
        getUserData()
    }, [])

    async function signOutUser() {
        const { error } = await supabase.auth.signOut()
        navigate("/")
    }

    return (
      <div className='App'>
        <header className='App-header'>
            { Object.keys(user).length !== 0 ? 
                <>
                    <h1>Sign in successful</h1>
                    <button onClick={() => signOutUser()}>Sign out</button>
                </>
            :
                <>
                    <h1>User is not logged in</h1>
                    <button onClick={() => { navigate("/") }}>Go back home</button>
                </>
            }

        </header>
      </div>
    )
}
  