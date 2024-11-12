import { cn } from '@/lib/utils';

export const SurveyForm = ({ children, ...props }) => {
  return (
    <div
      {...props}
      className={cn(
        'rounded-lg bg-white p-1 lg:p-5 relative w-full max-w-full',
        props?.className
      )}
    >
      {children}
    </div>
  );
};

const Description = ({ children, ...props }) => {
  return (
    <p
      {...props}
      className={cn(
        'text-xs mdl:text-base font-semibold relative mb-5 ps-4 before:absolute before:start-0 before:top-0 before:w-1 before:h-full before:bg-greenMain before:rounded-sm',
        props?.className
      )}
    >
      {children}
    </p>
  );
};

SurveyForm.Description = Description;

const Body = ({ children, ...props }) => {
  return (
    <div
      {...props}
      className={cn(
        'border-[3px] border-greenMain/20 rounded-lg',
        props?.className
      )}
    >
      {children}
    </div>
  );
};

SurveyForm.Body = Body;

const Title = ({ children, ...props }) => {
  return (
    <h2
      {...props}
      className={cn(
        'text-sm mdl:text-xl font-bold p-3 border-b-2 border-greenMain/20',
        props?.className
      )}
    >
      {children}
    </h2>
  );
};

SurveyForm.Title = Title;

const QuestionLi = ({ children, ...props }) => {
  return (
    <li
      {...props}
      className={cn(
        'relative pt-5 w-full pe-3 ps-8 before:absolute before:top-7 mdl:before:top-8 before:start-3 before:size-[10px] before:bg-greenMain before:rounded-full after:absolute after:hidden mdl:after:block after:top-[38px] after:start-[16px] after:w-[2px] after:h-[calc(100%-6px)] after:bg-greenMain last:after:hidden',
        props?.className
      )}
    >
      {children}
    </li>
  );
};

SurveyForm.QuestionLi = QuestionLi;

const Question = ({ children, ...props }) => {
  return (
    <div
      {...props}
      className={cn(
        'border-b-2 pb-5 border-grayLight w-full flex gap-x-3 gap-y-5 flex-col sml:flex-row sml:flex-wrap',
        props?.className
      )}
    >
      {children}
    </div>
  );
};

SurveyForm.Question = Question;

const QuestionLabel = ({ children, ...props }) => {
  return (
    <div
      {...props}
      className={cn(
        'text-xs mdl:text-base flex items-center font-bold',
        props?.className
      )}
    >
      {children}
    </div>
  );
};

SurveyForm.QuestionLabel = QuestionLabel;

const Answers = ({ children, ...props }) => {
  return (
    <div
      {...props}
      className={cn(
        'flex flex-wrap gap-y-5 gap-x-3',
        props?.className
      )}
    >
      {children}
    </div>
  );
};

SurveyForm.Answers = Answers;

const SingleAnswer = ({ children, ...props }) => {
  return (
    <label htmlFor={props?.id}>
      <input
        type='radio'
        {...props}
        className='peer hidden'
      />

      <div
        role='button'
        className={cn(
          'border-2 text-xs  duration-200  block border-blueLight rounded-xl leading-6 pe-8 ps-3 py-1 mdl:text-base font-normal relative before:absolute before:size-3 before:text-[10px] before:font-extrabold before:bg-grayDark/50 before:end-3 before:top-1/2 before:-translate-y-1/2 before:rounded-full before:content-[""] peer-checked:bg-greenMain peer-checked:text-white peer-checked:before:bg-white peer-checked:font-bold peer-checked:before:bg-[url("data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjEwcHgiIHdpZHRoPSIxMHB4IiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyINCgl4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCgk8Zz4NCgkJPGcgaWQ9ImNoZWNrIj4NCgkJCTxnPg0KCQkJCTxwb2x5Z29uIHN0eWxlPSJmaWxsOiMxMEIwQzE7Ig0KCQkJCQlwb2ludHM9IjExLjk0MSwyOC44NzcgMCwxNi45MzUgNS42OTUsMTEuMjQgMTEuOTQxLDE3LjQ4NiAyNi4zMDUsMy4xMjMgMzIsOC44MTgiIC8+DQoJCQk8L2c+DQoJCTwvZz4NCgk8L2c+DQo8L3N2Zz4=")] before:bg-center before:bg-contain before:bg-no-repeat before:flex before:items-center before:justify-center before:text-greenMain peer-checked:before:border-2 peer-checked:before:border-white',
          props?.className
        )}
      >
        {children}
      </div>
    </label>
  );
};

SurveyForm.SingleAnswer = SingleAnswer;

const MultiAnswers = ({ children, ...props }) => {
  return (
    <label htmlFor={props?.id}>
      <input
        type='checkbox'
        {...props}
        className='peer hidden'
      />

      <div
        role='button'
        className={cn(
          'border-2 text-xs duration-200  block border-blueLight rounded-lg  pe-8 ps-3 py-1 mdl:text-base font-normal relative before:absolute before:size-3 before:text-[10px] before:font-extrabold before:bg-grayDark/50 before:end-3 before:top-1/2 before:-translate-y-1/2 before:rounded-sm before:content-[""] peer-checked:bg-greenMain peer-checked:text-white peer-checked:before:bg-white peer-checked:font-bold peer-checked:before:bg-[url("data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjEwcHgiIHdpZHRoPSIxMHB4IiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyINCgl4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCgk8Zz4NCgkJPGcgaWQ9ImNoZWNrIj4NCgkJCTxnPg0KCQkJCTxwb2x5Z29uIHN0eWxlPSJmaWxsOiMxMEIwQzE7Ig0KCQkJCQlwb2ludHM9IjExLjk0MSwyOC44NzcgMCwxNi45MzUgNS42OTUsMTEuMjQgMTEuOTQxLDE3LjQ4NiAyNi4zMDUsMy4xMjMgMzIsOC44MTgiIC8+DQoJCQk8L2c+DQoJCTwvZz4NCgk8L2c+DQo8L3N2Zz4=")] before:bg-center peer-checked:before:border-2 peer-checked:before:border-white before:bg-contain before:bg-no-repeat before:flex before:items-center before:justify-center before:text-greenMain',
          props?.className
        )}
      >
        {children}
      </div>
    </label>
  );
};

SurveyForm.MultiAnswers = MultiAnswers;
