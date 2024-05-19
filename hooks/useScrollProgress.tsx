import React, { useState, useEffect } from "react";
const useScrollProgress = () => {
  const [completion, setCompletion] = useState<number>(0);
  useEffect(() => {
    const updateScrollCompletion = () => {
      const CurrentProgress: number = window.scrollY;
      const scrollHeight: number =
        document.body.scrollHeight - window.innerHeight;

      if (scrollHeight) {
        const newCompletion = (CurrentProgress / scrollHeight) * 100;
        setCompletion(parseFloat(newCompletion.toFixed(2)));
      }
    };

    window.addEventListener("scroll", updateScrollCompletion);

    return () => window.addEventListener("scroll", updateScrollCompletion);
  }, []);

  return completion;
};

export default useScrollProgress;
