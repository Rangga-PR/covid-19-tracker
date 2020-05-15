import React from "react";
import PropTypes from "prop-types";

const Card = ({ children }) => {
  return (
    <>
      <div className="card-body">{children}</div>
      <style jsx>
        {`
          .card-body {
            background-color: white;
            height: fit-content;
            width: 95%;
            max-width: 100%;
            max-height: 100%;
            box-shadow: 0px 0px 23px -9px rgba(0, 0, 0, 0.5);
            border-radius: 5px;
            margin: 0.2rem 0;
          }
        `}
      </style>
    </>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
