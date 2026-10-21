
import React, { Suspense } from "react";
import WorkoutCard from "../shared/WorkoutCard";

const gymItems = async () => {
  try {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");

    if (!res.ok) {
      throw new Error("Failed to fetch workouts");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("API Error:", error);
    return [];
  }
};

const WorkoutList = async () => {
  const accessItems = await gymItems();

  if (accessItems.length === 0) {
    return <p className="text-gray-400">No workouts found.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {accessItems.map((item, ind) => (
        <WorkoutCard key={item.id ?? ind} item={item} />
      ))}
    </div>
  );
};

const Cards = () => {
  return (
    <div className="mx-4 md:mx-10 lg:mx-20 my-16">
      <h1 className="text-4xl font-bold mb-2">THE LIBRARY</h1>

      <p className="text-gray-400 mb-8">
        Twelve lifts covering every major muscle group.
      </p>

      <Suspense fallback={<p>Loading workouts...</p>}>
        <WorkoutList />
      </Suspense>
    </div>
  );
};

export default Cards;
