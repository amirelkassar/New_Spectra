export const Questions = ({
  discription = '',
  questions = [],
}) => {
  return (
    <div className='border-[3px] border-blueLight rounded-lg'>
      {/* DISCRIPTION */}
      <h2 className='text-base font-bold p-3'>
        {discription}
      </h2>

      {/* SEPARATOR */}
      <div className='h-0.5 bg-grayLight w-full' />

      {/* QUESTIONS */}
      <div className='p-3'>
        {questions.map((question, index) => (
          <ul className='py-2' key={index}>
            <li className='inline-flex items-center *:shrink-0 gap-3 flex-wrap'>
              <span>{question?.ques}</span>
              <span>
                {question?.chooices.map((choice, index) => (
                  <span key={index}>
                    <input
                      type='radio'
                      id={`${question?.id}${index}`}
                      name={`question-${question?.id}`}
                      value={choice?.value}
                      className='mr-2'
                    />
                    {choice?.label}
                  </span>
                ))}
              </span>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};
