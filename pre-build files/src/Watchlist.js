import react from 'react'
import {useState, useEffect} from 'react'
import firebase from './firebase'
import axios from 'axios';

function useWatchlist(setUpdatingWatchlistFlag, updatingWatchlistFlag) {
    const [watchlist, setWatchlist] = useState([]);
    useEffect(async ()=>{
        let currentUserID = firebase.auth().currentUser.uid;
        firebase.firestore().collection('users').doc(currentUserID).get().then((doc)=>{
            let userData = doc.data();
            setWatchlist(userData.watchlist);
            setUpdatingWatchlistFlag(false)
        })        
    }, [updatingWatchlistFlag])

    return watchlist
}

const Watchlist = ({currentUser, setUpdatingWatchlistFlag, updatingWatchlistFlag, colorTheme, setSelectedMovie, setPageOpen, setmsOpen, setmlOpen, setlsOpen}) => {
    const watchlist = useWatchlist(setUpdatingWatchlistFlag, updatingWatchlistFlag)
    let i = 0;

    async function getMoreDetails(movieTitle) {
        let selectedMovieMoreInfo = await axios({
            url:      `http://www.omdbapi.com/?&apikey=fb8a95d8&t=${movieTitle}&type=movie&plot=full`,
            method:   'get',
          })
    
        setSelectedMovie(selectedMovieMoreInfo.data);
    }

    return (
        <div className={'Watchlist'+colorTheme}>
            <h2>Watch List</h2>
            <div>
                {watchlist.map((movie)=> {
                    
                    // let keywl = Object.keys(watchlist).filter((kmovie)=>{return watchlist[kmovie].imdbID==movie.imdbID}).map((key)=>{
                    //     alert(key)
                    // })
                    // console.log(keywl)
                    return (
                        <div key = {movie.id+'wl'+i++} className={'WatchlistEntry'+colorTheme}>
                            <p>{(movie.Title)} </p>
                            <div className={'WatchlistButtons'+colorTheme}>
                                <button onClick={()=>{
                                    getMoreDetails(movie.Title);
                                    setPageOpen('ms'); setmsOpen(true); setmlOpen(false); setlsOpen(false);
                                }}>More Details</button>
                                <button onClick={async()=>{
                                    let currentUserID = firebase.auth().currentUser.uid;
                                    await firebase.firestore().collection('users').doc(currentUserID).get().then(async (doc)=>{
                                        let userwatchlist = doc.data().watchlist.filter((wlmovie)=>wlmovie.imdbID!==movie.imdbID);
                                        await firebase.firestore().collection('users').doc(currentUserID).update({'watchlist': userwatchlist})
                                        setUpdatingWatchlistFlag(true)
                                    
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

export default Watchlist