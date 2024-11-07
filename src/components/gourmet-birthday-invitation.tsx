// components/gourmet-birthday-invitation.tsx

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Utensils, GlassWater } from "lucide-react";
import { AnimatedBackground } from "@/components/animated-background";

export function GourmetBirthdayInvitation() {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground submitted={submitted} />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <Card
          className={`w-full max-w-md ${
            submitted ? "bg-black/80" : "bg-white/80"
          } backdrop-blur-md shadow-lg border border-gray-200
          transition duration-1000 ease-in-out
          `}
        >
          <CardHeader className="text-center border-b border-gray-300 pb-6">
            <CardTitle
              className={`text-4xl mb-2 font-serif ${
                submitted ? "text-white" : "text-gray-900"
              }`}
            >
              Culinary Class Party
            </CardTitle>
            <CardDescription
              className={`text-lg italic ${
                submitted ? "text-gray-200" : "text-gray-700"
              }`}
            >
              By Chungmuro Matpia
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-8">
            {!submitted ? (
              <>
                <div className="text-center mb-8 space-y-6">
                  <p className="italic text-gray-700 font-libre">
                    You are cordially invited to a
                  </p>
                  <p className="text-2xl font-semibold font-serif text-gray-900">
                    Gourmet Birthday Soirée
                  </p>
                  <div className="flex justify-center space-x-6 text-gray-700">
                    <Utensils className="h-6 w-6 hover:text-gold transition duration-300" />
                    <GlassWater className="h-6 w-6 hover:text-gold transition duration-300" />
                  </div>
                  <p className="text-gray-700 font-libre">
                    Please RSVP with your esteemed presence
                  </p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <Input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white border-gray-300 focus:ring-0 focus:border-gray-500 font-libre"
                    required
                  />
                  <Button
                    type="submit"
                    className="w-full bg-black hover:bg-gray-800 text-white font-libre transition duration-300"
                  >
                    Confirm Attendance
                  </Button>
                </form>
              </>
            ) : (
              <div className="text-center space-y-6 text-white">
                <p className="text-xl font-semibold font-serif">
                  Delighted to have you join us, {name}!
                </p>
                <p className="italic font-libre">
                  Prepare your palate for an unforgettable gastronomic
                  experience.
                </p>
                <div className="flex justify-center space-x-6 mt-6">
                  <Utensils className="h-8 w-8" />
                  <GlassWater className="h-8 w-8" />
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
