'use client';

import { Modal } from '@mantine/core';
import { useCallback, useState } from 'react';
import { useDisclosure } from '@mantine/hooks';

import TextInput from '@/components/inputs/text-input';
import Button from '@/components/button';

export const UpdateChildInfoModal = ({
  children,
  initialData = {},
}) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [data, setData] = useState(initialData);

  const handleChange = useCallback((key, value) => {
    setData((prev) => ({ ...prev, [key]: value }));
  }, []);

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    //TODO: save data
    // console.log(data);
  }, []);

  return (
    <>
      {/* TRIGGER */}

      <div className='w-auto' role='dialog' onClick={open}>
        {children}
      </div>

      {/* MODAL */}
      <Modal
        opened={opened}
        withCloseButton={false}
        onClose={close}
        size={'lg'}
        radius={'lg'}
      >
        <div className='space-y-5'>
          {/* HEADER */}
          <h3 className='font-bold text-sm py-3 lg:text-medium text-black'>
            تعديل بيانات الطفل
          </h3>

          {/* FORM */}
          <form
            onSubmit={onSubmit}
            className='space-y-5 mdl:space-y-10'
          >
            <div className='grid grid-cols-1 mdl:grid-cols-2 gap-3'>
              {Object.entries(data.main).map(
                ([key, value]) => (
                  <TextInput
                    key={key}
                    label={arKey(key)}
                    labelClassName='mdl:text-base mb-1 ps-0'
                    value={value}
                    onChange={(e) =>
                      handleChange(key, e.target.value)
                    }
                  />
                )
              )}
            </div>

            {/* SUBMIT & CANCEL */}
            <div className='flex flex-col mdl:flex-row gap-3 *:flex-1'>
              <Button
                type='submit'
                variant='secondary'
                className='text-sm mdl:text-base font-bold'
              >
                تأكيد
              </Button>
              <Button
                type='button'
                onClick={close}
                className='text-sm mdl:text-base font-bold'
              >
                الغاء
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

function arKey(key) {
  if (key === 'name') return 'الاسم';
  if (key === 'idNumber') return 'الرقم القومي';
  if (key === 'gender') return 'النوع';
  if (key === 'dateOfBirth') return 'تاريخ الميلاد';
  if (key === 'age') return 'العمر';
  if (key === 'height') return 'الطول';
  if (key === 'weight') return 'الوزن';
  if (key === 'relationToPatient')
    return 'علاقة العميل بالمريض';
  if (key === 'diagnosis') return 'التشخيص';
  if (key === 'symptoms') return 'اعراض الطفل';
  if (key === 'symptomsStart') return 'تاريخ ظهور الاعراض';
  if (key === 'inheritedDiseases') return 'وراثة ام مكتسبة';
  if (key === 'physicalSymptoms') return 'اعراض جسدية';
  if (key === 'notes') return 'ملحوظات';
  return key;
}
