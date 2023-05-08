import { FunctionComponent } from "react";
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import './style.css'
import { LatLngExpression } from "leaflet";
import { Contact } from "../../../dictionary";


const position:LatLngExpression = [Contact.LOCATION_LAT, Contact.LOCATION_LONG];

interface MapProps {}

const Map: FunctionComponent<MapProps> = () => {
    return (
        <>
            <MapContainer center={position} zoom={13} scrollWheelZoom={false} className="map_container">
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position} >
                    <Popup>
                    <img src="/logo/sombrero-de-bambu.png" alt="" /> Asian Taste Restaurant. <br /> Location: {position}
                    </Popup>
                </Marker>
            </MapContainer>
        </>
    );
}

export default Map;