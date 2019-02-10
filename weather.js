/* eslint-disable no-undef */
// function weatherSuccess(response) {
//     console.log('Hi');
//     console.log(response.data.weather[0].description);

//     }
//     function weatherFail(error)
//  {
//   console.log(error);
//  }
/* eslint-disable indent */
axios({
    method: 'get',
    url: 'http://api.openweathermap.org/data/2.5/weather?q=Riyadh&units=metric&lang=ar&appid=d6b67904588cf563e22511b2e1f17b28',
  })
// .then (weatherSuccess).catch(weatherFail);
.then((response)=>{
    console.log(response);
    console.log('Hi');
    const temp= response.data.main.temp;
    $('body').append(`<h4>${temp}</h4>`)
   const weather= response.data.weather[0].main;
   const description= response.data.weather[0].description;
//    $('body').append(`<h1>${description}</h1>`);
   if(weather==='Clouds'){
    $('body').append(`<h3>☁️</h3>`); 
    $('body').append(`<h2>${description}</h2>`);

   }
})
.catch ((error)=>{
console.log(error);
});