import React, { useState } from "react";
import profile from "./../image/a.png";
import { setUserStorage } from '../utils/StorageFunctions';
import '../style/login.css';


function Login(props) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessages, setErrorMessages] = useState({});

  function login() {
    const user = {
      email: email,
      password: password
    }
    var { uname, pass } = document.forms[0];
   
    fetch("", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(result => {

        if (result.user) {

          if (result.user.password !== pass.value) {
            // Invalid password
            setErrorMessages({ name: "pass", message: errors.pass });
          } else {
            setLoading(true);
            setUserStorage(result.token, result.user)
            props.history.push('/dashboard');
          }
        } else {
          // Username not found
          setErrorMessages({ name: "uname", message: errors.uname });
          props.history.push('/login')

        }
      }

      )
      .catch(err => alert(err))
  }


  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error" style={{ color: 'red' }}>{errorMessages.message}</div>
    );

  return (
    <div className="login">
      <div className="container">
        <div className="main">
          <div className="sub-main">

            <div className="form">
              <div className="imgs">
                <div className="container-image">
                  <img src={profile} alt="profile" className="profile" />
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  value={email}
                  onChange={e => setEmail(e.target.value)} />
                {renderErrorMessage("uname")}
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input
                  required
                  type="password"
                  class="form-control"
                  value={password}
                  onChange={e => setPassword(e.target.value)} />
                {renderErrorMessage("pass")}
              </div>
              <button type="submit" class="btn btn-primary" onSubmit={login}>Submit</button>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}
export default Login;