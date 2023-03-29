import React from "react";
import "./home.css";

const Oil = () => {
  return (
    <div>
      <form action="http://localhost:4000/scheduler/post" method="POST">
        <details>
          <summary>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="128"
              height="128"
              viewBox="0 0 128 128"
              fill="none"
            >
              <path
                d="M65.4833 20.6412L59.8497 18.7976C59.5806 18.6982 59.2527 18.6949 58.9546 18.7823L51.5058 20.946C51.2853 21.0151 51.0988 21.1251 50.949 21.2508L45.8804 25.5039C45.6488 25.6982 45.488 25.9493 45.4094 26.2708L41.2433 40.8418L38.0355 41.142L25.6364 51.5461L33.2221 65.5671C34.2142 67.3583 35.3657 69.0625 36.669 70.6156L66.8753 106.614L72.9991 110.647C74.0967 111.374 75.5678 111.301 76.6169 110.421L111.13 81.4606C112.411 80.3859 112.58 78.4565 111.505 77.1757L68.7796 26.2574C68.1393 25.4943 67.5967 24.6262 67.2496 23.6869L66.4019 21.5422C66.2367 21.1238 65.9099 20.8175 65.4833 20.6412ZM73.8946 81.9399C71.0605 84.318 66.8506 83.9497 64.484 81.1292C62.1174 78.3088 60.1749 65.5894 60.1749 65.5894C60.1749 65.5894 72.3501 69.7226 74.7167 72.543C77.0833 75.3634 76.7149 79.5734 73.8946 81.9399ZM82.125 48.4711C82.6738 49.1252 82.5928 50.0524 81.9388 50.6011L78.6823 53.3337C78.1373 53.791 77.4154 53.8162 76.8675 53.44L56.9719 39.857C56.2825 39.3674 56.088 38.4161 56.5775 37.7268L62.9458 28.5752C63.4988 27.7399 64.6897 27.6925 65.3414 28.4692L82.125 48.4711Z"
                fill="#5C5C5C"
              />
              <path
                d="M31.5851 35.4239L35.3556 39.9176L24.0169 49.4319L20.2463 44.9383C19.9725 44.6124 20.014 44.1412 20.3398 43.8679L30.5145 35.3303C30.8405 35.0567 31.3115 35.0979 31.5851 35.4239Z"
                fill="#5C5C5C"
              />
            </svg>

            <div className="title" name="serviceName">
              Synthetic Oil Change
            </div>
            <input
              name="serviceName"
              placeholder="Synthetic Oil Change"
              value="Synthetic Oil Change"
              hidden
              readOnly
            />
          </summary>
          <div className="cont">
            <p className="appoint">Available Appointments</p>
   
            <label className="label color">
              <input type="checkbox"  className="checkbox" name="date" value="Monday May 5th 08:00 AM" readOnly/>
              Monday May 5th 08:00 AM
            </label>
            <label className="label color">
              <input type="checkbox"  className="checkbox" name="date" value="Monday May 5th 10:00 AM" readOnly/>
              Monday May 5th 10:00 AM
            </label>
            <label className="label color">
              <input type="checkbox" className="checkbox" name="date" value="Tuesday May 6th 02:00 PM" readOnly/>
              Tuesday May 6th 02:00 PM
            </label>
            <label className="label" >
              First name
            </label>
            <input className="form" name="name" />
            <label className="label" >
              Email
            </label>
            <input className="form" name="email" />
            <label className="label" >
              {" "}
              Car Model
            </label>
            <input className="form" name="model" />
            <label className="label" >
              Car Maker
            </label>
            <input className="form" name="maker" />
            <label className="label" >
              Year
            </label>
            <input className="form" name="year" />
            <input className="Button" type="submit" value="Book Now"/>
          </div>
        </details>
      </form>
    </div>
  );
};

export default Oil;
