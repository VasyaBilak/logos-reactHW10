import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Post from '../Post/Post';
import { getCommentsThunk } from '../../redux/action/postsAction';

const Comments = () => {
    const [post, setPost] = useState('');
    const [showPost, setShowPost] = useState(false);

    const comments = useSelector((store)=>store.commentsReducer.comments);
    const dispatch = useDispatch();
    const getComments = () => dispatch(getCommentsThunk());
  
    useEffect(() => {
      getComments();
    }, []);

    const handleCommentClick = (postId) => {
        setPost(postId.toString());
        setShowPost(true);
      };
  
    return (
      <div style={{display: 'flex'}}>
        <div>
            <h2>Comments</h2>
            {comments.map((comment)=> {
                return  (
                    <div key={comment.id} onClick={() => handleCommentClick(comment.postId)} 
                        style={{border: '1px solid black', margin: '10px'}}>
                        <h4>{comment.name}</h4>
                        <h4>{comment.email}</h4>
                        <h4>{comment.body}</h4>
                    </div>
                    )
            })}
        </div>
        <div className='post'>
                {showPost && (<Post postId={post}/>)}
        </div>
      </div>
    );
  }

  export default Comments;
