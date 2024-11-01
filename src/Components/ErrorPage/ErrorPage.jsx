import { useNavigate, useRouteError } from "react-router-dom";


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
                    <button onClick={handleErrorBack} >Go Back</button>
                </div>
            }

        </div>
    );
};

export default ErrorPage;