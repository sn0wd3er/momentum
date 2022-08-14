const quotes = [
    {
        quote:"You will face many defeats in life, but never let yourself be defeated.",
        author:"Maya Angelou"},
    {
        quote:"The greatest glory in living lies not in never falling, but in rising every time we fall",
        author:"Nelson Mandela"
    },
    {
        quote:"In the end, it’s not the years in your life that count. It’s the life in your years.",
        author:"Abraham Lincoln"
    }];
const author = document.querySelector("#quotes span:last-child") 
const quote = document.querySelector("#quotes span:first-child") 
const todayQuote = quotes[Math.floor(Math.random() * 3)]

quote.innerText = todayQuote.quote
author.innerText = todayQuote.author