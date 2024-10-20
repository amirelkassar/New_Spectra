import Card from '@/components/card';
import { Prescription } from '../../_components/prescrtiption';

export const PrescriptionDetails = ({ prescription = {} }) => {
  return (
    <Card className='space-y-5'>
      <div className='w-full'>
        <Prescription {...prescription} isDetailed />
      </div>

      {prescription?.warnings && (
        <div>
          <h4 className='text-sm lg:text-medium font-bold'>تحذيرات</h4>
          <ul className='list-disc list-inside p-2 space-y-2'>
            {prescription?.warnings?.map((warning) => (
              <li key={warning} className='text-xs lg:text-base'>
                {warning}
              </li>
            ))}
          </ul>
        </div>
      )}
    </Card>
  );
};
