import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const MapContainer = ()=>{
    const defaultCenter = {
        lat: 40.0000,
        lng: 2.0000,
    }

    const mapStyles = {        
        height: "100%",
        width: "100%",
        display: 'inline-block',
        position: 'relavtive'
    };
        

    return (
        <LoadScript googleMapsApiKey='AIzaSyAkB7B1ttQoSCSN3fKnhamljAxxaO49i4I'>
            <GoogleMap mapContainerStyle={mapStyles}
            zoom={10}
            center={defaultCenter}/>
        </LoadScript>
    )
}

export default MapContainer;