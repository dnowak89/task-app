import { useState, useEffect } from 'react';
import axios from 'axios'

const initialValues = {
    ipAddress: 'Getting IP Address..',
    location: {
        latitude: null,
        longitude: null
    }
}

export const GetUserData = () => {
        const [userData, setData] = useState(initialValues);

        useEffect( () => {
            getIPAddressData()
        }, [])

        const getIPAddressData = () => {
            axios.get('https://geolocation-db.com/json/').then((res) => {
                const data = res.data

                setData({
                    ...userData,
                    ipAddress: `Your IP Address is ${data.IPv4}`,
                    location: {
                        latitude: data.latitude,
                        longitude: data.longitude
                    }
                })
            })
        }

        return {
            userData
        }
}