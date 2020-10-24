import React from 'react'
import {Map as LeafletMap,TileLayer} from 'react-leaflet';
import './Map.css'
import {showDataOnMap} from './utilis'

export const Map = ({countries,center,zoom}) => {
    return (

        <div className="map">
            <LeafletMap center={center} zoom={zoom}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                >
                </TileLayer>
            {showDataOnMap(countries)}
            </LeafletMap>
        </div>


    )
}
