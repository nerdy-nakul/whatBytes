import React, { useState } from "react";
import Image from "next/image";
import Modal from "./Modal";
import ProgressBar from "./ProgressBar";
import { PieChart } from "./PieChart";
import { LineGraph } from "./LineGraph";

const Skill = () => {
  // State for managing the modal and various skill details
  const [questions, setQuestions] = useState(10);
  const [duration, setDuration] = useState(60);
  const [submittedDate, setSubmittedDate] = useState("2024-09-10");
  const [rank, setRank] = useState(1);
  const [percentile, setPercentile] = useState(30);
  const [score, setScore] = useState(10);
  const [isModalOpen, setIsModalOpen] = useState(false); // For controlling modal visibility

  // Function to toggle the modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Function to handle save action from the modal
  const handleSave = (updatedStats) => {
    setRank(updatedStats.rank);
    setPercentile(updatedStats.percentile);
    setScore(updatedStats.score);
  };

  return (
    <div className="pl-10 w-full mb-5">
      <p className="ml-3 text-xl mt-5">Skill Test</p>
      <div className="flex flex-col md:flex-row ml-3">
        <div className="flex flex-col w-2/3">
          <div className="mt-5 flex flex-col md:flex-row justify-start border rounded-lg py-2 md:py-4 lg:py-5">
            <div className="flex items-center justify-between gap-4 w-full pr-4">
              <div className="flex justify-center items-center">
                <Image
                  src="https://res.cloudinary.com/debw7vpqa/image/upload/v1721431123/html_apn4wf.jpg"
                  alt="HTML logo"
                  width={70}
                  height={70}
                />
              </div>
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
                className="px-10 py-3 bg-blue-800 hover:bg-blue-600 text-white font-semibold rounded-lg"
              >
                Update
              </button>
            </div>
            {isModalOpen && <Modal onClose={toggleModal} onSave={handleSave} />}
          </div>

          <div className="border rounded-lg p-4 mt-5">
            <div className="font-bold text-md">Quick Statistics</div>
            <div className="flex flex-col md:flex-row gap-4 justify-between pt-4 px-2 md:px-5">
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
                  <div className=" text-gray-400 text-sm">YOUR RANK</div>
                </div>
              </div>

              <div className="w-0.5 bg-slate-200 h-[80px]"></div>

              <div className="flex items-center">
                <div className="flex justify-center items-center w-12 h-12 bg-slate-200 rounded-full p-2">
                  <Image
                    src="https://res.cloudinary.com/debw7vpqa/image/upload/v1721431591/note_mrbccd.png"
                    alt="Note"
                    width={25}
                    height={25}
                  />
                </div>
                <div className="flex flex-col pl-3">
                  <div className="font-bold text-xl">{percentile}%</div>
                  <div className=" text-gray-400 text-sm">PERCENTILE</div>
                </div>
              </div>

              <div className="w-0.5 bg-slate-200"></div>

              <div className="flex items-center">
                <div className="flex justify-center items-center w-12 h-12 bg-slate-200 rounded-full p-2">
                  <Image
                    src="https://res.cloudinary.com/debw7vpqa/image/upload/v1721431597/checkbox_vrq1se.png"
                    alt="Checkbox"
                    width={25}
                    height={25}
                  />
                </div>
                <div className="flex flex-col pl-3">
                  <div className="font-bold text-xl">{score}/15</div>
                  <div className=" text-gray-400 text-sm">CORRECT ANSWERS</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <LineGraph />
          </div>
        </div>
        <div className="flex-1">
          <div className="px-8 mt-5">
            <ProgressBar />
          </div>
          <div className="px-8">
            <PieChart score={score} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
