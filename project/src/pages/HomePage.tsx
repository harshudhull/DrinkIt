import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { Navbar } from '../components/Navbar';

export const HomePage = () => {
  const [waterIntake, setWaterIntake] = useState(0);
  const [showAddModal, setShowAddModal] = useState(false);
  const dailyGoal = 2000; // This should come from profile
  const progress = (waterIntake / dailyGoal) * 100;

  const addWater = (amount: number) => {
    setWaterIntake(prev => prev + amount);
    setShowAddModal(false);
  };

  return (
    <div className="min-h-screen bg-blue-50 pb-16">
      <main className="max-w-4xl mx-auto p-4">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
          <div className="relative w-48 h-48 mx-auto">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle
                className="text-blue-100"
                strokeWidth="10"
                stroke="currentColor"
                fill="transparent"
                r="40"
                cx="50"
                cy="50"
              />
              <circle
                className="text-blue-500"
                strokeWidth="10"
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
              <p className="text-3xl font-bold text-blue-600">{waterIntake}ml</p>
              <p className="text-sm text-gray-500">of {dailyGoal}ml</p>
            </div>
            <button
              onClick={() => setShowAddModal(true)}
              className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-blue-600 rounded-full p-2 text-white shadow-lg hover:bg-blue-700 transition-colors"
            >
              <Plus className="h-6 w-6" />
            </button>
          </div>
        </div>
      </main>

      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-sm">
            <h3 className="text-lg font-semibold mb-4">Add Water</h3>
            <div className="grid grid-cols-3 gap-4">
              {[100, 250, 500].map((amount) => (
                <button
                  key={amount}
                  onClick={() => addWater(amount)}
                  className="bg-blue-50 hover:bg-blue-100 text-blue-600 py-2 px-4 rounded-lg transition-colors"
                >
                  {amount}ml
                </button>
              ))}
            </div>
            <button
              onClick={() => setShowAddModal(false)}
              className="mt-4 w-full text-gray-600 py-2"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <Navbar />
    </div>
  );
};