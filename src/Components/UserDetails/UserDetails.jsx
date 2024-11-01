import { useLoaderData } from "react-router-dom";


const UserDetails = () => {

    const user = useLoaderData();

const {name,email,phone,id} = user;


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
        </div>
    );
};

export default UserDetails;