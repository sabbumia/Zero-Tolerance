import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "পদ্মা সেতু বাংলাদেশের ইতিহাসে একটি গুরুত্বপূর্ণ অর্জন। এটি দেশের দক্ষিণ-পশ্চিমাঞ্চলকে রাজধানী ঢাকা ও অন্যান্য বড় শহরের সাথে যুক্ত করবে, যা ব্যবসা ও অর্থনীতিতে গুরুত্বপূর্ণ পরিবর্তন আনবে।",
      name: "পদ্মা সেতু প্রকল্প",
      designation: "ওয়েস্টার্ন ইঞ্জিনিয়ারিং (প্রা.) লি.",
      src: "https://www.newagebd.com/files/records/news/202206/174226_157.jpg", // Image of Padma Bridge
    },
    {
      quote:
        "মেট্রোরেল বাংলাদেশের আধুনিক গণপরিবহন ব্যবস্থা তৈরির ক্ষেত্রে একটি মাইলফলক। ঢাকা শহরের যানজট কমাতে এবং পরিবেশবান্ধব পরিবহন ব্যবস্থা গড়ে তুলতে এটি গুরুত্বপূর্ণ ভূমিকা রাখবে।",
      name: "মেট্রোরেল প্রকল্প",
      designation: "ম্যাক্স ইনফ্রাস্ট্রাকচার লিমিটেড",
      src: "https://c8.alamy.com/comp/2RRB3F8/210830-dhaka-aug-30-2021-people-witness-the-first-trial-run-of-bangladesh-s-metro-rail-service-in-dhaka-bangladesh-on-aug-29-2021-bangladesh-s-first-metro-rail-in-the-capital-dhaka-made-the-trial-run-sunday-on-a-section-of-the-201-km-project-known-as-mass-rapid-transit-line-6-mrt-6-bangladesh-dhaka-metro-rail-trial-run-salim-publicationxnotxinxchn-2RRB3F8.jpg", // Image of Dhaka Metro Rail
    },
    {
      quote:
        "এক্সপ্রেসওয়ে প্রকল্প বাংলাদেশের আন্তঃশহর যোগাযোগ ব্যবস্থাকে উন্নত করবে। এটি দেশের শিল্পাঞ্চল ও বৃহৎ শহরগুলোর মধ্যে দ্রুত এবং সহজ যোগাযোগ নিশ্চিত করবে।",
      name: "এফডিআই এক্সপ্রেসওয়ে প্রকল্প",
      designation:
        "ফার্স্ট ঢাকা এলিভেটেড এক্সপ্রেসওয়ে (এফডিইই) কোম্পানি লিমিটেড।",
      src: "https://thumbs.dreamstime.com/b/first-elevated-expressway-opens-dhaka-bangladesh-vehicles-drive-first-elevated-expressway-opens-dhaka-289256407.jpg", // Image of Expressway
    },
    {
      quote:
        "নতুন আন্তর্জাতিক বিমানবন্দর বাংলাদেশে বিদেশী পর্যটক ও ব্যবসায়িক যোগাযোগকে শক্তিশালী করবে। এটি আন্তর্জাতিক বিমান পরিবহন ব্যবস্থা এবং দেশের অর্থনীতির উন্নতির জন্য গুরুত্বপূর্ণ ভূমিকা রাখবে।",
      name: "নতুন বিমানবন্দর প্রকল্প",
      designation: "চায়না হারবার ইঞ্জিনিয়ারিং কোম্পানি বাংলাদেশ লিমিটেড",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnJcjr7Y16jc4DRtUttP7wDSXQCHDcf5pJJQ&s", // Image of Airport Project
    },
    {
      quote:
        "ঢাকা-চট্টগ্রাম মহাসড়ক, দেশের প্রধান এক্সপ্রেসওয়ে হিসেবে নতুন উন্নয়নকে কেন্দ্র করে দেশের অর্থনৈতিক গতি বৃদ্ধি পাবে। এটি ব্যবসায়িক পরিবহন ও মানুষের চলাচলকে দ্রুত এবং সাশ্রয়ী করবে।",
      name: "ঢাকা-চট্টগ্রাম মহাসড়ক প্রকল্প",
      designation: "সড়ক ও জনপথ বিভাগ",
      src: "https://c8.alamy.com/comp/2RMPW3X/dhaka-bangladeshseptember-22023elevated-expressway-in-the-making-a-birds-eye-view-of-the-under-construction-ramps-of-dhaka-elevated-expressway-at-2RMPW3X.jpg", // Image of Highway
    },
  ];

  return (
    <>
      {/* <h3 className="text-5xl text-center mt-20 mb-8  font-bold dark:text-white text-black"> বর্তমানে চলমান প্রকল্প </h3> */}
      {/* <h3 className="text-5xl text-center mt-20 mb-8 font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500 shadow-lg dark:text-white">বর্তমানে চলমান প্রকল্প</h3> */}
      <h3 className="text-5xl text-center mt-20 mb-8 font-bold text-emerald-500 dark:text-teal-300 text-shadow-lg">
        বর্তমানে চলমান প্রকল্প
      </h3>
      <AnimatedTestimonials testimonials={testimonials} />
    </>
  );
}
