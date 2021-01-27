import React from "react";
import { Search, ShoppingBasket } from "@material-ui/icons";
import styled from "styled-components";
import { Link } from 'react-router-dom'
const HeaderStyles = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  background-color: #131921;
  position: sticky;
  top: 0;
  z-index: 100;

  .header__logo {
    width: 100px;
    object-fit: contain;
    margin: 18px 20px 0;
  }

  .header__search {
    display: flex;
    flex: 1;
    align-items: center;
    border-radius: 24px;
  }

  .header__searchInput {
    height: 12px;
    padding: 10px;
    border: none;
    width: 100%;
  }
  .header__searchIcon {
    padding: 5px;
    height: 22px !important;
    background-color: #cd9042;
  }

  .header__option {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    margin-right: 10px;
    color: white;
  }
  .header__optionLineOne {
    font-size: 10px;
  }
  .header__optionLineTwo {
    font-size: 13px;
    font-weight: 800;
  }

  .header__optionBasket {
    display: flex;
    align-items: center;
    color: white;
  }

  .header__basketCount {
    margin-left: 10px;
    margin-right: 10px;
  }

  .header__nav {
    display: flex;
    justify-content: space-evenly;
  }

  @media screen and (max-width: 767.98px) {
    height: 100px;

    .header__logo {
      position: absolute;
      top: 10px;
      width: 60px;
    }
    .header__search {
      height: 60px;
      position: absolute;
      width: 95%;
      margin: auto 2.5%;
      bottom: 0;
    }
    .header__option {
      margin-bottom: 10px;
      color: white;
    }
    .header__optionLineOne {
      font-size: 8px;
    }

    .header__optionLineTwo {
      font-size: 12px;
    }
    .header__nav {
      position: absolute;
      top: 10px;
      right: 5px;
    }
  }
`;
function Header() {
  return (
    <HeaderStyles>
      <Link to="/">
        <img
          className="header__logo"
          src="https://mikekitko.com/wp-content/uploads/2019/10/amazon-logo-white-768x232.png"
          alt="Amazon's logo"
        />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <Search className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to="/login">
          <div className="header__option">
            <span className="header__optionLineOne">Hello Guest</span>
            <span className="header__optionLineTwo">Sign in</span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasket />
            <span className="header__optionLineTwo header__basketCount">0</span>
          </div>
        </Link>
      </div>
    </HeaderStyles>
  );
}

export default Header;

