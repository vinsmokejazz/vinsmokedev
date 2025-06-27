"use client";
import React, { useState } from "react";
import Container from "./container";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "motion/react";

const Navbar = () => {
  const navItems = [
    { title: "About", href: "/about" },
    { title: "Projects", href: "/projects" },
    { title: "Contact", href: "/contact" },
    { title: "Blog", href: "/blog" },
  ];

  const [hovered, setHovered] = useState<number | null>(null);
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  return (
    <Container>
      <motion.nav 
        animate={{
          boxShadow: scrolled ? "var(--shadow-aceternity)" : "none",
          width:scrolled ? "43%" : "100%",
          y: scrolled ? 10 : 0,
        }}
        transition={{
          duration: 0.2,
          ease: "linear"
        }}
        
        className="fixed inset-x-0 top-0 mx-auto px-2 py-3 flex max-w-4xl items-center justify-between rounded-full p-2 backdrop-blur-xs"
      >
        <Image
          className="h-10 w-10 rounded-full"
          src="/avatar.jpg"
          width="100"
          height="100"
          alt="avatar"
        />

        <div className="flex items-center">
          {navItems.map((item, id) => (
            <Link
              className="relative px-2 py-1 text-sm"
              key={id}
              href={item.href}
              onMouseEnter={() => setHovered(id)}
              onMouseLeave={() => setHovered(null)}
            >
              {hovered === id && (
                <motion.span
                  layoutId="hovered-span"
                  className="absolute inset-0 h-full w-full rounded-md bg-neutral-100 dark:bg-neutral-800"
                />
              )}
              <span className="relative z-10">{item.title}</span>
            </Link>
          ))}
        </div>
      </motion.nav>
    </Container>
  );
};

export default Navbar;
