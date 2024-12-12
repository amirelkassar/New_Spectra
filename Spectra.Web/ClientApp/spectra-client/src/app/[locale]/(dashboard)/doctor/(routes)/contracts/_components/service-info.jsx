'use client';

import { useCallback, useId, useMemo } from 'react';
import { Service } from './ui';

export const ServiceInfo = ({
  id = '',
  name = '',
  price = 0,
  terms = '',
  fee = 30 / 100,
  editable = false,
  deletable = false,
  onDelete = () => {},
  value = '',
  onValueChange = () => {},
}) => {
  const randomName = useId();

  const netEarnings = useMemo(() => {
    if ((!price && !value) || !fee) return '0';
    if (isNaN(+value) || isNaN(+price) || isNaN(+fee))
      return '0';
    const net = editable
      ? +value - +value * fee
      : price - price * fee;
    return Math.round(net, 2).toLocaleString();
  }, [price, fee, editable, value]);

  const onChange = useCallback(
    (e) => {
      const { value } = e.target;

      if (!/^\d*$/.test(value)) return;

      onValueChange(value);
    },
    [onValueChange]
  );

  const onPaste = useCallback((e) => {
    const pasteData = e.clipboardData.getData('text');
    if (!/^\d*$/.test(pasteData)) {
      e.preventDefault();
    }
  }, []);

  return (
    <Service className='flex gap-3'>
      {(editable || deletable) && (
        <div>
          <Service.Delete
            onClick={(e) => {
              e.preventDefault();
              onDelete();
            }}
          />
        </div>
      )}
      <div className='space-y-2 flex-1'>
        <div className='flex flex-col lg:flex-row gap-2 lg:justify-between lg:items-start'>
          <div className='flex items-center justify-between lg:justify-start gap-3'>
            <h4 className='text-xs lg:text-base shrink-0 capitalize min-w-52'>
              {name}
            </h4>
            {editable && (
              <Service.PriceInput
                name={randomName}
                value={value}
                placeholder='Write Your Price...'
                indicator='$'
                onChange={onChange}
                onPaste={onPaste}
              />
            )}
            {!editable && (
              <Service.PriceInput
                id={id}
                name={randomName}
                defaultValue={price?.toLocaleString()}
                readOnly
              />
            )}
          </div>

          <div className='flex items-center justify-between lg:block space-y-2 gap-3'>
            <span className='text-grayDark text-xs lg:text-base lg:text-center block'>
              Net Earnings
            </span>
            <Service.NetEarnings>
              {netEarnings?.toLocaleString()}
            </Service.NetEarnings>
          </div>
        </div>

        {terms && <Service.Terms>{terms}</Service.Terms>}
      </div>
    </Service>
  );
};
