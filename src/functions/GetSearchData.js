import axios from 'axios'

export const GetSearchData = async (searchValue) => {
    return new Promise(resolve => {
        axios.get(`http://api.ipstack.com/${searchValue}?access_key=9ac19c74b092bfffd225b85c3468fe95&format=1`).then((data) => {
            resolve(data);
        })
    })
}