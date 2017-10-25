let accessToken = '';
const CLIENT_ID = 'Bi10Mnj4rw_Bg7F5j6naVA';
const CLIENT_SECRET = '5DwO4dZ52wIzKncCXRl7xVgdZeiNJveKsvTRSSrcT7HewzHtk5OcNvftCKbnuwQt';
let authUrl = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/oauth2/token?grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;

const Yelp = {
search(term,location,sortBy='best_match') {
      if (!location) {
          return new Promise(resolve => resolve(
            navigator.geolocation.getCurrentPosition((pos) => {
            let crd = pos.coords;
            let url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?limit=5&term=${term}&latitude=${crd.latitude}&longitude=${crd.longitude}&sort_by=${sortBy}`;
            console.log('DEBUG fetch url :');
            console.log(url);
            return this.getBusiness(url);
          })
        ));

      } else {
        console.log('DEBUG fetch url :');
        console.log(url);
        let url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?limit=5&term=${term}&location=${location}&sort_by=${sortBy}`;
        return this.getBusiness(url);
    }
},


getBusiness(url) {
    return this.getAccessToken().then(() => {
      console.log('his.getAccessToken().then(() => {');
      console.log(url);
            return fetch(url,{
              headers:{'Authorization':`Bearer ${accessToken}`,'origin':'https://api.yelp.com/v3/businesses/search'}
          });
        }).then(response => response.json()).then(jsonResponse => {
          if(!jsonResponse.businesses) {
            return;
          } else {
              return jsonResponse.businesses.map(business => ({
                  id:business.id,
                  imageSrc:business.image_url,
                  name:business.name,
                  address:business.location.address1,
                  city:business.location.city,
                  state:business.location.state,
                  zipCode:business.location.zip_code,
                  category:business.categories,
                  rating:business.rating,
                  reviewCount:business.review_count
                }));
            }
        }).catch(err => console.error(err));
      },

      getAccessToken() {
           if (accessToken) {
             return new Promise(resolve => resolve(accessToken));
             }
             return fetch(authUrl,{
               method:'POST',
               headers:{
               'origin':'https://api.yelp.com/'  //must have it here
             },
             }).then(response => response.json()).then(
               jsonResponse =>
                   accessToken = jsonResponse.access_token).catch(err => console.error(err));
           }
}

export default Yelp;
