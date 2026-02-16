import React from "react";
import { motion } from "framer-motion";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologiesDesktop, technologiesMobile } from "../constants";

import useIsMobile from "../hooks/useIsMobile";

const Technology = () => {
  const isMobile = useIsMobile();
  const techList = isMobile ? technologiesMobile : technologiesDesktop; 


  return (
    <section id="technologies">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-16 text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span className="gradient-text">Technical</span> Skills
      </motion.h2>

  {/**Desktop  Section  */}

      <motion.div
        className="flex flex-row flex-wrap justify-center gap-10"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        viewport={{ once: true }}
      >
        {techList.map((technology, index) => (
          <motion.div
            className="w-28 h-28"
            key={index}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <BallCanvas icon={technology.icon} />
          </motion.div>
        ))}
      </motion.div>
 
    </section>
  );
};

export default SectionWrapper(Technology, "");
