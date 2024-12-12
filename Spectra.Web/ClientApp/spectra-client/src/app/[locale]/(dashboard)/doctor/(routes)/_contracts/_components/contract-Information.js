'use client';
import EditIcon from '@/assets/icons/edit';
import Card from '@/components/card';
import { Link } from '@/i18n/routing';
import ROUTES from '@/routes';
import React, { useEffect, useState } from 'react';
import ServicesFreelancer from './services-freelancer';
import ServicesMember from './services-member';
import { NavLink, TextInput } from '@mantine/core';
import Button from '@/components/button';
import RefuseIcon from '@/assets/icons/refuse';
import AcceptIcon from '@/assets/icons/accept';
import useModal from '@/store/modal-slice';
import { useSearchParams } from 'next/navigation';
import WorkNum from './workNum';
import PlusInsideCircleIcon from '@/assets/icons/plus-inside-circle';
import ArrowDownIcon from '@/assets/icons/arrow-down';
import {
  GetContractsID,
  useEditContracts,
} from '@/hooks/queries/doctor/contracts-api';

function ContractInformation({ id }) {
  // const { data: dataServices, isLoading } = GetContractsServices();
  const { mutate: createContract } = useEditContracts(id);

  const { data: dataContractsDetails, isLoading: isLoadingDetails } =
    GetContractsID(id);
  const { editModal } = useModal();
  const searchparams = useSearchParams();
  const [workLimits, setWorkLimits] = useState({
    hoursOfWork: 0,
    daysOfWork: 0,
  });

  const [listFreelancer, setListFreelancer] = useState([]);
  const [listMember, setListMember] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); // State to track search input
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [FreelanceNum] = useState({
    duration: 0,
    platformFee: 0,
  });
  const [TeamSpectraNum] = useState({
    duration: 0,
    platformFee: 0,
  });
  // useEffect(() => {
  //   if (!isLoading) {
  //     setFilteredOptions(dataServices?.data?.data?.services);
  //     setTeamSpectraNum({
  //       duration: dataServices?.data?.data?.durationTeamSpectra || 0,
  //       platformFee:
  //         dataServices?.data?.data?.platformFeeTeamSpectr || 0,
  //     });
  //     setFreelanceNum({
  //       duration: dataServices?.data?.data?.durationFreelance || 0,
  //       platformFee:
  //         dataServices?.data?.data?.platformFeeToFreelance || 0,
  //     });
  //   }
  // }, []);

  useEffect(() => {
    if (dataContractsDetails?.data?.data) {
      // Update work limits
      setWorkLimits({
        hoursOfWork: dataContractsDetails.data.data.hoursOfWork || 0,
        daysOfWork: dataContractsDetails.data.data.daysOfWork || 0,
      });

      // Transform freelance data
      const freelancers = dataContractsDetails.data.data.freelance
        ? dataContractsDetails.data.data.freelance.map((item) => ({
            id: item.service,
            label: item.service,
            price: item.selary,
          }))
        : [];
      setListFreelancer(freelancers);

      // Transform spectraTeam data
      const members = dataContractsDetails.data.data.spectraTeam
        ? dataContractsDetails.data.data.spectraTeam.map((item) => ({
            id: item.service,
            label: item.service,
            price: item.selary,
          }))
        : [];
      setListMember(members);
    }
  }, [dataContractsDetails?.data?.data, isLoadingDetails]);
  const handleAddToList = (value) => {
    if (!listFreelancer.find((item) => item.id === value.name)) {
      const newItem = {
        id: value.name,
        label: value.name,
        price: 0,
      };
      setListFreelancer([...listFreelancer, newItem]);
    }
    if (!listMember.find((item) => item.id === value.name)) {
      const newItem = {
        id: value.name,
        label: value.name,
        price: value.price,
      };
      setListMember([...listMember, newItem]);
    }
  };
  // Handle deleting an item from the list
  const handleDeleteItem = (type, id) => {
    if (type === 'freelancer') {
      const updatedList = listFreelancer.filter(
        (item) => item.id !== id
      );
      setListFreelancer(updatedList);
    }
    if (type === 'member') {
      const updatedList = listMember.filter((item) => item.id !== id);
      setListMember(updatedList);
    }
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    // Filter options based on search term
    const filtered = filteredOptions.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredOptions(filtered);
  };
  const handleServiceDataChange = (serviceId, value, type) => {
    if (type === 'freelancer') {
      setListFreelancer((prevData) =>
        prevData.map((item) =>
          item.id === serviceId ? { ...item, price: value } : item
        )
      );
    } else if (type === 'member') {
      setListMember((prevData) =>
        prevData.map((item) =>
          item.id === serviceId ? { ...item, price: value } : item
        )
      );
    }
  };
  const handleSubmit = () => {
    // Transform data to match API requirements

    const formattedData = {
      freelance: listFreelancer.map((item) => ({
        service: item.label,
        selary: item.price,
      })),
      spectraTeam: listMember.map((item) => ({
        service: item.label,
        selary: item.price,
      })),
      id: id,
      hoursOfWork: workLimits.hoursOfWork, // Set as needed
      daysOfWork: workLimits.daysOfWork, // Set as needed
      employeeId: '01JC8C207X83TANTKBYHY2W67F', // Replace with actual employee ID
      titel: 'string', // Replace with actual title
      firstName: 'string', // Replace with actual first name
      lastName: 'string', // Replace with actual last name
      contractCase: 2, // Set as needed
    };

    // Send formatted data with useCreateContracts
    createContract(formattedData, '01JC8C207X83TANTKBYHY2W67F');
  };
  return (
    <Card className='mt-5 '>
      {searchparams.get('editContracts') === 'true' ? (
        <div className=' relative h-11 mdl:h-14 max-h-14 mdl:max-h-16 mb-5'>
          <div className='border absolute top-0 overflow-hidden w-full left-0 z-50 border-solid  rounded-xl min-h-11 mdl:min-h-14'>
            <NavLink
              label='Choose Services'
              component='button'
              className='min-h-11 mdl:min-h-14 rounded-xl bg-white hover:bg-white'
              rightSection={<ArrowDownIcon />}
              dir='ltr'
              classNames={{
                body: 'text-start',
                children: 'p-0 pb-4 mdl:pb-6 bg-white',
              }}
            >
              <div className=' -mt-11 mdl:-mt-14'>
                <div className=' mb-1 mdl:mb-4'>
                  <TextInput
                    value={searchTerm}
                    onChange={handleSearch}
                    placeholder='ابحث عن خدمة...'
                    className=' p-1 mdl:p-2 w-full rounded-lg mb-1 mdl:mb-4 max-w-[calc(100%-50px)] mdl:max-w-[calc(100%-100px)] '
                    classNames={{
                      input:
                        '!border-none h-10 w-full text-sm mdl:text-base font-Bold',
                    }}
                  />
                </div>
                {filteredOptions.map((item, i) => {
                  return (
                    <div
                      key={i}
                      className='flex bg-white items-center px-2 mdl:px-6 justify-between gap-6 py-2 mdl:py-3 border-b-2 border-grayLight last-of-type:border-none'
                    >
                      <h4 className=' text-sm mdl:text-xl font-Bold'>
                        {item.name}
                      </h4>
                      <button
                        onClick={() => {
                          handleAddToList(item);
                        }}
                        className={` size-5 mdl:size-7  duration-300 hover:shadow-md hover:scale-[1.02]  text-white rounded-full`}
                      >
                        <PlusInsideCircleIcon
                          className={' w-full h-full rounded-full'}
                        />
                      </button>
                    </div>
                  );
                })}
              </div>
            </NavLink>
          </div>
        </div>
      ) : null}

      <ServicesFreelancer
        numHeader={FreelanceNum}
        data={listFreelancer}
        handleServiceDataChange={handleServiceDataChange}
        handleDeleteItem={handleDeleteItem}
      />

      <ServicesMember
        numHeader={TeamSpectraNum}
        data={listMember}
        handleServiceDataChange={handleServiceDataChange}
        handleDeleteItem={handleDeleteItem}
      />

      <WorkNum
        addNew={searchparams.get('editContracts') === 'true'}
        workLimits={workLimits}
        setWorkLimits={setWorkLimits}
      />

      {searchparams.get('editContracts') === 'true' ? (
        <div className='flex px-1 flex-col mdl:flex-row gap-5 md:gap-8 justify-center items-center mdl:justify-end w-[100%] flex-wrap !mt-5 md:!mt-[40px]'>
          <Button
            onClick={() => [handleSubmit()]}
            className={
              '  mdl:max-w-[260px] w-full !py-0 text-[14px] md:text-[20px] min-w-[200px] !px-5  flex gap-[15px] font-bold items-center flex-1 justify-center !min-h-11  rounded-[10px]'
            }
          >
            حفظ التعديلات
          </Button>
        </div>
      ) : (
        <div className='flex px-1 flex-col mdl:flex-row gap-5 md:gap-8 justify-center items-center mdl:justify-end w-[100%] flex-wrap !mt-5 md:!mt-[40px]'>
          <Button
            onClick={() => {
              editModal('type', 'contractsAccept');
              editModal('open', true);
            }}
            className={
              'text-[12px] lg:text-[16px]   mdl:max-w-[260px] !w-full !py-0 !px-3 md:!px-5 font-bold items-center flex-1 flex  bg-greenMain justify-center  md:w-[120px] !min-h-11 ring-1 !gap-[8px] !ring-greenMain border-none text-white'
            }
          >
            <AcceptIcon />
            قبول
          </Button>
          <Button
            onClick={() => {
              editModal('type', 'contractsReq');
              editModal('open', true);
            }}
            className={
              'text-[12px] lg:text-[16px]  mdl:max-w-[260px] !w-full  !py-0 !px-3 md:!px-5 flex font-bold items-center flex-1 justify-center !min-h-11 ring-1 !ring-red text-red border-none  md:w-[120px] !gap-[8px]'
            }
          >
            <RefuseIcon />
            رفض
          </Button>
          <Link
            href={ROUTES.DOCTOR.CONTRACTS.CONTRACTSIDEDIT(id)}
            className={
              '  mdl:max-w-[260px] w-full !py-0 text-[14px] md:text-[20px] min-w-[200px] !px-5  flex gap-[15px] font-bold items-center flex-1 justify-center !min-h-11 ring-1 !ring-[#010036] text-[#010036] border-none rounded-[10px]'
            }
          >
            <EditIcon />
            تعديل
          </Link>
        </div>
      )}
    </Card>
  );
}

export default ContractInformation;
