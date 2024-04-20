import React, { useRef, useState } from "react";
import { FaStar } from "react-icons/fa";
import { GrAchievement } from "react-icons/gr";
import { FaArrowLeft, FaArrowRight, FaPenAlt } from "react-icons/fa";
import { student } from "../TESTDATA/User";
import { PostBlock } from "../components";

const ProfileStudent = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  const [selectedPostIndex, setSelectedPostIndex] = useState<number[]>([]);
  const [isHivered, setIsHobered] = useState<boolean>(false);
  console.log(isHivered);

  const descRef = useRef<HTMLDivElement>(null);
  console.log(descRef);
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };
  const handlePostClick = (id) => {
    // setSelectedPostIndex(index);
    if (selectedPostIndex.includes(id)) {
      setSelectedPostIndex(selectedPostIndex.filter((index) => index !== id));
    } else {
      setSelectedPostIndex([...selectedPostIndex, id]);
    }
    console.log(selectedPostIndex);
  };

  // const handleClosePostblock = () => {
  //   setSelectedPostIndex(null);
  // };

  const handleUploadClick = () => {
    document.getElementById("avatarInput").click();
  };
  const goToPrevSlide = () => {
    const newIndex =
      (currentIndex - 1 + student.publication.length) %
      student.publication.length;
    setCurrentIndex(newIndex);
  };

  const goToNextSlide = () => {
    const newIndex = (currentIndex + 1) % student.publication.length;
    setCurrentIndex(newIndex);
  };
  const limitedStudents = student.publication.slice(
    currentIndex,
    currentIndex + 3
  );
  return (
    <div className="p-4 bg-white rounded-lg relative ">
      <div className="flex flex-row mb-4">
        {/* Аватарка, Имя идругая инфа  */}
        <div className="flex flex-row mb-4 mr-auto left-0">
          <div className="relative">
            <img
              src={
                selectedImage
                  ? URL.createObjectURL(selectedImage)
                  : student.avatar
              }
              alt="Фото профиля"
              className="w-40 h-40 rounded-full hover:bg-black hover:opacity-50 cursor-pointer"
              onClick={handleUploadClick}
            />
            <input
              type="file"
              id="avatarInput"
              style={{ display: "none" }}
              onChange={handleFileUpload}
            />
          </div>
          <div className="ml-5">
            <div className="flex flex-row items-center">
              <h2 className="text-xl font-bold">
                #{student.ratingFaculty} {student.name}
              </h2>
              <FaStar className="text-yellow-300 ml-2 " />
              <h2 className="text-xl font-bold">{student.stars}</h2>
            </div>
            <p className="text-gray-600">Факультет: {student.faculty}</p>
            <p className="text-gray-600">Кафедра: {student.department}</p>
            <p className="text-gray-600">Поток: {student.flow}</p>
            <p className="text-gray-600">Группа: {student.group}</p>
          </div>
        </div>
        <div
          className="text-gray-600 w-1/3 transition-all hover:opacity-50 relative cursor-pointer"
          ref={descRef}
          onMouseEnter={() => setIsHobered(true)}
          onMouseLeave={() => setIsHobered(false)}
        >
          <span className="font-bold cursor-pointer">О себе:</span>{" "}
          <textarea
            name=""
            id=""
            className="appearance-none border-none  resize-none size-full p-0 text-sm focus:border-slate-50"
          >
            {student.description}
          </textarea>
          {isHivered && (
            <div className="absolute top-1/2 left-1/2 w-20 ">
              <FaPenAlt className="opacity-1 " />
            </div>
          )}
        </div>

        <div className="ml-auto px-10 right-0">
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Достижения:</h3>
            <div className="grid grid-cols-2 items-center justify-between gap-4">
              <div className="flex  items-center justify-around cursor-pointer">
                <img
                  src="../../public/science.png"
                  className="text-xl mr-2 max-w-10"
                />
                <h1 className="text-gray-600 text-xl">
                  {student.science.length}
                </h1>
              </div>
              <div className="flex  items-center  justify-around cursor-pointer">
                <img
                  src="../../public/sport.png"
                  className="text-xl mr-2 max-w-10"
                />
                <h1 className="text-gray-600 text-xl">
                  {student.science.length}
                </h1>
              </div>
              <div className="flex  items-center w-full justify-around cursor-pointer">
                <img
                  src="../../public/creativity.png"
                  className="text-xl mr-2 max-w-10"
                />
                <h1 className="text-gray-600 text-xl">
                  {student.science.length}
                </h1>
              </div>
              <div className="flex  items-center w-full justify-around cursor-pointer">
                <img
                  src="../../public/volunteering.png"
                  className="text-xl mr-2 max-w-10"
                />
                <h1 className="text-gray-600 text-xl">
                  {student.science.length}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="h-px my-8 bg-gray-200 border-0"></hr>

      <div className="flex-col grid justify-items-center my-4">
        <h3 className="text-lg font-semibold mb-4">Фотографии публикаций</h3>
        <div className="grid grid-cols-3 gap-4 relative">
          {limitedStudents.map((student) => (
            <div
              key={student.id}
              className="relative flex items-center transition-all"
            >
              {selectedPostIndex.includes(student.id) ? (
                <PostBlock
                  publication={student}
                  handleClick={handlePostClick}
                />
              ) : (
                <img
                  src={student.image}
                  alt={`Student ${student.id}`}
                  className="w-full h-auto cursor-pointer"
                  onClick={() => handlePostClick(student.id)}
                />
              )}
            </div>
          ))}
          <button
            className="absolute top-1/2 -left-3 transform -translate-y-1/2 bg-black/50 text-white px-4 py-2 rounded-lg"
            onClick={goToPrevSlide}
          >
            <FaArrowLeft />
          </button>
          <button
            className="absolute top-1/2 -right-3 transform -translate-y-1/2 bg-black/50 text-white px-4 py-2 rounded-lg"
            onClick={goToNextSlide}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileStudent;
