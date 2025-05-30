import { Question } from "@/lib/types";

type QuestionsProps = {
  data: Question;
};
const CurrentQuestion = ({data}: QuestionsProps) => {

  return (
    <div className="w-full">
      <h2 className="text-dark-blue dark:text-gray-700 text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight break-words">
        {data.question}
      </h2>
    </div>
  )
}

export default CurrentQuestion