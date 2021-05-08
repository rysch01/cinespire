import './App.css';
import axios from 'axios';
import React, {useState} from 'react'
import MapContainer from './MapContainer.js'

function LocalSearcher({setSelectedMovie, colorTheme, setPageOpen, setmsOpen, setmlOpen, setlsOpen}) {
    const [localResults, setLocalResults] = useState('');
    const [localZip, setLocalZip] = useState('');
    const [localRange, setLocalRange] = useState('');
    const [theaterZip, setTheaterZip] = useState('');
    const [latLong, setLatLong] = useState('');
    const [formatted_address, setFormattedAddress] = useState('');

    async function searchLocally({zip, range}) {
        let key = 'dvv6x2m364c35wsxqx595a3p';
        let date = new Date();
        let today = date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate()

        let local_result = await axios({
            url: `https://data.tmsapi.com/v1.1/movies/showings?startDate=${today}&zip=${localZip}&radius=${localRange}&api_key=dvv6x2m364c35wsxqx595a3p`
        });

        await setLocalResults(local_result.data);
    }



    return(
        <div className={'LocalExterior'+colorTheme}>

        <div className ={'LocalSearcher'+colorTheme}>

            <div className={'LocalSearcherConsole'+colorTheme}>
                <p>Local Searcher</p>
                    <input type="text" pattern={"[0-9]{5}"} placeholder='Enter Zip' onInput={ async (e)=>{
                        let zip = e.target.value
                        await setLocalZip(zip);


                    }}></input>

                    <input type="number" min={5} max={100} placeholder={'Enter Range'} onInput={ async (e)=>{
                        let range = e.target.value
                        setLocalRange(range);
                        
                    }}></input>

                <button onClick={(e)=>{searchLocally(localZip, localRange)}}>Search</button>
            </div>
            
        <LocalSearcherResults localResults={localResults} setSelectedMovie={setSelectedMovie} colorTheme={colorTheme}  theaterZip={theaterZip} setTheaterZip={setTheaterZip} localZip={localZip} setFormattedAddress={setFormattedAddress} setLatLong={setLatLong} setPageOpen={setPageOpen} setmsOpen={setmsOpen} setmlOpen={setmlOpen} setlsOpen={setlsOpen}/>
        <div className='AddressMap'>
            <div className={'Address'}>
                <h4>Theater Address</h4>
                <p>{formatted_address}</p>
            </div>
            <MapContainer latLong={latLong} setLatLong={setLatLong}/>

        </div>
        </div>
        


        </div>
    )
}





function LocalSearcherResults({localResults, setSelectedMovie, colorTheme, theaterZip, setTheaterZip, localZip, setFormattedAddress, setLatLong, setPageOpen, setmsOpen, setmlOpen, setlsOpen}) {
    let localSearcherResultsList;

    if(localResults === '') {
        localSearcherResultsList = (
        <p>No Results Yet!</p>
      )
    } else {    
        localSearcherResultsList = (
        <div>
          {localResults.map(
              (local_movie) =>{ 
                return (
                    <div className={"LocalSearcherMovie"+colorTheme} key={local_movie.tmsId}>
                        <LocalMovieShowings local_movie={local_movie} setSelectedMovie={setSelectedMovie} colorTheme={colorTheme} theaterZip={theaterZip} setTheaterZip={setTheaterZip} localZip={localZip} setFormattedAddress={setFormattedAddress} setLatLong={setLatLong} setPageOpen={setPageOpen} setmsOpen={setmsOpen} setmlOpen={setmlOpen} setlsOpen={setlsOpen}/>
                    </div>
                )
                
          }
        )
    
        }

    
        
        

        </div>
      ) 
    }
  
    return localSearcherResultsList
}

function LocalMovieShowings({local_movie, setSelectedMovie, colorTheme, theaterZip, setTheaterZip, localZip, setFormattedAddress, setLatLong,  setPageOpen, setmsOpen, setmlOpen, setlsOpen}) {
 
    async function getMoreDetails(movieTitle) {
        let selectedMovieMoreInfo = await axios({
            url:      `https://www.omdbapi.com/?&apikey=fb8a95d8&t=${movieTitle}&type=movie&plot=full`,
            method:   'get',
          })
    
        setSelectedMovie(selectedMovieMoreInfo.data);

        
      
    }

    
    async function getLatLong(tz) {
        if(tz!=''){
            let mapsGeo = await axios({
                url:      `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyAkB7B1ttQoSCSN3fKnhamljAxxaO49i4I`,
                method:   'get',
                params: {
                address: `${tz}`
                }
              })
              try {
                  setFormattedAddress(JSON.stringify(mapsGeo.data.results[0].formatted_address))
                  setLatLong(mapsGeo.data.results[0].geometry.location)
                
              } catch {
                await setFormattedAddress('No Address Available')
    
              }
        }
        

      
    }

    const [currentURL, setCurrentURL] = useState('');
    
    
    let local_showings = (
 
        
        <div className={'LocalMovie'+colorTheme}>
            <a href={local_movie.officialUrl} className={'LocalTitle'+colorTheme} target="_blank">{local_movie.title}</a>
            <p>{local_movie.shortDescription}</p>
            <select onChange={(e)=>{

                var index = e.nativeEvent.target.selectedIndex;
                setTimeout(()=>{
                    setTheaterZip(e.nativeEvent.target[index].dataset.location + ' ' + localZip)
                    setCurrentURL(e.target[index].dataset.url)
                }, 150)


            }}>     
                <option disabled selected value> Choose a Showtime </option>

                {local_movie.showtimes.map(showtime => {
                    return (
                        <option className='MovieShowing' data-url={showtime.ticketURI} data-location={showtime.theatre.name} key={showtime.ticketURI+showtime.theatre.id+showtime.dateTime}>{showtime.theatre.name} at {showtime.dateTime}</option>)}
                    )
                    }
                    
                    </select>
                <button onClick={()=>{ 
                    if(currentURL != '') {
                        window.open(
                            currentURL,
                            '_blank'
                          );
                    }
                }
                }>Purchase Tickets</button>
                <button onClick={()=>{
                    if(theaterZip.length > 8)
                    getLatLong(theaterZip)
                }
                
                }>Get Address</button>
            <button onClick={()=>{
                getMoreDetails(local_movie.title)
                setPageOpen('ms'); 
                setmsOpen(true); 
                setmlOpen(false); 
                setlsOpen(false)
            }
            
            }>View More Movie Details</button>
        </div>
    )

    return local_showings
}

export default LocalSearcher;