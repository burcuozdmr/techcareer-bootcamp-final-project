import React, { useState, useEffect, useRef } from "react";
import classes from "./Subscribe.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Subscribe = () => {
  const inputRef = useRef(null)
  const handleSubscribe = (e) => {
    const value = inputRef.current.value;
    if(value === ''){
      toast.warn("Please write a valid email address");
    }else{
      toast.success("Awesome! You have successfully subscribed");
    }
    console.log("calıstın!");
    e.preventDefault();
  };
 
  return (
    <div className="">
      <section className="container position-absolute top-0 start-50 translate-middle  z-2" style={{ maxWidth: "850px" }}>
        <div className={classes["bg-mainColor"]}></div>
        <div
          className={`card border border-0 p-lg-4 p-sm-2 shadow-lg opacity-75 ${classes["bg-mainLightColor"]} `}
        >
          <div className="card-body text-center">
            <p className={`fw-bold text-sm  pb-lg-3 pb-sm-2 ${classes.secondaryColor}`}>
              SUBSCRIBE NOW
            </p>
            <p className="fw-semibold">TO GET LATEST EVENT INFORMATION </p>
            <p className="text-secondary fw-normal fst-italic">
              An informational e-mail will be sent to your e-mail address every
              week regarding the events.
            </p>

            <div className="row">
              <div className="col-lg-6 col-md-6 mx-auto">
                <form
                  className="input-group mt-4  position-relative"
                  onSubmit={handleSubscribe}
                >
                  <input
                    type="email"
                    className={`form-control p-lg-3 rounded-pill bg-transparent z-1 ${classes.i}`}
                    placeholder="Email Address"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                    ref={inputRef}
                  />
                  <button
                    className={`btn rounded-pill position-absolute top-50 end-0 translate-middle-y p-lg-3 px-lg-3 z-2  fw-semibold ${classes["bg-secondaryColor"]} ${classes.b}`}
                    type="submit"
                    id="button-addon2"
                  >
                    Subscribe
                  </button>
                  <ToastContainer></ToastContainer>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Subscribe;
