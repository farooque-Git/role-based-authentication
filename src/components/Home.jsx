import React from "react";
import { useAuth } from "../context/authContext";
import HeroSection from "./HeroSection";
import BlogPost from "./CreateBlogPost";

//login register - DONE
//context  - DONE
// firebase connect  - DONE
// blog component
//

const Home = () => {
  const { currentUser } = useAuth();
  return (
    <div className="text-2xl font-bold pt-14">
      {/* Hello{" "}
      {currentUser.displayName ? currentUser.displayName : currentUser.email},
      you are now logged in. */}
      <HeroSection />
    </div>
  );
};

export default Home;
