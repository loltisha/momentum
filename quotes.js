function quotesSuccess(response) {
  console.log('Hi');
  console.log(response);
  const quote = response.data.quoteText;
  // eslint-disable-next-line no-undef
  $('body').append(`<h1>"${quote}"</h1>`);
}
function quotesFail(error) {
  console.log(error);
}


// eslint-disable-next-line no-undef
axios({
  method: 'get',
  url: 'https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en',
}).then(quotesSuccess).catch(quotesFail);
