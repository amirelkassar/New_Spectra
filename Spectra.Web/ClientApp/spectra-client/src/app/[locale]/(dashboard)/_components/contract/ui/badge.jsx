export const Badge = ({ children }) => {
  return (
    <span className='text-sm mdl:text-xl font-bold border border-greenMain bg-blueLighter text-greenMain rounded-xl py-2 px-5 block w-full text-center max-w-72 text-nowrap'>
      {children}
    </span>
  );
};
