import './App.css';

import axios from 'axios';
import React, {useState} from 'react'
import firebase from './firebase'
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import "firebase/database";
import SearchReviews from './SearchReviews.js'

function MovieSearcher({movieSearcherCurrentResults, setMovieSearcherCurrentResults, selectedMovie, setSelectedMovie, currentUser, setUpdatingWatchlistFlag, setUpdatingWatchedFlag, colorTheme}) {
  const [currentReviewURL, setCurrentReviewURL] = useState('');
  const [currentReviewSuggestedText, setCurrentReviewSuggestedText] = useState('');
  return (
    <div className={'MovieSearcher'}>
        <div className='SearchSide'>
          <div className = 'SearchSection'>
          <input type='text' placeholder='Search Movies By Title!' className='MovieSearchBar' onChange={ async (e)=>{
                let search_query = e.target.value
                let search_result = await axios({
                  url:      `https://www.omdbapi.com/?&apikey=fb8a95d8&s=${search_query}&type=movie`,
                  method:   'get',
                })
                
                try{
                  if(search_result.data['Search'] !== undefined) {
                    let movie_results = search_result.data['Search'].filter(m=>m.Type ==='movie');
                    let unique = [];
                    movie_results.forEach((element)=>{
                      if(!(unique.some(e => e.imdbID == element.imdbID))){
                        unique.push(element);
                      }
                    })

                    await setMovieSearcherCurrentResults(unique)
                  }
                } catch {
                  await setMovieSearcherCurrentResults([])
                }
              
              }
            }>
          </input>
          <AutoCompleteSuggestions movieSearcherCurrentResults={movieSearcherCurrentResults} setMovieSearcherCurrentResults={setMovieSearcherCurrentResults} selectedMovie={selectedMovie} setSelectedMovie={setSelectedMovie} setCurrentReviewURL={setCurrentReviewURL} setCurrentReviewSuggestedText={setCurrentReviewSuggestedText}/>
          </div>
        </div>
        <CurrentCard selectedMovie={selectedMovie} setSelectedMovie={setSelectedMovie} setUpdatingWatchlistFlag={setUpdatingWatchlistFlag} setUpdatingWatchedFlag={setUpdatingWatchedFlag} colorTheme={colorTheme} currentUser={currentUser} currentReviewURL={currentReviewURL} currentReviewSuggestedText={currentReviewSuggestedText} setCurrentReviewURL={setCurrentReviewURL} setCurrentReviewSuggestedText={setCurrentReviewSuggestedText}/>
    </div>
  );
}



function CurrentCard({selectedMovie, setSelectedMovie, setUpdatingWatchlistFlag, setUpdatingWatchedFlag, colorTheme, currentUser, currentReviewURL, currentReviewSuggestedText, setCurrentReviewURL, setCurrentReviewSuggestedText}) {
 

  const addToWatchList = async (movie) => {
    let currentUserID = firebase.auth().currentUser.uid;
  
    await firebase.firestore().collection('users').doc(currentUserID).update({
      watchlist: firebase.firestore.FieldValue.arrayUnion(movie)
    }) 
    setUpdatingWatchlistFlag(true);

  }

  const alreadySeen = async (movie) => {
    let currentUserID = firebase.auth().currentUser.uid;
  
    await firebase.firestore().collection('users').doc(currentUserID).update({
      watched: firebase.firestore.FieldValue.arrayUnion(movie)
    }) 
    setUpdatingWatchedFlag(true)
  }

  if(selectedMovie !==''){


    async function SearchReviews() {
      let day = '01';
      let monthNumPrior = '01';   //Lower Search
      let monthNum = '01';        //Upper search bound
      let yearPrior = parseInt(selectedMovie.Year);
      let year = parseInt(selectedMovie.Year);


      let month = selectedMovie.Released.substring(3, 6);

      if(month == 'Jan') {
        monthNum = '2';
        monthNumPrior='12'
        day = (selectedMovie.Released.substring(0,2));
        yearPrior = parseInt(year)-1;
     } else if(month == 'Feb') {
        monthNum = '03';
        monthNumPrior='01'
        day = (selectedMovie.Released.substring(0,2));
      } else if(month == 'Mar') {
        monthNum = '04';
        monthNumPrior = '02'
        day = (selectedMovie.Released.substring(0,2));
      } else if(month == 'Apr') {
        monthNum = '05';
        monthNumPrior = '03'
        day = (selectedMovie.Released.substring(0,2));
      } else if(month == 'May') {
        monthNum = '06';
        monthNumPrior = '04'
        day = (selectedMovie.Released.substring(0,2));
      } else if(month == 'Jun') {
        monthNum = '07';
        monthNumPrior = '05'
        day = (selectedMovie.Released.substring(0,2));
      } else if(month == 'Jul') {
        monthNum = '08';
        monthNumPrior = '06'
        day = (selectedMovie.Released.substring(0,2));
      } else if(month == 'Aug') {
        monthNum = '09';
        monthNumPrior = '07'
        day = (selectedMovie.Released.substring(0,2));
      } else if(month == 'Sep') {
        monthNum = '10';
        monthNumPrior = '08'
        day = (selectedMovie.Released.substring(0,2));
      } else if(month == 'Oct') {
        monthNum = '11';
        monthNumPrior = '09'
        day = (selectedMovie.Released.substring(0,2));
      } else if(month == 'Nov') {
        monthNum = '12';
        monthNumPrior = '10'
        day = (selectedMovie.Released.substring(0,2));
      } else if(month == 'Dec') {
        monthNum = '01';
        monthNumPrior = '11'
        day = (selectedMovie.Released.substring(0,2));
        year = parseInt(year)+1;
      } else {
        year = year++;
      }

      let priorDate = yearPrior + '-' + monthNumPrior + '-' + day
      let laterDate =  year + '-' + monthNum + "-" + day

      



      try {
          let search_result = await axios({
            url:      `https://api.nytimes.com/svc/movies/v2/reviews/search.json?opening-date=${priorDate}:${laterDate}&api-key=eiol1fy9uW3jyANb4ZtUlai96rau5OGb`,
            method:   'get',
            params: {
              query: selectedMovie.Title,
            }
          })
          setCurrentReviewURL(search_result.data.results[0].link.url)
          setCurrentReviewSuggestedText('Suggested NYTimes Review ' + JSON.stringify(search_result.data.results[0].link.suggested_link_text))
          
          
      } catch {
          setCurrentReviewURL('')
          setCurrentReviewSuggestedText('No Suggested Articles Available')
      }

    }


    
    let i = 0;
    return (
      <div className={'CurrentCard'+colorTheme}>
        <div className={'CardBar'+colorTheme}>
          <div className={'ImmediateInfoOuter'+colorTheme}>
            <div className="ImmediateInfo">
              <img className='Image' src={selectedMovie.Poster} alt = {'Poster for ' + selectedMovie} width={160}></img>
              <div className={'Details'+colorTheme}>
                <p className='Title'>{selectedMovie.Title}</p>
                <p className='Year'>({selectedMovie.Year})</p>
                <p>Starring:</p> 
                <div>
                  {selectedMovie.Actors.split(",").map(name=><p key={i++} className='Name'>{name}</p>)}
                </div>
                <p className='Name'>Directed by {selectedMovie.Director}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={'MoreDetailsDiv'+colorTheme}>
        <div className={'MoreDetails'+colorTheme}>
          <div className='Logistics'>
            <div className='LogisticsData'>
              <h3>Runtime</h3>
              <p>{selectedMovie.Runtime}</p>
            </div>
            <div className='LogisticsData'>
              <h3>Rated</h3>
              <p>{selectedMovie.Rated}</p>
            </div>
            <div className='LogisticsData'>
              <h3>Genre</h3>
              <p>{selectedMovie.Genre}</p>
            </div>
          </div>
          <div className='Synopsis'>
            <h3>Synopsis</h3>
            <p>{selectedMovie.Plot}</p>
          </div>
          <button className = 'ReviewButton' onClick={(selectedMovie)=>{SearchReviews()}}>Check for NYTimes Movie Reviews!</button>
          <div className='ReviewLink'><p>Note: This feature works best for recent and/or culturally significant movies (i.e. The Godfather, Star Wars Ep. VII, Godzilla v. Kong)</p><a href={currentReviewURL} target="_blank">{currentReviewSuggestedText}</a></div>
          <button className='BacklogButton' onClick={()=>{addToWatchList(selectedMovie)}}>Add to WatchList!</button>
          <button className='WatchedButton' onClick={()=>{alreadySeen(selectedMovie)}}>Already Seen It!</button>
          <button className='Hide' onClick={()=>{setSelectedMovie('')}}>Hide</button>
        </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className={'SearchPromptDiv'+colorTheme}><div className='Center'>Search to get Started!</div></div>
    )
  }
}


function AutoCompleteSuggestions({movieSearcherCurrentResults, setMovieSearcherCurrentResults, selectedMovie, setSelectedMovie, setCurrentReviewURL, setCurrentReviewSuggestedText}) {
  
    let autoCompleteResultsList;
    if(movieSearcherCurrentResults === '') {
      autoCompleteResultsList = (
        <p>No Results Yet!</p>
      )
    } else {
      async function selectAutoComplete(movie) {
        let selectedMovieMoreInfo = await axios({
            url:      `https://www.omdbapi.com/?&apikey=fb8a95d8&t=${movie.Title}&type=movie&plot=full`,
            method:   'get',
          })

        setSelectedMovie(selectedMovieMoreInfo.data);
        setCurrentReviewURL('');
        setCurrentReviewSuggestedText('');
        setMovieSearcherCurrentResults([]);
      }
      
      autoCompleteResultsList = (
        <div className='AutoCompleteSuggestions'>
          {movieSearcherCurrentResults.map(mscr => <button className="AutoCompleteResult" key={mscr.imdbID} onClick={()=>{selectAutoComplete(mscr)}}>{mscr.Title} - ({mscr.Year})</button>)}
        </div>
      ) 
    }
  
    return autoCompleteResultsList
}

export default MovieSearcher;
