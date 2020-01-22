import React from 'react';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from 'reselect'
import { selectCartHidden} from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user/user.selector';
import {signOutStart} from '../../redux/user/user.actions';

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  Option } from './header.styles';

const Header = ({currentUser, hidden, signOut}) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo/>
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">
          SHOP
        </OptionLink>
        <OptionLink to="/contact">
          CONTACT
        </OptionLink>
        {
          currentUser ?
            <Option onClick={signOut}>SIGN OUT</Option>
            : <OptionLink to="/sign-in">SIGN IN</OptionLink>
        }
        <CartIcon />
      </OptionsContainer>
      {
        hidden ? null : <CartDropdown />
      }
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
