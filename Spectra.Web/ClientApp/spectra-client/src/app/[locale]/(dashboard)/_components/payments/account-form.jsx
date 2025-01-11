'use client';

import { useTranslations } from 'next-intl';
import { Checkbox } from '@mantine/core';

import TextInput from '@/components/inputs/text-input';
import { CountrySelect } from '@/components/inputs/country-select';
import { StateSelect } from '@/components/inputs/state-select';
import Button from '@/components/button';

export const AccountForm = ({
  form,
  readOnly = false,
  onConfirm = () => {},
  onClose = () => {},
  onEdit = () => {},
  onCancel = () => {},
}) => {
  const tg = useTranslations('general_obj');

  const t = useTranslations('payments_obj');

  if (!form) throw new Error('Form is required');

  return (
    <form
      onSubmit={form?.handleSubmit((data) =>
        onConfirm(data, () => {
          form.reset();
          onClose();
        })
      )}
      className='space-y-5'
    >
      <TextInput
        label={t('bank_name')}
        size='lg'
        {...form.register('bankName')}
        error={form.formState.errors.bankName?.message}
        readOnly={readOnly}
      />
      <TextInput
        label={t('account_number')}
        size='lg'
        {...form.register('accountNumber')}
        error={form.formState.errors.accountNumber?.message}
        readOnly={readOnly}
      />
      <TextInput
        label={t('account_holder_name')}
        size='lg'
        {...form.register('accountHolderName')}
        error={form.formState.errors.accountHolderName?.message}
        readOnly={readOnly}
      />
      <TextInput
        label={t('branch')}
        size='lg'
        {...form.register('branch')}
        error={form.formState.errors.branch?.message}
        readOnly={readOnly}
      />
      <div className='flex flex-col mdl:flex-row mdl:items-center gap-5 *:flex-1'>
        <CountrySelect
          label={tg('country')}
          value={`${form.watch('countryCode')}-${form.watch(
            'country'
          )}`}
          onChange={(value) => {
            form.clearErrors('country');
            const valueArray = value.split('-');
            form.setValue('country', valueArray[1]);
            form.setValue('countryCode', valueArray[0]);
          }}
          error={form.formState.errors.country?.message}
          readOnly={readOnly}
        />
        <StateSelect
          label={tg('city')}
          countryCode={form.watch('countryCode')}
          value={form.watch('city')}
          onChange={(value) => {
            form.clearErrors('city');
            form.setValue('city', value);
          }}
          error={form.formState.errors.city?.message}
          readOnly={readOnly}
        />
      </div>

      {readOnly ? (
        <Checkbox
          label={t('set_as_primary_account')}
          size='lg'
          color='#10B0C1'
          checked={form.getValues()?.default || false}
          onChange={() => {}}
        />
      ) : (
        <Checkbox
          label={t('set_as_primary_account')}
          size='lg'
          color='#10B0C1'
          {...form.register('default')}
          error={form.formState.errors.default?.message}
        />
      )}

      {/* ACTIONS */}

      {readOnly ? (
        <Button
          onClick={onEdit}
          type='button'
          className='w-full !mt-10'
        >
          {tg('edit')}
        </Button>
      ) : (
        <div className='flex items-center gap-5 *:flex-1 !mt-10'>
          <Button
            type='button'
            onClick={() => {
              form && form.reset();
              onClose();
              onCancel();
            }}
            disabled={form.formState.isSubmitting}
          >
            {tg('cancel')}
          </Button>

          <Button
            type='submit'
            variant='secondary'
            disabled={form.formState.isSubmitting}
          >
            {tg('confirm')}
          </Button>
        </div>
      )}
    </form>
  );
};
