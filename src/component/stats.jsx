import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./card";
import stretcher from "../assets/img/stretcher.svg";
import infusion from "../assets/img/soap.svg";
import healthCare from "../assets/img/health-care-1.svg";
import grave from "../assets/img/grave.svg";

const Stats = () => {
  const [stat, setStat] = useState(null);

  const getStats = () => {
    axios
      .get(
        "https://corona-virus-stats.herokuapp.com/api/v1/cases/countries-search?search=indonesia"
      )
      .then(res => {
        setStat(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    getStats();
  }, []);

  if (!stat) {
    return (
      <div className="wrapper">
        <Card>
          <p>Loading Data.....</p>
        </Card>
      </div>
    );
  }

  return (
    <div className="wrapper">
      <p className="last-update">Last updated</p>
      <p className="date">{stat.last_update.slice(0, 19)}</p>
      <div className="card-wrapper">
        <Card>
          <div className="stat-wrapper">
            <img className="img" src={stretcher} alt="stretcher" />
            <div className="stat">
              <p className="stat-title">Total Cases</p>
              <p className="stat-count">{stat.rows[0].total_cases}</p>
            </div>
          </div>
        </Card>
        <Card>
          <div className="stat-wrapper">
            <div className="stat">
              <p className="stat-title">Total Death</p>
              <p className="stat-count">{stat.rows[0].total_deaths}</p>
            </div>
            <img className="img" src={grave} alt="grave" />
          </div>
        </Card>
        <Card>
          <div className="stat-wrapper">
            <img className="img" src={healthCare} alt="healthcare" />
            <div className="stat">
              <p className="stat-title">Total Recover</p>
              <p className="stat-count">{stat.rows[0].total_recovered}</p>
            </div>
          </div>
        </Card>
        <Card>
          <div className="stat-wrapper">
            <div className="stat">
              <p className="stat-title">Active Cases</p>
              <p className="stat-count">{stat.rows[0].active_cases}</p>
            </div>
            <img className="img" src={infusion} alt="" />
          </div>
        </Card>
      </div>
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

          .card-wrapper {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
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

          @media only screen and(min-width: 768px) {
            .img {
              width: 10%;
              height: 10%;
            }

            .card-wrapper {
              width: 50%;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Stats;
