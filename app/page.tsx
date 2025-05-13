"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Calendar, Code2, Coffee, ArrowRight, Sparkles, Star } from "lucide-react";
import Link from "next/link";

const MotionLink = motion(Link);

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export default function Home() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
      <div className="container px-4 md:px-6 relative">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-20 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-pulse delay-700" />
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] relative">
          <motion.div
            {...fadeInUp}
            className="mx-auto flex flex-col justify-center space-y-8 text-center lg:text-left"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium bg-background/50 backdrop-blur-sm hover-glow"
              >
                <span className="flex items-center">
                  <Star className="mr-2 h-4 w-4 text-primary animate-pulse" />
                  Available for Bookings
                </span>
              </motion.div>
              <h1 className="font-dosis text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl/none">
                Book Your Session with{" "}
                <span className="bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
                  Eshan Roy
                </span>
              </h1>
              <p className="mx-auto max-w-[600px] text-muted-foreground text-lg md:text-xl lg:mx-0 leading-relaxed font-light">
                Get personalized guidance on tech, projects, and career development. Let's turn your ideas into reality.
              </p>
            </div>
            <div className="flex flex-col gap-4 min-[400px]:flex-row justify-center lg:justify-start">
              <MotionLink 
                href="/book"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button size="lg" className="w-full min-[400px]:w-auto bg-primary hover:bg-primary/90 text-lg px-8 hover-glow">
                  Schedule Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </MotionLink>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button size="lg" variant="outline" className="w-full min-[400px]:w-auto text-lg px-8 border-2 hover-glow">
                  Learn More
                </Button>
              </motion.div>
            </div>
            <div className="mx-auto flex flex-col gap-6 lg:mx-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { icon: Calendar, title: "Flexible Scheduling", desc: "Book at your convenience" },
                  { icon: Code2, title: "Expert Guidance", desc: "Years of experience" },
                  { icon: Coffee, title: "1:1 Sessions", desc: "Personalized attention" }
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                    className="flex flex-col items-center space-y-3 rounded-xl border bg-background/50 backdrop-blur-sm p-6 hover:border-primary/50 transition-colors hover-glow"
                  >
                    <feature.icon className="h-10 w-10 text-primary" />
                    <div className="text-center">
                      <p className="font-dosis font-semibold text-lg">{feature.title}</p>
                      <p className="text-sm text-muted-foreground">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotate: 6 }}
            animate={{ opacity: 1, scale: 1, rotate: 6 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto aspect-square w-full max-w-[400px] rounded-2xl bg-gradient-to-br from-primary/20 via-primary/5 to-background p-8 shadow-2xl hover-glow"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex h-full flex-col justify-between rounded-xl border bg-background/80 backdrop-blur-sm p-6 hover:border-primary/50 transition-colors"
            >
              <div className="space-y-2">
                <h3 className="text-xl font-dosis font-semibold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  Technical Consultation
                </h3>
                <p className="text-sm text-muted-foreground">Next available slot</p>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-2">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + i * 0.1, duration: 0.3 }}
                      className="aspect-square rounded-lg bg-secondary/50 hover:bg-primary/10 transition-colors cursor-pointer hover-glow"
                    />
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                    <p className="text-sm font-medium">30 min</p>
                  </div>
                  <Button size="sm" variant="outline" className="hover:bg-primary/10 hover-glow">
                    Book Now
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}