import { Route, Navigate } from "react-router-dom";
import {connect} from "react-redux";

const AuthRoute = ({children, authenticates, ...rest}) => {
    return (
        <Route
        {...rest}
        render={
            ({location}) => authenticates ? (children) : (
                <Navigate
                to={{
                    pathname: '/login',
                    state: {from: location}
                }} 
                />
            )
        }
        />
    )
}

const mapStateToProps = ({session}) => ({
    authenticates: session.authenticates
})
export default connect(mapStateToProps)(AuthRoute);