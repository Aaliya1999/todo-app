/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Footer = () => {
    return (
        <div className="helper footer">
          <p>5 items left</p>
          <div>
            <a href="#">All</a>
            <a href="#">Active</a>
            <a href="#">Completed</a>
          </div>
          <a href="#">Clear Completed</a>
        </div>
    );
}

export default Footer;