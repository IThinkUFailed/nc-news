import {getSingleArticle} from "../utility/api"
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const SingleArticle = () => {
const [isLoading, setIsLoading] = useState(true)
const [article, setArticle] = useState(null)
const { article_id } = useParams()
useEffect(() => {
    if (article_id) {
      getSingleArticle(article_id).then((data) => {
        setArticle(data)
        setIsLoading(false)
      }).catch((err) => {
        console.error(err)
        setIsLoading(false)
      });
    }
  }, [article_id]);

      if (isLoading) return <p>Loading...</p>;
      
      return (
        <section className="single-article-container">
          <div key={article.article_id} className="single-article-div">
            <h2>{article.title}</h2>
            <img src={article.article_img_url} alt={article.title} />
            <p>{article.body}</p>
          </div>
        </section>
      )
    }

export default SingleArticle