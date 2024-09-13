import React, { useState } from "react";
import { Progress } from "./ui/progress";

const ProgressBar = () => {
  const [value, setValue] = useState({
    red: 24,
    blue: 80,
    green: 96,
    orange: 60,
  });
  return (
    <div className="border p-10 rounded-lg">
      <p className="font-bold text-lg">Syllabus Wise Analysis</p>
      <p className="mt-10">HTML Tools, Forms, History</p>
      <div className="flex justify-between items-center gap-14 mt-2">
        <Progress
          value={value.blue}
          color="bg-blue-500"
          bgColor="bg-blue-200"
        />
        <p className="text-blue-600 font-bold text-lg">{value.blue}%</p>
      </div>
      <p className="mt-6">Tags & References in HTML</p>
      <div className="flex justify-between items-center gap-14 mt-2">
        <Progress
          value={value.orange}
          color="bg-orange-500"
          bgColor="bg-orange-200"
        />
        <p className="text-orange-600 font-bold text-lg">{value.orange}%</p>
      </div>
      <p className="mt-6">Tables & References in HTML</p>
      <div className="flex justify-between items-center gap-14 mt-2">
        <Progress value={value.red} color="bg-red-500" bgColor="bg-red-200" />
        <p className="text-red-600 font-bold text-lg">{value.red}%</p>
      </div>
      <p className="mt-6">Tables & CSS Basics</p>
      <div className="flex justify-between items-center gap-14 mt-2">
        <Progress
          value={value.green}
          color="bg-green-500"
          bgColor="bg-green-200"
        />
        <p className="text-green-600 font-bold text-lg">{value.green}%</p>
      </div>
    </div>
  );
};

export default ProgressBar;
