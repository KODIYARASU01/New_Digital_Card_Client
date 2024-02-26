import React,{useState} from "react";
import './Profile.scss'
import Sidebar from "./Sidebar";
import Forms from "./Forms";

const UserProfile = () => {
  let [slideClose, setSlideShow] = useState(false);
  return <div>
<>
<div className="profile_container">
  <Sidebar slideClose={slideClose} setSlideShow={setSlideShow}/>
  <Forms slideClose={slideClose} setSlideShow={setSlideShow}/>
</div>
</>
  </div>;
};

export default UserProfile;
