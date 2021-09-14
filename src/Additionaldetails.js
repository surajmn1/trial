import { useState } from "react";
import "./Additionaldetails.css";

export default function Additionaldetails({ location }) {
  console.log(typeof location);
  // console.log(location.state)
  const [Father, setFather] = useState("");
  const [Mother, setMother] = useState("");
  const [Age, setAge] = useState("");
  const [Department, setDepartment] = useState("");
  const [Gender, setGender] = useState("");
  const [Address, setAddress] = useState("");
  const [Pincode, setPincode] = useState("");

  const submitButton = () => {
    alert(Father);
  };

  return (
    <div>
      <h1 id="title"> Hi! {location.state} </h1>
      <h1 id="title" class="centerAlign">
        Additional details{" "}
      </h1>
      <div id="form-outer">
        <p id="description">Let us know more about you</p>
        <form id="survey-form" method="GET" action="">
          <div class="rowTab">
            <div class="labels">
              <label id="fname-label" for="fname">
                Father's Name:{" "}
              </label>
            </div>
            <div class="rightTab">
              <input
                autofocus
                type="text"
                name="fname"
                id="fname"
                class="input-field"
                onChange={(event) => setFather(event.target.value)}
                placeholder="Enter your father's name"
                required
              />
            </div>
          </div>

          <div class="rowTab">
            <div class="labels">
              <label id="mname-label" for="mname">
                Mother's Name:{" "}
              </label>
            </div>
            <div class="rightTab">
              <input
                autofocus
                type="text"
                name="mname"
                id="mname"
                class="input-field"
                onChange={(event) => setMother(event.target.value)}
                placeholder="Enter your mother's name"
                required
              />
            </div>
          </div>

          <div class="rowTab"></div>
          <div class="rowTab">
            <div class="labels">
              <label id="number-label" for="age">
                Age:{" "}
              </label>
            </div>
            <div class="rightTab">
              <input
                type="number"
                name="age"
                id="number"
                min="1"
                max="125"
                class="input-field"
                onChange={(event) => setAge(event.target.value)}
                placeholder="Age"
                required
              />
            </div>
          </div>

          <div class="rowTab">
            <div class="labels">
              <label for="department">Department: </label>
            </div>
            <div class="rightTab">
              <select
                id="dropdown"
                name="department"
                class="dropdown"
                onChange={(event) => setDepartment(event.target.value)}
              >
                <option disabled value>
                  Select an option
                </option>
                <option value="it">IT</option>
                <option value="cse">CSE</option>
                <option value="ece">ECE</option>
                <option value="mech">MECH</option>
                <option value="civil">CIVIL</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div class="rowTab">
            <div class="labels">
              <label for="gender">Gender: </label>
            </div>
            <div class="rightTab">
              <ul style={{ listStyle: "none" }}>
                <li class="radio">
                  <label>
                    <input
                      name="radio-buttons"
                      value="male"
                      onClick={(event) => setGender(event.target.value)}
                      type="radio"
                      class="userRatings"
                    />
                    Male
                  </label>
                </li>
                <li class="radio">
                  <label>
                    <input
                      name="radio-buttons"
                      value="female"
                      onClick={(event) => setGender(event.target.value)}
                      type="radio"
                      class="userRatings"
                    />
                    Female
                  </label>
                </li>
                <li class="radio">
                  <label>
                    <input
                      name="radio-buttons"
                      value="others"
                      onClick={(event) => setGender(event.target.value)}
                      type="radio"
                      class="userRatings"
                    />
                    Others
                  </label>
                </li>
              </ul>
            </div>
          </div>
          <div class="rowTab">
            <div class="labels">
              <label for="address">Address: </label>
            </div>
            <div class="rightTab">
              <textarea
                id="comments"
                class="input-field"
                style={{ height: "50px", resize: "vertical" }}
                onChange={(event) => setAddress(event.target.value)}
                name="address"
                placeholder="Enter your address here..."
              ></textarea>
            </div>
          </div>
          <div class="rowTab">
            <div class="labels">
              <label for="pincode">Pincode: </label>
            </div>
            <div class="rightTab">
              <input
                type="number"
                name="pincode"
                id="idpincode"
                class="input-field"
                onChange={(event) => setPincode(event.target.value)}
                style={{ height: "20px", resize: "vertical" }}
                placeholder="6 - - - - -"
              />
            </div>
          </div>

          <button id="submit" onClick={submitButton} type="submit">
            Submit
          </button>
          <button id="reset" type="reset">
            Reset
          </button>
        </form>
      </div>
    </div>
  );
}
