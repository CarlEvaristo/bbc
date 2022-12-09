import axios from "axios"
import React from "react"
import "./Home.css"
import NewsBox from "../components/NewsBox"
import { nanoid } from 'nanoid'

export default function Home() {
    const API_KEY = "f390ce69bfaf4453821796ae7fa44bef"
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let date = new Date()

    const [BBCArticles, setBBCArticles] = React.useState()
    const [Articles, setArticles] = React.useState()
    const [SportsArticles, setSportsArticles] = React.useState()

    React.useEffect(()=>{
        axios.get(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${API_KEY}`)
            .then(res => setBBCArticles(() => res.data.articles))
        axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&pageSize=50&apiKey=${API_KEY}`)
            .then(response => setArticles(() => response.data.articles))
            axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=sports&pageSize=50&apiKey=${API_KEY}`)
            .then(response => setSportsArticles(() => response.data.articles))
    }, [])

    return(
        <main>
            <div className="mainContainer">
                <div className="homeHeader">
                    <h2 className="welcomeText">Welcome to BBC.com</h2>
                    <h3 className="welcomeDate">{dayNames[date.getDay()]}, {date.getDate()} {monthNames[date.getUTCMonth()]}</h3>
                </div>
                <section className="promo">
                    {BBCArticles !== undefined && <NewsBox size="large" article={BBCArticles[0]}/> }
                    <div className="promoSmall">
                        {BBCArticles !== undefined && BBCArticles.filter((item,index) => index > 0 && index < 5).map((article) => <NewsBox key={nanoid()} size="small" article={article}/> )}
                    </div>
                </section>
                <div className="homeHeader">
                    <h2 className="welcomeText"><span className="red">|</span> Business</h2>
                </div>
                <section className="news">
                    {Articles !== undefined && Articles.filter((item,index) => index < 3).map((article) => <NewsBox key={nanoid()} size="medium" article={article}/>)}
                </section>
                <div className="homeHeader">
                    <h2 className="welcomeText"><span className="yellow">|</span> Sports</h2>
                </div>
                <section className="news">
                    {SportsArticles !== undefined && SportsArticles.filter((item,index) => index < 3).map((article) => <NewsBox key={nanoid()} size="medium" article={article}/>)}
                </section>
            </div>
        </main>
    )
}