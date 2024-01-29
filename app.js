// App.js
import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Article from './Article';
import Footer from './Footer';

function App() {
    return (
        <div className="App">
            <Header />
            <Nav />
            <Article />
            <Footer />
        </div>
    );
}

export default App;

// Header.js
import React from 'react';

function Header() {
    return (
        <header>
            <h1>Site Title</h1>
            <h2>Subtitle</h2>
            <Nav />
        </header>
    );
}

export default Header;