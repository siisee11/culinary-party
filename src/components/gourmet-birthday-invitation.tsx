"'use client'";

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

export function GourmetBirthdayInvitation() {
  const [name, setName] = useState("''");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <div className="w-full min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-cream shadow-xl border-2 border-amber-900">
        <CardHeader className="text-center border-b-2 border-amber-900 pb-4">
          <CardTitle className="text-3xl font-serif text-amber-900 mb-2">
            Le Anniversaire
          </CardTitle>
          <CardDescription className="text-lg font-serif text-amber-800">
            A Culinary Celebration
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          {!submitted ? (
            <>
              <div className="text-center mb-6 text-amber-900 space-y-4">
                <p className="font-serif italic">
                  You are cordially invited to a
                </p>
                <p className="text-2xl font-semibold">
                  Gourmet Birthday Soirée
                </p>
                <div className="flex justify-center space-x-4">
                  <Utensils className="h-6 w-6" />
                  <GlassWater className="h-6 w-6" />
                </div>
                <p className="font-serif">
                  Please RSVP with your esteemed presence
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border-amber-900 focus:ring-amber-500 font-serif"
                  required
                />
                <Button
                  type="submit"
                  className="w-full bg-amber-900 hover:bg-amber-800 text-slate-50 font-serif"
                >
                  Confirm Attendance
                </Button>
              </form>
            </>
          ) : (
            <div className="text-center space-y-4 text-amber-900">
              <p className="text-xl font-semibold font-serif ">
                Delighted to have you join us, {name}!
              </p>
              <p className="font-serif italic">
                Prepare your palate for an unforgettable gastronomic experience.
              </p>
              <div className="flex justify-center space-x-4 mt-4">
                <Utensils className="h-8 w-8" />
                <GlassWater className="h-8 w-8" />
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
