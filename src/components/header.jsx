import React from "react"
function Header(props){
  return (
    <div className="form-background">
    <div className="inside-form">{props.children}</div>
    </div>

  )
}

export default Header;
