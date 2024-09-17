import axios from "axios"
import {getAllArticles} from "../utility/api"
import { useEffect, useState } from "react";

let url = "https://nc-news-px9w.onrender.com/api/articles"

const AllArticles = () => {
const [isLoading, setIsLoading] = useState(true)
const [results, setResults] = useState([])
    useEffect(()=> {
      getAllArticles().then((data)=>{
        setResults(data.articles)
        console.log(data.articles)
        setIsLoading(false)
      })
        // axios.get(url).then(({data})=>{
        //     setResults(data.articles)
        //     console.log(data.articles)
        //     setIsLoading(false)
        // })
      },[]);

      if (isLoading) return <p>Loading...</p>;
      
      return (
        <section className="articles-container">
          {results.map((article, index) => (
            <div key={article.article_id || index} className="article-div">
              <h3>{article.title}</h3>
              <img src={article.article_img_url} alt={article.title} />
            </div>
          ))}
        </section>
      )
    }

export default AllArticles