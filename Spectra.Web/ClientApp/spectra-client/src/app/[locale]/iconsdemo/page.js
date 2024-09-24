import React from 'react';
import dynamic from 'next/dynamic';
import { getIcons } from '../../../iconLoader';



const icons = getIcons();

const IconsDemo = () => {
  return (
    <div className='bg-slate-300'>
      <h1>Icons Demo</h1>
      <div style={{ display: 'block' }}>
        {icons.map((icon, index) => {
          const IconComponent = dynamic(() =>
            import(`src/assets/icons/${icon.name}`).then(
              (mod) => mod.default
            )
          );

          return (
            <div
              key={index}
              style={{
                margin: '10px',
                textAlign: 'center',
              }}
            >
              <span className='size-10'>
                <IconComponent />
              </span>
              <p>{icon.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IconsDemo;
