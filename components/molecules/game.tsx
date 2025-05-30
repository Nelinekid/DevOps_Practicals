"use client";
import { useQuestionStore } from "@/store/quiz-store";
import CurrentQuestion from "../atoms/current-question";
import Answers from "./answers";
import Progress from "../atoms/progress";
import { MotionDiv } from "../animated/motion-div";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Game() {
  const { currentQuestion, questions, selectAnswer, goNextQuestion, reset } = useQuestionStore();
  const question = questions[currentQuestion];

  return (
    <div className="w-full min-h-[calc(100vh-4rem)] flex flex-col">
      {/* Header with Quit Button */}
      <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <button
          onClick={reset}
          className="px-4 py-1.5 bg-[#FF4B4B] hover:bg-[#FF3333] text-white rounded-lg transition-all text-base font-semibold shadow-md hover:shadow-lg hover:scale-105 active:scale-95"
        >
          Quit Game
        </button>
      </div>

      <div className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-2">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 h-full">
          {/* Left Column - Question */}
          <div className="flex-1 flex flex-col">
            <div className="bg-white dark:bg-navy rounded-3xl shadow-lg p-6 flex-1">
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <h2 className="text-dark-blue dark:text-white text-lg font-normal italic">
                    Question {currentQuestion + 1} of {questions.length}
                  </h2>
                  <div className="mt-2 h-2 bg-gray-200 dark:bg-navy-light rounded-full">
                    <div
                      className="h-full bg-purple rounded-full transition-all duration-300"
                      style={{
                        width: `${((currentQuestion + 1) / questions.length) * 100}%`,
                      }}
                    />
                  </div>
                </div>

                <div className="flex-1 flex flex-col">
                  <div className="flex-1">
                    <CurrentQuestion data={question} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Answers */}
          <div className="flex-1">
            <div className="bg-white dark:bg-navy rounded-3xl shadow-lg p-6 h-full py-4">
              <Answers 
                data={question.options}
                questionId={question.id}
                handleAnswer={selectAnswer}
                goNextQuestion={goNextQuestion}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
