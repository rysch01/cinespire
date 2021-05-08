import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const MapContainer = ({latLong, setLatLong})=>{
    if(latLong!= ''){


        
    }

    
    const defaultCenter = latLong;

    const mapStyles = {        
        height: "75%",
        width: "75%",
        display: 'inline-block',
        position: 'relavtive'
    };
        
    
    setLatLong('');


 
    return (
        <LoadScript googleMapsApiKey='AIzaSyAkB7B1ttQoSCSN3fKnhamljAxxaO49i4I'>
            <GoogleMap mapContainerStyle={mapStyles}
            zoom={15}
            center={defaultCenter}/>
        </LoadScript>
    )
}

export default MapContainer;