import react from 'react'
import firebase from './firebase'
import { query, where, getDocs } from "firebase/firestore";

const LoginChecker = ({currentUser}) => {
    
    let user = firebase.auth().currentUser;

    if(user != null){
        let currentUserID = firebase.auth().currentUser.uid;
        firebase.firestore().collection('users').doc(currentUserID).get().then((doc)=>{
            let userData = doc.data();
        })



        return (
            <div>
                <p>Email Here {currentUser}</p>
                <p>Auth User info  {JSON.stringify(user)}</p>
            </div>
        )
        
    } else {
        return (
            <div>
                <p>Not Signed in</p>
                <p>{JSON.stringify(user)}</p>
            </div>

        )
    }
    
}

export default LoginChecker