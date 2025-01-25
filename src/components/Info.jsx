import { CardStackDemo } from "./Card";

// export function Info() {
//   return (
//     <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
//       <div className="max-w-7xl w-full flex gap-8 px-4 py-16">
        
//         {/* Left Side: Text Section */}
//         <div className="flex-1 text-center md:text-left text-gray-900 dark:text-white">
//           <h1 className="text-4xl font-bold mb-4">
//             <span className="text-emerald-600">দুর্নীতির বিরুদ্ধে</span>{" "}
//             <span className="text-black dark:text-white">আমাদের একসাথে দাঁড়ানোর সময় এসেছে</span>
//           </h1>
//           <p className="text-lg mb-8">
//             বাংলাদেশসহ সারা বিশ্বে দুর্নীতি একটি গুরুতর সমস্যা, যা শুধু সরকারের উন্নতি নয়, সাধারণ মানুষের জীবনমানকেও প্রভাবিত করে। দুর্নীতি প্রতিরোধের মাধ্যমে আমরা একটি ন্যায়বিচারপূর্ণ, স্বচ্ছ ও উন্নত সমাজ গড়তে পারি।
//           </p>
//           <p className="text-base text-gray-700 dark:text-gray-300">
//             আমরা বিশ্বাস করি, প্রতিটি নাগরিকের দায়িত্ব দুর্নীতির বিরুদ্ধে প্রতিরোধ গড়ে তোলা এবং একটি সৎ ও সুশাসিত সমাজ প্রতিষ্ঠা করা। এই ওয়েবসাইটটি একটি প্ল্যাটফর্ম, যেখানে আপনি দুর্নীতি প্রতিরোধে সহায়তা, সচেতনতা বৃদ্ধির তথ্য এবং সংশ্লিষ্ট আইনি পরামর্শ পাবেন।
//           </p>
//           <p className="text-base text-gray-700 dark:text-gray-300 mb-8">
//             আমাদের লক্ষ্য—দুর্নীতির বিরুদ্ধে সংগ্রাম, শিক্ষা এবং জনগণের ক্ষমতায়ন। একসাথে, আমরা বদলে দিতে পারি দেশের ভবিষ্যত। দুর্নীতি মুক্ত বাংলাদেশ গড়তে আপনিও আজই আমাদের সাথে যোগ দিন!
//           </p>
//         </div>

//         {/* Right Side: CardStack Demo */}
//         <div className="flex-1 flex justify-center items-center">
//           <CardStackDemo />
//         </div>
//       </div>
//     </div>
//   );
// }


export function Info() {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
        <div className="max-w-7xl w-full flex flex-col md:flex-row gap-24 px-4 py-16">
          
          {/* Left Side: Text Section */}
          <div className="flex-1 justify-center items-center text-center mt-20 md:text-left text-gray-900 dark:text-white">
            <h1 className="text-4xl font-bold">
              <span className="text-emerald-600">দুর্নীতির বিরুদ্ধে</span>{" "}
              <span className="text-black dark:text-white">আমাদের একসাথে দাঁড়ানোর সময় এসেছে</span>
            </h1>
            <p className="text-lg mb-8">
              বাংলাদেশসহ সারা বিশ্বে দুর্নীতি একটি গুরুতর সমস্যা, যা শুধু সরকারের উন্নতি নয়, সাধারণ মানুষের জীবনমানকেও প্রভাবিত করে। দুর্নীতি প্রতিরোধের মাধ্যমে আমরা একটি ন্যায়বিচারপূর্ণ, স্বচ্ছ ও উন্নত সমাজ গড়তে পারি।
            </p>
            <p className="text-base text-gray-700 dark:text-gray-300">
              আমরা বিশ্বাস করি, প্রতিটি নাগরিকের দায়িত্ব দুর্নীতির বিরুদ্ধে প্রতিরোধ গড়ে তোলা এবং একটি সৎ ও সুশাসিত সমাজ প্রতিষ্ঠা করা। এই ওয়েবসাইটটি একটি প্ল্যাটফর্ম, যেখানে আপনি দুর্নীতি প্রতিরোধে সহায়তা, সচেতনতা বৃদ্ধির তথ্য এবং সংশ্লিষ্ট আইনি পরামর্শ পাবেন।
            </p>
            <p className="text-base text-gray-700 dark:text-gray-300 mb-8">
              আমাদের লক্ষ্য—দুর্নীতির বিরুদ্ধে সংগ্রাম, শিক্ষা এবং জনগণের ক্ষমতায়ন। একসাথে, আমরা বদলে দিতে পারি দেশের ভবিষ্যত। দুর্নীতি মুক্ত বাংলাদেশ গড়তে আপনিও আজই আমাদের সাথে যোগ দিন!
            </p>
          </div>
  
          {/* Right Side: CardStack Demo */}
          <div className="flex-1 flex justify-center items-center">
            <CardStackDemo />
          </div>
        </div>
      </div>
    );
  }
  