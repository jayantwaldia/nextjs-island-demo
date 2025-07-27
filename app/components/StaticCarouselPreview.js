export default function StaticCarouselPreview({ slides }) {
  return (
    <div className="static-carousel-preview">
      {slides.map((slide) => (
        <img
          key={slide.id}
          src={slide.image}
          alt={`Slide ${slide.id}`}
          width={150}
          className="static-carousel-image"
        />
      ))}
    </div>
  );
}
