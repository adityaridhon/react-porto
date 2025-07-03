import { experiences } from "../data/pengalaman"

export default function Exp() {
  return (
    <section className="pt-28 pb-20 md:mx-32 mx-10" id="pengalaman" data-aos="fade-up" delay-data-aos="400">
      <h2 className="md:text-start text-center text-[#001F3F] font-bold text-4xl md:text-6xl">pengalaman</h2>

      {experiences.map((exp, index) => (
        <div
          key={index}
          className={`mx-auto max-w-[320px] md:max-w-[900px] md:flex ${exp.imagePosition === "right" ? "md:flex-row-reverse" : "md:flex-row"} mt-10`}
        >
          <img src={exp.image} alt={exp.title} className="rounded-xl" width={350} />
          <div className={`mt-4 md:mt-0 ${exp.imagePosition === "left" ? "md:ml-6" : ""} w-full`}>
            <h2 className="text-blue-600 font-bold text-lg md:text-2xl">{exp.title}</h2>
            <h3 className="font-semibold text-base md:text-lg">{exp.role}</h3>
            <p className="font-semibold md:text-base text-sm">{exp.time}</p>
            <ul className="list-disc ml-5 mt-1 md:text-base text-sm">
              {exp.tasks.map((task, idx) => (
                <li key={idx}>{task}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  )
}
