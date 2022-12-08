import React from 'react'
import "./NewsBox.css"

export default function NewsBox({size, article}) {
  return (<>
    {article !== undefined && 
    <div className={size} >
        <img src={article[0].urlToImage}  alt={article[0].title} />
        <div className="articleContent">
            <h2 className="articleTitle">{article[0].title}</h2>
            <p className="articleText">{article[0].description}</p>
        </div>
    </div> }</>
  )
}
