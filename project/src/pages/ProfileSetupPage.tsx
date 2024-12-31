import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const ProfileSetupPage = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [hydrationGoal, setHydrationGoal] = useState('');
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ageNum = parseInt(age);
    
    if (ageNum < 12 || ageNum > 16) {
      setShowError(true);
      return;
    }

    // Save profile and navigate to home
    navigate('/home');
  };

  const calculateRecommendedGoal = () => {
    if (weight) {
      // Calculate based on 30-40ml per kg of body weight
      const recommended = Math.round(parseInt(weight) * 35);
      setHydrationGoal(recommended.toString());
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Child Profile</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Age (12-16 years)
            </label>
            <input
              type="number"
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
                setShowError(false);
              }}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
            {showError && (
              <p className="text-red-500 text-sm mt-1">
                Age must be between 12 and 16 years
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Weight (kg)
            </label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              onBlur={calculateRecommendedGoal}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Daily Hydration Goal (ml)
            </label>
            <div className="flex gap-2">
              <input
                type="number"
                value={hydrationGoal}
                onChange={(e) => setHydrationGoal(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
              <button
                type="button"
                onClick={calculateRecommendedGoal}
                className="mt-1 px-3 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
              >
                Calculate
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-1">
              Recommended: 35ml per kg of body weight
            </p>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};