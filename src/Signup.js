import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Signup.css";

export default function Signup(props) {
  const [Username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [Birthday, setBirthday] = useState("");

  // console.log(inputField)

  const history = useHistory();

  const submitButton = () => {
    alert(Username);
  };

  function handleClick(path) {
    history.push(path, [Username]);
  }

  return (
    <div>
      <div class="backgroundcenter">
        <div class="headeOuter">
          {" "}
          <h1 style={{ Position: "absolute" }} class="headInner">
            {" "}
            SignUp{" "}
          </h1>
        </div>

        <input
          type="text"
          name="Username"
          onChange={(event) => setUsername(event.target.value)}
          placeholder="User Name"
        />

        <br />

        <input
          type="text"
          name="Email"
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email"
        />

        <br />

        <input
          type="date"
          name="Birthday"
          onChange={(event) => setBirthday(event.target.value)}
          placeholder="Birthday"
        />

        <br />

        <input
          type="password"
          name="password"
          onChange={(event) => setpassword(event.target.value)}
          placeholder="password"
        />

        <br />

        <button type="submit" class="button" onClick={submitButton}>
          Submit Now
        </button>

        <button
          type="button"
          class="button"
          onClick={() => handleClick("Additionaldetails")}
        >
          Click Me!
        </button>
      </div>{" "}
    </div>
  );
}
