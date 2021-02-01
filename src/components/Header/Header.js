import React from "react";
import { Search } from "@material-ui/icons";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import styled from "styled-components";
import { Link } from 'react-router-dom'

const HeaderStyles = styled.div`
  min-height: 100px;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-areas: "logo nav" "search search";
  align-items: center;
  background-color: var(--dark-grey);
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 0 10px 10px 10px;

  .logo {
    width: 100px;
    object-fit: contain;
    margin-top: 13px;
    margin-bottom: 7px;
  }

  .search {
    grid-area: search;
    display: flex;
    align-items: center;
    border-radius: 5px;
    background-color: white;

    .searchInput {
      height: 12px;
      padding: 10px;
      border: none;
      width: 100%;
      background-color: transparent;
    }
    .searchIcon {
      padding: 5px;
      height: 22px;
      background-color: var(--orange-1);
      border-radius: 5px;
    }
  }

  .nav {
    display: flex;
    justify-content: flex-end;

    a {
      text-decoration: none;

      .option {
        display: flex;
        flex-direction: column;
        margin-left: 10px;
        margin-right: 10px;
        color: white;

        .optionLineOne {
          font-size: 10px;
        }

        .optionLineTwo {
          font-size: 13px;
          font-weight: 800;
        }
      }

      .optionBasket {
        display: flex;
        height: 100%;
        align-items: center;
        color: white;
        margin-left: 10px;

        .basketCount {
          margin-left: 5px;
          margin-right: 5px;
        }
      }
    }
  }

  @media (min-width: 768px) {
    min-height: 60px;
    grid-template-columns: auto 1fr auto;
    grid-template-areas: "logo search nav";
    padding: 0 20px;
    grid-gap: 20px;
  
    .nav {
      justify-content: space-evenly;
    }
  }
`;


function Header() {
  return (
    <HeaderStyles>
      <Link to="/">
        <img
          className="logo"
          src="https://mikekitko.com/wp-content/uploads/2019/10/amazon-logo-white-768x232.png"
          alt="Amazon's logo"
        />
      </Link>
      <div className="search">
        <input className="searchInput" type="text" />
        <Search className="searchIcon" />
      </div>
      <div className="nav">
        <Link to="/login">
          <div className="option">
            <span className="optionLineOne">Hello Guest</span>
            <span className="optionLineTwo">Sign in</span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="option">
            <span className="optionLineOne">Returns</span>
            <span className="optionLineTwo">& Orders</span>
          </div>
        </Link>
        {/* <div className="option">
          <span className="optionLineOne">Your</span>
          <span className="optionLineTwo">Prime</span>
        </div> */}
        <Link to="/checkout">
          <div className="optionBasket">
            <ShoppingCartIcon />
            <span className="optionLineTwo basketCount">0</span>
          </div>
        </Link>
      </div>
    </HeaderStyles>
  );
}

export default Header;

