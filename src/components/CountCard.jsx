// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// const totalUsers = 165; // Hardcoded value for total users
// const progress = 0.63; // 1/3 progress (33%)

// const radius = 90; // Radius of the circle
// const circumference = 2 * Math.PI * radius; // Circumference of the circle

// export function Component() {
//   const [count, setCount] = useState(0); // State for animated number
//   const strokeDashoffset = circumference - progress * circumference;

//   // Function to animate the number from 0 to totalUsers
//   useEffect(() => {
//     const targetCount = totalUsers;
//     let start = 0;
//     const increment = Math.floor(targetCount / 100); // Increment in steps

//     const interval = setInterval(() => {
//       start += increment;
//       if (start >= targetCount) {
//         setCount(targetCount); // Set to final count when reached
//         clearInterval(interval);
//       } else {
//         setCount(start); // Update count in interval
//       }
//     }, 20); // Update every 20ms
//     return () => clearInterval(interval); // Clean up on unmount
//   }, []);

//   return (
//     <div className="flex justify-center items-center min-h-screen ">
//       <motion.div
//         className="relative flex flex-col items-center p-6 max-w-sm w-full bg-white shadow-xl rounded-xl overflow-hidden transform transition-transform duration-300 hover:scale-105"
//         whileHover={{ scale: 1.05 }}
//         style={{
//           background: "linear-gradient(135deg, #6EE7B7, #3B82F6)", // Gradient background
//         }}
//       >
//         {/* Title Section */}
//         <h2 className="text-xl font-semibold mb-4 text-gray-900">Total Users</h2>

//         {/* Circular Progress Bar */}
//         <div className="relative mb-6">
//           <svg width="200" height="200" viewBox="0 0 200 200">
//             {/* Background circle (empty circle) */}
//             <circle
//               cx="100"
//               cy="100"
//               r={radius}
//               fill="none"
//               stroke="#e0e0e0"
//               strokeWidth="15"
//             />
//             {/* Animated progress circle */}
//             <motion.circle
//               cx="100"
//               cy="100"
//               r={radius}
//               fill="none"
//               stroke="#4caf50"
//               strokeWidth="15"
//               strokeDasharray={circumference}
//               strokeDashoffset={strokeDashoffset}
//               initial={{ strokeDashoffset: circumference }}
//               animate={{ strokeDashoffset }}
//               transition={{ duration: 4, ease: "easeInOut" }}
//             />
//           </svg>

//           {/* Animated Total Users Count in the center */}
//           <motion.div
//             className="absolute top-20 left-16 text-3xl font-bold text-gray-800"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1 }}
//           >
//             <span>{count}+</span>
//           </motion.div>
//         </div>


//       </motion.div>
//     </div>
//   );
// }



// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// // Hardcoded values for the cards
// const totalUsers = 165;
// const totalComplains = 120;
// const totalProjects = 45;
// const totalBannedCompanies = 3;

// const radius = 90;
// const circumference = 2 * Math.PI * radius;

// function Card({ title, progress, count }) {
//   const strokeDashoffset = circumference - progress * circumference;
//   const [animatedCount, setAnimatedCount] = useState(0);

//   useEffect(() => {
//     const targetCount = count;
//     let start = 0;
//     const increment = Math.floor(targetCount / 100);

//     const interval = setInterval(() => {
//       start += increment;
//       if (start >= targetCount) {
//         setAnimatedCount(targetCount);
//         clearInterval(interval);
//       } else {
//         setAnimatedCount(start);
//       }
//     }, 20);
//     return () => clearInterval(interval);
//   }, [count]);

//   return (
//     <motion.div
//       className="relative flex flex-col items-center p-6 max-w-sm w-full bg-white shadow-xl rounded-xl overflow-hidden transform transition-transform duration-300 hover:scale-105"
//       whileHover={{ scale: 1.05 }}
//       style={{
//         background: "linear-gradient(135deg, #6EE7B7, #3B82F6)",
//       }}
//     >
//       {/* Title Section */}
//       <h2 className="text-xl font-semibold mb-4 text-gray-900">{title}</h2>

//       {/* Circular Progress Bar */}
//       <div className="relative mb-6">
//         <svg width="200" height="200" viewBox="0 0 200 200">
//           {/* Background circle (empty circle) */}
//           <circle
//             cx="100"
//             cy="100"
//             r={radius}
//             fill="none"
//             stroke="#e0e0e0"
//             strokeWidth="15"
//           />
//           {/* Animated progress circle */}
//           <motion.circle
//             cx="100"
//             cy="100"
//             r={radius}
//             fill="none"
//             stroke="#4caf50"
//             strokeWidth="15"
//             strokeDasharray={circumference}
//             strokeDashoffset={strokeDashoffset}
//             initial={{ strokeDashoffset: circumference }}
//             animate={{ strokeDashoffset }}
//             transition={{ duration: 4, ease: "easeInOut" }}
//           />
//         </svg>

//         {/* Animated Total Count in the center */}
//         <motion.div
//           className="absolute top-20 left-16 text-3xl font-bold text-gray-800"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//         >
//           <span>{animatedCount}+</span>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// }

// export function Component() {
//   return (
//     <div className="flex justify-center items-center min-h-screen p-6 space-x-6">
//       <Card title="Total Complains" progress={0.5} count={totalComplains} />
//       <Card title="Total Projects" progress={0.75} count={totalProjects} />
//       <Card title="Total Banned Companies" progress={0.2} count={totalBannedCompanies} />
//       <Card title="Total Users" progress={0.63} count={totalUsers} />
//     </div>
//   );
// }











import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Hardcoded values for the cards
const totalUsers = 165;
const totalComplains = 120;
const totalProjects = 45;
const totalBannedCompanies = 3;

const radius = 90;
const circumference = 2 * Math.PI * radius;

function Card({ title, progress, count, color }) {
  const strokeDashoffset = circumference - progress * circumference;
  const [animatedCount, setAnimatedCount] = useState(0);

  useEffect(() => {
    const targetCount = count;
    let start = 0;
    const increment = targetCount < 100 ? 1 : Math.floor(targetCount / 100); // Increment by 1 if count is less than 100, else divide by 100

    const interval = setInterval(() => {
      start += increment;
      if (start >= targetCount) {
        setAnimatedCount(targetCount);
        clearInterval(interval);
      } else {
        setAnimatedCount(start);
      }
    }, 20); // Update every 20ms
    return () => clearInterval(interval); // Cleanup on unmount
  }, [count]); // Re-run the effect if `count` changes

  return (
    <motion.div
      className="relative flex flex-col items-center p-6 max-w-sm w-full bg-white shadow-xl rounded-xl overflow-hidden transform transition-transform duration-300 hover:scale-105"
      whileHover={{ scale: 1.05 }}
      style={{
        background: color, // Pass the color here
      }}
    >
      {/* Title Section */}
      <h2 className="text-xl font-semibold mb-4 text-gray-900">{title}</h2>

      {/* Circular Progress Bar */}
      <div className="relative mb-6">
        <svg width="200" height="200" viewBox="0 0 200 200">
          {/* Background circle (empty circle) */}
          <circle
            cx="100"
            cy="100"
            r={radius}
            fill="none"
            stroke="#e0e0e0"
            strokeWidth="15"
          />
          {/* Animated progress circle */}
          <motion.circle
            cx="100"
            cy="100"
            r={radius}
            fill="none"
            stroke="#4caf50"
            strokeWidth="15"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 4, ease: "easeInOut" }}
          />
        </svg>

        {/* Animated Total Count in the center */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-bold text-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <span>{animatedCount}+</span>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function CountCard() {
  return (
    <div className="flex justify-center items-center min-h-screen p-6 space-x-6 bg-gradient-to-r from-gray-700 via-gray-800 to-black">
      {/* The bg-gradient-to-r gives a gradient from dark gray to black for the dark shadow effect */}
      <Card 
        title="Total Complains" 
        progress={0.5} 
        count={totalComplains} 
        color="linear-gradient(135deg, #F87171, #FBBF24)" // Red to Yellow
      />
      <Card 
        title="Total Projects" 
        progress={0.75} 
        count={totalProjects} 
        color="linear-gradient(135deg, #3B82F6, #9333EA)" // Blue to Purple
      />
      <Card 
        title="Total Banned Companies" 
        progress={0.2} 
        count={totalBannedCompanies} 
        color="linear-gradient(135deg, #34D399, #10B981)" // Green gradient
      />
      <Card 
        title="Total Users" 
        progress={0.63} 
        count={totalUsers} 
        color="linear-gradient(135deg, #6EE7B7, #3B82F6)" // Teal to Blue
      />
    </div>
  );
}
