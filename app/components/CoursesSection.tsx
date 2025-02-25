import { useState, useEffect, useRef } from "react";

export default function CoursesSection() {
  const courses = [
    { title: "Creative Writing for Beginners", image: "/cources/image1.jpg", category: "Writing" },
    { title: "Public Speaking and Leadership", image: "/cources/image2.jpg", category: "Communication" },
    { title: "Data Visualization Techniques", image: "/cources/image3.jpg", category: "Data Science" },
    { title: "Digital Illustration with Adobe Illustrator", image: "/cources/image4.jpg", category: "Design" },
    { title: "Advanced Machine Learning", image: "/cources/image5.avif", category: "AI & ML" },
    { title: "Blockchain Essentials", image: "/cources/image6.jpg", category: "Blockchain" },
    { title: "UI/UX Fundamentals", image: "/cources/image7.jpg", category: "Design" },
  ];

  const [cardsPerRow, setCardsPerRow] = useState(1);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Update items per row based on screen width
  const updateCardsPerRow = () => {
    const containerWidth = carouselRef.current?.offsetWidth || window.innerWidth;
    const cardWidth = 250; // Approx width of each card (including margin)
    setCardsPerRow(Math.floor(containerWidth / cardWidth));
  };

  useEffect(() => {
    updateCardsPerRow();
    window.addEventListener("resize", updateCardsPerRow);
    return () => window.removeEventListener("resize", updateCardsPerRow);
  }, []);

  // Scroll Handlers
  const scrollNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 250 * cardsPerRow, behavior: "smooth" });
    }
  };

  const scrollPrev = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -250 * cardsPerRow, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-white px-6 py-12 w-full">
      <div className="max-w-full mx-10">
        <div className="flex flex-col justify-between items-start py-10 mb-8">
          <h2 className="text-[5vw] font-bold leading-none">
            Take your <span className="text-primary">knowledge</span>
            <br /> a degree further
          </h2>
          <div className="flex items-center justify-between w-full gap-4 pt-10">
            <div className="flex gap-4">
              <button className="px-4 py-1.5 rounded-full bg-black text-white text-sm">New courses (12)</button>
              <button className="px-4 py-1.5 rounded-full bg-gray-100 text-sm">Recommended (8)</button>
              <button className="px-4 py-1.5 rounded-full bg-gray-100 text-sm">Most popular (22)</button>
            </div>
            <div className="flex items-center gap-2 ml-4">
              <button onClick={scrollPrev} className="px-3 py-1 rounded bg-gray-200 text-sm">◀</button>
              <button onClick={scrollNext} className="px-3 py-1 rounded bg-gray-200 text-sm">▶</button>
            </div>
          </div>
        </div>

        {/* Carousel Container */}
        <div ref={carouselRef} className="overflow-x-auto scroll-smooth scrollbar-hide">
          <div className="flex gap-6 w-max">
            {courses.map((course, index) => (
              <div key={index} className="course-card min-w-[250px]">
                <div className="w-full h-[32vh] border border-gray-200 rounded-2xl overflow-hidden">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-medium mb-1 pt-5">{course.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{course.category}</p>
                <button className="more-details-btn">More details</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
