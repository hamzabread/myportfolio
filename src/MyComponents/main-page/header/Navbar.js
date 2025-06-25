import React from 'react'
import { useState, props } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Modal from "react-bootstrap/Modal";
import "./Navbar.scss";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  return (
    <>
      <section className="header desktop">
        <div className="custom-container">
          <nav className="nav-barr">

            <div className="main-nav">
              <a className="def headingfont f-25 text-hover-fill" href="#">
                HOME
              </a>
              <a className="def headingfont f-25 text-hover-fill" href="#">
                PROJECTS
              </a>
              <a className="def headingfont f-25 text-hover-fill" href="#">
                ABOUT
              </a>

            </div>
              <button className="navbttn1 def f-20 headingfont" onClick={handleShow1}>
                CONTACT ME{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="25"
                  viewBox="0 0 17 17"
                  fill="none"
                >
                  <path
                    d="M3.53906 8.5H13.4557M13.4557 8.5L9.20573 4.25M13.4557 8.5L9.20573 12.75"
                    stroke="#E8F2FF"
                    stroke-linecap="square"
                    strokerinejoin="round"
                  />
                </svg>
              </button>
          </nav>
        </div>
      </section>
      <div className="custom-container">
        <div className="phonenav d-none">
          <div className="innerdivv">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              onClick={handleShow}
            >
              <path
                d="M31.5057 18C31.5057 18.298 31.3873 18.5838 31.1766 18.7945C30.9659 19.0052 30.6801 19.1236 30.3821 19.1236H5.66337C5.36538 19.1236 5.0796 19.0052 4.86888 18.7945C4.65817 18.5838 4.53979 18.298 4.53979 18C4.53979 17.702 4.65817 17.4163 4.86888 17.2055C5.0796 16.9948 5.36538 16.8765 5.66337 16.8765H30.3821C30.6801 16.8765 30.9659 16.9948 31.1766 17.2055C31.3873 17.4163 31.5057 17.702 31.5057 18ZM5.66337 10.135H30.3821C30.6801 10.135 30.9659 10.0166 31.1766 9.80589C31.3873 9.59518 31.5057 9.30939 31.5057 9.0114C31.5057 8.71341 31.3873 8.42762 31.1766 8.21691C30.9659 8.00619 30.6801 7.88782 30.3821 7.88782H5.66337C5.36538 7.88782 5.0796 8.00619 4.86888 8.21691C4.65817 8.42762 4.53979 8.71341 4.53979 9.0114C4.53979 9.30939 4.65817 9.59518 4.86888 9.80589C5.0796 10.0166 5.36538 10.135 5.66337 10.135ZM30.3821 25.8651H5.66337C5.36538 25.8651 5.0796 25.9835 4.86888 26.1942C4.65817 26.4049 4.53979 26.6907 4.53979 26.9887C4.53979 27.2867 4.65817 27.5724 4.86888 27.7832C5.0796 27.9939 5.36538 28.1122 5.66337 28.1122H30.3821C30.6801 28.1122 30.9659 27.9939 31.1766 27.7832C31.3873 27.5724 31.5057 27.2867 31.5057 26.9887C31.5057 26.6907 31.3873 26.4049 31.1766 26.1942C30.9659 25.9835 30.6801 25.8651 30.3821 25.8651Z"
                fill="#311E1A"
              />
            </svg>
          </div>
        </div>
      </div>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            {" "}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {" "}
          <div className="profbtns">
            <button className="noti def">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <path
                  d="M15.5 17.5V18.5C15.5 20.1569 14.1569 21.5 12.5 21.5C10.8431 21.5 9.5 20.1569 9.5 18.5V17.5M15.5 17.5H9.5M15.5 17.5H19.0905C19.473 17.5 19.6652 17.5 19.8201 17.4478C20.116 17.348 20.3475 17.1156 20.4473 16.8198C20.4997 16.6643 20.4997 16.4715 20.4997 16.0859C20.4997 15.9172 20.4995 15.8329 20.4863 15.7524C20.4614 15.6004 20.4024 15.4563 20.3126 15.3312C20.2651 15.2651 20.2048 15.2048 20.0858 15.0858L19.6963 14.6963C19.5706 14.5706 19.5 14.4001 19.5 14.2224V10.5C19.5 6.634 16.366 3.49999 12.5 3.5C8.63401 3.50001 5.5 6.63401 5.5 10.5V14.2224C5.5 14.4002 5.42924 14.5706 5.30357 14.6963L4.91406 15.0858C4.79476 15.2051 4.73504 15.265 4.6875 15.3312C4.59766 15.4564 4.53815 15.6004 4.5132 15.7524C4.5 15.8329 4.5 15.9172 4.5 16.086C4.5 16.4715 4.5 16.6642 4.55245 16.8197C4.65225 17.1156 4.8848 17.348 5.18066 17.4478C5.33556 17.5 5.52701 17.5 5.90956 17.5H9.5"
                  stroke="#222D37"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>

            <button className="profilebtn def">
              <img src="/assets/mainface.png" alt="face" />
              MY PROFILE
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
              >
                <path
                  d="M3.54175 8.5L13.4584 8.5M13.4584 8.5L9.20842 12.75M13.4584 8.5L9.20842 4.25"
                  stroke="#222D37"
                  stroke-width="1.5"
                  stroke-linecap="square"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <button className="navbttn1 def" onClick={handleShow1}>
                Connect Wallet{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                >
                  <path
                    d="M3.53906 8.5H13.4557M13.4557 8.5L9.20573 4.25M13.4557 8.5L9.20573 12.75"
                    stroke="#E8F2FF"
                    stroke-linecap="square"
                    strokerinejoin="round"
                  />
                </svg>
              </button>
        </Offcanvas.Body>

      </Offcanvas>
      <Modal show={show1} onHide={handleClose1} centered>
        <Modal.Header closeButton>
          <Modal.Title> <p className="mainheading f-25">CONTACT INFO</p> </Modal.Title>
        </Modal.Header>
        <Modal.Body><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" class="bi bi-envelope" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
</svg> <p className='pixel f-16'>hamzaval2000@gmail.com</p></Modal.Body>
        <Modal.Footer>
          <p className="pixel">I look forward to <span>working with you!</span></p>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Navbar