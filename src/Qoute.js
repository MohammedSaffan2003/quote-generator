
import React, { useState, useEffect } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');

  useEffect(() => {
    // Fetch a random quote from the API
    fetch('https://api.quotable.io/random')
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
        setBackgroundColor(getRandomColor());
      });
  }, []);

  // Function to generate a random color
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div style={{ backgroundColor }} className="quote-container">
      <h1 className="quote-text">{quote}</h1>
      <p className="author-text">- {author}</p>
    </div>
  );
};

export default Quote;
