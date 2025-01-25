// import { useState, useEffect } from 'react';
// import { FaSearch, FaUserCircle } from 'react-icons/fa'; // Use react-icons for the search and user icons
// import { Link, useLocation, useNavigate } from 'react-router-dom'; // Import Link and hooks from react-router-dom


// const Header = () => {
//   const [searchOpen, setSearchOpen] = useState(false); // State to control the search box visibility
//   const [searchText, setSearchText] = useState(''); // State to store the text written in search box
//   const [dropdownOpen, setDropdownOpen] = useState(false); // State to control the user profile dropdown

 

//   const location = useLocation();
//   const navigate = useNavigate();

//   // Extract query from the URL, if any
//   const searchQuery = new URLSearchParams(location.search).get('q');

//   // Update searchText when the search query in the URL changes
//   useEffect(() => {
//     if (searchQuery) {
//       setSearchText(searchQuery); // Set the search box value based on the URL query
//     } else {
//       setSearchText(''); // Reset search box if no query in URL
//     }
//   }, [searchQuery]);

//   // Toggle the search box visibility
//   const toggleSearch = () => {
//     setSearchOpen(!searchOpen);
//   };

//   // Handle changes to the search input field
//   const handleSearchChange = (e) => {
//     const newQuery = e.target.value;
//     setSearchText(newQuery);
//     navigate(`/search?q=${newQuery}`); // Update the URL with the new search query
//   };

//   // Toggle the dropdown menu for the user profile
//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen); // Toggle dropdown visibility
//   };
//   const handleLogout = () => {
// 		logout();
// 	};

//   return (
//     <header className='fixed top-0 w-full h-16 bg-black bg-opacity-50 z-40'>
//       <div className='mx-auto px-3 flex items-center h-full'>

//         {/* Left: Logo */}
//         <div className="flex items-center space-x-2">
//           <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
//         </div>

//         {/* Center: Menu Links */}
//         <div className="flex space-x-6 mx-auto">
//           <Link to="/" className="hover:text-gray-300 transition duration-300">
//             Home
//           </Link>
//           <Link to="/" className="hover:text-gray-300 transition duration-300">
//             Complain
//           </Link>
//           <Link to="/" className="hover:text-gray-300 transition duration-300">
//             Project
//           </Link>
//           <Link to="/" className="hover:text-gray-300 transition duration-300">
//             List
//           </Link>
//           <Link to="/profile" className="hover:text-gray-300 transition duration-300">
//             Profile
//           </Link>
//         </div>

//         {/* Right: Search Icon and User Profile Icon */}
//         <div className="flex items-center space-x-4">
//           {/* Search Icon and Input */}
//           <div className="relative flex items-center">
//             <div onClick={toggleSearch} className="cursor-pointer">
//               <FaSearch size={20} />
//             </div>

//             {/* Search Input Box (dynamically appears next to the icon) */}
//             {searchOpen && (
//               <input
//                 type="text"
//                 value={searchText}
//                 onChange={handleSearchChange}
//                 placeholder="Search..."
//                 className="ml-2 px-4 rounded-md border border-gray-300 focus:outline-none transition-all duration-300"
//                 autoFocus
//               />
//             )}
//           </div>

//           {/* User Profile Icon */}
//           <div className="relative">
//             <FaUserCircle
//               size={24}
//               onClick={toggleDropdown} // Toggle dropdown on click
//               className="cursor-pointer"
//             />
//             {/* Dropdown Menu */}
//             {dropdownOpen && (
//               <div className="absolute right-0 mt-2 bg-gray-700 text-white rounded-md shadow-lg w-40">
//                 <ul>
//                   <li>
//                     <Link to="/login" className="block px-4 py-2 hover:bg-gray-600">Login</Link>
//                   </li>
//                   <li>
//                     <Link to="/signup" className="block px-4 py-2 hover:bg-gray-600">Signup</Link>
//                   </li>
//                 </ul>
//               </div>
//             )}
           
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;




// import React, { useState } from "react";
// import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
// import { cn } from "@/lib/utils";

// export default function Header() {
//   return (
//     (<div className="relative w-full flex items-center justify-center">
//       <Navbar className="top-2" />
//     </div>)
//   );
// }

// function Navbar({
//   className
// }) {
//   const [active, setActive] = useState(null);
//   return (
//     (<div
//       className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
//       <Menu setActive={setActive}>
//         <MenuItem setActive={setActive} active={active} item="Home">
//           <div className="flex flex-col space-y-4 text-sm">
//             <HoveredLink href="/web-dev">Web Development</HoveredLink>
//             <HoveredLink href="/interface-design">Interface Design</HoveredLink>
//             <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
//             <HoveredLink href="/branding">Branding</HoveredLink>
//           </div>
//         </MenuItem>
//         <MenuItem setActive={setActive} active={active} item="Projects">
//           <div className="flex flex-col space-y-4 text-sm">
//             <HoveredLink href="/hobby">Hobby</HoveredLink>
//             <HoveredLink href="/individual">Individual</HoveredLink>
//             <HoveredLink href="/team">Team</HoveredLink>
//             <HoveredLink href="/enterprise">Enterprise</HoveredLink>
//           </div>
//         </MenuItem>
//         <MenuItem setActive={setActive} active={active} item="Complain">
//           <div className="  text-sm grid grid-cols-2 gap-10 p-4">
//             <ProductItem
//               title="Algochurn"
//               href="https://algochurn.com"
//               src="https://assets.aceternity.com/demos/algochurn.webp"
//               description="Prepare for tech interviews like never before." />
//             <ProductItem
//               title="Tailwind Master Kit"
//               href="https://tailwindmasterkit.com"
//               src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
//               description="Production ready Tailwind css components for your next project" />
//             <ProductItem
//               title="Moonbeam"
//               href="https://gomoonbeam.com"
//               src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
//               description="Never write from scratch again. Go from idea to blog in minutes." />
//             <ProductItem
//               title="Rogue"
//               href="https://userogue.com"
//               src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
//               description="Respond to government RFPs, RFIs and RFQs 10x faster using AI" />
//           </div>
//         </MenuItem>
//         <MenuItem setActive={setActive} active={active} item="Status Check">
//           <div className="flex flex-col space-y-4 text-sm">
//             <HoveredLink href="/hobby">Hobby</HoveredLink>
//             <HoveredLink href="/individual">Individual</HoveredLink>
//             <HoveredLink href="/team">Team</HoveredLink>
//             <HoveredLink href="/enterprise">Enterprise</HoveredLink>
//           </div>
//         </MenuItem>
//         <MenuItem setActive={setActive} active={active} item="Contact">
//           <div className="flex flex-col space-y-4 text-sm">
//             <HoveredLink href="/hobby">Hobby</HoveredLink>
//             <HoveredLink href="/individual">Individual</HoveredLink>
//             <HoveredLink href="/team">Team</HoveredLink>
//             <HoveredLink href="/enterprise">Enterprise</HoveredLink>
//           </div>
//         </MenuItem>
//       </Menu>
//     </div>)
//   );
// }



import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";

export default function Header() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({
  className
}) {
  const [active, setActive] = useState(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-100000", className)}>
      <Menu setActive={setActive}>
        {/* Home Menu */}
        <MenuItem  item="প্রথম পাতা">
          {/* <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">দুর্নীতি প্রতিরোধ</HoveredLink>
            <HoveredLink href="/interface-design">সচেতনতা বৃদ্ধি</HoveredLink>
            <HoveredLink href="/seo">অর্থনৈতিক নীতি</HoveredLink>
            <HoveredLink href="/branding">দুর্নীতি রিপোর্টিং</HoveredLink>
          </div> */}
        </MenuItem>

        {/* Projects Menu */}
        <MenuItem setActive={setActive} active={active} item="প্রকল্প">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">দুর্নীতি রিপোর্টিং সিস্টেম</HoveredLink>
            <HoveredLink href="/individual">সংশ্লিষ্ট সেবা</HoveredLink>
            <HoveredLink href="/team">প্রতিবেদন সংকলন</HoveredLink>
            <HoveredLink href="/enterprise">স্বচ্ছতা এবং তত্ত্বাবধান</HoveredLink>
          </div>
        </MenuItem>

        {/* Complain Menu */}
        <MenuItem setActive={setActive} active={active} item="অভিযোগ">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="দুর্নীতি প্রতিবেদন"
              href="https://your-report-site.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="আমাদের সিস্টেমে দুর্নীতির প্রতিবেদন জমা দিন।" />
            <ProductItem
              title="স্বচ্ছতা বাড়ান"
              href="https://your-transparency-site.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="প্রতিষ্ঠানগুলির মধ্যে স্বচ্ছতা প্রচারের জন্য তথ্য এবং কৌশল।" />
            <ProductItem
              title="দুর্নীতি বিরোধী প্রকল্প"
              href="https://anti-corruption-projects.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="দুর্নীতি রোধে কাজ করছে এমন প্রকল্পের তালিকা।" />
            <ProductItem
              title="করপোরেট সততা"
              href="https://corporate-integrity.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="করপোরেট ক্ষেত্রে সততা এবং দায়িত্বের প্রচার।" />
          </div>
        </MenuItem>

        {/* Status Check Menu */}
        <MenuItem setActive={setActive} active={active} item="স্ট্যাটাস চেক">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">দুর্নীতির প্রতিবেদন</HoveredLink>
            <HoveredLink href="/individual">প্রতিষ্ঠানগুলির পর্যবেক্ষণ</HoveredLink>
            <HoveredLink href="/team">দুর্নীতি বিরোধী প্রচারণা</HoveredLink>
            <HoveredLink href="/enterprise">করপোরেট সুশাসন</HoveredLink>
          </div>
        </MenuItem>

        {/* Contact Menu */}
        <MenuItem setActive={setActive} active={active} item="যোগাযোগ">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">আপনার রিপোর্ট শেয়ার করুন</HoveredLink>
            <HoveredLink href="/individual">যোগাযোগ করুন</HoveredLink>
            <HoveredLink href="/team">প্রতিষ্ঠানের তথ্য</HoveredLink>
            <HoveredLink href="/enterprise">দুর্নীতি বিরোধী কর্মসূচি</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
