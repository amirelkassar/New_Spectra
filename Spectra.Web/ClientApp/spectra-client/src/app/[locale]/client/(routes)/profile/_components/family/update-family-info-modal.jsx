'use client';

import { Modal } from '@mantine/core';
import { useCallback, useState } from 'react';
import { useDisclosure } from '@mantine/hooks';

import TextInput from '@/components/inputs/text-input';
import Button from '@/components/button';
import Avatar from '@/components/avatar';
import EditImgIcon from '@/assets/icons/editImg';
import { cn } from '@/lib/utils';

export const UpdateFamilyInfoModal = ({
  children,
  className = '',
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

      <div
        className={cn('w-fit', className)}
        role='dialog'
        onClick={open}
      >
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
            تعديل ملفي
          </h3>

          {/* FORM */}
          <form
            onSubmit={onSubmit}
            className='space-y-5 mdl:space-y-10'
          >
            {/* AVATAR */}
            <div className='relative w-fit mx-auto'>
              <Avatar
                name={data?.fullname}
                src={data?.avatar}
                className='size-20 lg:size-28 rounded-full inline-flex'
              />

              <label htmlFor='avatar'>
                <input
                  className='hidden'
                  type='file'
                  accept='image/*'
                  id='avatar'
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (!file) return;
                    const url = URL.createObjectURL(file);
                    handleChange('avatar', url);
                  }}
                />

                {/* EDIT ICON */}
                <div
                  role='button'
                  className='absolute bottom-0 start-1/2 translate-x-1/2 ltr:-translate-x-1/2 translate-y-1/4 bg-greenMain rounded-full size-8 flex items-center justify-center'
                >
                  <EditImgIcon className='size-4' />
                </div>
              </label>
            </div>

            <div className='grid grid-cols-1 mdl:grid-cols-2 gap-3'>
              {/* NAME */}
              <TextInput
                label='الاسم'
                labelClassName='mdl:text-base mb-1 ps-0'
                value={data?.fullname}
                onChange={(e) =>
                  handleChange('fullname', e.target.value)
                }
              />
              {/* EMAIL */}
              <TextInput
                label='البريد الالكتروني'
                labelClassName='mdl:text-base mb-1 ps-0'
                value={data?.email}
                onChange={(e) =>
                  handleChange('email', e.target.value)
                }
              />

              {/* ID */}
              <TextInput
                label='رقم الهوية'
                labelClassName='mdl:text-base mb-1 ps-0'
                value={data?.id}
                onChange={(e) =>
                  handleChange('id', e.target.value)
                }
              />

              {/* COUNTRY */}
              <TextInput
                label='البلد'
                labelClassName='mdl:text-base mb-1 ps-0'
                value={data?.country}
                onChange={(e) =>
                  handleChange('country', e.target.value)
                }
              />

              {/* CITY */}
              <TextInput
                label='المدينة'
                labelClassName='mdl:text-base mb-1 ps-0'
                value={data?.city}
                onChange={(e) =>
                  handleChange('city', e.target.value)
                }
              />

              {/* PROFESSION */}
              <TextInput
                label='الوظيفة'
                labelClassName='mdl:text-base mb-1 ps-0'
                value={data?.profession}
                onChange={(e) =>
                  handleChange('profession', e.target.value)
                }
              />
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
