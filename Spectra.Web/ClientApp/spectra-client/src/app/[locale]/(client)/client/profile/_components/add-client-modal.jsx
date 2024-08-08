'use client';

import { Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import { AddButton } from './add-button';
import TextInput from '@/components/inputs/text-input';
import SelectInput from '@/components/inputs/select-input';
import MobileInput from '@/components/inputs/mobile-input';
import FileInput from '@/components/inputs/file-input';
import Button from '@/components/button';
import { useState } from 'react';
import FamilyIcon from '@/assets/icons/family';
import OrgIcon from '@/assets/icons/org';
import ProviderIcon from '@/assets/icons/provider';
import CheckIcon from '@/assets/icons/check';
import { cn } from '@/lib/utils';

const clientsOptions = [
  {
    icon: <FamilyIcon className='size-12 lg:size-14' />,
    type: 'family',
    name: 'عائلة طفل / مستفيد',
  },
  {
    icon: <OrgIcon className='size-12 lg:size-14' />,
    type: 'organization',
    name: 'منظمة / جهة داعمة',
  },
  {
    icon: <ProviderIcon className='size-12 lg:size-14' />,
    type: 'provider',
    name: 'مقدم الخدمة الطبية',
  },
];

export const AddClientModal = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [step, setStep] = useState(1);
  const [selectedClient, setSelectedClient] = useState(null);

  return (
    <>
      <div className='w-fit' role='dialog' onClick={open}>
        <AddButton label='اضافة عميل' />
      </div>

      {/* MODAL */}
      <Modal
        opened={opened}
        withCloseButton={false}
        onClose={() => {
          close();
          setTimeout(() => {
            setStep(1);
            setSelectedClient(null);
          }, 500);
        }}
        size={'md'}
      >
        <div className='space-y-5'>
          {/* HEADER */}
          <h3 className='font-bold text-sm py-3 lg:text-medium text-black'>
            اضافة عميل {selectedClient && `- ${selectedClient?.name}`}
          </h3>

          {/* STEP 1 - نوع العميل */}
          {step === 1 && (
            <div className='space-y-7'>
              <div className=' min-h-[350px] flex flex-col gap-6 justify-center'>
                <h4 className='text-xs lg:text-base'>نوع العميل</h4>
                <div className='flex gap-3'>
                  {clientsOptions.map((option) => (
                    <div
                      role='button'
                      onClick={() => setSelectedClient(option)}
                      key={option?.type}
                      className={cn(
                        'shadow relative flex flex-col items-center gap-5 p-5 rounded-lg border border-transparent w-full max-w-44 text-center',
                        selectedClient?.type === option?.type &&
                          'border-greenMain'
                      )}
                    >
                      {option.icon}
                      <span>{option.name}</span>
                      {selectedClient?.type === option?.type && (
                        <div className='rounded-full absolute -top-4 right-1/2 translate-x-1/2 size-8 bg-greenMain flex items-center justify-center'>
                          <CheckIcon />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className='flex gap-5 flex-col lg:flex-row *:flex-1 items-center !text-sm lg:!text-base font-bold'>
                <Button
                  disabled={!selectedClient}
                  className='w-full py-3 h-auto'
                  variant='secondary'
                  onClick={() => setStep(2)}
                >
                  التالي
                </Button>

                <Button
                  onClick={() => {
                    setSelectedClient(null);
                    close();
                  }}
                  className='w-full py-3 h-auto'
                >
                  الغاء
                </Button>
              </div>
            </div>
          )}

          {/* STEP 2 - FORM */}
          {step === 2 && selectedClient?.type === 'family' && (
            <FamilyForm
              onClose={close}
              setStep={setStep}
              setSelectedClient={setSelectedClient}
            />
          )}

          {step === 2 && selectedClient?.type === 'organization' && (
            <OrgForm
              onClose={close}
              setStep={setStep}
              setSelectedClient={setSelectedClient}
            />
          )}

          {step === 2 && selectedClient?.type === 'provider' && (
            <ProviderForm
              onClose={close}
              setStep={setStep}
              setSelectedClient={setSelectedClient}
            />
          )}
        </div>
      </Modal>
    </>
  );
};

const FamilyForm = ({
  onClose = () => {},
  setStep = () => {},
  setSelectedClient = () => {},
}) => {
  return (
    <form className='space-y-3'>
      <TextInput label='اسم ولي الامر بالكامل' />
      <SelectInput data={['البلد1', 'البلد2', 'البلد']} label='البلد' />
      <SelectInput label='المدينة' data={['المدينة1', 'المدينة2', 'المدينة']} />

      <TextInput label='الوظيفة' />
      <TextInput label='رقم الهوية' />
      <TextInput label='البريد الالكتروني' />
      <div className='flex lg:items-center gap-3 flex-col lg:flex-row *:flex-1 py-5'>
        <Button
          type='submit'
          variant='secondary'
          className='text-sm lg:text-base font-bold block mx-auto w-full'
        >
          تأكيد
        </Button>
        <Button
          type='button'
          onClick={() => {
            onClose();
            setTimeout(() => {
              setStep(1);
              setSelectedClient(null);
            }, 500);
          }}
          className='text-sm lg:text-base font-bold block mx-auto w-full'
        >
          الغاء
        </Button>
      </div>
    </form>
  );
};

const OrgForm = ({
  onClose = () => {},
  setStep = () => {},
  setSelectedClient = () => {},
}) => {
  return (
    <form className='space-y-3'>
      <TextInput label='اسم المنظمة' />
      <TextInput label='عنوان المنظمة' />
      <SelectInput data={['البلد1', 'البلد2', 'البلد']} label='بلد المنظمة' />
      <SelectInput
        label='مدينة المنظمة'
        data={['المدينة1', 'المدينة2', 'المدينة']}
      />

      <TextInput label='تخصص المنظمة' />
      <TextInput label='نوع المنظمة' />
      <TextInput label='الموقع الالكتروني للمنظمة' />

      <div className='flex lg:items-center gap-3 flex-col lg:flex-row *:flex-1 py-5'>
        <Button
          type='submit'
          variant='secondary'
          className='text-sm lg:text-base font-bold block mx-auto w-full'
        >
          تأكيد
        </Button>
        <Button
          type='button'
          onClick={() => {
            onClose();
            setTimeout(() => {
              setStep(1);
              setSelectedClient(null);
            }, 500);
          }}
          className='text-sm lg:text-base font-bold block mx-auto w-full'
        >
          الغاء
        </Button>
      </div>
    </form>
  );
};

const ProviderForm = ({
  onClose = () => {},
  setStep = () => {},
  setSelectedClient = () => {},
}) => {
  const [providerStep, setProviderStep] = useState(1);

  return (
    <form className='space-y-3'>
      {providerStep === 1 && (
        <>
          <TextInput label='الاسم كامل' />
          <SelectInput label='النوع' data={['ذكر', 'انثى']} />
          <SelectInput
            label='اختر البلد'
            data={['البلد1', 'البلد2', 'البلد']}
          />
          <SelectInput
            label='اختر المدينة'
            data={['المدينة1', 'المدينة2', 'المدينة']}
          />

          <MobileInput />

          <TextInput label='البريد الالكتروني' />
          <TextInput label='رقم الهوية' />
        </>
      )}

      {providerStep === 2 && (
        <>
          <SelectInput
            label='التخصص'
            data={['طب نفسي عصبي', 'طب نفسي', 'طب استشاري', 'طبيب اطفال']}
          />

          <TextInput label='رقم الترخيص /الاعتماد' />
          <TextInput label='مرخص /معتمد من' />
          <TextInput label='الدرجة العلمية' />

          <FileInput label='الشهادات' />
        </>
      )}

      <div className='flex lg:items-center gap-3 flex-col lg:flex-row *:flex-1 py-5'>
        {providerStep === 1 && (
          <>
            <Button
              onClick={() => setProviderStep(2)}
              type='button'
              variant='secondary'
              className='text-sm lg:text-base font-bold block mx-auto w-full'
            >
              التالي
            </Button>
            <Button
              type='button'
              onClick={() => {
                onClose();
                setTimeout(() => {
                  setStep(1);
                  setSelectedClient(null);
                }, 500);
              }}
              className='text-sm lg:text-base font-bold block mx-auto w-full'
            >
              الغاء
            </Button>
          </>
        )}

        {providerStep === 2 && (
          <>
            <Button
              type='submit'
              variant='secondary'
              className='text-sm lg:text-base font-bold block mx-auto w-full'
            >
              تأكيد
            </Button>
            <Button
              type='button'
              onClick={() => setProviderStep(1)}
              className='text-sm lg:text-base font-bold block mx-auto w-full'
            >
              السابق
            </Button>
          </>
        )}
      </div>
    </form>
  );
};
