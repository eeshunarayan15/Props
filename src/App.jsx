import React, { useState } from 'react'
import PhotoCard from './Components/PhotoCard';

const App = () => {
    const data = [
      {
        name: "john Doe",
        profession: "Operational Engineer",
        image:
          "https://images.unsplash.com/flagged/photo-1567514650496-be446ae38bdb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        friends: false,
      },
      {
        name: "Amit Kumar",
        profession: "Backend Engineer",
        image:
          "https://images.unsplash.com/photo-1548412542-fe1d1181336c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        friends: false,
      },
      {
        name: "Rahul Kumar",
        profession: "Full Stack Engineer",
        image:
          "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVuJTIwb2ZmaWNlfGVufDB8fDB8fHwy",
        friends: false,
      },
      {
        name: "Sumit Kuamr",
        profession: "Software Engineer",
        image:
          "https://images.unsplash.com/photo-1579389082947-e54d8e911928?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        friends: false,
      },
      {
        name: "Aman Kumar",
        profession: "Frontend Developer",
        image:
          "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        friends: false,
      },
      {
        name: "Puja Kumari",
        profession: "Operational Engineer",
        image:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        friends: false,
      },
      {
        name: "Nikata kumari",
        profession: "Backend Engineer",
        image:
          "https://images.unsplash.com/photo-1573496799822-b0557c9e2f41?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        friends: false,
      },
      {
        name: "Neha Kumari",
        profession: "Full Stack Engineer",
        image:
          "https://images.unsplash.com/photo-1573164573938-c9a3db2e84ff?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        friends: false,
      },
      {
        name: "Puja Kumari",
        profession: "Software Engineer",
        image:
          "https://images.unsplash.com/photo-1573166953836-06864dc70a21?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        friends: false,
      },
      {
        name: "Sweta Kumari",
        profession: "Frontend Developer",
        image:
          "https://images.unsplash.com/photo-1573165850883-9b0e18c44bd2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        friends: false,
      },
      {
        name: "Divya Kumari",
        profession: "Operational Engineer",
        image:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        friends: false,
      },
      {
        name: "Ekta Raj",
        profession: "Backend Engineer",
        image:
          "https://images.unsplash.com/photo-1573496799822-b0557c9e2f41?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        friends: false,
      },
      {
        name: "Puja Kumari",
        profession: "Full Stack Engineer",
        image:
          "https://images.unsplash.com/photo-1573164573938-c9a3db2e84ff?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        friends: false,
      },
      {
        name: "Neha Kumari",
        profession: "Software Engineer",
        image:
          "https://images.unsplash.com/photo-1573166953836-06864dc70a21?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        friends: false,
      },
      {
        name: "Sweta Kumari",
        profession: "Frontend Developer",
        image:
          "https://images.unsplash.com/photo-1573165850883-9b0e18c44bd2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        friends: false,
      },
    ];
    const [realdata, setRealData] = useState(data);

    const hand = (currentindex) => {
      setRealData((previous) => {
        return previous.map((item, index) => {
          if (index === currentindex) {
            return { ...item, friends: !item.friends };
          }
          return item;
        });
      });
    };


  return (
    <div>
      <div className="w-full h-screen overflow-x-hiddenhidden bg-slate-100">
        <div className=" flex flex-wrap pt-5 gap-2 justify-center ">
          {realdata.map((item, index) => (
            <PhotoCard
              item={item}
              index={index}
              key={index}
              handleClick={hand}
            />
          ))}
        </div>
      </div>
      {/* <Card text="Know More" color="bg-blue-600" /> */}
      {/* <Card text="Download" color="bg-red-600" /> */}
    </div>
  );
}

export default App