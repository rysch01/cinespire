import react from 'react'
import useInput from './useInput'
import firebase from './firebase'

let firebaseInstance = firebase;

const SigninForm = ({setCurrentUser, setColorTheme, setPageOpen, setmsOpen, setmlOpen, setlsOpen}) => {
    const email = useInput('');
    const password = useInput('')

    const signin = async (e) => {
        e.preventDefault();
        try{
            if(firebaseInstance) {
                const user = await firebaseInstance.auth().signInWithEmailAndPassword(email.value, password.value)
                
                if(user){
                    alert('Welcome back ' + user.user.email)
                    setCurrentUser(user.user.email);
                    let currentUserID = await firebase.auth().currentUser.uid;
                    await firebase.firestore().collection('users').doc(currentUserID).get().then(async (doc)=>{
                                  let userData = doc.data();
                                  setColorTheme(userData.theme);
                                  setPageOpen('ms')
                                  setmsOpen(true);
                                  setmlOpen(false);
                                  setlsOpen(false);
                              }) 

                } else {
                    alert('failed')
                    setCurrentUser(null);
                }
            }
        } catch (error) {
            alert(error.message)
        }
    }
    

    return (
        <div className = 'SigninCard'>
            <div className='SigninHeader'><h3>Sign In</h3></div>
            <div className = 'SigninForm'>
                <form onSubmit={signin}>
                    <input placeholder='email' {...email}></input>  
                    <input type='password' placeholder='password' {...password}></input><br></br>
                    <button type='submit'>Sign In</button>
                </form>
            </div>
        </div>
    )
}

export default SigninForm