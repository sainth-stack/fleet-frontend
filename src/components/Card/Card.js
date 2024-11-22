import React from "react";

const Card = ({
  bgColor,
  title,
  subtitle,
  price,
  progress,
  hit,
  image,
  styles,
}) => {
  return (
    <div
      className={`${bgColor} flex justify-center items-center bg-white border border-gray-200 rounded-lg shadow-lg w-full max-w-xs sm:max-w-md`}
    >
      {/* Card Content */}

      {/* Circular Progress Bar */}
      {progress && (
        <div className="relative flex items-center justify-center w-24 h-24 m-4">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 36 36">
            <circle
              className="text-gray-200"
              strokeWidth="3"
              stroke="currentColor"
              fill="none"
              r="16"
              cx="18"
              cy="18"
            />
            <circle
              className="text-orange-500"
              strokeWidth="3"
              strokeDasharray="100"
              strokeDashoffset={`${100 - progress}`}
              strokeLinecap="round"
              stroke="currentColor"
              fill="none"
              r="16"
              cx="18"
              cy="18"
              style={{
                transform: "rotate(-90deg)", // Rotate the stroke to start from the top-center
                transformOrigin: "50% 50%", // Ensure the rotation is centered
              }}
            />
          </svg>
          {/* Position percentage at top-center */}
          <span className="text-blue-500 font-semibold">{progress}%</span>
        </div>
      )}

      {/* Title, Price, Subtitle */}
      <div className={`flex-grow ml-2 ${progress?"":"text-center"}`}>
        <h3 className={`text-sm font-semibold text-gray-800 ${styles}`}>
          {title}
        </h3>
        <p className={`mt-2 text-md font-bold  ${styles}`}>
          ${price}
        </p>
        <small className="text-sm text-gray-500">{subtitle}</small>

        {/* Hit Field */}
        {hit && (
          <p className="mt-2 text-sm font-semibold text-red-500">{hit}</p>
        )}
      </div>

      {/* Image */}
      {image && (
        <div className=" ">
          <img
            src={image}
            alt="Card Illustration"
            className="w-20 h-20 object-cover rounded-md"
          />
        </div>
      )}
    </div>
  );
};

export default Card;
