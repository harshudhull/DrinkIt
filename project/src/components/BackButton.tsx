import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const BackButton = () => {
  const navigate = useNavigate();
  
  return (
    <button 
      onClick={() => navigate('/home')}
      className="absolute top-4 left-4 p-2 text-blue-600 hover:bg-blue-50 rounded-full"
    >
      <ArrowLeft className="h-6 w-6" />
    </button>
  );
};