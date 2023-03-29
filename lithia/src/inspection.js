import React from "react";
import "./home.css";

const Inspection = () => { 
    return (
        <div>
          <form action="http://localhost:4000/scheduler/post" method="POST" >
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
                    d="M47.0754 24.2524L14.3984 94.3308L19.3277 96.6293L52.0046 26.5509L47.0754 24.2524Z"
                    fill="#5C5C5C"
                  />
                  <path
                    d="M54.0832 27.4904L21.4062 97.5688L26.3355 99.8673L59.0125 29.7889L54.0832 27.4904Z"
                    fill="#5C5C5C"
                  />
                  <path
                    d="M44.9863 23.2819C39.7113 20.9884 33.5189 23.3147 31.0615 28.5569L7.40575 79.276C4.94843 84.5183 7.14364 90.7435 12.2876 93.3319L44.9863 23.2819Z"
                    fill="#5C5C5C"
                  />
                  <path
                    d="M68.123 34.0615L35.457 104.144C40.7321 106.438 46.9245 104.111 49.3818 98.8692L73.0376 48.1502C75.4622 42.8751 73.267 36.6499 68.123 34.0615Z"
                    fill="#5C5C5C"
                  />
                  <path
                    d="M61.0988 30.7722L28.4219 100.851L33.3511 103.149L66.0281 33.0706L61.0988 30.7722Z"
                    fill="#5C5C5C"
                  />
                  <path
                    d="M92.1342 27.6721H86.6953V104.996H92.1342V27.6721Z"
                    fill="#5C5C5C"
                  />
                  <path
                    d="M99.8646 27.6721H94.4258V104.996H99.8646V27.6721Z"
                    fill="#5C5C5C"
                  />
                  <path
                    d="M84.4019 27.7043C78.6681 27.8682 74.0156 32.5862 74.0156 38.3855V94.3796C74.0156 100.179 78.6354 104.897 84.4019 105.061V27.7043Z"
                    fill="#5C5C5C"
                  />
                  <path
                    d="M109.926 27.7051V105.029C115.66 104.865 120.312 100.147 120.312 94.3476V38.3535C120.312 32.5542 115.66 27.8361 109.926 27.7051Z"
                    fill="#5C5C5C"
                  />
                  <path
                    d="M107.626 27.6721H102.188V104.996H107.626V27.6721Z"
                    fill="#5C5C5C"
                  />
                </svg>
    
                <div className="title">Tire Rotation & Inspection</div>
                <input  name="serviceName" placeholder="Tire Rotation & Inspection" value="Tire Rotation & Inspection" hidden readOnly/>
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
                <label className="label" >First name</label>
                <input className="form"  name="name" />
                <label className="label" >Email</label>
                <input className="form"  name="email"/>
                <label className="label" > Car Model</label>
                <input className="form" name="model"/>
                <label className="label" >Car Maker</label>
                <input className="form"  name="maker"/>
                <label className="label" >Year</label>
                <input className="form" name="year"/>
                <input className="Button" type="submit" value="Book Now"/>
              </div>
            </details>
          </form>
        </div>
      );
 }; 

export default Inspection
