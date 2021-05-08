import './App.css';
import { useState, useEffect } from 'react';

import firebase from "./firebase"

import SignupForm from './SignupForm'
import SigninForm from './SigninForm'
import LogoutButton from './LogoutButton'

import Watchlist from './Watchlist'
import WatchedList from './WatchedList'

import MovieSearcher from './MovieSearcher.js'
import LocalSearcher from './LocalSearcher.js'



// Make a useContext hook (figure it out) to keep the firebase in one file and the currentUser being global
// Omdb api                                           20pts
// tms api                                            20pts
// backend with user accounts and login for firebase  15pts
// autocomplete                                       10
// custom color theming tied to the user              5
// Frontend in a javascript absed framework - react   10
// Times API                                          5
// Geocode API                                        5
// Total so far                                       90
// Regular Maps JS API is extra 5 pts

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [movieSearcherCurrentResults, setMovieSearcherCurrentResults] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState('');
  const [updatingWatchlistFlag, setUpdatingWatchlistFlag] = useState(false);
  const [updatingWatchedFlag, setUpdatingWatchedFlag] = useState(false);
  const [colorTheme, setColorTheme] = useState('light');
  const [pageOpen, setPageOpen] = useState('ms');
  const [msOpen, setmsOpen] = useState(true);
  const [mlOpen, setmlOpen] = useState(false);
  const [lsOpen, setlsOpen] = useState(false);





  const updateUser = function(authUser) {
    if(authUser) {
      setCurrentUser(authUser.uid)
      setSelectedMovie('')
      setPageOpen('ms')
      setmsOpen(true);
      setmlOpen(false);
      setlsOpen(false);

    } else {
      setCurrentUser(null)
    }
  }


  useEffect(()=>{
    if (firebase) {
      firebase.auth().onAuthStateChanged((authUser)=>{updateUser(authUser)})
     }
  }, [])


  if(firebase.auth().currentUser) {
    
    
    return (
      
      <div className={'App'}>

        <header className={'AppHeader'}>
          <h1>CineSpire</h1>
          <button className='ThemePicker' onClick={
            async ()=>{
              if(colorTheme == 'light'){
                setColorTheme('dark')
                await firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid).update({theme: 'dark'});

              } else {
                setColorTheme('light')
                await firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid).update({theme: 'light'});

              }
            } 
       }>{colorTheme}</button>

        <LogoutButton setCurrentUser={setCurrentUser} setColorTheme={setColorTheme}/>
          
        </header>
        <div className='PageSelector'>
          <button className={'selected'+msOpen} onClick={()=>{setPageOpen('ms'); setmsOpen(true); setmlOpen(false); setlsOpen(false)}}>Search Movies By Title</button>
          <button className={'selected'+mlOpen} onClick={()=>{setPageOpen('ml'); setmsOpen(false); setmlOpen(true); setlsOpen(false)}}>My Lists</button>
          <button className={'selected'+lsOpen} onClick={()=>{setPageOpen('ls'); setmsOpen(false); setmlOpen(false); setlsOpen(true)}}>Search for local movies</button>
        </div>
        <MainSection pageOpen={pageOpen} movieSearcherCurrentResults={movieSearcherCurrentResults} setMovieSearcherCurrentResults={setMovieSearcherCurrentResults} selectedMovie={selectedMovie} setSelectedMovie={setSelectedMovie} currentUser={currentUser} setUpdatingWatchlistFlag={setUpdatingWatchlistFlag} setUpdatingWatchedFlag={setUpdatingWatchedFlag} colorTheme={colorTheme} updatingWatchlistFlag={updatingWatchlistFlag} updatingWatchedFlag={updatingWatchedFlag} setPageOpen={setPageOpen} setmsOpen={setmsOpen} setmlOpen={setmlOpen} setlsOpen={setlsOpen}/>
       

      </div>
    );
  } else {
    return (
      <div>
        <div className={'App'}>
          <header className={'AppHeader'}>
            <h1>CineSpire</h1>
          </header>
          <div className='SigninSignupExt'>
            <div className='SignInSignUp'>
              <SigninForm setCurrentUser={setCurrentUser} setColorTheme={setColorTheme} setPageOpen={setPageOpen} setmsOpen={setmsOpen} setmlOpen={setmlOpen} setlsOpen={setlsOpen}/>
              <SignupForm setCurrentUser={setCurrentUser} setColorTheme={setColorTheme} setPageOpen={setPageOpen} setmsOpen={setmsOpen} setmlOpen={setmlOpen} setlsOpen={setlsOpen}/>
            </div>
             
          </div>
        </div>   
      </div>
    )
  }
}

const MainSection = ({pageOpen, movieSearcherCurrentResults, setMovieSearcherCurrentResults, selectedMovie, setSelectedMovie, currentUser, setUpdatingWatchlistFlag, setUpdatingWatchedFlag, colorTheme, updatingWatchlistFlag, updatingWatchedFlag, setPageOpen, setmsOpen, setmlOpen, setlsOpen}) => {
  if(pageOpen == 'ms') {
    return ( 
        <MovieSearcher movieSearcherCurrentResults={movieSearcherCurrentResults} setMovieSearcherCurrentResults={setMovieSearcherCurrentResults} selectedMovie={selectedMovie} setSelectedMovie={setSelectedMovie} currentUser={currentUser} setUpdatingWatchlistFlag={setUpdatingWatchlistFlag} setUpdatingWatchedFlag={setUpdatingWatchedFlag} colorTheme={colorTheme}/>
    )
  } else if(pageOpen == 'ml') {
    return (
      <div className={'Lists'+colorTheme}>
        <Watchlist currentUser={currentUser} setUpdatingWatchlistFlag={setUpdatingWatchlistFlag} updatingWatchlistFlag={updatingWatchlistFlag} colorTheme={colorTheme} setSelectedMovie={setSelectedMovie} setPageOpen={setPageOpen} setmsOpen={setmsOpen} setmlOpen={setmlOpen} setlsOpen={setlsOpen}/>
        <WatchedList currentUser={currentUser} setUpdatingWatchedFlag={setUpdatingWatchedFlag} updatingWatchedFlag={updatingWatchedFlag} colorTheme={colorTheme} setSelectedMovie={setSelectedMovie}  setPageOpen={setPageOpen} setmsOpen={setmsOpen} setmlOpen={setmlOpen} setlsOpen={setlsOpen}/>
      </div>
    )
  } else {
    return (
      <div>
        <LocalSearcher setSelectedMovie={setSelectedMovie} colorTheme={colorTheme} setPageOpen={setPageOpen} setmsOpen={setmsOpen} setmlOpen={setmlOpen} setlsOpen={setlsOpen}/>

      </div>
    )
  }
}


export default App;
