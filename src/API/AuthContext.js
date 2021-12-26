import { createContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, getDoc, doc } from "firebase/firestore"; 

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const auth = getAuth()
    const db = getFirestore()

    const [userCreds, setUserCreds] = useState(null)
    const [userDB, setUserDB] = useState(null)

    useEffect(()=>{

        const unsub = onAuthStateChanged(auth, (user)=>{
            if(user){
                console.log(user);
                getDoc(doc(db, "users", user.uid))
                .then(docSnap=>{

                    setUserCreds(user)

                    if(docSnap.exists()){
                        setUserDB(docSnap.data())
                    }
                })
                
            } else {
                setUserCreds(null)
                setUserDB(null)

                console.log('no user is logged in');
            }
        })

        return ()=> unsub()

    },[])

    return(
        <AuthContext.Provider value={[userCreds, userDB, setUserDB]}>
            {children}
        </AuthContext.Provider>
    )
}