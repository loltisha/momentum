function imageSuccess(response) {
    console.log(response.data.urls.regular);
    var body = document.getElementsByTagName('body')[0];
    body.style.backgroundImage = 'url(https://images.unsplash.com/photo-1549290499-55711e465e4f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjU1NTEyfQ)';
    function imageFail(error) {
        console.log(error);
    }
    axios({
        method: 'get',
        url: 'https://api.unsplash.com/photos/random?client_id=ffcf7865dea110d1e20e4fc6eda8cd2ed5f055912fd5008ad8e2ddec709bfa54',
    }).then(imageSuccess).catch(imageFail);
}
