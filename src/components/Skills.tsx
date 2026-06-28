import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  SiCss3,
  SiFirebase,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiSqlite,
  SiSupabase,
  SiGit,
} from "react-icons/si";
import { Code2, Database, MonitorSmartphone, Wrench } from "lucide-react";

const Skills: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const groups = [
    {
      title: "Languages",
      icon: Code2,
      items: [
        { name: "HTML", icon: SiHtml5, color: "#E34F26" },
        { name: "CSS", icon: SiCss3, color: "#1572B6" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      ],
    },
    {
      title: "Frontend",
      icon: MonitorSmartphone,
      items: [
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "React Native", icon: SiReact, color: "#61DAFB" },
      ],
    },
    {
      title: "Backend & Data",
      icon: Database,
      items: [
        { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
        { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
        { name: "SQLite", icon: SiSqlite, color: "#003B57" },
      ],
    },
    {
      title: "Tools",
      icon: Wrench,
      items: [
        { name: "Git", icon: SiGit, color: "#F05032" },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  } as const;

  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 max-w-3xl"
        >
          <h2 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
            Technical Toolbox
          </h2>
          <p className="mt-5 text-lg leading-8 text-zinc-400">
            A focused toolkit for building modern mobile apps, connected interfaces, and reliable data-backed product flows.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-6 md:grid-cols-3"
        >
          {groups.map((group) => {
            const GroupIcon = group.icon;
            return (
              <motion.div
                key={group.title}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className={`relative overflow-hidden rounded-2xl border border-white/15 bg-white/[0.075] p-6 shadow-2xl shadow-black/20 ring-1 ring-white/10 backdrop-blur-2xl backdrop-saturate-150 transition hover:border-cyan-200/40 hover:bg-white/[0.095] hover:shadow-cyan-950/20 ${group.title === "Tools" ? "md:col-span-2" : ""}`}
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/12 via-white/[0.025] to-transparent" />
                <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-cyan-100/60 to-transparent" />
                <h3 className="relative z-10 mb-6 flex items-center gap-3 text-xl font-semibold text-white">
                  <GroupIcon className="h-5 w-5 text-cyan-200" />
                  {group.title}
                </h3>
                <div className="relative z-10 flex flex-wrap gap-3">
                  {group.items.map((skill) => {
                    const IconComponent = skill.icon;
                    return (
                      <span key={skill.name} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-4 py-2 text-sm text-zinc-200 shadow-sm backdrop-blur-xl ring-1 ring-white/10">
                        <IconComponent className="h-4 w-4" style={{ color: skill.color }} />
                        {skill.name}
                      </span>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
