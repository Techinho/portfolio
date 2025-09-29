
import { useState, useEffect, useRef } from "react";

export default function BasicCarousel() {
  const images = Array.from(
    { length: 5 },
    (_, i) => `https://picsum.photos/seed/${i + 6}/500/300`
  );


  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const goTo = (idx: number) => {
    setCurrent(idx);
    resetInterval();
  };

  const prev = () => {
    setCurrent((prev) => {
      const newIdx = prev === 0 ? images.length - 1 : prev - 1;
      resetInterval();
      return newIdx;
    });
  };

  const next = () => {
    setCurrent((prev) => {
      const newIdx = prev === images.length - 1 ? 0 : prev + 1;
      resetInterval();
      return newIdx;
    });
  };

  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
  };

  useEffect(() => {
    resetInterval();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="max-w-md mx-auto">
      <div className="overflow-hidden rounded-lg relative">
        <img
          src={images[current]}
          alt={`Slide ${current + 1}`}
          className="w-full h-64 object-cover transition-all duration-300"
        />
        {/* Optional: Uncomment for prev/next arrows
        <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-1 shadow hover:bg-white">&#8592;</button>
        <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-1 shadow hover:bg-white">&#8594;</button>
        */}
      </div>
      <div className="flex justify-center items-center mt-4 gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={
              `w-3 h-3 rounded-full transition-all cursor-pointer ` +
              (current === index
                ? 'bg-blue-500 shadow-lg scale-110'
                : 'bg-gray-300 dark:bg-gray-600')
            }
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
