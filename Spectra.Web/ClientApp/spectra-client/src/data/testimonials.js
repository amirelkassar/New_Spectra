import ClockWhite from '@/assets/icons/clock-white';
import MonitorWhite from '@/assets/icons/monitor-white';
import ToolsWhite from '@/assets/icons/tools-white';
import { Translate } from '@/components/translate';

export const TESTIMONIALS = [
  {
    icon: <ClockWhite className='size-7 mdl:size-12 text-white' />,
    text: <Translate value='testimonials_1' target='guest_obj' />,
  },
  {
    icon: <MonitorWhite className='size-5 mdl:size-11' />,
    text: <Translate value='testimonials_2' target='guest_obj' />,
  },
  {
    icon: <ToolsWhite className='size-5 mdl:size-11' />,
    text: <Translate value='testimonials_3' target='guest_obj' />,
  },
];
