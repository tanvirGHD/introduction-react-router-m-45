import { Link, useNavigate, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    const navigate = useNavigate()

    const handleErrorBack = () => {
        navigate(-1)
    }
    return (
        <div>
            <h2>Oops!!</h2>
            <p>
                {error.statusText || error.message}
            </p>
            {
                error.status === 404 && <div>
                    <h3>Page Not Found</h3>
                    <p>Go Back Where You From</p>
                    {/* ager page a jabe */}
                    <button to="/" onClick={handleErrorBack} >Go Back</button> 
                    {/* akdom Home a  cole jabe */}
                    <Link to='/'><button>Home</button></Link>
                </div>
            }

        </div>
    );
};

export default ErrorPage;