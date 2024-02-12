// Import necessary modules from React and Redux
import React, { useEffect, useState } from 'react';
import { configureStore } from '@reduxjs/toolkit';

// Define the reducer and store for Redux state management
const haikuReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_HAIKU':
      return [...state, action.payload];
    default:
      return state;
  }
};

const store = configureStore({
  reducer: haikuReducer
});

// Fetch data from an external API
async function fetchHaikus() {
  // Replace 'API_URL' with the actual API endpoint
  const response = await fetch('API_URL');
  const data = await response.json();
  return data;
}

// Component to display a haiku
const HaikuCard = ({ haiku }) => {
  return (
    <div className="haiku-card">
      <p>{haiku}</p>
    </div>
  );
};

// Main component to fetch and display haikus
const HaikuCarousel = () => {
  const [haikus, setHaikus] = useState([]);

  useEffect(() => {
    fetchHaikus().then(data => setHaikus(data));
  }, []);

  return (
    <div className="carousel">
      {haikus.map((haiku, index) => (
        <HaikuCard key={index} haiku={haiku} />
      ))}
    </div>
  );
};

// Component to display the carousel
const App = () => {
  return (
    <div className="app">
      <HaikuCarousel />
    </div>
  );
};

export default App;