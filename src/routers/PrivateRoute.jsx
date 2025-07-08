import UseAuth from '../hooks/UseAuth';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Pages/Home/Shared/Loading';

const PrivateRoute = ({ children }) => {
    const { user, loading } = UseAuth();
    const location = useLocation();

    if (loading) { return <Loading /> }
    if (!user) {
        return <Navigate state={location.pathname} to="/signin"></Navigate>
    }
    return children;
};

export default PrivateRoute;