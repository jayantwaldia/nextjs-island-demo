"use client";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import StaticCarouselPreview from "./StaticCarouselPreview";

const InteractiveCarousel = dynamic(() => import("./InteractiveCarousel"), {
  ssr: false,
  loading: () => (
    <div className="loading-placeholder">Loading interactive carousel...</div>
  ),
});

export default function LazyCarousel({ slides }) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setHasLoaded(true);
  };

  return (
    <div ref={ref} className="lazy-carousel-container">
      {isVisible ? (
        <div>
          {!hasLoaded && (
            <div className="loading-indicator">
              <p>🔄 Loading interactive carousel JavaScript...</p>
            </div>
          )}
          <InteractiveCarousel slides={slides} onLoad={handleLoad} />
        </div>
      ) : (
        <div>
          <div className="static-preview">
            <p>📷 Static preview (scroll down to load interactive version)</p>
          </div>
          <StaticCarouselPreview slides={slides} />
        </div>
      )}
    </div>
  );
}
