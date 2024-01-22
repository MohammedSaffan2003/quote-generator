// src/Quote.js

import React, { useState, useEffect } from 'react';

// Function to generate a random color
const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const Quote = () => {
  const [quote, setQuote] = useState('Loading...');
  const [author, setAuthor] = useState('Loading...');
  const [backgroundColor, setBackgroundColor] = useState(getRandomColor());

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch a random quote from the API
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();

        setQuote(data.content);
        setAuthor(data.author);
        setBackgroundColor(getRandomColor());
      } catch (error) {
        console.error('Error fetching data:', error);
        // In case of an error, set default values
        setQuote('Failed to fetch quote');
        setAuthor('Unknown Author');
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ backgroundColor }} className="quote-container">
      <h1 className="quote-text">{quote}</h1>
      <p className="author-text">- {author}</p>
    </div>
  );
};

export default Quote;
