import { useState } from "react";
import { deleteComments } from "../utility/api";
import { useParams } from "react-router-dom";
const DeleteComment = ({comment_id, article_id, setComments}) =>{
    const [isDeleting, setIsDeleting] = useState(false)
    const [userComment, setUserComments] = useState('');
    const [comment, setComment] = useState('');
    const handleDelete = () => {
        setIsDeleting(true)
            deleteComments(comment_id)
          .then((newComments) => {
            setComments((prevComments) =>
                prevComments.filter((comment) => comment.comment_id !== comment_id)
              );
            setIsDeleting(false);
          })
              .catch((err)=>{
                console.err("we broke:", err)
              })
        }
    return (<div >
           <button className="delete-comment" onClick={handleDelete} disabled={isDeleting}>X</button>
            </div>
    )
}
  export default DeleteComment