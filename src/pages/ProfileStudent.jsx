import React, { useState } from "react";
import { student } from "../TESTDATA/User";
import { Postblock } from "../components";

const ProfileStudent = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedPostIndex, setSelectedPostIndex] = useState(null);

  const toggleModal = (index) => {
    setIsModalOpen(!isModalOpen);
    setSelectedPostIndex(index);
    console.log("S");
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    console.log("Selected file:", file);
    setSelectedImage(file);
  };
  const handlePostClick = (index) => {
    setSelectedPostIndex(index);
  };

  const handleClosePostblock = () => {
    setSelectedPostIndex(null);
  };
  const handleUploadClick = () => {
    document.getElementById("avatarInput").click();
  };

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
              className="w-40 h-40 rounded-full hover:bg-black hover:opacity-50"
              onClick={handleUploadClick}
            />
            {/* <div class="absolute inset-0 "></div> */}
            <input
              type="file"
              id="avatarInput"
              style={{ display: "none" }}
              onChange={handleFileUpload}
            />
          </div>
          <div className="ml-5">
            <h2 className="text-xl font-bold">{student.name} #{student.ratingFaculty}</h2>
            <br />
            <p className="text-gray-600"> Факультет: {student.faculty}</p>
            <p className="text-gray-600">Кафедра: {student.department}</p>
            <p className="text-gray-600">Поток: {student.flow}</p>
            <p className="text-gray-600">Группа: {student.group}</p>
          </div>
        </div>

        {/* Рейтинг, Звезды и достижения */}
        <div className="ml-auto px-10 right-0">
          {/* <div className="mb-4">
            {" "}
            <h3 className="text-lg font-semibold">
              Место в рейтинге: {student.ratingFaculty}
            </h3>
          </div> */}

          <div className="mb-4">
            <h3 className="flex flex-row text-lg font-semibold"> 
            
              <img
                src="../../public/star.png"
                alt="Звезда"
                className="w-6 h-6 mr-2"
              /> 
              {student.stars}
            </h3>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold">Достижения:</h3>
            <div className="flex items-center">
              <img
                src="../../public/science.png"
                alt="Наука"
                className="w-6 h-6 mr-2"
              />
              <p className="text-gray-600">{student.science.length}</p>
            </div>
            {/* Другие разделы достижений аналогично */}
          </div>
        </div>
        
      </div>

      <hr class="h-px my-8 bg-gray-200 border-0"></hr>

      
      <div className="flex flex-col grid justify-items-center my-4">
        <h3 className="text-lg font-semibold mb-4">Фотографии публикаций</h3>
        <div className="grid grid-cols-1 gap-4 max-w-xl">
          {student.publication.map((post, index) => (
            <div key={index}>
              {selectedPostIndex === index ? (
                <div
                  className="flex justify-center z-50  w-full h-full "
                  onClick={handleClosePostblock}
                >
                  <div
                    className="max-w-2xl z-50 shadow bg-white p-8 rounded-lg "
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Postblock
                      publication={post}
                      onClose={handleClosePostblock}
                    />
                  </div>
                </div>
              ) : (
                <div
                  key={index}
                  className="w-full h-auto cursor-pointer hover:opacity-50 "
                  onClick={() => handlePostClick(index)}
                >
                  {post.image && (
                    <img
                      src={post.image}
                      alt={`Фото публикации ${index + 1}`}
                    />
                  )}
                  {!post.image && (
                    <div className="bg-gray-300 w-full h-80 flex justify-center items-center">
                      Фото отсутствует
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileStudent;
