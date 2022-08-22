import React from "react";

const Blockquote = ({ text }) => {
  return (
    <blockquote className="blockquote">
      <i className="fa fa-quote-right"></i>
      <p><br /> [...] {text} [...]</p>
    </blockquote>
  )
}

export default Blockquote;