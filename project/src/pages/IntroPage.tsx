import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Droplet } from 'lucide-react';

export const IntroPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center p-4">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-4">
          <Droplet className="h-12 w-12 text-blue-600" />
          <h1 className="text-4xl font-bold text-blue-600 ml-2">DrinkIt</h1>
        </div>
        <p className="text-gray-600 mb-2">Track your daily water intake</p>
        <p className="text-gray-600">Stay healthy and hydrated!</p>
      </div>
      <button
        onClick={() => navigate('/auth')}
        className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
      >
        Let's Go!
      </button>
    </div>
  );
};