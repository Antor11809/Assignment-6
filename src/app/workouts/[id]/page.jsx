import React from 'react';


const WorkoutDetails = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(
    `https://api.abcz.workers.dev/api/fitlog/${id}`
  );

  const workout = await res.json();

  return (
   
<div className="mx-4 md:mx-10 lg:mx-20 my-10">

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-[#151819] rounded-xl p-5 md:p-10">

    {/* Left - Workout Image */}
    <div className="flex items-center justify-center">
      <img
        src={workout.image}
        alt={workout.name}
        className="w-full max-w-[500px] h-auto rounded-xl object-contain"
      />
    </div>

    {/* Right - Workout Details */}
    <div>
      <h1 className="text-3xl md:text-5xl font-bold uppercase mb-4 text-white">
        {workout.name}
      </h1>

      <p className="text-gray-400 mb-6">
        {workout.description}
      </p>

      {/* Muscle Groups */}
      <div className="flex flex-wrap gap-2 mb-8">
        {workout.muscleGroups.map((group) => (
          <span
            key={group}
            className="bg-[#C2F800]/10 text-[#C2F800] px-4 py-2 rounded-full text-xs font-semibold uppercase"
          >
            {group}
          </span>
        ))}
      </div>

      {/* Key Specs */}
      <div className="border border-white/10 rounded-xl p-5 mb-8">
        <h2 className="text-xl font-bold mb-5 text-white">
          KEY SPECS
        </h2>

        {[
          ["EQUIPMENT", workout.equipment],
          ["DIFFICULTY", workout.difficulty],
          ["SETS", workout.sets],
          ["REPS", workout.reps],
          ["DURATION", `${workout.duration} min`],
          ["CALORIES", `${workout.caloriesBurned} kcal`],
          ["RATING", workout.rating],
        ].map(([label, value]) => (
          <div
            key={label}
            className="flex justify-between gap-4 border-b border-white/10 py-3 last:border-0"
          >
            <span className="text-gray-400 text-sm">
              {label}
            </span>
            <span className="text-white font-medium text-right">
              {value}
            </span>
          </div>
        ))}
      </div>

      {/* Instructions */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-5 text-white">
          INSTRUCTIONS
        </h2>

        <ol className="space-y-4">
          {workout.instructions.map((step, index) => (
            <li key={index} className="flex items-start gap-4">
              <span className="bg-[#C2F800] text-black rounded-full w-8 h-8 shrink-0 flex items-center justify-center font-bold">
                {index + 1}
              </span>
              <p className="text-gray-300 pt-1">
                {step}
              </p>
            </li>
          ))}
        </ol>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3">
        <button className="bg-[#C2F800] text-black px-6 py-3 rounded-lg font-bold hover:bg-[#d5ff4d] transition">
          + Add to today's plan
        </button>

        <button className="border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:border-[#C2F800] transition">
          ♡ Save for later
        </button>
      </div>

    </div>
  </div>
</div>

  );
};

export default WorkoutDetails;
