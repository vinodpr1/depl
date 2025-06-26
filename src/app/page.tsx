'use client'
import React from 'react';
import { useState, useEffect } from 'react';
import Confetti from 'react-confetti';

const BirthdayWish = ({ friendName = "Friend" }) => {
  const [showConfetti, setShowConfetti] = useState(true);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 to-purple-200 p-4">
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={500}
        />
      )}
      
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all hover:scale-105 duration-300">
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-6 text-center">
          <h1 className="text-4xl font-bold text-white mb-2">Happy Birthday!</h1>
          <p className="text-xl text-white opacity-90">🎉 {friendName} 🎂</p>
        </div>
        
        <div className="p-6 text-center">
          <p className="text-gray-700 mb-4">
            Wishing you a day filled with happiness and a year filled with joy!
          </p>
          
          <div className="animate-bounce text-4xl mb-4">🎈</div>
          
          <p className="text-gray-600 italic">
            "May all your dreams and wishes come true this year!"
          </p>
          
          <div className="mt-6 flex justify-center space-x-4">
            <span className="text-3xl">🎁</span>
            <span className="text-3xl">🍰</span>
            <span className="text-3xl">🥳</span>
          </div>
        </div>
        
        <div className="bg-pink-50 p-4 text-center border-t border-pink-100">
          <p className="text-sm text-pink-600">
            Made with ❤️ for your special day!
          </p>
        </div>
      </div>
    </div>
  );
};

export default BirthdayWish; 