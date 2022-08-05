import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route, BrowserRouter } from "react-router-dom";
// import DialogsContanier from './components/Dialogs/DialogsContainer';
import UsersContanier from './components/Users/UsersContanier';
// import ProfileContanier from './components/Profile/ProfileContanier';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import store from './redux/redux-store';

// import React, { Suspense } from 'react';

const ProfileContanier = React.lazy(() => import('./components/Profile/ProfileContanier'));
const DialogsContanier = React.lazy(() => import('./components/Dialogs/DialogsContainer'));


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


class App extends Component {
  componentDidMount() {
      this.props.initializeApp();
  }

  render() {
      if (!this.props.initialized) {
          return <Preloader/>
      }

      return (
    <div className='app-wrapper'>
      <HeaderContainer />
      <Navbar />
      <div className="app-wrapper-content">
      < React.Suspense fallback={<div><Preloader /></div>}>
        <Routes>
          <Route path="/profile/*:userId?" element={<ProfileContanier />} />
          <Route path='/profile/*' element={<ProfileContanier />} />
          <Route path="/dialogs/*" element={<DialogsContanier />} />
          <Route path="/users/*" element={<UsersContanier />} />
          <Route path="/login/*" element={<LoginPage />} />
        </Routes>
        </ React.Suspense>
      </div>
    </div>

  );
  }
}

const mapStateToProps = (state) => ({
initialized:state.app.initialized
})


let AppContainer =  compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const SamuraiJSApp = (props) => {
  return <React.StrictMode>
  <BrowserRouter>
     <Provider store={store}>
        <AppContainer />
     </Provider>
  </BrowserRouter>
</React.StrictMode>
}

export default SamuraiJSApp;