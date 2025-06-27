"use client";
import Image from "next/image";
import React from "react";
import { easeInOut, motion } from "motion/react";
import Link from "next/link";

const Projects = () => {
  const projects = [
    {
      title: "TentantFlow",
      src: "/tenantFlow.png",
      description: "A modern CRM SaaS Platform",
      href: "#",
    },
    {
      title: "Muzix",
      src: "/muzix.png",
      description: "Create your own Music Course",
      href: "https://web3-wallet-adapter.vercel.app/",
    },
    {
      title: "VenForge",
      src: "/VenForge.png",
      description: "A 3D Portfolio with React-three-fiber",
      href: "#",
    },
    {
      title: "Gaucet",
      src: "/walletAdap.png",
      description: "A Web3 Wallet Adapter to Airdrop devnnet SOL",
      href: "#",
    },
  ];
  return (
    <div className="py-10">
      <p className="text-secondary max-w-lg pt-4 text-sm md:text-base">
        building web apps and products that can impact million lives
      </p>
      <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-2">
        {projects.map((projects, id) => (
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px),y:10" }}
            whileInView={{ opacity: 1, filter: "blur(0px),y:0" }}
            transition={{
              duration: 0.3,
              delay: id * 0.1,
              ease: "easeInOut",
            }}
            key={id}
            className="group"
          >
            <Link href={projects.href} target="blank">
            <Image
              className="h-72 w-full rounded-xl object-cover transition duration-200 group-hover:scale-[1.02]"
              height={300}
              width={300}
              src={projects.src}
              alt={projects.title}
            />
            <h2 className="z-20 mt-2 font-medium tracking-tight text-neutral-500 dark:text-neutral-400">
              {projects.title}
            </h2>
            <p className="max-w-xs text-sm text-neutral-500 dark:text-neutral-400">
              {projects.description}
            </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
