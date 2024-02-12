// ReacMovieSearch.js
import { useState, useEffect } from "react";
import "./App.css";
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";
import { useState } from "react";

export default function App() {
 // Placeholder for your actual API key
 const apiKey = "your_actual_api_key_here";

 // State to hold movie data
 const [movie, setMovie] = useState(null);

 // Function to get movies
 const getMovie = async (searchTerm) => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      );
      const data = await response.json();
      setMovie(data);
    } catch (e) {
      console.error(e);
    }
 };

 // useEffect hook to fetch a random movie on each page refresh
 // This will run on the first render but not on subsequent renders
 useEffect(() => {
    getMovie("random");
 }, []);

 return (
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
 );
}

// ...

export default function Form(props) {
 // State to hold the data of our form
 const [formData, setFormData] = useState({
    searchterm: "",
 });

 // handleChange - updates formData when we type into form
 const handleChange = (event) => {
    // Use the event object to detect key, and value to update
    setFormData({ ...formData, [event.target.name]: event.target.value });
 };

 const handleSubmit = (event) => {
    // Prevent page from refreshing on form submission
    event.preventDefault();
    // Pass the search term to moviesearch prop, which is App's getMovie function
    props.moviesearch(formData.searchterm);
 };

 return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchterm"
          onChange={handleChange}
          value={formData.searchterm}
        />
        <input type="submit" value="Search" />
      </form>
    </div>
 );
}
