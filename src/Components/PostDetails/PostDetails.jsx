import { useLoaderData, useNavigate } from "react-router-dom";



const PostDetails = () => {
    const post = useLoaderData();
    const {id, title, body} = post;
    const navigate =useNavigate();


    const handleGoBack = () => {
        navigate(-1)
    }
    
    
    const postDetailsStyle ={
        border: '2px solid blue',
        padding: '10px',
        borderRadius: '10px',
        margin:'20px',
    }


    return (
        <div style={postDetailsStyle}>
            <h2>Post Details About</h2>
            <h3>Post of id: {id}</h3>
            <h4>{title}</h4>
            <p>{body}</p>
            <button onClick={handleGoBack} >Back</button>
        </div>
    );
};
export default PostDetails;