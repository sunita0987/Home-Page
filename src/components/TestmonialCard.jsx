import React from 'react';
const TestimonialCard = ({ name, username, image, review }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-sm">
      <div className="flex items-center mb-4">
        <img src={image} alt={name} className="w-12 h-12 rounded-full mr-4" />
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-gray-500 text-sm">@{username}</p>
        </div>
      </div>
      <div className="flex mb-2">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-4 h-4 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.574-.955L10 0l2.936 5.955 6.574.955-4.755 4.635 1.123 6.545z" />
          </svg>
        ))}
      </div>
      <p className="text-sm text-gray-700">{review}</p>
    </div>
  );
};

export default TestimonialCard;
