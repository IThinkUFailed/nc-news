import {getAllArticles} from "../utility/api"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const AllArticles = () => {
const [isLoading, setIsLoading] = useState(true)
const [results, setResults] = useState([])
    useEffect(()=> {
      getAllArticles().then((data)=>{
        setResults(data.articles)
        setIsLoading(false)
      })
      },[]);

      if (isLoading) return <p>Loading...</p>;
      
      return (
        <section className="articles-container">
          {results.map((article, index) => (
              <Link to={`/article/${article.article_id}` }>
            <div key={article.article_id || index+Math.random()} className="article-div">
              <h3>{article.title}</h3>
              <img src={article.article_img_url} alt={article.title} />
            </div>
              </Link>
          ))}
        </section>
      )
    }

export default AllArticles