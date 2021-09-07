import { useState, useEffect } from 'react';
import { LocationMap } from "./LocationMap";
import { GetSearchData } from  '../functions/GetSearchData';

const initialValues = {
    searchValue: '',
    error: false,
    location: {
        latitude: null,
        longitude: null
    },
    history: [],
    loading: false
}

export const SearchBox = () => {
    const [searchData, setData] = useState(initialValues);

    useEffect( () => {
      setTimeout(
        () => setData({
            ...searchData,
            loading: false
        }), 2000)
  }, [searchData.history])

    const handleSearch = () => {
        if(searchData.searchValue === '') {
              setData({
                ...searchData,
                error: true
            })

            return false;
        }

        GetSearchData(searchData.searchValue).then((result) => {
            const data = result.data

            if(data.error) {
                  setData({
                    ...initialValues,
                    ...searchData.history,
                    error: true
                  });
            } else {
                  setData({
                      ...searchData,
                      error: false,
                      loading: true,
                      location: {
                          latitude: data.latitude,
                          longitude: data.longitude
                      },
                      history: [...searchData.history, searchData.searchValue]
                  })

                  document.getElementById('search-history').innerHTML += `<li>${searchData.searchValue}</li>`; // could use redux
            }
        })
    }

    console.log(searchData)


    return (
      <div className="search-box">
          { searchData.error && <div className="search-error">Please type a valid IP Address or URL Address</div> }
          <div className="search-form">
              <input className="search" name="search" type="text" onInput={e => setData({...searchData, searchValue: e.target.value})}/>
              <button name="search" disabled={ searchData.loading } onClick={ handleSearch }>Search</button>
          </div>
          <div className="search-details">
            {
                searchData.location.latitude ?
                <>
                  <LocationMap locationData={[searchData.location.latitude, searchData.location.longitude]}/>
                  <div className="last-search box">Last search: { searchData.searchValue }</div>
                </> : null
            }
          </div>
      </div>
    );
}