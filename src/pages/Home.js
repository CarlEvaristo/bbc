import axios from "axios"
import React from "react"
import "./Home.css"
import NewsBox from "../components/NewsBox"

export default function Home() {
    const API_KEY = "f390ce69bfaf4453821796ae7fa44bef"
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let date = new Date()

    const [articles, setArticles] = React.useState()

    React.useEffect(()=>{
        axios.get(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${API_KEY}`)
            .then(res => setArticles(() => res.data.articles))
    }, [])

    return(
        <main>
            <div className="mainContainer">
                <div className="homeHeader">
                    <h2 className="welcomeText">Welcome to BBC.com</h2>
                    <h3 className="welcomeDate">{dayNames[date.getDay()]}, {date.getDate()} {monthNames[date.getUTCMonth()]}</h3>
                </div>
                <section>
                    <NewsBox size="large" article={articles}/>
                    <NewsBox size="large" article={articles}/>
                </section>
            </div>
        </main>
    )
}