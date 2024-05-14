import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

const useLoginStatus = () => {
    const [logInUser, setLogInUser] = useState(false)
    const [checkingStatus, setCheckingStatus] = useState(true)

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setLogInUser(true)
            }
            setCheckingStatus(false)
        })
    },[])

    return { logInUser, checkingStatus }
}

export default useLoginStatus