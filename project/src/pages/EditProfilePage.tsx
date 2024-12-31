import React, { useState } from 'react';
import { BackButton } from '../components/BackButton';

export const EditProfilePage = () => {
  const [name, setName] = useState('John');
  const [age, setAge] = useState('14');
  const [weight, setWeight] = useState('45');
  const [showError, setShowError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ageNum = parseInt(age);
    
    if (ageNum < 12 || ageNum > 16) {
      setShowError(true);
      return;
    }

    // Save profile changes
    setShowError(false);
  };

  return (
    <div className="min-h-screen bg-blue-50 p-4">
      <BackButton />
      <div className="max-w-md mx-auto mt-8">
        <h1 className="text-2xl font-bold text-center mb-6">Edit Profile</h1>
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
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
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};