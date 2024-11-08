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
import { Utensils, Martini } from "lucide-react";
import { AnimatedBackground } from "@/components/animated-background";

export function GourmetBirthdayInvitation() {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    if (name.trim()) {
      try {
        const response = await fetch("/api/rsvp", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name }),
        });

        const result = await response.json();

        if (!response.ok) {
          console.error(result.error);
          // Optionally display an error message to the user
        } else {
          setSubmitted(true);
        }
      } catch (error) {
        console.error("An error occurred:", error);
        // Optionally display an error message to the user
      }
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
            submitted ? "bg-stone-800/80" : "bg-stone-50/90"
          } backdrop-blur-md shadow-lg border border-gray-200
          transition duration-1000 ease-in-out
          `}
        >
          <CardHeader className="text-center border-b border-gray-300 pb-6">
            <CardTitle
              className={`text-4xl mb-2  ${
                submitted ? "text-white" : "text-gray-900"
              } font-almendra`}
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
                  <p className="text-xl font-semibold  text-gray-900">
                    Jay&apos;s Birthday Party
                  </p>
                  <p className="text-gray-700">에 초대합니다.</p>
                  <div className="flex justify-center space-x-6 text-gray-700 hover:text-gray-900 transition duration-300">
                    <Utensils className="h-6 w-6" />
                    <Martini className="h-6 w-6" />
                  </div>
                  <p className="text-gray-700">11/30 (토) 18:00</p>
                  <p className="text-gray-700">충무로역 근처</p>
                  <p className="text-xs text-gray-500">
                    (소정의 참여비가 있을 수 있습니다.)
                  </p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <Input
                    type="text"
                    placeholder="이름을 입력해주세요."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white border-gray-300 focus:ring-0 focus:border-gray-500"
                    required
                  />
                  <Button
                    type="submit"
                    className="w-full bg-black hover:bg-gray-800 text-white  transition duration-300"
                    disabled={!name.trim()}
                  >
                    참여 신청하기
                  </Button>
                </form>
              </>
            ) : (
              <div className="text-center space-y-6 text-white">
                <p className="text-xl font-semibold">
                  Delighted to have you join us, {name}!
                </p>
                <div className="flex justify-center space-x-6 mt-6">
                  <Utensils className="h-6 w-6" />
                  <Martini className="h-6 w-6" />
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
