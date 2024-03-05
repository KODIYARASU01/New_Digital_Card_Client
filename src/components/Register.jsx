import "./styles/User.scss";
import { Link, useNavigate } from "react-router-dom";
import avator from "../assets/profile.png";
import company from "../assets/aristostech.jpg";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { convertToBase64 } from "./helper/convert.js";
import axios from "axios";

export default function Register() {
  let navigate = useNavigate();
  //Image store state :
  let [profile, setProfile] = useState();
  let [userName, setUserName] = useState();
  let [email, setEmail] = useState();
  let [password, setPassword] = useState();
  let [loader, setLoader] = useState(false);
console.log(userName)
  let handleRegister = async (e) => {
    e.preventDefault();
    try {
      if (
        userName === '' ||
        email === '' ||
        password === ''
      ) {
        toast.warning("Make sure to Fill All required Fields : UserName,Email,Password");
        setLoader(false);
      } else {
        let data = { userName, email, password, profile };
        setLoader(true);
        let result = await axios.post(
          "https://new-digitalcard-server.onrender.com/api/register",
          data
        );

        if (result) {
          toast.success(result.data.message);
          setLoader(false);
          setTimeout(() => {
            navigate("/");
          }, 3000);
        } else {
          navigate("/register");
          setLoader(false);
        }
      }
    } catch (error) {
      setLoader(false);
      toast.error(error.response.data.message);
    }
  };

  //Formik does not support file upload so we could create handler :
  const onUpload = async (e) => {
    let base64 = await convertToBase64(e.target.files[0]);

    setProfile(base64);
  };

  return (
    <div className="user_container">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
      <div className="loader_anime">
        {loader ? <span className="loader"></span> : ""}
      </div>

      <div className="user_header">
        <h3 className="text-center">Welcome to Digital Card Creator!</h3>
        <p className="text-center">
          Brand your store easily,share this digital card with anyone to
          showcase your company profile easier.
        </p>
      </div>
      <div className="user_box">
        <div className="back_btn">
          <Link to="/">
            <img
              width="64"
              height="64"
              src="https://img.icons8.com/nolan/64/back.png"
              alt="back"
            />
          </Link>
        </div>
        <div className="box_title">
          <h1 className="register_title">Register</h1>
          <p className="text-center text-sm reg">
            Create your new Digital Card Account
          </p>
        </div>

        <form action="" onSubmit={handleRegister}>
          <div className="profile flex justify-center p-4">
            <div className="form_group">
              <label htmlFor="profile">
                <img src={profile || avator} alt="avatar" id="profile_image" />
                <img
                  id="camera"
                  width="64"
                  height="64"
                  src="https://img.icons8.com/arcade/64/camera--v2.png"
                  alt="camera--v2"
                />
              </label>
              <input
                onChange={onUpload}
                type="file"
                id="profile"
                name="profile"
              />
            </div>
            <label htmlFor=""></label>
          </div>

          <div className="form_group">
            <input
              type="email"
              placeholder="Eg : abc@gmail.com"
              id="email"
              name="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <img
              className="icon"
              width="64"
              height="64"
              src="https://img.icons8.com/nolan/64/new-post.png"
              alt="new-post"
            />
          </div>
          <div className="form_group">
            <input
              type="text"
              placeholder="Username"
              id="username"
              name="username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <img
              className="icon"
              width="64"
              height="64"
              src="https://img.icons8.com/nolan/64/user.png"
              alt="user"
            />
          </div>
          <div className="form_group">
            <input
              type="password"
              placeholder="Password"
              id="name"
              name="name"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <img
              className="icon"
              width="64"
              height="64"
              src="https://img.icons8.com/cute-clipart/64/password.png"
              alt="password"
            />
          </div>
          <button className="start_btn" type="submit">
            Register Now
          </button>
        </form>

        <div className="register_session">
          <p>
            Already Registered ? <Link to="/">Login Now</Link>
          </p>
        </div>

        <div className="showcase">
          <p>Explore Our Site & Contact Us</p>

          <div className="actions">
            <Link to="/">
              <img src={company} alt="company" />
            </Link>
            <Link to="/">
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/color/48/whatsapp--v1.png"
                alt="whatsapp--v1"
              />
            </Link>
            <Link to="/">
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/color/48/instagram-new--v1.png"
                alt="instagram-new--v1"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
