import React from "react";
import NoPage from "./NoPage";
import Skill from "./Skill";

const Content = ({ data }) => {
  return (
    <div className="w-full flex justify-center">
      {data === 1 ? <Skill /> : <NoPage />}
    </div>
  );
};

export default Content;
