import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {getUserProfile, getStatus, updateStatus} from "../../redux/profile-reducer";
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
// import { withAuthNavigate } from "../../hoc/withAuthNavigate";
import { compose } from "redux";




function withRouter(Component) {
  function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
          <Component
              {...props}
              router={{ location, navigate, params }}
          />
      );
  }

  return ComponentWithRouterProp;
}


class ProfileContanier extends React.Component {
  
  componentDidMount(){
    let userId =  this.props.router.params.userId ;
    if(!userId) {
      userId = this.props.authorizedUserId;
    //   if (!userId) {
    //     this.props.history.push("/login");
    // }
    }
    this.props.getUserProfile(userId); 
     this.props.getStatus(userId);
     console.log(this.props,5555);

    
  }
  render(){  
    return(
        <Profile {...this.props} 
        profile = {this.props.profile} 
        status = {this.props.status} 
        updateStatus = {this.props.updateStatus}/>
    );
  }     
}

let mapStateToProps = (state) => ({
  profile:state.profileReducer.profile,
  status:state.profileReducer.status,
  authorizedUserId: state.authReducer.userId,
  isAuth: state.authReducer.isAuth
});

export default compose(
  connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
  withRouter
  //  withAuthNavigate
)(ProfileContanier);




