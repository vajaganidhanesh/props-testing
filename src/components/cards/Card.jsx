import React from "react";
// import PropTypes from "prop-types";

function Card({ cardProps }) {
  console.log(cardProps);
  return (
    <div className='card'>
      <h1>Dhanesh</h1>
      <div>{cardProps.name} </div>
      {/* <img src={cardProps.image.url} alt='' /> */}
    </div>
  );
}

export default Card;
