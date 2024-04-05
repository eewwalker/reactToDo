"use strict";


const API_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random";

/** Fetch random quote from quote API to display in Header component */
async function fetchQuote() {
  const response = await fetch(API_URL);
  const data = await response.json();

  return data.quote;
}



export { fetchQuote };