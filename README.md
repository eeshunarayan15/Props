# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Props:-props use hote hai aapke componenets ko resuable bannaneke liye consider karo aapke paas buttion hai aur aapko uss button ko alag alag jagah dalna hai app mai ,to aap button component bannaye uska data hard coded karne ke jagah parent componenet se send kar de and child component mai use kar paaye


humara data actually contains app component mai hoga aur hum usse props ke throuh pass karenge card mai ,har card mai add friend button hoga humein add friend button click hone par alert dene hai

import React from 'react'
import Card from './Components/Card'
import ShowCard from './Components/ShowCard';
============================================================================================================================================================
const App = () => {
  const data = [
    {
      name: "john",
      profession: "Operational Engineer",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Amit",
      profession: "Backend Engineer",
      image:
        "https://images.unsplash.com/photo-1573496799822-b0557c9e2f41?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Rahul",
      profession: "Full Stack Engineer",
      image:
        "https://images.unsplash.com/photo-1573164573938-c9a3db2e84ff?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Sumit",
      profession: "Software Engineer",
      image:
        "https://images.unsplash.com/photo-1573166953836-06864dc70a21?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Aman",
      profession: "Frontend Developer",
      image:
        "https://images.unsplash.com/photo-1573165850883-9b0e18c44bd2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "john",
      profession: "Operational Engineer",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Amit",
      profession: "Backend Engineer",
      image:
        "https://images.unsplash.com/photo-1573496799822-b0557c9e2f41?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Rahul",
      profession: "Full Stack Engineer",
      image:
        "https://images.unsplash.com/photo-1573164573938-c9a3db2e84ff?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Sumit",
      profession: "Software Engineer",
      image:
        "https://images.unsplash.com/photo-1573166953836-06864dc70a21?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Aman",
      profession: "Frontend Developer",
      image:
        "https://images.unsplash.com/photo-1573165850883-9b0e18c44bd2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "john",
      profession: "Operational Engineer",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Amit",
      profession: "Backend Engineer",
      image:
        "https://images.unsplash.com/photo-1573496799822-b0557c9e2f41?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Rahul",
      profession: "Full Stack Engineer",
      image:
        "https://images.unsplash.com/photo-1573164573938-c9a3db2e84ff?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Sumit",
      profession: "Software Engineer",
      image:
        "https://images.unsplash.com/photo-1573166953836-06864dc70a21?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Aman",
      profession: "Frontend Developer",
      image:
        "https://images.unsplash.com/photo-1573165850883-9b0e18c44bd2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <>
      <div className="w-full h-screen overflow-hidden bg-slate-100">
        <divv className=" flex flex-wrap pt-5 gap-2 justify-center ">
          {data.map((item, index) => (
            <ShowCard
              image={item.image}
              name={item.name}
              profession={item.profession}
            />
          ))}
        </divv>
      </div>
      {/* <Card text="Know More" color="bg-blue-600" /> */}
      {/* <Card text="Download" color="bg-red-600" /> */}
    </>
  );
}

export default App




============================================================================================================================================================




import React from 'react'

const ShowCard = ({ image, name, profession }) => {
  console.log(image);
  return (
    <div className="w-52 mx-3 bg-zinc-200 p-2 rounded-xl overflow-hidden ">
      <div className="w-full h-32 bg-white-200 img-container ">
        <img className="w-full h-full  object-top object-scale-down" src={image} alt="" />
      </div>
      <div className="w-full flex flex-col gap-2 text-center text-container">
        <h1 className="text-xl font-semibold">{name}</h1>
        <h5 className="text-xs">{profession}</h5>
        <button className="px-3 py-1 text-xs text-white bg-blue-500 font-semibold rounded-md">
          Add Friend
        </button>
      </div>
    </div>
  );
};

export default ShowCard
===========
const handleFriendsButtion = (currentindex) => {
    setRealData((previous) => (
      previous.map((item, index) => {
        if (index === currentindex) {
          return { ...item, friends: !item.friends };
        }
        return item;
      })
    ))
  }
  ==================================
  ====================================







