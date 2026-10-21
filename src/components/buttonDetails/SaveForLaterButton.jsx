"use client"
import  { WorkoutContext } from '@/context/WorkoutContext';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const SaveForLaterButton = ({workout}) => {
     const {savedWorkouts, setSavedWorkouts} = useContext(WorkoutContext);

    const handleSaveForLater = () => {
        console.log("Clicked", workout);
         toast.success(`you have Succesfully Saved the workout ${workout.name}`)
        setSavedWorkouts([...savedWorkouts, workout])
       
    }
    return (
            <button className="bg-blue-900 border border-amber-300 text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-[#05043f] transition"
            onClick={() => handleSaveForLater()}
            >
             Saved For Later
            </button>
    );
};

export default SaveForLaterButton;