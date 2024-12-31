import React from 'react';
import { BackButton } from '../components/BackButton';
import { Trophy, Star, Award } from 'lucide-react';

export const RewardsPage = () => {
  const rewards = [
    {
      id: 1,
      title: 'Hydration Starter',
      description: 'Drink water for 3 consecutive days',
      progress: 2,
      total: 3,
      icon: Trophy,
      achieved: false
    },
    {
      id: 2,
      title: 'Water Champion',
      description: 'Reach daily goal for 5 days',
      progress: 5,
      total: 5,
      icon: Star,
      achieved: true
    },
    {
      id: 3,
      title: 'Super Hydrator',
      description: 'Track 10,000ml total water intake',
      progress: 7500,
      total: 10000,
      icon: Award,
      achieved: false
    }
  ];

  return (
    <div className="min-h-screen bg-blue-50 p-4">
      <BackButton />
      <h1 className="text-2xl font-bold text-center mt-8 mb-6">Rewards</h1>
      
      <div className="max-w-md mx-auto space-y-4">
        {rewards.map((reward) => {
          const progress = (reward.progress / reward.total) * 100;
          const Icon = reward.icon;
          
          return (
            <div 
              key={reward.id} 
              className={`bg-white rounded-lg shadow-md p-6 ${
                reward.achieved ? 'border-2 border-yellow-400' : ''
              }`}
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-full ${
                  reward.achieved ? 'bg-yellow-100 text-yellow-600' : 'bg-blue-100 text-blue-600'
                }`}>
                  <Icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1">{reward.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{reward.description}</p>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        reward.achieved ? 'bg-yellow-400' : 'bg-blue-500'
                      }`}
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <p className="text-right text-sm text-gray-500 mt-1">
                    {reward.progress} / {reward.total}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};