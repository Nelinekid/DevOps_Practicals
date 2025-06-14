"use client";
import Game from "@/components/molecules/game";
import MaxWidthWrapper from "@/components/atoms/max-width-wrapper";
import Score from "@/components/atoms/score";
import Subjects from "@/components/atoms/subjects";
import { useQuestionStore } from "@/store/quiz-store";
import { useEffect } from "react";
import { MotionDiv } from "@/components/animated/motion-div";
import { cn } from "@/lib/utils";
import Navbar from "@/components/atoms/Navbar";

export default function Home() {
  const { fetchQuizzes, quizzes, selectedQuizz, hasCompleteAll, reset } =
    useQuestionStore();

  useEffect(() => {
    fetchQuizzes();
  }, [fetchQuizzes]);

  return (
    <MaxWidthWrapper  
      className={cn(
        selectedQuizz ? "w-full" : "grid px-6 grid-cols-1 md:grid-cols-2 gap-6 xl:gap-12 lg:px-0",
        "relative z-50 py-4"
      )}
    >
      {!selectedQuizz && (
        <>
          {/* <Navbar /> */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col xs:gap-3 md:gap-6"
          >
            <h1 className="xs:text-4xl md:text-5xl font-normal text-dark-blue dark:text-white xl:text-6xl 2xl:text-6xl">
              Welcome to <span className="font-bold">Quizo!</span>
            </h1>
            <p className="text-gray-navy italic dark:text-light-blue xs:text-sm xl:text-xl">
              Pick a subject to get started.
            </p>
          </MotionDiv>
          <MotionDiv
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-y-4 xl:gap-y-6 justify-center w-full"
          >
            <Subjects data={quizzes} />
          </MotionDiv>
        </>
      )}
      {selectedQuizz && hasCompleteAll === false && <Game />}
      {selectedQuizz && hasCompleteAll && (
        <>
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col xs:gap-3 md:gap-6"
          >
            <h1 className="xs:text-4xl md:text-5xl font-normal text-dark-blue dark:text-white xl:text-6xl">
              Quizz Completed!
            </h1>
            <p className="xs:text-4xl md:text-5xl font-bold text-dark-blue dark:text-white xl:text-6xl">
              You scored...
            </p>
          </MotionDiv>
          <MotionDiv
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col justify-center gap-y-4"
          >
            <Score />
            <button
              className="w-full bg-purple py-4 px-5 rounded-xl shadow-lg text-white font-semibold text-lg text-center"
              onClick={reset}
            >
              Play Again
            </button>
            
          </MotionDiv>
        </>
      )}
    </MaxWidthWrapper>
  );
}
