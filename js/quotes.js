const quotes = [
    {
        quote: 'Life is either a daring adventure or nothing at all.',
        author: 'Helen Keller',
    },
    {
        quote: 'The way to get started is to quit talking and begin doing.',
        author: 'Walt Disney',
    },
    {
        quote: 'Dream big and dare to fail.',
        author: 'Norman Vaughan',
    },
    {
        quote: 'I attribute my success to this: I never gave or took any excuse.',
        author: 'Florence Nightingale',
    },
    {
        quote: 'Always remember that you are absolutely unique. Just like everyone else.',
        author: 'Margaret Mead',
    },
    {
        quote: 'I never dreamed about success, I worked for it.',
        author: 'Estee Lauder',
    },
    {
        quote: 'Do not try to be original, just try to be good.',
        author: 'Paul Rand',
    },
    {
        quote: 'If you really want to do something, you will find a way. If you do not, you will find an excuse.',
        author: 'Jim Rohn',
    },
    {
        quote: 'Success usually comes to those who are too busy to be looking for it.',
        author: 'Henry David Thoreau',
    },
    {
        quote: 'Every moment is a fresh beginning.',
        author: 'T.S. Eliot',
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

