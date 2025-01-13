const AppointmentsLayout = ({ children, summary, clients }) => {
  return (
    <div className='flex flex-col gap-5 h-full'>
      {children}

      <div className='flex-1 flex flex-col gap-5'>
        {summary}

        <div className='flex-1'>{clients}</div>
      </div>
    </div>
  );
};

export default AppointmentsLayout;
