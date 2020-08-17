import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function Header(props) {
  return (
    <header>
      <h1>Counter</h1>
      <ul class="nav justify-content-end">
        <li class="nav-item ">
          <a class="nav-link active" href="#">
            <ShoppingCartIcon /> {props.no}
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
