import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { getSingleArticleComments } from "../utility/api";
const GetArticleComments = () => {
    
const [comments, setComments] = useState(null)
const [isLoading, setIsLoading] = useState(true)
const { article_id } = useParams()
useEffect(() => {
        getSingleArticleComments(article_id).then((data) => {
        setComments(data)
        setIsLoading(false)
      }).catch((err) => {
        console.error(err)
        setIsLoading(false)
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (comments.length === 0) {
    return (<p className="comment-container comment-div">No commments found, why not post one?</p>)
  }
 

    return (
        <section className="comment-container">
          {comments.map((comment) => (
            <div key={comment.comment_id} className="comment-div">
                <p className="comment-user">{comment.author}</p>
              <p className="comment-date">Posted on: {new Date(comment.created_at).toLocaleString()}</p>
              <p className="comment-body">{comment.body}</p>
              {comment.votes >=0 ? (
              <p className="positive-vote comment-votes">👍 {comment.votes}</p>)
               : ( <p className="negative-vote comment-votes">👎 {comment.votes}</p> )
               }
              </div>
            
        ))}
        </section>
  )
}
export default GetArticleComments