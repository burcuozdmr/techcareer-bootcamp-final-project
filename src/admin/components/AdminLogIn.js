import React, { useState } from "react";
import Navbar from "../../components/shared/Navbar";
import { useNavigate } from "react-router-dom";

const AdminLogIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const validateEmail = () => {
    const isValid = /\S+@\S+\.\S+/.test(email);
    setIsEmailValid(isValid);
    setEmailError(isValid ? "" : "Enter a valid email!");
    return isValid;
  };

  const validatePassword = () => {
    const isValid = password.length >= 8;
    setIsPasswordValid(isValid);
    setPasswordError(
      isValid ? "" : "Passwords must be at least 8 characters long!"
    );
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (isEmailValid && isPasswordValid) {
      console.log("Form gönderildi");
      navigate("/admin");
    } else {
      console.log("Form gönderilemedi. Lütfen hataları düzeltin.");
    }
  };

  return (
    <>
      <Navbar></Navbar>
      <form
        className="container d-flex  justify-content-center flex-column vh-100"
        style={{ maxWidth: "500px" }}
        onSubmit={handleSubmit}
      >
        <div className="card p-5 bg-secondary">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={validateEmail}
              className= "form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <span className="text-warning">{emailError}</span>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={validatePassword}
              class="form-control"
              id="exampleInputPassword1"
            />
            <span className="text-warning">{passwordError}</span>
          </div>
          <button
            type="submit"
            class="btn btn-primary "
            disabled={!isEmailValid || !isPasswordValid}
          >
            LOG IN
          </button>
        </div>
      </form>
    </>
  );
};

export default AdminLogIn;
