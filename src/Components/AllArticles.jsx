import {getAllArticles} from "../utility/api"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
const AllArticles = () => {
const [isLoading, setIsLoading] = useState(true)
const [results, setResults] = useState([])
    useEffect(()=> {
      getAllArticles().then((data)=>{
        setResults(data.articles)
        setIsLoading(false)
      })
      },[]);

      if (isLoading) return <div className="loading"><LoadingSpinner/></div>
      
      return (
        <section className="articles-container">
          {results.map((article, index) => (
              <Link key={article.article_id || index+Math.random()} to={`/article/${article.article_id}` }>
            <div className="article-div">
              <h3>{article.title}</h3>
              <img src={article.article_img_url} alt={article.title} />
            </div>
              </Link>
          ))}
        </section>
      )
    }

export default AllArticles