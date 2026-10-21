"use client"
import { Children, createContext, useState } from "react";



export const WorkoutContext = createContext({})

 const WorkoutProvider = ({ children }) => {

  const [todayPlan, setTodayPlan] = useState([]);
  const [savedWorkouts, setSavedWorkouts] = useState([]);

const sharedData = {
    todayPlan, setTodayPlan, savedWorkouts, setSavedWorkouts
};

  return <WorkoutContext.Provider value = {sharedData}>{children}</WorkoutContext.Provider>
}

export default WorkoutProvider;