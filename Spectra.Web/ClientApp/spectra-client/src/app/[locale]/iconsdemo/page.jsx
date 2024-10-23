import dynamic from 'next/dynamic';
import { getIcons } from '../../../iconLoader';

const IconsDemo = async () => {
  const icons = await getIcons();

  return (
    <div className='bg-slate-800 p-10'>
      <table className='mx-auto border border-slate-100/50 p-5 rounded-xl block w-fit'>
        <thead className='text-white text-2xl border-b border-slate-100/50 h-20'>
          <tr>
            <th>Name</th>
            <th>Icon</th>
          </tr>
        </thead>

        <tbody className='text-center'>
          {icons.map((icon, index) => {
            const IconComponent = dynamic(() =>
              import(`../../../assets/icons/${icon}`).then(
                (mod) => mod.default
              )
            );

            return (
              <tr
                className='border-b border-slate-100/50 h-20 last:border-0'
                key={index}
              >
                <td className='text-white text-xl'>
                  {icon}
                </td>
                <td>
                  <div className='w-fit mx-auto text-white'>
                    <IconComponent className='size-10' />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default IconsDemo;
