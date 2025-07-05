'use client'
import React, {useState} from 'react';

const BirthdayWish = () => {

  const [name, setName] = useState("Ambuj");
 
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 to-purple-200 p-4">
     
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all hover:scale-105 duration-300">
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-6 text-center">
          <h1 className="text-4xl font-bold text-white mb-2">Happy Birthday {name}!</h1>
          <p className="text-xl text-white opacity-90">🎉 bhai testtttt 🎂</p>
          <input className='border px-2 py-2 rounded border-gray-500 text-gray-500' type="text" onChange={(e)=>setName(e.target.value)}/>
        </div>
      
        
        <div className="p-6 text-center">
          <p className="text-gray-700 mb-4">
            Wishing you a day filled with happiness and a year filled with joy!
          </p>
          
          <div className="animate-bounce text-4xl mb-4">🎈 Test it Again!</div>
          
          <p className="text-gray-600 italic">
            May all your dreams and wishes come true this year!
          </p>
          
          <div className="mt-6 flex justify-center space-x-4">
            jjj
          </div>
        </div>
        
        <div className="bg-pink-50 p-4 text-center border-t border-pink-100">
          <p className="text-sm text-pink-600">
            Made with ❤️ for your special day!!!
          </p>
        </div>
      </div>
    </div>
  );
};

export default BirthdayWish; 