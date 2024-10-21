'use client';

import { useCallback, useState } from 'react';

import { cn } from '@/lib/utils';
import { Heading } from '../../_components/heading';
import { AddChildModal } from './add-child-modal';
import { AddClientModal } from './add-client-modal';

import Card from '@/components/card';
import Avatar from '@/components/avatar';
import EditIcon from '@/assets/icons/edit';
import SaveIcon from '@/assets/icons/save';
import EditImgIcon from '@/assets/icons/editImg';
import TextInput from '@/components/inputs/text-input';

export const ProfileInfo = ({ info = {}, type = '' }) => {
  const isPerson = type === 'person';
  const [isEdit, setIsEdit] = useState(false);
  const [data, setData] = useState({ ...info });

  const onSave = () => {
    setIsEdit(false);
    //TODO: save data
  };

  const onEdit = () => {
    setIsEdit(true);
  };

  const handleClicked = useCallback(() => {
    if (isEdit) {
      onSave();
    } else {
      onEdit();
    }
  }, [isEdit]);

  return (
    <Card>
      <Heading
        className='lg:gap-x-9 gap-x-5'
        label='ملفي'
        icon={
          isPerson ? <AddChildModal /> : <AddClientModal />
        }
      />
      <section className='my-8 flex flex-col lg:flex-row lg:items-center gap-5'>
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
            <h3 className='font-bold'>
              <TextInput
                value={data?.fullname}
                readOnly={true}
                size='sm'
                inputClassName='w-fit max-w-52 text-center'
              />
              <EditInput
                className='text-center'
                value={data?.fullname}
                isEdit={isEdit}
                onChange={(e) =>
                  setData((prev) => ({
                    ...prev,
                    fullname: e.target.value,
                  }))
                }
              />
            </h3>
            {/* EMAIL */}
            <p className='text-sm'>
              <EditInput
                className='text-center'
                value={data?.email}
                isEdit={isEdit}
                onChange={(e) =>
                  setData((prev) => ({
                    ...prev,
                    email: e.target.value,
                  }))
                }
              />
            </p>
          </div>

          {/* EDIT BUTTON */}
          <button
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
        <ul className='text-black flex-wrap gap-10 flex-1 ps-5 border-s-2 lg:border-grayLight border-transparent *:flex-[1] *:flex-shrink-0 *:basis-[30%] hidden lg:flex'>
          {isPerson && (
            <>
              <li>
                <span>رقم الهوية</span>
                <span className='font-bold block mt-1'>
                  <EditInput
                    value={data?.id}
                    isEdit={isEdit}
                    onChange={(e) =>
                      setData((prev) => ({
                        ...prev,
                        id: e.target.value,
                      }))
                    }
                  />
                </span>
              </li>
              <li>
                <span>البلد</span>
                <span className='font-bold block mt-1'>
                  <EditInput
                    value={data?.country}
                    isEdit={isEdit}
                    onChange={(e) =>
                      setData((prev) => ({
                        ...prev,
                        country: e.target.value,
                      }))
                    }
                  />
                </span>
              </li>
              <li>
                <span>المدينة</span>
                <span className='font-bold block mt-1'>
                  <EditInput
                    value={data?.city}
                    isEdit={isEdit}
                    onChange={(e) =>
                      setData((prev) => ({
                        ...prev,
                        city: e.target.value,
                      }))
                    }
                  />
                </span>
              </li>
              <li>
                <span>الوظيفة</span>
                <span className='font-bold block mt-1'>
                  <EditInput
                    value={data?.profession}
                    isEdit={isEdit}
                    onChange={(e) =>
                      setData((prev) => ({
                        ...prev,
                        profession: e.target.value,
                      }))
                    }
                  />
                </span>
              </li>
              <li>
                <span>عدد الاطفال</span>
                <span className='font-bold block mt-1'>
                  <EditInput
                    value={data?.childNo}
                    isEdit={isEdit}
                    onChange={(e) =>
                      setData((prev) => ({
                        ...prev,
                        childNo: e.target.value,
                      }))
                    }
                  />
                </span>
              </li>
              <li>
                <span>عدد الجلسات</span>
                <span className='font-bold block mt-1'>
                  <EditInput
                    value={data?.sessionsNo}
                    isEdit={isEdit}
                    onChange={(e) =>
                      setData((prev) => ({
                        ...prev,
                        sessionsNo: e.target.value,
                      }))
                    }
                  />
                </span>
              </li>
              <li>
                <span>عدد الكشوفات</span>
                <span className='font-bold block mt-1'>
                  <EditInput
                    value={data?.reportsNo}
                    isEdit={isEdit}
                    onChange={(e) =>
                      setData((prev) => ({
                        ...prev,
                        reportsNo: e.target.value,
                      }))
                    }
                  />
                </span>
              </li>
            </>
          )}

          {!isPerson && (
            <>
              <li>
                <span>البلد</span>
                <span className='font-bold block mt-1'>
                  <EditInput
                    value={data?.country}
                    isEdit={isEdit}
                    onChange={(e) =>
                      setData((prev) => ({
                        ...prev,
                        country: e.target.value,
                      }))
                    }
                  />
                </span>
              </li>
              <li>
                <span>المدينة</span>
                <span className='font-bold block mt-1'>
                  <EditInput
                    value={data?.city}
                    isEdit={isEdit}
                    onChange={(e) =>
                      setData((prev) => ({
                        ...prev,
                        city: e.target.value,
                      }))
                    }
                  />
                </span>
              </li>
              <li>
                <span>التخصص</span>
                <span className='font-bold block mt-1'>
                  <EditInput
                    value={data?.specialization}
                    isEdit={isEdit}
                    onChange={(e) =>
                      setData((prev) => ({
                        ...prev,
                        specialization: e.target.value,
                      }))
                    }
                  />
                </span>
              </li>
              <li>
                <span>النوع</span>
                <span className='font-bold block mt-1'>
                  <EditInput
                    value={data?.type}
                    isEdit={isEdit}
                    onChange={(e) =>
                      setData((prev) => ({
                        ...prev,
                        type: e.target.value,
                      }))
                    }
                  />
                </span>
              </li>
              <li>
                <span>عدد العملاء</span>
                <span className='font-bold block mt-1'>
                  <EditInput
                    value={data?.clientsNo}
                    isEdit={isEdit}
                    onChange={(e) =>
                      setData((prev) => ({
                        ...prev,
                        clientsNo: e.target.value,
                      }))
                    }
                  />
                </span>
              </li>
              <li>
                <span>عدد الجلسات</span>
                <span className='font-bold block mt-1'>
                  <EditInput
                    value={data?.sessionsNo}
                    isEdit={isEdit}
                    onChange={(e) =>
                      setData((prev) => ({
                        ...prev,
                        sessionsNo: e.target.value,
                      }))
                    }
                  />
                </span>
              </li>
              <li>
                <span>عدد الكشوفات</span>
                <span className='font-bold block mt-1'>
                  <EditInput
                    value={data?.reportsNo}
                    isEdit={isEdit}
                    onChange={(e) =>
                      setData((prev) => ({
                        ...prev,
                        reportsNo: e.target.value,
                      }))
                    }
                  />
                </span>
              </li>
              <li>
                <span>عدد المتابعات</span>
                <span className='font-bold block mt-1'>
                  <EditInput
                    value={data?.followingsNo}
                    isEdit={isEdit}
                    onChange={(e) =>
                      setData((prev) => ({
                        ...prev,
                        followingsNo: e.target.value,
                      }))
                    }
                  />
                </span>
              </li>
            </>
          )}
        </ul>
      </section>
    </Card>
  );
};

const EditInput = ({
  value = '',
  isEdit = false,
  ref = null,
  className,
  ...props
}) => (
  <input
    {...props}
    ref={ref}
    value={value}
    readOnly={!isEdit}
    className={cn(
      'w-fit max-w-52 border border-transparent outline-none py-1 text-start rounded-lg',
      isEdit && 'border-greenMain px-2',
      className
    )}
  />
);
