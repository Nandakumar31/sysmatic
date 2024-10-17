import React, { useState, useEffect, useCallback } from 'react';

const Carousel = ({
  items = [],
  initialVisibleItems = 1, // Pass initial visible items from props
  autoSlideInterval = 3000,
  renderItem,
  renderArrow,
  itemKey = 'id',
}) => {

  const [isPaused, setIsPaused] = useState(false);
  const [visibleItems, setVisibleItems] = useState(initialVisibleItems);
  const [currentIndex, setCurrentIndex] = useState(0);


  // Memoize nextSlide with useCallback
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  }, [items.length]); // Only re-create if items.length changes

  useEffect(() => {
    if (!isPaused && autoSlideInterval) {
      const interval = setInterval(nextSlide, autoSlideInterval);
      return () => clearInterval(interval);
    }
  }, [isPaused, autoSlideInterval, nextSlide]); // Include nextSlide as a dependency

  // Memoize updateVisibleItems with useCallback
  const updateVisibleItems = useCallback(() => {
    const width = window.innerWidth;

    if (width >= 1024) {
      setVisibleItems(4);
    } else if (width >= 1024) { // This condition is redundant, consider changing it
      setVisibleItems(3);
    } else if (width >= 768) {
      setVisibleItems(2);
    } else {
      setVisibleItems(1);
    }
  }, []); // Dependencies not required since it only depends on window width

  useEffect(() => {
    updateVisibleItems();
    window.addEventListener('resize', updateVisibleItems);

    return () => {
      window.removeEventListener('resize', updateVisibleItems);
    };
  }, [updateVisibleItems]);
  


 

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="overflow-hidden w-full">
        {visibleItems === 1 ? (
          <div className="flex flex-col">
            {items.map((item, index) => (
              <div key={item[itemKey] || index} className="w-full mb-4">
                {renderItem ? renderItem(item) : <div>No content provided.</div>}
              </div>
            ))}
          </div>
        ) : (
          <div
            className="flex transition-transform duration-500 mx-10"
            style={{
              transform: `translateX(-${(currentIndex % items.length) * (100 / visibleItems)
                }%)`,
              transition: `transform 0.5s ease-in-out`,
            }}
          >
            {items.concat(items).map((item, index) => (
              <div
                key={item[itemKey] || index}
                className={`flex-shrink-0 w-full px-2 sm:px-4`}
                style={{ flexBasis: `${100 / visibleItems}%` }}
              >
                {renderItem ? renderItem(item) : <div>No content provided.</div>}
              </div>
            ))}
          </div>
        )}
      </div>

      {visibleItems > 1 && (
        <>
          <button
            onClick={() =>
              setCurrentIndex(
                (prevIndex) => (prevIndex - 1 + items.length) % items.length
              )
            }
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-full z-10"
          >
            {renderArrow ? renderArrow('prev') : 'Prev'}
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-full z-10"
          >
            {renderArrow ? renderArrow('next') : 'Next'}
          </button>
        </>
      )}
    </div>
  );
};

export default Carousel;
