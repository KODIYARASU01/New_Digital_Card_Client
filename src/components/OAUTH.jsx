// import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
// import { app } from "./firebase.js";
// import { useDispatch } from "react-redux";
// import {  signInSuccess } from "../redux/user/userSlice.js";
// import { useNavigate } from "react-router-dom";
export default function OAUTH() {
//   const dispatch = useDispatch();
//   let navigate=useNavigate();
//   const handleGoogleClick = async (e) => {
//     e.preventDefault();

//     try {
//       const provider = new GoogleAuthProvider();
//       const auth = getAuth(app);

//       const result = await signInWithPopup(auth, provider);
// console.log(result)
//       const res = await fetch('https://fullstack-mern-auth-project.onrender.com/api/auth/google', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           userName: result.user.displayName,
//           email: result.user.email,
//           profile: result.user.photoURL,
//         }),
//       });
//       const data = await res.json();
//       console.log(data);
//       dispatch(signInSuccess(data));
//       navigate('/user_admin')
//     } catch (err) {
//       console.log('could not login with google', err);
//     }
//   };
  return (
    <>
      <div className="google_signin">
        <button  >
          {" "}
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/fluency/48/google-logo.png"
            alt="google-logo"
          />
          Continue With Google
        </button>
      </div>
    </>
  );
}
