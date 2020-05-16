import React from "react";
import Title from "./component/title";
import Stats from "./component/stats";

const App = () => {
  return (
    <>
      <div className="content-wrapper">
        <Title />
        <Stats />
      </div>
      <style jsx>
        {`
          .content-wrapper {
            max-width: 100%;
            display: flex;
            justify-content: space-between;
            overflow-x: scroll;
            ::-webkit-scrollbar {
              display: none;
            }
            scrollbar-width: none;
            -ms-overflow-style: none;
            scroll-snap-type: x mandatory;
          }
        `}
      </style>
    </>
  );
};

export default App;
