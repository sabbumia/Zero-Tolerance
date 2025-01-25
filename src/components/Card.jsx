import { CardStack } from "./ui/card-stack";
import { cn } from "@/lib/utils";

export function CardStackDemo() {
  return (
    <div className="h-[40rem] flex items-center justify-center w-full">
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({ children, className }) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Manu Arora",
    designation: "Senior Software Engineer",
    content: (
      <img 
        src='https://cdn.jugantor.com/assets/news_photos/2023/01/20/image-636707-1674170216.jpg' 
        alt='Manu Arora' 
        className='object-cover w-full h-full'
      />
    ),
  },
  {
    id: 1,
    name: "Elon Musk",
    designation: "Senior Shitposter",
    content: (
      <img 
        src='https://www.manobshongbad.com/wp-content/uploads/2019/06/bd-curreption.jpg' 
        alt='Elon Musk' 
        className='object-cover w-full h-full'
      />
    ),
  },
  {
    id: 2,
    name: "Tyler Durden",
    designation: "Manager Project Mayhem",
    content: (
      <img 
        src='https://www.bvnews24.com/media/imgAll/2022April/klskg-2207080224.jpg' 
        alt='Tyler Durden' 
        className='object-cover w-full h-full'
      />
    ),
  },
];
