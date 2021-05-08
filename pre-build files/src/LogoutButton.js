import react from 'react'
import firebase from './firebase'

const LogoutButton = ({setCurrentUser, setColorTheme}) => {
    const logoutFunction = async () => {
        try {
                await firebase.auth().signOut();
                setCurrentUser(null)  
                alert('signed out')
                setColorTheme('light')
            } 
        catch(error) {
        }
    }

    return (
        <button className='LogoutButton' onClick = {()=>logoutFunction()}>Log Out</button>
    )
}

export default LogoutButton