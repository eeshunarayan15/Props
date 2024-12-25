import React from 'react'

const PhotoCard = ({ item, handleClick, index }) => {
    const { name, profession, image } = item;
  return (
    <div className="w-52 mx-3 bg-zinc-200 p-2 rounded-xl overflow-x-hidden  ">
      <div className="w-full h-32 bg-white-200 img-container ">
        <img
          className="w-full h-full  object-top object-scale-down"
          src={image}
          alt=""
        />
      </div>
      <div className="w-full flex flex-col gap-2 text-center text-container">
        <h1 className="text-xl font-semibold">{name}</h1>
        <h5 className="text-xs">{profession}</h5>
        <button
          onClick={() => handleClick(index)}
          className={`px-3 py-1 text-xs text-white ${
            item.friends ? "bg-red-400" : "bg-green-400"
          } font-semibold rounded-md`}
        >
          {item.friends ? "Unfriend" : "Add Friend"}
        </button>
      </div>
    </div>
  );
}

export default PhotoCard