
"use client";

import { WorkoutContext } from "@/context/WorkoutContext";
import React, { useContext } from "react";

const Page = () => {
  const { todayPlan, savedWorkouts } = useContext(WorkoutContext);

  console.log("todayPlan", todayPlan, savedWorkouts, "savedWorkouts");

  return (
    <div>
      {/* Heading */}
      <div className="mt-10 ml-10">
        <h1 className="font-bold text-2xl">MY PLAN ❤️</h1>
        <p className="text-sm text-gray-400">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-3 bg-[#151819] border border-white/10 rounded-xl p-5 mt-5 ml-10 mr-10">
        <div className="border-r border-white/10">
          <p className="text-xs text-gray-400">Exercises</p>
          <h2 className="text-2xl font-bold text-[#C2F800]">
            {todayPlan.length}
          </h2>
        </div>

        <div className="border-r border-white/10 pl-5">
          <p className="text-xs text-gray-400">Minutes</p>
          <h2 className="text-2xl font-bold text-white">
            {todayPlan.reduce(
              (total, workout) => total + (Number(workout.duration) || 0),
              0
            )}
          </h2>
        </div>

        <div className="pl-5">
          <p className="text-xs text-gray-400">Calories</p>
          <h2 className="text-2xl font-bold text-white">
            {todayPlan.reduce(
              (total, workout) =>
                total + (Number(workout.caloriesBurned) || 0),
              0
            )}
          </h2>
        </div>
      </div>

      {/* DaisyUI Tabs */}
      <div className="tabs tabs-lift mx-4 md:mx-10 mt-5">

        {/* Today's Plan Tab */}
        <input
          type="radio"
          name="my_tabs_3"
          className="tab mb-5"
          aria-label={`Today's Plan (${todayPlan.length})`}
          defaultChecked
        />

        <div className="tab-content bg-base-100 border-base-300 p-4 md:p-6">

          {todayPlan.length === 0 ? (
            <p className="text-gray-400 text-center py-10">
              No workouts added yet.
            </p>
          ) : (
            todayPlan.map((workout, index) => (
              <div
                key={workout.id ?? index}
                className="flex flex-col sm:flex-row sm:items-center gap-4 bg-[#151819] border border-white/10 rounded-xl p-3 md:p-4 mb-3"
              >
                {/* Workout Image */}
                <img
                  src={workout.image}
                  alt={workout.name}
                  className="w-full sm:w-28 h-36 sm:h-20 rounded-lg object-cover"
                />

                {/* Workout Information */}
                <div className="flex-1">
                  <h2 className="text-white text-sm font-bold uppercase">
                    {workout.name}
                  </h2>

                  <p className="text-gray-400 text-xs mt-1">
                    {workout.muscleGroups?.join(", ")}
                  </p>

                  <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-gray-300">
                    <span>⏱ {workout.duration} min</span>
                    <span>🔥 {workout.caloriesBurned} kcal</span>
                    <span>⭐ {workout.rating}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Saved Tab */}
        <input
          type="radio"
          name="my_tabs_3"
          className="tab mb-5"
          aria-label={`Saved (${savedWorkouts.length})`}
        />

        <div className="tab-content bg-base-100 border-base-300 p-4 md:p-6">

          {savedWorkouts.length === 0 ? (
            <p className="text-gray-400 text-center py-10">
              No saved workouts found.
            </p>
          ) : (
            savedWorkouts.map((workout, index) => (
              <div
                key={workout.id ?? index}
                className="flex flex-col sm:flex-row sm:items-center gap-4 bg-[#151819] border border-white/10 rounded-xl p-3 md:p-4 mb-3"
              >
                {/* Workout Image */}
                <img
                  src={workout.image}
                  alt={workout.name}
                  className="w-full sm:w-28 h-36 sm:h-20 rounded-lg object-cover"
                />

                {/* Workout Information */}
                <div className="flex-1">
                  <h2 className="text-white text-sm font-bold uppercase">
                    {workout.name}
                  </h2>

                  <p className="text-gray-400 text-xs mt-1">
                    {workout.muscleGroups?.join(", ")}
                  </p>

                  <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-gray-300">
                    <span>⏱ {workout.duration} min</span>
                    <span>🔥 {workout.caloriesBurned} kcal</span>
                    <span>⭐ {workout.rating}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};

export default Page;
