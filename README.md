yarn add react-leaflet

yarn add leaflet

Components=>  import {Map as LeafletMap,TileLayer} from 'react-leaflet';

<div className="map">
<LeafletMap>
   <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    >  
	
   </TileLayer>
</LeafletMap>
</div>

After this You need to import css i.e import "leaflet/dist/leaflet.css"
let's go to Map.css for stylling map class 

.map {
  height: 500px;
  background-color: white;
  padding: 1rem;
  border-radius: 20px;
  margin-top: 16px;
  box-shadow: 0 0 8px -4px rgba(0, 0, 0, 0.5);
}

.map .leaflet-container {
  height: 100%;   // we should have to do it because by deafault map hav'nt have height
  border-radius: 12px;
}

after this set center and zoom for leafletMap otherwise it will not work
normally center ={lat:34.80746,lng:-40.4796} and zoom=3;

Now loop through the countries and draw circles on the screen. 

for Circles and popup on the screen you need to include 
import {Circle,Popup} from 'react-leaflet';

