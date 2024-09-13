import React, { useState } from "react";
import Image from "next/image";
import Modal from "./Modal";
import ProgressBar from "./ProgressBar";
import { PieChart } from "./PieChart";
import { LineGraph } from "./LineGraph";

const Skill = () => {
  const [questions, setQuestions] = useState(10);
  const [duration, setDuration] = useState(60);
  const [submittedDate, setSubmittedDate] = useState("2024-09-10");
  const [rank, setRank] = useState(1);
  const [percentile, setPercentile] = useState(30);
  const [score, setScore] = useState(10);
  const [isModalOpen, setIsModalOpen] = useState(false); // For controlling modal visibility

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleSave = (updatedStats) => {
    setRank(updatedStats.rank);
    setPercentile(updatedStats.percentile);
    setScore(updatedStats.score);
  };

  return (
    <div className="w-full mb-5 p-4 sm:p-6 md:p-8 lg:p-10">
      <p className="text-xl mt-5">Skill Test</p>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex flex-col md:w-2/3">
          <div className="mt-5 flex flex-col  md:flex-row justify-between border rounded-lg py-2 md:py-4 lg:py-5 px-4">
            <div className="flex items-center gap-4 md:gap-20 justify-between">
              <Image
                src="https://res.cloudinary.com/debw7vpqa/image/upload/v1721431123/html_apn4wf.jpg"
                alt="HTML logo"
                width={70}
                height={70}
              />
              <div className="flex flex-col">
                <div className="text-sm font-bold">
                  Hyper Text Markup Language
                </div>
                <div className="text-gray-500 text-sm md:text-md font-medium">
                  Questions: {questions} | Duration: {duration} mins | Submitted
                  on {submittedDate}
                </div>
              </div>
              <button
                onClick={toggleModal}
                className="px-4 py-2 md:px-6 md:py-3 bg-blue-800 hover:bg-blue-600 text-white font-semibold rounded-lg"
              >
                Update
              </button>
            </div>
            {isModalOpen && <Modal onClose={toggleModal} onSave={handleSave} />}
          </div>

          <div className="border rounded-lg p-4 mt-5">
            <div className="font-bold text-md">Quick Statistics</div>
            <div className="flex flex-col md:flex-row gap-4 justify-between pt-4">
              <div className="flex items-center gap-2">
                <div className="flex justify-center items-center w-12 h-12 bg-slate-200 rounded-full p-1">
                  <Image
                    src="https://res.cloudinary.com/debw7vpqa/image/upload/v1721431427/trophy_zmqz3o.png"
                    alt="Trophy"
                    width={25}
                    height={25}
                  />
                </div>
                <div className="flex flex-col">
                  <div className="font-bold text-xl">{rank}</div>
                  <div className="text-gray-400 text-sm">YOUR RANK</div>
                </div>
              </div>

              <div className="w-0.5 bg-slate-200  md:h-[80px]"></div>

              <div className="flex items-center gap-2">
                <div className="flex justify-center items-center w-12 h-12 bg-slate-200 rounded-full p-2">
                  <Image
                    src="https://res.cloudinary.com/debw7vpqa/image/upload/v1721431591/note_mrbccd.png"
                    alt="Note"
                    width={25}
                    height={25}
                  />
                </div>
                <div className="flex flex-col pl-2 md:pl-3">
                  <div className="font-bold text-xl">{percentile}%</div>
                  <div className="text-gray-400 text-sm">PERCENTILE</div>
                </div>
              </div>

              <div className="w-0.5 bg-slate-200 md:h-[80px]"></div>

              <div className="flex items-center gap-2">
                <div className="flex justify-center items-center w-12 h-12 bg-slate-200 rounded-full p-2">
                  <Image
                    src="https://res.cloudinary.com/debw7vpqa/image/upload/v1721431597/checkbox_vrq1se.png"
                    alt="Checkbox"
                    width={25}
                    height={25}
                  />
                </div>
                <div className="flex flex-col pl-2 md:pl-3">
                  <div className="font-bold text-xl">{score}/15</div>
                  <div className="text-gray-400 text-sm">CORRECT ANSWERS</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <LineGraph score={score} percentile={percentile} />
          </div>
        </div>
        <div className="w-full md:w-1/3">
          <div className="px-4 md:px-8 mt-5">
            <ProgressBar />
          </div>
          <div className="px-4 md:px-8">
            <PieChart score={score} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
