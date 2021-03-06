import { useState, useContext } from 'react'
import { AuthContext } from "../API/AuthContext"
import { getFirestore, doc, updateDoc, getDoc } from "firebase/firestore";
import { getAuth, updateProfile } from "firebase/auth";


function EditProfile() {
    const auth = getAuth()
    const db = getFirestore()

    const [userCreds, userDB, setUserDB] = useContext(AuthContext)

    const [loading, setLoading] = useState(false)
    const [newBio, setNewBio] = useState('')
    const [newName, setNewName] = useState('')



    const changeName = (e) => {
        e.preventDefault()
        setLoading(true)

        updateProfile(auth.currentUser, {
            displayName: newName,
        }).then(()=>{
            updateDoc(doc(db, "users", userCreds.uid),{
                name: newName,
            })
            .then(()=>{
                getDoc(doc(db, "users", userCreds.uid)).then((newData=>setUserDB(newData.data())))
                setLoading(false)
                setNewName('')
            })
        })
    }


    const changeBio = (e) => {
        e.preventDefault()
        setLoading(true)

        updateDoc(doc(db, "users", userCreds.uid),{
            bio: newBio
        })
        .then(()=>{
            getDoc(doc(db, "users", userCreds.uid)).then((newData=>setUserDB(newData.data())))
            setLoading(false)
            setNewBio('')
        })
        
    }

    return (
        <div>

            <form onSubmit={changeName}>
                <h3>Change your Name</h3>
                <input type="text" value={newName} onChange={(e)=>setNewName(e.target.value)}/>
                <button type='submit' disabled={loading? true : false}>{loading? "One Sec :)" : "Change"}</button>
            </form>

            <hr />

            <form onSubmit={changeBio}>
                <h3>Change your Bio</h3>
                <input type="text" value={newBio} onChange={(e)=>setNewBio(e.target.value)}/>
                <button type='submit' disabled={loading? true : false}>{loading? "One Sec :)" : "Change"}</button>
            </form>

        </div>
    )
}

export default EditProfile
