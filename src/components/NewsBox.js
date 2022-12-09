import React from 'react'
import "./NewsBox.css"

export default function NewsBox({size, article}) {
  return (
    <div className={size} >
        <img src={article.urlToImage}  alt={article.title} />
        <div className="shadowOverlay"></div>
        <div className="articleContent">
            <h2 className="articleTitle">{article.title}</h2>
            {size !== "small" && <p className="articleText">{article.description}</p> }
        </div>
    </div>
  )
}
