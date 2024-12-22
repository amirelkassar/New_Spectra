'use client';

import { useLocale, useTranslations } from 'next-intl';

import Card from '@/components/card';
import { NotFound404 } from '@/components/not-found-404';
import { QueryWrapper } from '@/components/query-wrapper';
import {
  useAdminContractById,
  useAdminContractTerms,
} from '@/hooks/queries/admin/contract';
import { ContractData } from '@/dashboard/_components/contract/contract-data';
import { ContractTerms } from '@/dashboard/_components/contract/contract-terms';
import { VERSION_STATE } from '@/data';
import { EditButton } from '@/dashboard/_components/ui/edit-button';
import { SendButton } from '@/dashboard/_components/ui/send-button';
import {
  ContractTermsProvider,
  useContractTermsStore,
} from '@/dashboard/_hooks/use-contract-terms-store';
import { useContractTermsActions } from '../../../_hooks/use-contract-terms-actions';
import { useSearchParams } from 'next/navigation';
import TextInput from '@/components/inputs/text-input';
import { useState } from 'react';
import Button from '@/components/button';
import { SignModal } from '@/dashboard/_components/contract/sign-modal';

export const AcceptVersion = ({ id = '', contractId = '' }) => {
  const query = useAdminContractById(contractId);

  return (
    <QueryWrapper query={query}>
      {({ data }) => (
        <ContractVersion contract={data} versionId={id} />
      )}
    </QueryWrapper>
  );
};

const ContractVersion = ({ contract = {}, versionId = '' }) => {
  const contractVersion = contract?.versions?.find(
    (version) => version.id === versionId
  );

  if (!contractVersion)
    return (
      <Card className='h-full'>
        <NotFound404 />
      </Card>
    );

  const state = contractVersion?.state;
  const acceptedByAdmin = contractVersion?.acceptedByAdmin;

  if (state === VERSION_STATE.draft || acceptedByAdmin) return null;

  return (
    <div className='space-y-5'>
      <ContractData {...contractVersion} />

      <ViewContractTerms contractId={contract.id} />
    </div>
  );
};

const ViewContractTerms = ({ contractId }) => {
  const query = useAdminContractTerms(contractId);

  return (
    <Card>
      <QueryWrapper query={query}>
        {({ data }) => <RenderContractTerms data={data} />}
      </QueryWrapper>
    </Card>
  );
};

const RenderContractTerms = ({ data }) => {
  return (
    <ContractTermsProvider initialValue={data}>
      <div className='space-y-10'>
        <ViewUpdateContractTerms />

        <Actions />
      </div>
    </ContractTermsProvider>
  );
};

const Actions = () => {
  const t = useTranslations('contract_obj');
  const tg = useTranslations('general_obj');

  const isEdit = useSearchParams().get('edit') === 'true';

  const { onEdit, onSend, onSave, isPending } =
    useContractTermsActions();

  if (isEdit)
    return (
      <div className='flex flex-col mdl:grid mdl:grid-cols-3 gap-3 *:flex-1'>
        <div>
          <Button
            onClick={onSave}
            variant='secondary'
            className='w-full'
          >
            {tg('save')}
          </Button>
        </div>
      </div>
    );

  return (
    <div className='flex flex-col mdl:grid mdl:grid-cols-3 gap-3 *:flex-1'>
      <div>
        <SignModal isPending={isPending} onSend={onSend}>
          <SendButton className='w-full'>
            {tg('send')} {t('contract')}
          </SendButton>
        </SignModal>
      </div>
      <div>
        <EditButton onClick={onEdit} className='w-full'>
          {tg('edit')}
        </EditButton>
      </div>
    </div>
  );
};

const ViewUpdateContractTerms = () => {
  const isEdit = useSearchParams().get('edit') === 'true';

  if (!isEdit) return <ContractTerms />;

  return <EditTerms />;
};

const EditTerms = () => {
  const locale = useLocale();

  const {
    infoSection,
    sections,
    setSection,
    addSection,
    removeSection,
    addPoint,
    removePoint,
  } = useContractTermsStore();

  const nameKey = locale === 'en' ? 'enName' : 'arName';
  const dateKey = locale === 'en' ? 'enDate' : 'arDate';
  // const titleKey = locale === 'en' ? 'enTitle' : 'arTitle';
  const pointsKey = locale === 'en' ? 'enPoints' : 'arPoints';

  return (
    <div className='text-sm mdl:text-xl space-y-5'>
      <div>
        <p>{infoSection[dateKey]}</p>
        <p>{infoSection[nameKey]}</p>
      </div>

      {!!sections.length &&
        sections.map((section, i) => (
          <div className='space-y-2' key={section?.id || i}>
            <div className='flex gap-3'>
              <TextInput
                name='arTitle'
                value={section.arTitle}
                placeholder='عنوان البند'
                onChange={(e) => setSection(section?.id, e)}
                size='lg'
                classNames={{
                  input: 'font-bold text-right',
                }}
                className='flex-1'
              />
              <button onClick={() => addSection(i)}>+</button>
              <button onClick={() => removeSection(section?.id)}>
                -
              </button>
            </div>
            <ul className='list-disc ps-5 space-y-1 pe-16'>
              <ListInput
                points={section[pointsKey]}
                onValuesChange={(values) =>
                  setSection(section?.id, {
                    target: {
                      name: 'arPoints',
                      value: values,
                    },
                  })
                }
                addPoint={(index) => addPoint(section?.id, index)}
                removePoint={(index) =>
                  removePoint(section?.id, index)
                }
              />
            </ul>
          </div>
        ))}
    </div>
  );
};

const ListInput = ({
  points = [],
  onValuesChange = () => {},
  addPoint = () => {},
  removePoint = () => {},
}) => {
  const [values, setValues] = useState(points);

  const handleChange = (e, index) => {
    const newValues = [...values];
    newValues[index] = e.target.value;
    setValues(newValues);
    onValuesChange(newValues);
  };

  return values?.map((point, i) => (
    <li className='flex gap-3' key={i}>
      <TextInput
        name={`point ${i}`}
        value={point}
        onChange={(e) => handleChange(e, i)}
        size='sm'
        className='flex-1'
      />

      <button onClick={() => addPoint(i)}>+</button>

      <button onClick={() => removePoint(i)}>-</button>
    </li>
  ));
};
