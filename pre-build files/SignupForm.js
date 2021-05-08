import react from 'react'
import useInput from './useInput'
import firebase from './firebase'

let firebaseInstance = firebase;

const SignupForm = ({setCurrentUser, setColorTheme, setPageOpen, setmsOpen, setmlOpen, setlsOpen}) => {
    const email = useInput('');
    const password = useInput('')

    const signUp = async (e) => {
        e.preventDefault();
        try{
            if(firebaseInstance) {
                const user = await firebaseInstance.auth().createUserWithEmailAndPassword(email.value, password.value);
                if(user){
                    let email = JSON.stringify(user.user.email)
                    let userID = firebase.auth().currentUser.uid;
                    await firebase.firestore().collection('users').doc(userID).set({email: email, theme: 'light', watched: [], watchlist: []})
                    setCurrentUser(userID);
                    setColorTheme('light')
                    setPageOpen('ms')
                    setmsOpen(true);
                    setmlOpen(false);
                    setlsOpen(false);

                }
            }
        } catch (error) {
            alert(error.message)
        }
    }
    

    return (
        <div className = 'SignupCard'>
            <div className='SignupHeader'><h3>Sign Up</h3></div>
            <div className = 'SignupForm'>
                <form onSubmit={signUp}>
                    <input placeholder='email' {...email}></input>  
                    <input type='password' placeholder='password' {...password}></input>
                    <button type='submit'>Create Account</button>
                </form>
            </div>
        </div>
    )
}



export default SignupForm