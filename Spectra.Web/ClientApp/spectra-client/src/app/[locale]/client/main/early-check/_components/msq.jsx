import Button from '@/components/button';
import { Questions } from './questions';

export const MSQ = ({ data = {} }) => {
  return (
    <div className='space-y-5'>
      <Questions
        discription='ملاحظات الاباء حول التفاعل الاجتماعي'
        questions={data['1']}
      />

      <Questions
        discription='الرجاء وضع علامة على كل ما ينطبق'
        questions={data['2']}
      />

      <div className='flex gap-5 font-bold *:flex-1 max-w-lg'>
        <Button variant='secondary'>التالي</Button>

        <Button>السابق</Button>
      </div>
    </div>
  );
};
