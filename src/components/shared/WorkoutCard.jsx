
import React from "react";
import Link from "next/link";

const WorkoutCard = ({ item }) => {
  return (
    <Link
      href={`/workouts/${item.id}`}
      className="block bg-[#151819] rounded-xl overflow-hidden border border-white/10 hover:border-[#C2F800] transition-all cursor-pointer"
    >
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-52 object-cover"
      />

      <div className="p-5">
        <div className="flex gap-2 mb-3">
          {item.muscleGroups.map((group) => (
            <span
              key={group}
              className="text-[#C2F800] bg-[#C2F800]/10 px-3 py-1 rounded-full text-xs"
            >
              {group}
            </span>
          ))}
        </div>

        <h2 className="text-xl font-bold uppercase mb-2">
          {item.name}
        </h2>

        <p className="text-gray-400 mb-4">
          {item.equipment}
        </p>

        <div className="flex justify-between border-t border-white/10 pt-4 text-sm">
          <span>⏱ {item.duration} min</span>
          <span>🔥 {item.caloriesBurned} kcal</span>
          <span>⭐ {item.rating}</span>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;
