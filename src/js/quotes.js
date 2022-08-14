const btnChangeQuote = document.querySelector('.change-quote');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');



async function getQuotes() {
  try {
    const quotes = `../json/data.json`;
    const res = await fetch(quotes);
    const data = await res.json(); 
    
    const randomNum = Math.floor(Math.random() * data.length)
    const quoteRundom = data[randomNum]
    quote.textContent = quoteRundom.text;
    author.textContent = quoteRundom.author;
  } 
  catch {
    quote.textContent = 'Цитата не найдена'
  }
}

btnChangeQuote.addEventListener('click', getQuotes);

export {getQuotes}