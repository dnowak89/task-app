import { GetUserData } from  '../functions/GetUserData';
import { LocationMap } from  '../components/LocationMap';

export const UserDetails = () => {
    const { userData: {ipAddress, location} } = GetUserData()
    const locationData = location.longitude ? [location.latitude, location.longitude] : []

    return (
        <div className="location-wrapper">
            <LocationMap locationData={locationData}/>
            <div className="location-details box">{ ipAddress }</div>
        </div>
    );
}