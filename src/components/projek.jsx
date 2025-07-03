import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { projects } from "../data/projek";

export default function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect(); // Set awal
  }, [emblaApi, onSelect]);

  return (
    <section className="pt-20 pb-20 md:mx-32 mx-10" id="projek" data-aos="flip-down" data-aos-delay="300">
      <h1 className="text-4xl md:text-6xl font-bold py-10 text-center md:text-end text-[#001F3F]">
        projek
      </h1>

      <div className="embla w-[90%] mx-auto pt-14" ref={emblaRef}>
        <div className="embla__container flex gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="embla__slide shrink-0 w-full md:w-[50%] lg:w-[33%]"
            >
              <div className="h-full flex flex-col justify-between bg-white shadow-md hover:shadow-xl transition-all duration-300 p-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-md mb-4 aspect-video object-cover"
                />
                <div className="flex flex-col flex-grow text-center">
                  <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                  <p className="md:text-base text-sm flex-grow">
                    {project.description}
                  </p>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      className={`mt-2 font-medium ${project.color} hover:underline`}
                      rel="noreferrer"
                    >
                      {new URL(project.link).hostname}
                    </a>
                  )}
                  {project.tech && (
                    <div className="flex justify-center gap-4 mt-4 text-xl text-gray-700">
                      {project.tech.map((Icon, idx) => (
                        <Icon key={idx} className="text-3xl md:text-5xl"/>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dot Navigation */}
      <div className="flex justify-center gap-3 mt-8">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === selectedIndex
                ? "bg-[#4832c2] scale-125"
                : "bg-gray-300 hover:bg-[#8773fe]"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}
