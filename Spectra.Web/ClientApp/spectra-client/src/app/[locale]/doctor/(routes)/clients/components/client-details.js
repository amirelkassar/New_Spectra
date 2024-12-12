const Card = ({ title, values }) => {
  return (
    <div className='bg-white py-4 lg:py-7 px-6 lg:px-12 lg:rounded-xl flex flex-row lg:flex-col gap-2'>
      <p className='text-nowrap w-[130px] md:w-auto text-[12px] md:text-[16px] flex items-center gap-1'>
        {title} <span className='lg:hidden inline-block'>/</span>{' '}
      </p>
      <div className='w-full flex flex-wrap gap-3 gap-y-2 '>
        {values.map((value, index) => (
          <h2
            key={index}
            className='text-[13px] md:text-[16px] font-bold'
          >
            {value}
          </h2>
        ))}
      </div>
    </div>
  );
};

const ClientDetails = () => {
  return (
    <section className='grow grid grid-cols-1 lg:grid-cols-2 lg:gap-y-2.5 lg:gap-x-5 '>
      <Card title={'نوع العمل'} values={['عائلة طفل']} />
      <Card title={' الرقم القومى'} values={['623-456-782']} />
      <Card
        title={'العنوان'}
        values={['jabal Al Noor، العسيلة، مكة 24421']}
      />
      <Card title={'رقم الهاتف'} values={['9874563+', '9874563+']} />
      <Card
        title={'البريد الالكترونى'}
        values={['safwa@gmail.com']}
      />
      <Card
        title={'الموقع الالكترونى'}
        values={['safwa@gmail.com']}
      />
      <Card title={'نوع الطفل'} values={['ذكر']} />
      <Card title={'تاريخ الميلاد '} values={['2/8/1990']} />
      <Card title={'المهنة '} values={['مدير مؤسسة حكومية']} />
      <Card title={' عدد الاطفال'} values={['1 طفل']} />
    </section>
  );
};

export default ClientDetails;
