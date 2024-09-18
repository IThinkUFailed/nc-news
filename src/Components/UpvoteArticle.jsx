import { useState, useEffect } from "react";
import {incrementArticleVote, getSingleArticle} from "../utility/api"
const UpvoteArticle = ({article_id}) =>{
    const [error, setError] = useState(null);
    const [votes, setVotes] = useState(0)
    useEffect(() => {
        if (article_id) {
          getSingleArticle(article_id).then((data) => {
            setVotes(data.votes)
          }).catch((err) => {
            console.error(err)

          });
        }
      }, [article_id]);
      
    const handleLike = () => {
        setVotes((votes) => votes +1);
        setError(null);
        incrementArticleVote(article_id, 1).catch((err) => {
          setVotes((votes) => votes -1);
          setError("Your like was not successful. Please try again!");
        });
      };


    return(
    <p className="article-votes">
    <button className="article-vote-button" onClick={handleLike}>Like it?  ❤️ {votes}</button>
  </p>
  )
}


export default UpvoteArticle