import React, { useState } from "react";

const DetectionPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0d1b2a] text-white px-4">
      {/* Logo */}
      <img src="/logo.png" alt="MedAI Logo" className="w-40 mb-4" />

      {/* MEDAI Title */}
      <h1 className="text-4xl font-extrabold mb-6">MEDAI</h1>

      {/* Choose Photo Button */}
      <label className="cursor-pointer bg-green-600 hover:bg-green-700 transition px-6 py-2 rounded-md mb-6 text-white font-medium">
        Choose Photo
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
      </label>

      {/* Selected File Info */}
      {selectedFile && (
        <div className="bg-gray-800 p-4 rounded-md mb-4 w-full max-w-md text-center">
          <p>Selected File: {selectedFile.name}</p>
        </div>
      )}

      {/* Result Div */}
      <div className="bg-gray-700 p-6 rounded-md w-full max-w-md text-center">
        {selectedFile ? (
          <p>Result will be displayed here after processing</p>
        ) : (
          <p>No photo selected yet</p>
        )}
      </div>
    </div>
  );
};

export default DetectionPage;
