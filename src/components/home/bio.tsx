"use client";

import { motion } from "framer-motion";

import { bio } from "~/bio";
import { parentVariants } from "~/lib/animations";

export function Bio() {
  return (
    <p className=" mt-0">
      <motion.span variants={parentVariants}>
        Hi there, I&apos;m <motion.strong>{bio.firstName}</motion.strong>.
        I&apos;m {new Date().getFullYear() - bio.birthYear} y/o and I&apos;m a{" "}
        {bio.profession}. I like <motion.strong>{bio.hobbies[0]}</motion.strong>{" "}
        and <motion.strong>{bio.hobbies[1]}</motion.strong>. I enjoy{" "}
        <motion.strong>{bio.activities[0]}</motion.strong>,{" "}
        <motion.strong>{bio.activities[1]}</motion.strong> and{" "}
        <motion.strong>{bio.activities[2]}</motion.strong>.
      </motion.span>
      <br />
      <br />
    </p>
  );
}
