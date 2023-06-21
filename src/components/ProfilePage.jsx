import React, { useRef, useState } from "react";

const ProfilePage = () => {
  const [profileImage, setProfileImage] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState("");
  const profileImageRef = useRef(null);

  async function validateImage(file) {
    const validRes = await validateResolution(file);

    if (!validRes) {
      setError("please insert at least 180x180px.");
      return false;
    }

    if (file.size > 3000000) {
      setError("Too large, Max size 3 MBs");
      return false;
    }

    if (file.type.match(/\/(png|svg)$/) === null) {
      setError("Incorrect file type");
      return false;
    }

    setProfileImage(URL.createObjectURL(file));
    setError(false);
    return true;
  }

  function validateResolution(file) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (onLoadEvent) => {
        const image = new Image();
        image.src = onLoadEvent.target.result;
        image.onload = () => {
          const { height, width } = image;
          if (height < 180 || width < 180) {
            resolve(false);
          } else {
            resolve(true);
          }
        };
      };
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const file = profileImageRef.current.files[0];
    if (file) {
      const valid = validateImage(file);
      valid.then((item) => setIsValid(item));
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          htmlFor="profilePicture_input"
        >
          Upload file
        </label>
        <input
          className="block w-1/5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          name="profilePicture_input"
          id="profilePicture_input"
          type="file"
          accept="image/svg, image/png"
          ref={profileImageRef}
        />
        <p
          className="mt-1 text-sm font-semibold text-gray-700 dark:text-gray-500"
          id="profilePicture_input_help"
        >
          SVG, PNG(MIN. 180x180px).
        </p>
        <button
          type="submit"
          className="p-2 mt-4 text-white bg-blue-600 border rounded"
        >
          Submit
        </button>
      </form>
      {error && <h2 className="font-semibold text-red-500">{error}</h2>}
      <br />
      <br />
      <br />
      {isValid && <img src={profileImage} alt="alt" />}
    </>
  );
};

export default ProfilePage;
