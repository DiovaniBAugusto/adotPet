import React, {useState} from "react"

interface userProps{
    id: string
    email: string
    userRole: string
    username: string
}

export default function Home(){
    const [title, setTitle] = useState<string | null>(null)
    let user : userProps | null = null;
    if(window.localStorage.getItem("user")){
        let storage = JSON.parse(window.localStorage.getItem("user") as string)
        user = storage.user;
    }
    
    return(
        <div className="container">
            {user && (
                <div>{user.username}</div>
            )}
            <div>home</div>
        </div>
    )
}