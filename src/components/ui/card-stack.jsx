import { useEffect, useState } from "react";
import { motion } from "framer-motion";

let interval;

export const CardStack = ({
  items,
  offset,
  scaleFactor
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()); // move the last element to the front
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="relative h-96 w-96 md:h-[28rem] md:w-[30rem]">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute dark:bg-black bg-white h-full w-full md:h-full md:w-full rounded-3xl shadow-xl border border-neutral-200 dark:border-white/[0.1] shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, // decrease z-index for the cards that are behind
            }}
          >
            <div className="relative h-full w-full">
              {/* Fixed size image, now covering the full card */}
              {card.content && (
                <img 
                  src={card.content.props.src} 
                  alt={card.name} 
                  className="w-full h-full object-cover rounded-3xl"
                />
              )}

              {/* Name and designation with black background and rounded shape */}
              {/* <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 p-4 rounded-full text-white">
                <p className="text-lg font-semibold">{card.name}</p>
                <p className="text-sm">{card.designation}</p>
              </div> */}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
