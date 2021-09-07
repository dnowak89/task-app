import axios from 'axios'

export const GetSearchData = async (searchValue) => {
    function getRandomInRange(from, to, fixed) {
        return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
        // .toFixed() returns string, so ' * 1' is a trick to convert to number
    }

    const random = Math.floor(Math.random() * 4); // for testing

    return new Promise(resolve => {
        // axios.get(`https://api.ipstack.com/${searchValue}?access_key=9ac19c74b092bfffd225b85c3468fe95&format=1`).then((data) => {
        //     resolve(data);
        // })
        // had to simulate data because of https://ipstack.com/product no https support at free plan, so there is CORS error on Heroku.


        switch(random) {
            case 0:
                resolve ({"ip":"151.101.129.69","type":"ipv4","continent_code":"NA","continent_name":"North America","country_code":"US","country_name":"United States","region_code":"CA","region_name":"California","city":"San Francisco","zip":"94107","latitude":37.76784896850586,"longitude":-122.39286041259766,"location":{"geoname_id":5391959,"capital":"Washington D.C.","languages":[{"code":"en","name":"English","native":"English"}],"country_flag":"https://assets.ipstack.com/flags/us.svg","country_flag_emoji":"🇺🇸","country_flag_emoji_unicode":"U+1F1FA U+1F1F8","calling_code":"1","is_eu":false}})
            case 1:
                resolve ({"ip":"212.77.98.29","type":"ipv4","continent_code":"EU","continent_name":"Europe","country_code":"PL","country_name":"Poland","region_code":"PM","region_name":"Pomerania","city":"Sopot","zip":"80-009","latitude":54.31930923461914,"longitude":18.63736915588379,"location":{"geoname_id":3085151,"capital":"Warsaw","languages":[{"code":"pl","name":"Polish","native":"Polski"}],"country_flag":"https://assets.ipstack.com/flags/pl.svg","country_flag_emoji":"🇵🇱","country_flag_emoji_unicode":"U+1F1F5 U+1F1F1","calling_code":"48","is_eu":true}})
            case 2:
                resolve ({"ip":"151.101.0.81","type":"ipv4","continent_code":"NA","continent_name":"North America","country_code":"US","country_name":"United States","region_code":"CA","region_name":"California","city":"San Francisco","zip":"94107","latitude":37.76784896850586,"longitude":-122.39286041259766,"location":{"geoname_id":5391959,"capital":"Washington D.C.","languages":[{"code":"en","name":"English","native":"English"}],"country_flag":"https://assets.ipstack.com/flags/us.svg","country_flag_emoji":"🇺🇸","country_flag_emoji_unicode":"U+1F1FA U+1F1F8","calling_code":"1","is_eu":false}})
            case 3:
                resolve ({"ip":"194.36.43.29","type":"ipv4","continent_code":"EU","continent_name":"Europe","country_code":"DE","country_name":"Germany","region_code":"NW","region_name":"North Rhine-Westphalia","city":"Köln","zip":"50679","latitude":50.936500549316406,"longitude":6.978099822998047,"location":{"geoname_id":2886242,"capital":"Berlin","languages":[{"code":"de","name":"German","native":"Deutsch"}],"country_flag":"https://assets.ipstack.com/flags/de.svg","country_flag_emoji":"🇩🇪","country_flag_emoji_unicode":"U+1F1E9 U+1F1EA","calling_code":"49","is_eu":true}})
    
        }
    })
}