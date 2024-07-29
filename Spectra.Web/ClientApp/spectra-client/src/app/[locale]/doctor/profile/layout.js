import React from "react";
import ProfileAside from "./components/profile-aside";

function layout({ children }) {
  return (
    <div className="flex mdl:gap-5 flex-wrap flex-col mdl:flex-row">
      <ProfileAside />
      {children}
    </div>
  );
}

export default layout;
