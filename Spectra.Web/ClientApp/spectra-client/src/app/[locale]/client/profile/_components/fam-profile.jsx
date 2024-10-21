'use client';

import { useCallback, useState } from 'react';

import { cn } from '@/lib/utils';
import { Heading } from '../../_components/heading';
import { AddChildModal } from './add-child-modal';

import Card from '@/components/card';
import Avatar from '@/components/avatar';
import EditIcon from '@/assets/icons/edit';
import SaveIcon from '@/assets/icons/save';
import EditImgIcon from '@/assets/icons/editImg';
import TextInput from '@/components/inputs/text-input';

export const FamProfile = ({ info = {} }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [data, setData] = useState(info);

  const onSave = () => {
    setIsEdit(false);
    //TODO: save data
  };

  const onEdit = () => {
    setIsEdit(true);
  };

  const handleClicked = useCallback(
    (e) => {
      e.preventDefault();
      if (isEdit) {
        onSave();
      } else {
        onEdit();
      }
    },
    [isEdit]
  );

  return (
    <section>
      <Card>
        <Heading
          className='lg:gap-x-9 gap-x-5'
          label='ملفي'
          icon={<AddChildModal />}
        />
        <form className='my-8 flex flex-col lg:flex-row lg:items-center gap-5'>
          {/* CUSTOMER AVATAR, NAME AND EMAIL */}
          <div className='flex flex-col gap-5 justify-center items-center text-black text-sm lg:text-base'>
            {/* AVATAR */}
            <div className='relative'>
              <Avatar
                name={data.fullname}
                src={data.avatar}
                className='size-20 lg:size-28 rounded-full inline-flex'
              />

              <label htmlFor='avatar'>
                <input
                  className='hidden'
                  type='file'
                  accept='image/*'
                  id='avatar'
                  onChange={(e) => {
                    setData((prev) => ({
                      ...prev,
                      avatar: e.target.files[0]
                        ? URL.createObjectURL(
                            e.target.files[0]
                          )
                        : '',
                    }));
                  }}
                />

                {/* EDIT ICON */}
                {isEdit && (
                  <div
                    role='button'
                    className='absolute bottom-0 start-1/2 translate-x-1/2 ltr:-translate-x-1/2 translate-y-1/2 bg-greenMain rounded-full size-8 flex items-center justify-center'
                  >
                    <EditImgIcon className='size-4' />
                  </div>
                )}
              </label>
            </div>
            <div className='text-center space-y-1'>
              {/* NAME */}
              <TextInput
                value={data?.fullname}
                readOnly={!isEdit}
                size='sm'
                inputClassName='w-fit max-w-52 text-center'
                onChange={(e) =>
                  setData((prev) => ({
                    ...prev,
                    fullname: e.target.value,
                  }))
                }
              />
              {/* EMAIL */}
              <TextInput
                value={data?.email}
                readOnly={!isEdit}
                size='sm'
                inputClassName='w-fit max-w-52 text-center'
                onChange={(e) =>
                  setData((prev) => ({
                    ...prev,
                    fullname: e.target.value,
                  }))
                }
              />
            </div>

            {/* EDIT BUTTON */}
            <button
              type='button'
              onClick={handleClicked}
              variant={isEdit ? 'secondary' : 'blueLight'}
              className={cn(
                '!inline-flex gap-3 px-4 min-w-28 justify-center items-center bg-blueLight rounded-lg py-2 text-black font-bold mdl:text-base text-xs',
                isEdit && 'text-white bg-greenMain'
              )}
            >
              {isEdit ? <SaveIcon /> : <EditIcon />}
              {isEdit ? 'حفظ' : 'تعديل'}
            </button>
          </div>

          {/* CUSTOMER INFO */}
          <div className='text-black flex-wrap gap-10 flex-1 ps-5 border-s-2 lg:border-grayLight border-transparent hidden lg:grid lg:grid-cols-3 xl:grid-cols-4'>
            <TextInput
              label='رقم الهوية'
              labelClassName='mdl:text-base mb-1 ps-0'
              value={data?.id}
              readOnly={!isEdit}
              size='sm'
              inputClassName='w-fit max-w-52'
              onChange={(e) =>
                setData((prev) => ({
                  ...prev,
                  id: e.target.value,
                }))
              }
            />

            <TextInput
              label='البلد'
              labelClassName='mdl:text-base mb-1 ps-0'
              value={data?.id}
              readOnly={!isEdit}
              size='sm'
              inputClassName='w-fit max-w-52'
              onChange={(e) =>
                setData((prev) => ({
                  ...prev,
                  country: e.target.value,
                }))
              }
            />

            <TextInput
              label='المدينة'
              labelClassName='mdl:text-base mb-1 ps-0'
              value={data?.city}
              readOnly={!isEdit}
              size='sm'
              inputClassName='w-fit max-w-52'
              onChange={(e) =>
                setData((prev) => ({
                  ...prev,
                  city: e.target.value,
                }))
              }
            />

            <TextInput
              label='الوظيفة'
              labelClassName='mdl:text-base mb-1 ps-0'
              value={data?.profession}
              readOnly={!isEdit}
              size='sm'
              inputClassName='w-fit max-w-52'
              onChange={(e) =>
                setData((prev) => ({
                  ...prev,
                  profession: e.target.value,
                }))
              }
            />

            <TextInput
              label='عدد الاطفال'
              labelClassName='mdl:text-base mb-1 ps-0'
              value={data?.childNo}
              readOnly={!isEdit}
              size='sm'
              inputClassName='w-fit max-w-52'
              onChange={(e) =>
                setData((prev) => ({
                  ...prev,
                  childNo: e.target.value,
                }))
              }
            />

            <TextInput
              label='عدد الجلسات'
              labelClassName='mdl:text-base mb-1 ps-0'
              value={data?.sessionsNo}
              readOnly={!isEdit}
              size='sm'
              inputClassName='w-fit max-w-52'
              onChange={(e) =>
                setData((prev) => ({
                  ...prev,
                  sessionsNo: e.target.value,
                }))
              }
            />

            <TextInput
              label='عدد الكشوفات'
              labelClassName='mdl:text-base mb-1 ps-0'
              value={data?.reportsNo}
              readOnly={!isEdit}
              size='sm'
              inputClassName='w-fit max-w-52'
              onChange={(e) =>
                setData((prev) => ({
                  ...prev,
                  reportsNo: e.target.value,
                }))
              }
            />
          </div>
        </form>
      </Card>
    </section>
  );
};
