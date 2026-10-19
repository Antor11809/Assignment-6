
import React from "react";

const WorkoutDetails = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(
    `https://api.abcz.workers.dev/api/fitlog/${id}`
  );

  const workout = await res.json();

  return (
    <div className="mx-4 md:mx-10 lg:mx-20 my-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-[#151819] rounded-xl p-5 md:p-7 items-start">

        {/* Workout Image */}
        <div className="w-full">
          <img
            src={workout.image}
            alt={workout.name}
            className="w-full rounded-xl object-cover"
          />
        </div>

        {/* Workout Details */}
        <div className="w-full">

          {/* Exercise Name */}
          <h1 className="text-2xl md:text-3xl font-bold uppercase leading-tight text-white mb-2">
            {workout.name}
          </h1>

          {/* Description */}
          <p className="text-gray-400 text-sm leading-5 mb-3">
            {workout.description}
          </p>

          {/* Muscle Groups */}
          <div className="flex flex-wrap gap-2 mb-4">
            {workout.muscleGroups?.map((group) => (
              <span
                key={group}
                className="bg-[#c7f329] text-black px-3 py-1 rounded-full text-[11px] font-semibold uppercase"
              >
                {group}
              </span>
            ))}
          </div>

          {/* Key Specs */}
          <div className="border border-white/10 rounded-lg p-3 mb-4">
            <h2 className="text-base font-bold text-white mb-3">
              KEY SPECS
            </h2>

            <div className="border-t border-black/10 grid grid-cols-2 gap-x-5 gap-y-3">
              {[
                ["EQUIPMENT", workout.equipment],
                ["DIFFICULTY", workout.difficulty],
                ["SETS", workout.sets],
                ["REPS", workout.reps],
                ["DURATION", `${workout.duration} min`],
                ["CALORIES", `${workout.caloriesBurned} kcal`],
                ["RATING",`⭐ ${workout.rating}`],
              ].map(([label, value]) => (
                <div key={label}
                 className="border-b border-white/10 py-3"
                >
                  <p className="  text-gray-500 text-[10px] uppercase">
                    {label}
                  </p>
                  <p className="text-white text-sm font-medium">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Instructions */}
          <div className="mb-4">
            <h2 className="text-base font-bold text-white mb-3">
              INSTRUCTIONS
            </h2>

            <ol className="space-y-2">
              {workout.instructions?.map((step, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2"
                >
                  <span className="rounded-full w-5 h-5 shrink-0 flex items-center justify-center text-[11px] font-bold">
                    {index + 1}
                  </span>

                  <p className="text-gray-300 text-xs leading-5">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-2 mt-4">
            <button className="bg-[#C2F800] text-black px-4 py-2 rounded-lg text-xs font-bold hover:bg-[#d5ff4d] transition">
              ➕ Add to today's plan
            </button>

            <button className="border border-white/30 text-white px-4 py-2 rounded-lg text-xs font-semibold hover:border-[#C2F800] transition">
              💾 Save for later
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WorkoutDetails;
