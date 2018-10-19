import React from "react"
import logo from "../svg/logo.svg"

function Header(props){
  return (
    <div className="form-background">
    <div className="inside-form">{props.children}</div>
      <img
        className="logo-main"
        src={logo}
        width="60"
        height="60"
      />
    </div>

  )
}

export default Header;
