import React from "react";

const Blockquote = ({ text, innerHtml }) => {
  return (
    <blockquote className="blockquote">
      <i className="fa fa-quote-right"></i>
      {text && <p><br /> [...] {text} [...]</p>}
      {innerHtml}
    </blockquote>
  )
}

export default Blockquote;