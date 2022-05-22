const quotes = [
    {quote:"Early birds catches the worm ",
     author: "none"},
    {quote: "The way to get started is to quit talking and begin"
   , author: "Walt Disney"},
    {quote: "When you believe in a thing, believe in it all the way, implicitly and unquestionable",
    author: "Walt Disney"},
    {quote: "I do not like to repeat successes, I like to go on to other things",
    author: "Walt Disney"},
    {quote: "Better a witty fool than a foolish wit",
    author: "Shakespear"},
    {quote: "There is nothing either good or bad but thinking makes it so.",
    author: "Shakespear"},
    {quote: "Men of few ords are the best men",
    author: "Shakespear"},
    {quote: "You are a human being and are allowed to be imperfect, and you are allowed to be flawed. There is a lot of beauty in your imprefections, in your uniqueness.",
    author: "Ilena D'Cruz"},
    {quote: "Beauty has so many forms, and I think the most beautiful thing is confidence and loving yourself.",
    author: "Kiesza"},
    {quote: "Travel makes one modest. You see what a tiny place you occupy in the world",
    author: "Gustav Flaubert"}];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote=(quotes[Math.floor(Math.random()*quotes.length)]);
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;