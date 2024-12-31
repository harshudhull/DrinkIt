import React from 'react';
import { Droplet } from 'lucide-react';

interface HydrationMeterProps {
  waterIntake: number;
  dailyGoal: number;
  onAddClick: () => void;
}

export const HydrationMeter = ({ waterIntake, dailyGoal, onAddClick }: HydrationMeterProps) => {
  const progress = (waterIntake / dailyGoal) * 100;
  const percentage = Math.min(Math.round(progress), 100);
  
  return (
    <div className="relative w-64 h-64 mx-auto">
      <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 100 100">
        {/* Background circle */}
        <circle
          className="text-blue-100"
          strokeWidth="8"
          stroke="currentColor"
          fill="transparent"
          r="40"
          cx="50"
          cy="50"
        />
        {/* Progress circle */}
        <circle
          className="text-blue-500 transition-all duration-500 ease-in-out"
          strokeWidth="8"
          strokeDasharray={251.2}
          strokeDashoffset={251.2 - (251.2 * progress) / 100}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r="40"
          cx="50"
          cy="50"
        />
      </svg>
      
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <Droplet className="h-8 w-8 text-blue-500 mx-auto mb-2" />
        <p className="text-3xl font-bold text-blue-600">{waterIntake}ml</p>
        <p className="text-sm text-gray-500">of {dailyGoal}ml</p>
        <p className="text-lg font-medium text-blue-500 mt-1">{percentage}%</p>
      </div>
      
      <button
        onClick={onAddClick}
        className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-blue-600 rounded-full p-3 text-white shadow-lg hover:bg-blue-700 transition-colors"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      </button>
    </div>
  );
};