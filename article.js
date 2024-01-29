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
