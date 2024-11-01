import { Link } from "react-router-dom";

const User = ({ user }) => {
    const { id, name, email, phone } = user;

    const userStyle ={
        border: '2px solid blue',
        padding: '10px',
        borderRadius: '10px',
        margin:'20px',
    }

    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>Phone No: {phone}</p>
            <p>Id: {id}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
            <Link to={`/user/${id}`}>
            <button>Details</button>
            </Link>
        </div>
    );
};

export default User;
