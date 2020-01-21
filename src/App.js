import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect'

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selector'
import CheckoutPage from './pages/checkout/checkout.component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route exact path="/sign-in" render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInSignUp />) } />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
