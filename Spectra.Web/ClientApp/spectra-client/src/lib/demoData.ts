// Cspell: disable

import { MedicalTeamTableData } from '@/app/[locale]/(client)/customer/team/_components/columns';
import HeartIcon from '@/assets/icons/heart';
import TeamIcon from '@/assets/icons/team';
import FollowUpIcon from '@/assets/icons/followup';
import HandshakeIcon from '@/assets/icons/handshake';
import React from 'react';

export const childPopupData = [
  {
    id: 0,
    avatar: '',
    fullname: 'محمد عبدالله الشيخ',
    diagnosis: 'طيف التوحد',
  },

  {
    id: 1,
    avatar: '',
    fullname: 'احمد عبدالله الشيخ',
    diagnosis: 'طيف التوحد',
  },

  {
    id: 2,
    avatar: '',
    fullname: 'علي محمد علي',
    diagnosis: 'فرط حركة',
  },
];

export const MedicalTeamData: MedicalTeamTableData[] = [
  {
    id: '1',
    doctor: 'احمد محمد كمال',
    profession: 'اخصائى نفسي',
    rate: 9.5,
    avatar: '',
    cost: 100,
  },
  {
    id: '2',
    doctor: 'احمد محمد كمال',
    profession: 'توحد',
    rate: 9.1,
    avatar: '',
    cost: 90,
  },
  {
    id: '3',
    doctor: 'احمد محمد كمال',
    profession: 'فرط حركة',
    rate: 8.5,
    avatar: '',
    cost: 80,
  },
  {
    id: '4',
    doctor: 'احمد محمد كمال',
    profession: 'ثنائي القطب',
    rate: 9.8,
    avatar: '',
    cost: 150,
  },
  {
    id: '5',
    doctor: 'احمد محمد كمال',
    profession: 'اخصائى نفسي',
    rate: 8.6,
    avatar: '',
    cost: 120,
  },
];

export const servicesData = [
  {
    label: 'خدمة الكشف المبكر الالكتروني',
    icon: React.createElement(HeartIcon, { className: 'size-4 lg:size-5' }),
    color: 'rgb(255 61 61 / 0.18)',
    description: 'نقدم خدمات الاكتشاف المبكر للاضطرابات النمائية و السلوكية',
  },
  {
    label: 'خدمات التشخيص الطبي عبر فرق متعددة التخصصات',
    icon: React.createElement(TeamIcon, { className: 'size-4 lg:size-5' }),
    color: 'rgb(16 176 193 / 0.18)',
    description:
      'نقدم خدمات الاكتشاف المبكر للاضطرابات النمائية و السلوكية كالتوحد و فرط الحركة وغيرها',
  },
  {
    label: 'خدمات المتابعة الدوائية',
    icon: React.createElement(FollowUpIcon, { className: 'size-4 lg:size-5' }),
    color: 'rgb(138 34 160 / 0.18)',
    description:
      'نقوم بتشخيص الحالات التي تعاني من الاضطرابات النمائية والسلوكية عبر فريق محترف متعدد التخصصات',
  },
  {
    label: 'خدمات الاستشارات التخصصية',
    icon: React.createElement(HandshakeIcon, { className: 'size-4 lg:size-5' }),
    color: 'rgb(16 176 193 / 0.18)',
    description:
      'نقدم خدمات استشارية مع أطباء إستشاريين في طب تطور سلوك الأطفال و الطب النفسي وغيره',
  },
  {
    label: 'خدمات التأهيل العلاجي في مختلف التخصصات',
    icon: React.createElement(HandshakeIcon, { className: 'size-4 lg:size-5' }),
    color: 'rgb(16 176 193 / 0.18)',
    description:
      'نقدم خدمات استشارية مع أطباء إستشاريين في طب تطور سلوك الأطفال و الطب النفسي وغيره',
  },
  {
    label: 'خدمات التقارير الطبية والتخصصية',
    icon: React.createElement(HandshakeIcon, { className: 'size-4 lg:size-5' }),
    color: 'rgb(16 176 193 / 0.18)',
    description:
      'نقدم خدمات استشارية مع أطباء إستشاريين في طب تطور سلوك الأطفال و الطب النفسي وغيره',
  },
  {
    label: 'خدمات دعم المراكز والجهات',
    icon: React.createElement(HandshakeIcon, { className: 'size-4 lg:size-5' }),
    color: 'rgb(16 176 193 / 0.18)',
    description:
      'نقدم خدمات استشارية مع أطباء إستشاريين في طب تطور سلوك الأطفال و الطب النفسي وغيره',
  },
  {
    label: 'خدمات التدريب',
    icon: React.createElement(HandshakeIcon, { className: 'size-4 lg:size-5' }),
    color: 'rgb(16 176 193 / 0.18)',
    description:
      'نقدم خدمات استشارية مع أطباء إستشاريين في طب تطور سلوك الأطفال و الطب النفسي وغيره',
  },
];

export const packagesDataSpectra = [
  {
    id: '1',
    label: 'الباقة المتميزة',
    price: 100,
    features: [
      '4 جلسات من تخصص التخاطب',
      'الوصول لافضل النتائج والتوصيات',
      '1 جلسة اضافية لقياس الذكاء',
    ],
    color: '#10B0C1',
  },
  {
    id: '2',
    label: 'الباقة المتميزة',
    price: 200,
    features: [
      '4 جلسات من تخصص التخاطب',
      'الوصول لافضل النتائج والتوصيات',
      '1 جلسة اضافية لقياس الذكاء',
    ],
    color: '#8A22A0',
  },
  {
    id: '3',
    label: 'الباقة المتميزة',
    price: 300,
    features: [
      '4 جلسات من تخصص التخاطب',
      'الوصول لافضل النتائج والتوصيات',
      '1 جلسة اضافية لقياس الذكاء',
    ],
    color: '#010036',
  },
];

export const packagesDataFlex = [
  {
    id: '1',
    label: 'الباقة المرنة',
    price: 100,
    features: [
      '4 جلسات من تخصص التخاطب',
      'الوصول لافضل النتائج والتوصيات',
      '1 جلسة اضافية لقياس الذكاء',
    ],
    color: '#10B0C1',
  },
  {
    id: '2',
    label: 'الباقة المرنة',
    price: 200,
    features: [
      '4 جلسات من تخصص التخاطب',
      'الوصول لافضل النتائج والتوصيات',
      '1 جلسة اضافية لقياس الذكاء',
    ],
    color: '#8A22A0',
  },
  {
    id: '3',
    label: 'الباقة المرنة',
    price: 300,
    features: [
      '4 جلسات من تخصص التخاطب',
      'الوصول لافضل النتائج والتوصيات',
      '1 جلسة اضافية لقياس الذكاء',
    ],
    color: '#010036',
  },
];
