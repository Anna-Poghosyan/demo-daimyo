import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

export const withAuthNavigate = (Component) => {
    class NavigateComponent extends React.Component {
        render() {
            if(!this.props.isAuth) return <Navigate to ='/login' />
            return <Component {...this.props} />
        }
    }
    let mapStateToPropsForNavigate = (state) => ({
        isAuth: state.authReducer.isAuth
      });
     let ConnectedAuthNavigateComponent = connect(mapStateToPropsForNavigate)(NavigateComponent);
      
    return ConnectedAuthNavigateComponent;
}