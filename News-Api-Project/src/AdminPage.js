import React, { useState } from 'react';

function AdminPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [urlToImage, setUrlToImage] = useState('');
  const [news, setNews] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newArticle = { title, description, urlToImage };
    setNews([newArticle, ...news]);
  };

  const pageStyle = {
    padding: '20px',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginBottom: '20px',
  };

  const inputStyle = {
    padding: '10px',
    fontSize: '16px',
  };

  const articleStyle = {
    borderBottom: '1px solid #ccc',
    marginBottom: '20px',
    paddingBottom: '10px',
  };

  const imgStyle = {
    maxWidth: 'auto',
    height: 'auto',
  };

  return (
    <div style={pageStyle}>
      <h1>Admin Page</h1>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required style={inputStyle} />
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required style={inputStyle} />
        <input type="text" value={urlToImage} onChange={(e) => setUrlToImage(e.target.value)} placeholder="Image URL" required style={inputStyle} />
        <button type="submit" style={inputStyle}>Add Article</button>
      </form>
      <div>
        {news.map((article, index) => (
          <div key={index} style={articleStyle}>
            <h2>{article.title}</h2>
            {article.urlToImage && <img src={article.urlToImage} alt={article.title} style={imgStyle} />}
            <p>{article.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminPage;
