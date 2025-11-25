import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-secondary tracking-[4px]">2017 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Bachelor in Business Information Technology"
            subTitle="University of Rwanda (2021 - 2023)"
            result="3.90/4"
            des="Completed a comprehensive Business Information Technology program focused on software development, database management, networking, and IT-driven business solutions."
          />
          <ResumeCard
            title="Programming Certificates"
            subTitle="Klab Training (2023 - 2023)"
            result="4.75/5"
            des="Gained hands-on experience in full-stack development, including JavaScript, backend fundamentals, version control, and application deployment."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Lycee Islamic De Rwamagana (2017 - 2019)"
            result="5.00/5"
            des="Gained hands-on knowledge in computer networks, cabling, IP addressing, and network security principles during secondary school studies"
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-secondary tracking-[4px]">2017 - 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Software and Hardware Maintenance"
            subTitle="IPRC Ngoma (2017)"
            result="74%"
            des="Completed hands-on training in both hardware and software maintenance, including PC assembly, diagnostics, OS installation, virus removal, and preventive maintenance procedures."
          />
          <ResumeCard
            title="Switching and Routing"
            subTitle="UNILAK Rwamagana (2018)"
            result="80%"
            des="Completed practical training in routing and switching, including IP routing, subnetting, VLAN management, inter-VLAN communication, and network security fundamentals."
          />
          <ResumeCard
            title="IT and Pension Administration"
            subTitle="Zamara Rwanda (2025)"
            result="Rwanda"
            des="Worked across software development, IT support, and pension administration, handling system troubleshooting, contributing to internal software solutions, and supporting pension data processing over an 8-month period."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
