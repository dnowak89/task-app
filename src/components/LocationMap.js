import { Map, Marker } from 'pigeon-maps';

export const LocationMap = ({locationData}) => {
    return (
        locationData.length ?
        <div className="location-map">
            <Map 
                defaultCenter={locationData} 
                center={locationData}
                defaultZoom={10}>
                <Marker width={50} anchor={locationData} />
            </Map>
        </div> : null
    );
  }