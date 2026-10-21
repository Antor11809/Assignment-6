"use client"
import  { WorkoutContext } from '@/context/WorkoutContext';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const AddToPlanButton = ({workout}) => {
    const{ todayPlan, setTodayPlan} = useContext(WorkoutContext);

    const handleAdd = () => {
        console.log("Clicked", workout);
        toast.success(`you have Succesfully added the workout ${workout.name}`)
        setTodayPlan([...todayPlan, workout])
       
    }
    return (
            <button className="bg-[#C2F800] text-black px-4 py-2 rounded-lg text-xs font-bold hover:bg-[#d5ff4d] transition"
            onClick={() => handleAdd()}
            >
              ➕ Add to today's plan
            </button>
    );
};

export default AddToPlanButton;