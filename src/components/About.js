import React, { useState } from "react";

export default function About() {
  const [myStyle, setMyStyle] = useState({
    backgroundColor: "white",
    color: "black",
    border: "2px solid black",
    transition: "all linear 0.2s",
  });

  const [btnTxt, setBtnTxt] = useState("Enable Dark Mode");

  const toggleTheme = () => {
    if (myStyle.backgroundColor === "white") {
      setMyStyle({
        backgroundColor: "#1a1a1a",
        color: "white",
        border: "2px solid white",
        transition: "all linear 0.2s",
      });
      setBtnTxt("Enable Light Mode");
    } else {
      setMyStyle({
        backgroundColor: "white",
        color: "black",
        border: "2px solid black",
        transition: "all linear 0.2s",
      });
      setBtnTxt("Enable Dark Mode");
    }
  };

  return (
    <div className="container" style={myStyle}>
      <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item my-3" style={myStyle}>
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
              style={myStyle}
            >
              Our Mission
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse "
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>
                At TextUtils, our mission is to provide users with a powerful
                and user-friendly text utility app. We aim to simplify and
                enhance your text-related tasks, making your life easier when
                dealing with text manipulation, formatting, and analysis.
                Whether you need to remove duplicates, count words, or transform
                your text into various cases, our app has got you covered. We
                are committed to constantly improving and expanding our features
                to meet the diverse needs of our users.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item my-3" style={myStyle}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              Meet th Team
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>
                Hey there! I'm the sole developer behind TextUtils, and I'm
                passionate about technology and creating meaningful user
                experiences. From the very beginning, my vision has been to
                build a text utility app that's simple, yet powerful. As the
                app's developer, I handle everything from the front-end design
                to the back-end implementation, ensuring a smooth and efficient
                app that caters to all your text needs. Your feedback is
                incredibly valuable to me, and I'm constantly iterating on the
                app to make it even better for you. I'm excited to have you on
                this journey with me as we explore the endless possibilities of
                text manipulation and analysis together!
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item my-3" style={myStyle}>
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              Privacy & Security
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>
                At TextUtils, we value your privacy and are committed to
                maintaining the utmost security of your data. All text
                processing and analysis within our app occur client-side,
                ensuring that your text remains private and never leaves your
                device. We do not store any user data on our servers,
                guaranteeing complete confidentiality. Our team prioritizes the
                highest security standards, utilizing encryption and secure
                connections to safeguard your experience. You can use TextUtils
                with confidence, knowing that your text and personal information
                are safe and secure.
              </p>
            </div>
          </div>
        </div>
      </div>
      <button className="btn btn-primary my-3" onClick={toggleTheme}>
        {btnTxt}
      </button>
    </div>
  );
}
