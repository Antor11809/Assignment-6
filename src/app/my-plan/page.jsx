
"use client";

import { WorkoutContext } from "@/context/WorkoutContext";
import React, { useContext, useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";

const Page = () => {
  const {
    todayPlan,
    setTodayPlan,
    savedWorkouts,
    setSavedWorkouts,
  } = useContext(WorkoutContext);

  const [completedWorkouts, setCompletedWorkouts] = useState([]);
  const [sortBy, setSortBy] = useState("");

  // Sorting Function
  const sortWorkouts = (workouts) => {
    const workoutList = workouts.map((workout, index) => ({
      workout,
      originalIndex: index,
    }));

    if (sortBy === "duration") {
      workoutList.sort(
        (a, b) =>
          Number(b.workout.duration) - Number(a.workout.duration)
      );
    }

    if (sortBy === "calories") {
      workoutList.sort(
        (a, b) =>
          Number(b.workout.caloriesBurned) -
          Number(a.workout.caloriesBurned)
      );
    }

    if (sortBy === "rating") {
      workoutList.sort(
        (a, b) =>
          Number(b.workout.rating) - Number(a.workout.rating)
      );
    }

    return workoutList;
  };

  const sortedTodayPlan = sortWorkouts(todayPlan);
  const sortedSavedWorkouts = sortWorkouts(savedWorkouts);

  // Mark as Done
  const handleDone = (workout, index) => {
    const key = `${workout.id ?? workout.name}-${index}`;

    if (completedWorkouts.includes(key)) return;

    setCompletedWorkouts((prev) => [...prev, key]);
    toast.success(`${workout.name} completed!`);
  };

  // Remove from Today's Plan
  const handleRemovePlan = (index) => {
    setTodayPlan((prev) =>
      prev.filter((_, i) => i !== index)
    );

    setCompletedWorkouts([]);
    toast.success("Workout removed from today's plan");
  };

  // Remove from Saved
  const handleRemoveSaved = (index) => {
    setSavedWorkouts((prev) =>
      prev.filter((_, i) => i !== index)
    );

    toast.success("Workout removed from saved list");
  };

  return (
    <div className="w-full min-w-0 pb-10">

      {/* Heading */}
      <div className="mt-6 md:mt-10 mx-4 md:mx-10">
        <h1 className="font-bold text-xl sm:text-2xl text-white">
          MY PLAN ❤️
        </h1>
        <p className="text-xs sm:text-sm text-gray-400 mt-2">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-3 bg-[#151819] border border-white/10 rounded-xl p-3 sm:p-5 mt-5 mx-4 md:mx-10 gap-2 sm:gap-4">

        <div className="border-r border-white/10 min-w-0">
          <p className="text-[10px] sm:text-xs text-gray-400">
            Exercises
          </p>
          <h2 className="text-lg sm:text-2xl font-bold text-[#C2F800] mt-1">
            {todayPlan.length}
          </h2>
        </div>

        <div className="border-r border-white/10 pl-1 sm:pl-5 min-w-0">
          <p className="text-[10px] sm:text-xs text-gray-400">
            Minutes
          </p>
          <h2 className="text-lg sm:text-2xl font-bold text-white mt-1">
            {todayPlan.reduce(
              (total, workout) =>
                total + (Number(workout.duration) || 0),
              0
            )}
          </h2>
        </div>

        <div className="pl-1 sm:pl-5 min-w-0">
          <p className="text-[10px] sm:text-xs text-gray-400">
            Calories
          </p>
          <h2 className="text-lg sm:text-2xl font-bold text-white mt-1">
            {todayPlan.reduce(
              (total, workout) =>
                total + (Number(workout.caloriesBurned) || 0),
              0
            )}
          </h2>
        </div>

      </div>

      {/* Sort Dropdown */}
      <div className="flex justify-end mx-4 md:mx-10 mt-5 sm:mt-6">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="select select-success bg-[#151819] text-white text-xs sm:text-sm w-36 sm:w-44"
        >
          <option value="">Sort By</option>
          <option value="duration">Duration</option>
          <option value="calories">Calories</option>
          <option value="rating">Rating</option>
        </select>
      </div>

      {/* DaisyUI Tabs */}
      <div className="tabs tabs-lift mx-3 sm:mx-4 md:mx-10 mt-5 min-w-0">

        {/* Today's Plan Tab */}
        <input
          type="radio"
          name="my_tabs_3"
          className="tab mb-3 sm:mb-5 text-xs sm:text-sm"
          aria-label={`Today's Plan (${todayPlan.length})`}
          defaultChecked
        />

        <div className="tab-content bg-base-100 border-base-300 p-2 sm:p-4 md:p-6 min-w-0">

          {todayPlan.length === 0 ? (
            <p className="text-gray-400 text-center text-xs sm:text-sm py-10">
              No workouts added yet.
            </p>
          ) : (
            sortedTodayPlan.map(({ workout, originalIndex }) => {
              const key = `${workout.id ?? workout.name}-${originalIndex}`;
              const isDone = completedWorkouts.includes(key);

              return (
                <div
                  key={key}
                  className={`flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 bg-[#151819] border rounded-xl p-3 md:p-4 mb-3 transition min-w-0 ${
                    isDone
                      ? "border-[#C2F800]/50"
                      : "border-white/10"
                  }`}
                >
                  {/* Workout Image */}
                  <img
                    src={workout.image}
                    alt={workout.name}
                    className="w-full h-40 sm:w-28 sm:h-24 md:w-32 md:h-24 rounded-lg object-cover shrink-0"
                  />

                  {/* Workout Information */}
                  <div className="flex-1 min-w-0">
                    <h2
                      className={`text-sm sm:text-base font-bold uppercase break-words ${
                        isDone
                          ? "text-[#C2F800]"
                          : "text-white"
                      }`}
                    >
                      {workout.name}
                    </h2>

                    <p className="text-gray-400 text-xs mt-1">
                      {workout.muscleGroups?.join(", ")}
                    </p>

                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-2 text-[11px] sm:text-xs text-gray-300">
                      <span>⏱ {workout.duration} min</span>
                      <span>🔥 {workout.caloriesBurned} kcal</span>
                      <span>⭐ {workout.rating}</span>
                    </div>

                    {isDone && (
                      <p className="text-[#C2F800] text-xs font-bold mt-2">
                        ✓ Completed
                      </p>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto sm:shrink-0">

                    <Link
                      href={`/workouts/${workout.id}`}
                      className="border border-white/20 px-3 py-2 rounded-lg text-xs text-white hover:border-[#C2F800] transition text-center"
                    >
                      View Details
                    </Link>

                    <button
                      onClick={() => handleDone(workout, originalIndex)}
                      disabled={isDone}
                      className={`px-3 py-2 rounded-lg text-xs font-semibold transition ${
                        isDone
                          ? "bg-green-800 text-green-200 cursor-not-allowed"
                          : "bg-[#C2F800] text-black hover:bg-[#d5ff4d]"
                      }`}
                    >
                      {isDone ? "✓ Completed" : "✔ Mark as Done"}
                    </button>

                    <button
                      onClick={() => handleRemovePlan(originalIndex)}
                      className="text-gray-400 hover:text-red-400 text-xl px-2 transition"
                      title="Remove workout"
                      aria-label="Remove workout"
                    >
                      ×
                    </button>

                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Saved Tab */}
        <input
          type="radio"
          name="my_tabs_3"
          className="tab mb-3 sm:mb-5 text-xs sm:text-sm"
          aria-label={`Saved (${savedWorkouts.length})`}
        />

        <div className="tab-content bg-base-100 border-base-300 p-2 sm:p-4 md:p-6 min-w-0">

          {savedWorkouts.length === 0 ? (
            <p className="text-gray-400 text-center text-xs sm:text-sm py-10">
              No saved workouts found.
            </p>
          ) : (
            sortedSavedWorkouts.map(({ workout, originalIndex }) => (
              <div
                key={`${workout.id ?? workout.name}-${originalIndex}`}
                className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 bg-[#151819] border border-white/10 rounded-xl p-3 md:p-4 mb-3 min-w-0"
              >
                {/* Workout Image */}
                <img
                  src={workout.image}
                  alt={workout.name}
                  className="w-full h-40 sm:w-28 sm:h-24 md:w-32 md:h-24 rounded-lg object-cover shrink-0"
                />

                {/* Workout Information */}
                <div className="flex-1 min-w-0">
                  <h2 className="text-white text-sm sm:text-base font-bold uppercase break-words">
                    {workout.name}
                  </h2>

                  <p className="text-gray-400 text-xs mt-1">
                    {workout.muscleGroups?.join(", ")}
                  </p>

                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-2 text-[11px] sm:text-xs text-gray-300">
                    <span>⏱ {workout.duration} min</span>
                    <span>🔥 {workout.caloriesBurned} kcal</span>
                    <span>⭐ {workout.rating}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto sm:shrink-0">

                  <Link
                    href={`/workouts/${workout.id}`}
                    className="border border-white/20 px-3 py-2 rounded-lg text-xs text-white hover:border-[#C2F800] transition text-center"
                  >
                    View Details
                  </Link>

                  <button
                    onClick={() => handleRemoveSaved(originalIndex)}
                    className="text-gray-400 hover:text-red-400 text-xl px-2 transition"
                    title="Remove saved workout"
                    aria-label="Remove saved workout"
                  >
                    ×
                  </button>

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
