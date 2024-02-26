import { useState } from "react";
import { Text } from "../components/Text";

export const Home = () => {
  const [searchTerm, setSearchTerm] = useState()

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <div className="2xl:container 2xl:mx-auto">
        <div className=" w-full pt-36 flex justify-center items-center">
          <div className="h-56 w-full">
            <div className=" flex justify-center items-center">
              <div className="pb-5 pt-4 md:w-1/2">
                <h1 className="font-extralight text-center pb-10 text-9xl	 capitalize ">
                  Evento
                </h1>
                <div className="w-full flex justify-center items-center">
                  <Text
                    placeholder="What Service Are You Looking For...?"
                    type="search"
                    value={searchTerm}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            <div className="container max-w-screen-xl mx-auto md:px-4vflex px-10 py-2 pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className=" overflow-hidden rounded-xl relative">
                <img
                  alt="gallery"
                  className="block h-full w-full object-cover object-center hover:transform hover:scale-110 hover:opacity-30 transition duration-300 "
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                />
                <div className=" object-cover object-center hover:transform hover:scale-110 transition duration-300 absolute top-0 left-0 w-full h-full flex items-center justify-center">
                  <p className="text-white font-bold text-4xl uppercase">
                    {" "}
                    CATERING
                  </p>
                </div>
              </div>
              <div className="overflow-hidden rounded-xl relative">
                <img
                  alt="gallery"
                  className="opacity-96 block h-full w-full object-cover object-center hover:transform hover:scale-110 transition duration-300"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
                />
                <div className=" object-cover object-center hover:transform hover:scale-110 transition duration-300 absolute top-0 left-0 w-full h-full flex items-center justify-center">
                  <p className="text-white font-bold text-4xl uppercase">
                    DECARAION
                  </p>
                </div>
              </div>

              <div className=" overflow-hidden rounded-xl relative">
                <img
                  alt="gallery"
                  className="block h-full w-full object-cover object-center hover:transform hover:scale-110 transition duration-300 "
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
                />
                <div className=" object-cover object-center hover:transform hover:scale-110 transition duration-300  absolute top-0 left-0 w-full h-full flex items-center justify-center">
                  <p className="text-white font-bold text-4xl uppercase">
                    BAND SET
                  </p>
                </div>
              </div>

              <div className=" overflow-hidden rounded-xl relative">
                <img
                  alt="gallery"
                  className="block h-full w-full object-cover object-center hover:transform hover:scale-110 transition duration-300 "
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
                />
                <div className=" object-cover object-center hover:transform hover:scale-110 transition duration-300  absolute top-0 left-0 w-full h-full flex items-center justify-center">
                  <p className="text-white font-bold text-4xl uppercase">
                    MUSIC
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
