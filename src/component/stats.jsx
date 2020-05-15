import { React, useEffect, useState } from "react";
import Card from "./card";
import stretcher from "../assets/img/stretcher.svg";
import infusion from "../assets/img/soap.svg";
import healthCare from "../assets/img/health-care-1.svg";
import grave from "../assets/img/grave.svg";

const Stats = () => {
  return (
    <div className="wrapper">
      <p className="last-update">Last updated</p>
      <p className="date">14 mei 2020 22:00</p>
      <Card>
        <div className="stat-wrapper">
          <img className="img" src={stretcher} alt="stretcher" />
          <div className="stat">
            <p className="stat-title">Total Cases</p>
            <p className="stat-count">16.006</p>
          </div>
        </div>
      </Card>
      <Card>
        <div className="stat-wrapper">
          <div className="stat">
            <p className="stat-title">Total Death</p>
            <p className="stat-count">16.006</p>
          </div>
          <img className="img" src={grave} alt="grave" />
        </div>
      </Card>
      <Card>
        <div className="stat-wrapper">
          <img className="img" src={healthCare} alt="healthcare" />
          <div className="stat">
            <p className="stat-title">Total Recover</p>
            <p className="stat-count">16.006</p>
          </div>
        </div>
      </Card>
      <Card>
        <div className="stat-wrapper">
          <div className="stat">
            <p className="stat-title">Active Cases</p>
            <p className="stat-count">16.006</p>
          </div>
          <img className="img" src={infusion} alt="" />
        </div>
      </Card>
      <style jsx>
        {`
          .wrapper {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            min-width: 100vw;
            min-height: 100vh;
            scroll-snap-align: start;

            .last-update,
            .date {
              margin: 0;
              font-weight: bolder;
              color: #3f3f44;
            }
          }

          .stat-wrapper {
            display: flex;
            justify-content: space-around;
          }

          .stat {
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .img {
            width: 20%;
            height: 20%;
            padding: 10px;
          }

          .stat-title,
          .stat-count {
            margin: 0;
            font-weight: bolder;
            color: gray;
          }
        `}
      </style>
    </div>
  );
};

export default Stats;
