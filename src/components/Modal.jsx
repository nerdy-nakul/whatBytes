import React, { useState } from "react";
import Image from "next/image";

const Modal = ({ onClose, onSave }) => {
  // State for form inputs
  const [stats, setStats] = useState({
    rank: "",
    percentile: "",
    score: "",
  });

  // State for form validation errors
  const [errors, setErrors] = useState({});

  // State for tracking touched fields
  const [touched, setTouched] = useState({
    rank: false,
    percentile: false,
    score: false,
  });

  // Function to validate inputs
  const validateInputs = (fieldName, value) => {
    let newErrors = { ...errors };

    switch (fieldName) {
      case "rank":
        if (!value) {
          newErrors.rank = "Rank is required";
        } else if (isNaN(value) || value < 1) {
          newErrors.rank = "Rank must be a positive number";
        } else {
          delete newErrors.rank;
        }
        break;

      case "percentile":
        if (!value) {
          newErrors.percentile = "Percentile is required";
        } else if (isNaN(value) || value < 0 || value > 100) {
          newErrors.percentile = "Percentile must be between 0 and 100";
        } else {
          delete newErrors.percentile;
        }
        break;

      case "score":
        if (!value) {
          newErrors.score = "Score is required";
        } else if (isNaN(value) || value < 0 || value > 15) {
          newErrors.score = "Score must be between 0 and 15";
        } else {
          delete newErrors.score;
        }
        break;

      default:
        break;
    }

    setErrors(newErrors);
  };

  // Handle form submission
  const handleSave = (e) => {
    e.preventDefault();

    // Validate all fields
    validateInputs("rank", stats.rank);
    validateInputs("percentile", stats.percentile);
    validateInputs("score", stats.score);

    if (Object.keys(errors).length > 0) {
      return;
    }

    onSave(stats); // Call the onSave function to pass updated stats
    onClose(); // Close the modal after saving
  };

  // Handle input change
  const handleChange = (field) => (e) => {
    const { value } = e.target;
    setStats((prev) => ({ ...prev, [field]: value }));
    validateInputs(field, value); // Validate on change
  };

  // Handle input focus
  const handleFocus = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  return (
    <div className="p-5 md:p-0 flex justify-center items-center fixed inset-0 bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-6 md:p-8 rounded-lg w-full max-w-2xl md:max-w-3xl relative">
        <div className="flex justify-between items-center mb-4 md:mb-6">
          <div className="text-xl md:text-2xl font-bold">Update Scores</div>
          <div className="w-12 h-12 md:w-16 md:h-16">
            <Image
              src="https://res.cloudinary.com/debw7vpqa/image/upload/v1721431123/html_apn4wf.jpg"
              alt="HTML logo"
              width={70}
              height={70}
            />
          </div>
        </div>
        <form className="space-y-4 md:space-y-6 flex flex-col gap-5">
          {/* Rank Input */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <label className="text-base md:text-lg text-black mb-1 md:mb-0">
              <span className="bg-blue-800 text-xs md:text-sm text-white rounded-full px-2 py-1 mr-1">
                1
              </span>{" "}
              Update your <span className="font-bold">Rank</span>
            </label>
            <div className="w-full md:max-w-xs">
              <input
                type="number"
                value={stats.rank}
                onChange={handleChange("rank")}
                onFocus={() => handleFocus("rank")}
                className="w-full font-bold border border-gray-300 rounded p-2 mb-1"
              />
              {touched.rank && errors.rank && (
                <p className="text-red-500 text-sm">{errors.rank}</p>
              )}
            </div>
          </div>

          {/* Percentile Input */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <label className="text-base md:text-lg text-black mb-1 md:mb-0">
              <span className="bg-blue-800 mr-1 text-xs md:text-sm text-white rounded-full px-2 py-1">
                2
              </span>{" "}
              Update your <span className="font-bold">Percentile</span>
            </label>
            <div className="w-full md:max-w-xs">
              <input
                type="number"
                value={stats.percentile}
                onChange={handleChange("percentile")}
                onFocus={() => handleFocus("percentile")}
                className="w-full font-bold border border-gray-300 rounded p-2 mb-1"
              />
              {touched.percentile && errors.percentile && (
                <p className="text-red-500 text-sm">{errors.percentile}</p>
              )}
            </div>
          </div>

          {/* Score Input */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <label className="text-base md:text-lg text-black mb-1 md:mb-0">
              <span className="bg-blue-800 text-xs md:text-sm text-white rounded-full px-2 py-1">
                3
              </span>{" "}
              Update your{" "}
              <span className="font-bold">Current Score (out of 15)</span>
            </label>
            <div className="w-full md:max-w-xs">
              <input
                type="number"
                value={stats.score}
                onChange={handleChange("score")}
                onFocus={() => handleFocus("score")}
                className="w-full font-bold border border-gray-300 rounded p-2 mb-1"
              />
              {touched.score && errors.score && (
                <p className="text-red-500 text-sm">{errors.score}</p>
              )}
            </div>
          </div>
        </form>

        {/* Modal Buttons */}
        <div className="flex justify-end mt-4 md:mt-6 space-x-3 md:space-x-4">
          <button
            className="bg-white border-blue-800 border-2 font-bold text-blue-800 rounded px-3 py-2 md:px-4 md:py-2"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-blue-800 text-white rounded font-bold px-3 py-2 md:px-4 md:py-2"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
