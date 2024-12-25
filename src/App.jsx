import React, { useState } from 'react'
import PhotoCard from './Components/PhotoCard';

const App = () => {
    const data = [
      {
        name: "john",
        profession: "Operational Engineer",
        image:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        friends: false,
      },
      {
        name: "Amit",
        profession: "Backend Engineer",
        image:
          "https://images.unsplash.com/photo-1573496799822-b0557c9e2f41?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        friends: false,
      },
      {
        name: "Rahul",
        profession: "Full Stack Engineer",
        image:
          "https://images.unsplash.com/photo-1573164573938-c9a3db2e84ff?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        friends: false,
      },
      {
        name: "Sumit",
        profession: "Software Engineer",
        image:
          "https://images.unsplash.com/photo-1573166953836-06864dc70a21?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        friends: false,
      },
      {
        name: "Aman",
        profession: "Frontend Developer",
        image:
          "https://images.unsplash.com/photo-1573165850883-9b0e18c44bd2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        friends: false,
      },
      {
        name: "john",
        profession: "Operational Engineer",
        image:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        friends: false,
      },
      {
        name: "Amit",
        profession: "Backend Engineer",
        image:
          "https://images.unsplash.com/photo-1573496799822-b0557c9e2f41?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        friends: false,
      },
      {
        name: "Rahul",
        profession: "Full Stack Engineer",
        image:
          "https://images.unsplash.com/photo-1573164573938-c9a3db2e84ff?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        friends: false,
      },
      {
        name: "Sumit",
        profession: "Software Engineer",
        image:
          "https://images.unsplash.com/photo-1573166953836-06864dc70a21?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        friends: false,
      },
      {
        name: "Aman",
        profession: "Frontend Developer",
        image:
          "https://images.unsplash.com/photo-1573165850883-9b0e18c44bd2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        friends: false,
      },
      {
        name: "john",
        profession: "Operational Engineer",
        image:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        friends: false,
      },
      {
        name: "Amit",
        profession: "Backend Engineer",
        image:
          "https://images.unsplash.com/photo-1573496799822-b0557c9e2f41?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        friends: false,
      },
      {
        name: "Rahul",
        profession: "Full Stack Engineer",
        image:
          "https://images.unsplash.com/photo-1573164573938-c9a3db2e84ff?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        friends: false,
      },
      {
        name: "Sumit",
        profession: "Software Engineer",
        image:
          "https://images.unsplash.com/photo-1573166953836-06864dc70a21?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        friends: false,
      },
      {
        name: "Aman",
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