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

// Nav.js
import React from 'react';

function Nav() {
    return (
        <nav aria-label="Main Navigation" role="navigation">
            <ul>
                <li><a href="#">Link 1</a></li>
                <li><a href="#">Link 2</a></li>
            </ul>
        </nav>
    );
}

export default Nav;

// Article.js
import React from 'react';

function Article() {
    return (
        <main>
            <ArticleItem image="image1.jpg" title="Article 1" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
            <ArticleItem image="image2.jpg" title="Article 2" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
        </main>
    );
}

function ArticleItem({ image, title, text }) {
    return (
        <article>
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <p>{text}</p>
            <a href="#">Continue reading...</a>
        </article>
    );
}

export default Article;

// Footer.js
import React from 'react';

function Footer() {
    return (
        <footer>
            <Nav />
            <p>&copy; 2022</p>
        </footer>
    );
}

export default Footer;