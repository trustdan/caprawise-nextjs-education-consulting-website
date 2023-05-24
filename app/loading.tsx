import React from 'react';

const Loading = () => {
  return (
    <div className="flex space-x-2">
      {Array.from({ length: 3 }, (_, i) => (
        <div
          key={i}
          className="w-4 h-4 rounded-full bg-black animate-pulse"
          style={{ animationDelay: `${i * 200}ms`, animationDuration: '1s' }}
        />
      ))}
    </div>
  );
};

export default Loading;