import {getAllArticles} from "../utility/api"
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import GetTopics from "./GetTopics";
const GetArticlesByTopic = () => {
const [isLoading, setIsLoading] = useState(true)
const [results, setResults] = useState([])
const { topic} = useParams()
let filteredArticles
    useEffect(()=> {
      getAllArticles().then((data)=>{
        setResults(data.articles)
        setIsLoading(false)
      })

  
      },[]);
      // If the topic is selected then filter
      if (topic) {
        filteredArticles = results.filter((article) => article.topic === topic);
      }
  

      if (isLoading) return <div className="loading"><LoadingSpinner/></div>
    
      return (
        <>
          <section className="articles-container">
            {filteredArticles.map((article) => (
              <Link key={article.article_id} to={`/article/${article.article_id}`}>
                <div className="article-div">
                  <h3>{article.title}</h3>
                  <img src={article.article_img_url} alt={article.title} />
                </div>
              </Link>
            ))}
          </section>
        </>
      )
    }

export default GetArticlesByTopic