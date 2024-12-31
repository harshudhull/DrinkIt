import React from 'react';
import { BackButton } from '../components/BackButton';
import { Calendar, Clock, Droplet } from 'lucide-react';
import { HydrationLog } from '../types/hydration';

const MOCK_LOGS: HydrationLog[] = [
  { id: 1, amount: 250, timestamp: '2024-03-15T09:30:00' },
  { id: 2, amount: 500, timestamp: '2024-03-15T12:15:00' },
  { id: 3, amount: 100, timestamp: '2024-03-15T15:45:00' },
];

const LogEntry = ({ log }: { log: HydrationLog }) => {
  const date = new Date(log.timestamp);
  
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-3">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Droplet className="h-5 w-5 text-blue-500" />
          <span className="font-semibold text-lg">{log.amount}ml</span>
        </div>
        <div className="flex items-center space-x-4 text-gray-500 text-sm">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            {date.toLocaleDateString()}
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
        </div>
      </div>
    </div>
  );
};

export const HydrationLogPage = () => {
  return (
    <div className="min-h-screen bg-blue-50 p-4">
      <BackButton />
      <h1 className="text-2xl font-bold text-center mt-8 mb-6">Hydration Log</h1>
      
      <div className="max-w-md mx-auto">
        {MOCK_LOGS.map((log) => (
          <LogEntry key={log.id} log={log} />
        ))}
      </div>
    </div>
  );
};