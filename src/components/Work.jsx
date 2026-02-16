import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../constants";

export const Work = () => {
  const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="gradient-text">Featured</span> Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
                          initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }}
            custom={1}
              className="project-card bg-black bg-opacity-50 overflow-hidden !rounded-lg glow-border"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.desc}</p>
                <div className="flex flex-col w-full justify-between mt-3 gap-3">
                  <div className="tech-icon-wrap flex items-center gap-[10px]">
                    {project.tech.map((icon, i) => (
                      <img
                        key={i}
                        src={icon}
                        className="w-12 h-12 bg-cyan-950 p-2 rounded-full"
                        alt="tech icon"
                      />
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-medium leading-6 tracking-[-0.48px] text-left text-[#CBACF9] flex items-center gap-[5px]"
                  >
                    Check Live Site{" "}
                    <FaExternalLinkAlt className="text-[#CBACF9]" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
