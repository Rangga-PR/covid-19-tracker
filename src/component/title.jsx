import React from "react";

const Title = () => {
  return (
    <div className="wrapper">
      <h1 className="title">Track COVID-19 cases in Indonesia</h1>
      <div className="swipe-prompt">
        <p className="swipe">swipe left to see</p>
        <i className="material-icons">swap_horizontal_circle</i>
      </div>
      <style jsx>
        {`
          .wrapper {
            display: flex;
            flex-direction: column;
            min-width: 100%;
            min-heigth: 100%;
            scroll-snap-align: center;
          }

          .title {
            color: #35627d;
            padding-left: 5px;
          }

          .swipe-prompt {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: salmon;
            width: fit-content;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;

            i {
              margin-right: 5px;
              color: white;
            }
          }

          .swipe {
            margin: 0 10px 0 0;
            padding: 0;
            color: white;
          }

          @media only screen and(min-width: 768px) {
            .wrapper {
              display: none;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Title;
