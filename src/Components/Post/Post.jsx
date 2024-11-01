import { Link, useNavigate } from "react-router-dom";


const Post = ({post}) => {
    const {id, title, body} = post;


    const navigate = useNavigate();


    const postStyle ={
        border: '2px solid blue',
        padding: '10px',
        borderRadius: '10px',
        margin:'20px',
    }

    const handleShowDetail = () => {
        navigate(`/post/${id}`)
    }


    return (
        <div style={postStyle}>
            <h3>Post of id: {id}</h3>
            <h4>{title}</h4>
            <p>{body}</p>
            <Link to={`/post/${id}`}>Post Details....</Link>
            <button onClick={handleShowDetail}>Click Details</button>
        </div>
    );
};

export default Post;