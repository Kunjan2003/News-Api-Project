import React, { useEffect, useState } from 'react';
import axios from 'axios';

function HomePage() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const apiKey = process.env.REACT_APP_NEWS_API_KEY || '1be234573d6244f6b37ff333b231104a';
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);
        const sortedArticles = response.data.articles.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
        setNews(sortedArticles);
      } catch (error) {
        console.error('Error fetching the news:', error);
      }
    };

    fetchNews();
  }, []);

  const pageStyle = {
    padding: '20px',
  };

  const articleStyle = {
    borderBottom: '1px solid #ccc',
    marginBottom: '20px',
    paddingBottom: '10px',
    display: 'flex',
    alignItems: 'center',
  };

  const imgStyle = {
    width: '150px',
    height: 'auto',
    marginRight: '20px',
  };

  const contentStyle = {
    flex: 1,
  };

  return (
    <div style={pageStyle}>
      <h1>Latest News</h1>
      {news.length > 0 ? (
        news.map((article, index) => (
          <div key={index} style={articleStyle}>
            {article.urlToImage && <img src={article.urlToImage} alt={article.title} style={imgStyle} />}
            <div style={contentStyle}>
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <p><small>{new Date(article.publishedAt).toLocaleString()}</small></p>
            </div>
          </div>
        ))
      ) : (
        <p>No news available.</p>
      )}
    </div>
  );
}

export default HomePage;
