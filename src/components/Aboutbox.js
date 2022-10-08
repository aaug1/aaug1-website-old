import { useState, useEffect } from "react";
import "../styles.css"

function Aboutbox(props) {
  const {title, content} = props;
  return (
    <div className="container aboutbox flex-column">
      <div className="row">
        <div className = "aboutheader">
          {title}
        </div>
      </div>
      <div className="row aboutcontent">
        <div className="col">
          {content}
        </div>
        {/* <div className="col">
          <img className="profile_pic" src={require("../images/LinkedIn1.png")} alt="slime"/>
        </div> */}
          
      </div>

    </div>
      
  )
}

export default Aboutbox;
