"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <motion.footer 
      className="w-full border-t bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="flex flex-col items-center justify-between space-y-4 py-8 md:h-24 md:flex-row md:space-y-0 md:py-0">
          <div className="flex flex-col items-center space-y-4 md:flex-row md:space-x-4 md:space-y-0">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © 2024 Eshan Roy. Built with Next.js and Tailwind CSS
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}