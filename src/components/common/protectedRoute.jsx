import userService from '../../services/userService';
import { Redirect, Route } from 'react-router-dom';

const ProtectedRoute = ({ path, component: Component, render, ...rest }) => {

    const currentUser = userService.getCurrentUser();
    return (
        <Route {...rest} render={props => {
            if (!currentUser || (rest.biz && !currentUser.biz))
                return <Redirect to={
                    {
                        pathname: '/signin',
                        state: { from: props.location }
                    }
                } />
            return Component ? <Component {...props} /> : render(props);
        }} />


    );
}

export default ProtectedRoute;