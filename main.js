function imageSuccess(response) {
    console.log(response.data.urls.regular);
    // select the body element
    // change its background to the image url
    $('body').css('background',`url(${response.data.urls.regular})`)
  }
  
  function imageFail(error) {
    console.log(error);
  }
  
  axios({
    method: "get",
    url: "https://api.unsplash.com/photos/random?client_id=ffcf7865dea110d1e20e4fc6eda8cd2ed5f055912fd5008ad8e2ddec709bfa54",
  })
    .then(imageSuccess)
    .catch(imageFail);