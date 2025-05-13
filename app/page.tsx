"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Calendar, Code2, Coffee, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-gradient-to-b from-background to-secondary/20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto flex flex-col justify-center space-y-8 text-center lg:text-left"
          >
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Book Your Session with{" "}
                <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  Eshan Roy
                </span>
              </h1>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl lg:mx-0">
                Get personalized guidance on tech, projects, and career development. Let's turn your ideas into reality.
              </p>
            </div>
            <div className="flex flex-col gap-4 min-[400px]:flex-row justify-center lg:justify-start">
              <Link href="/book">
                <Button size="lg" className="w-full min-[400px]:w-auto">
                  Schedule Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="w-full min-[400px]:w-auto">
                Learn More
              </Button>
            </div>
            <div className="mx-auto flex flex-col gap-4 lg:mx-0">
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-4">
                  <Calendar className="h-6 w-6 text-primary" />
                  <p className="text-sm font-medium">Flexible Scheduling</p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-4">
                  <Code2 className="h-6 w-6 text-primary" />
                  <p className="text-sm font-medium">Expert Guidance</p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-4">
                  <Coffee className="h-6 w-6 text-primary" />
                  <p className="text-sm font-medium">1:1 Sessions</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto aspect-square w-full max-w-[400px] rotate-6 rounded-2xl bg-secondary p-8 shadow-2xl"
          >
            <div className="flex h-full flex-col justify-between rounded-lg border bg-background p-6">
              <div className="space-y-2">
                <h3 className="font-semibold">Technical Consultation</h3>
                <p className="text-sm text-muted-foreground">Next available slot</p>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-2">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="aspect-square rounded bg-secondary/50"
                    />
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">30 min</p>
                  <Button size="sm" variant="outline">
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}