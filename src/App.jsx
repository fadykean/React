import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';

import { Route, Switch } from 'react-router-dom';
import About from './components/about';
import Home from './components/home';
import Signup from './components/signup';
import Signin from './components/signin';
import Logout from './components/logout';
import CreateCard from './components/createCard';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Component } from 'react';
import userService from './services/userService';
import BizSignup from './components/bizSignup';
import ProtectedRoute from './components/common/protectedRoute';
import MyCards from './components/myCards';
import UpdateCard from './components/updateCard';

class App extends Component {
    state = {}

    componentDidMount() {
        const user = userService.getCurrentUser();
        this.setState({ user });

    }

    render() {

        const { user } = this.state;

        return (
            <React.Fragment>
                <ToastContainer />
                <header>
                    <Navbar user={user} />
                </header>
                <main style={{ minHeight: 900 }}>
                    <Switch>
                        <ProtectedRoute path="/my-cards/edit/:id" component={UpdateCard} biz={true} />
                        <ProtectedRoute path="/my-cards" component={MyCards} biz={true} />
                        <ProtectedRoute path="/create-card" component={CreateCard} biz={true} />
                        {/* <Route path='/create-card' component={CreateCard} /> */}
                        <Route path='/biz-signup' component={BizSignup} />
                        <Route path='/logout' component={Logout} />
                        <Route path='/about' component={About} />
                        <Route path='/signin' component={Signin} />
                        <Route path='/signup' component={Signup} />
                        <Route path='/' component={Home} />
                    </Switch>
                </main>
                <footer>
                    <Footer />
                </footer>
            </React.Fragment>
        );
    }
}

export default App;
