import react from 'react'
import {useState, useEffect} from 'react'
import firebase from './firebase'
import axios from 'axios';



function useWatched(setUpdatingWatchedFlag, updatingWatchedFlag) {
    const [watched, setWatched] = useState([]);
    useEffect(async ()=>{
        let currentUserID = firebase.auth().currentUser.uid;
        firebase.firestore().collection('users').doc(currentUserID).get().then((doc)=>{
            let userData = doc.data();
            setWatched(userData.watched);
            setUpdatingWatchedFlag(false)
        })        
    }, [updatingWatchedFlag])

    return watched
}

const Watched = ({currentUser, setUpdatingWatchedFlag, updatingWatchedFlag, colorTheme, setSelectedMovie, setPageOpen, setmsOpen, setmlOpen, setlsOpen}) => {
    const watched = useWatched(setUpdatingWatchedFlag, updatingWatchedFlag)
    let i = 0;

    async function getMoreDetails(movieTitle) {
        let selectedMovieMoreInfo = await axios({
            url:      `http://www.omdbapi.com/?&apikey=fb8a95d8&t=${movieTitle}&type=movie&plot=full`,
            method:   'get',
          })
    
        setSelectedMovie(selectedMovieMoreInfo.data);
    }

    return (
        <div className={'Watched'+colorTheme}>
            <h2>Watched</h2>
            <div>
                {watched.map((movie)=> {
                    return (
                        <div key = {movie.id+'wd'+i++} className={'WatchedEntry'+colorTheme}>
                            <p>{(movie.Title)} </p>
                            <div className={'WatchedButtons'+colorTheme}>
                                <button onClick={()=>{
                                    getMoreDetails(movie.Title)
                                    setPageOpen('ms'); setmsOpen(true); setmlOpen(false); setlsOpen(false)
                                }}>More Details</button>
                                 <button onClick={async()=>{
                                    let currentUserID = firebase.auth().currentUser.uid;
                                    await firebase.firestore().collection('users').doc(currentUserID).get().then(async (doc)=>{
                                        let userwatched = doc.data().watched.filter((wlmovie)=>wlmovie.imdbID!==movie.imdbID);
                                        await firebase.firestore().collection('users').doc(currentUserID).update({'watched': userwatched})
                                        setUpdatingWatchedFlag(true)
                                        
                                    })     
                                }}>Remove from List</button>
                            </div>
                        </div>
                        )
                    }      
                )}
            </div>
        </div>
    )
}

export default Watched