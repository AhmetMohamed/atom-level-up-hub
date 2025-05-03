
import React from "react";
import { CheckCircle, XCircle } from "lucide-react";

interface QuestionType {
  id: string;
  question: string;
  options: string[];
  answer: number;
}

interface QuizQuestionProps {
  question: QuestionType;
  index: number;
  selectedOption: number | undefined;
  isSubmitted: boolean;
  onSelectOption: (index: number) => void;
}

const QuizQuestion = ({
  question,
  index,
  selectedOption,
  isSubmitted,
  onSelectOption,
}: QuizQuestionProps) => {
  const isCorrect = selectedOption === question.answer;

  return (
    <div className="border rounded-lg p-4 mb-4">
      <h3 className="font-medium mb-3">
        {index + 1}. {question.question}
      </h3>
      <div className="space-y-2">
        {question.options.map((option, optionIndex) => (
          <div
            key={optionIndex}
            onClick={() => {
              if (!isSubmitted) {
                onSelectOption(optionIndex);
              }
            }}
            className={`
              p-3 rounded-lg border flex justify-between items-center
              ${!isSubmitted && "cursor-pointer hover:bg-muted/50"}
              ${
                isSubmitted && optionIndex === question.answer
                  ? "bg-green-100 border-green-300"
                  : isSubmitted && selectedOption === optionIndex && !isCorrect
                  ? "bg-red-100 border-red-300"
                  : selectedOption === optionIndex
                  ? "bg-science-light border-science-primary/30"
                  : ""
              }
            `}
          >
            <div className="flex items-center gap-3">
              <div
                className={`h-6 w-6 rounded-full flex items-center justify-center border
                ${
                  selectedOption === optionIndex && !isSubmitted
                    ? "bg-science-primary text-white border-science-primary"
                    : "border-muted-foreground"
                }
              `}
              >
                <span className="text-sm">
                  {String.fromCharCode(65 + optionIndex)}
                </span>
              </div>
              <span>{option}</span>
            </div>

            {isSubmitted && optionIndex === question.answer && (
              <CheckCircle className="h-5 w-5 text-green-600" />
            )}
            {isSubmitted && selectedOption === optionIndex && !isCorrect && (
              <XCircle className="h-5 w-5 text-red-500" />
            )}
          </div>
        ))}
      </div>

      {isSubmitted && (
        <div
          className={`mt-4 p-3 rounded-lg ${
            isCorrect ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"
          }`}
        >
          <p className={`text-sm ${isCorrect ? "text-green-700" : "text-red-700"}`}>
            {isCorrect
              ? "Correct! Well done!"
              : `Incorrect. The correct answer is: ${question.options[question.answer]}`}
          </p>
        </div>
      )}
    </div>
  );
};

export default QuizQuestion;
