// import UploadButton from "./UploadButton";

// function UserUpload() {
//   return (
//     <div className="flex items-center justify-center flex-row gap-16 flex-wrap mt-10">
//       <UploadButton />
//       <UploadButton />
//       <UploadButton />
//       <UploadButton />
//       <UploadButton />
//       <UploadButton />

//     </div>
//   );
// }

// export default UserUpload;

import { useState } from "react";
import UploadButton from "./UploadButton";

function UserUpload() {
  // State to store selected files for each upload button
  const [selectedFiles, setSelectedFiles] = useState(Array(6).fill(null));

  // Function to handle file selection for a specific upload button
  const handleFileChange = (index, file) => {
    const updatedFiles = [...selectedFiles];
    updatedFiles[index] = file;
    setSelectedFiles(updatedFiles);
  };

  // Function to handle submission of all selected files together
  const handleSubmit = () => {
    // Perform the submission logic here, using the selectedFiles array
    console.log("Selected files:", selectedFiles);
  };

  return (
    <div className="flex items-center justify-center flex-row gap-16 flex-wrap mt-10">
      {selectedFiles.map((file, index) => (
        <UploadButton
          key={index}
          index={index}
          selectedFile={file}
          onFileChange={handleFileChange}
        />
      ))}
      <button
        className="btn btn-blue mt-4"
        onClick={handleSubmit}
        disabled={selectedFiles.some((file) => file === null)}
      >
        Submit
      </button>
    </div>
  );
}

export default UserUpload;
