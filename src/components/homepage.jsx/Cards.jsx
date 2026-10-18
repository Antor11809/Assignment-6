
import React from "react";
import WorkoutCard from "../shared/WorkoutCard";

const gymItems = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = await res.json();
  return data;
};

const Cards = async () => {
  const accessItems = await gymItems();

  return (
    <div className="mx-4 md:mx-10 lg:mx-20 my-16">
      <h1 className="text-4xl font-bold mb-2">THE LIBRARY</h1>
      <p className="text-gray-400 mb-8">
        Twelve lifts covering every major muscle group.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {accessItems.map((item, ind) => {
          return (
          <WorkoutCard key={ind} item={item}/>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
