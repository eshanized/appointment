"use client";

import { Calendar, Menu, Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "./ui/sheet";
import Link from "next/link";
import { motion } from "framer-motion";

export function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <motion.header 
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <nav className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Calendar className="h-6 w-6" />
            <span className="font-bold">Eshan Roy</span>
          </Link>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-secondary"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden hover:bg-secondary">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>Navigation Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-4 mt-6">
                  <Link href="/book" className="text-lg font-medium">
                    Schedule a Session
                  </Link>
                </div>
              </SheetContent>
            </Sheet>

            <div className="hidden md:block">
              <Link href="/book">
                <Button variant="default">Schedule a Session</Button>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </motion.header>
  );
}