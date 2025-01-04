import { create } from "zustand";

const useFamily = create((set) => ({
  parentName: "",
  country: "",
  city: "",
  job: "",
  nationalId: "",

  children: [
    {
      firstName: "",
      lastName: "",
      gender: "",
      dateOfBirth: "",
      symptoms: "",
      symptomsDate: "",
      InheritedOrAcquired: "",
      physicalSymptoms: "",
      notes: "",
    },
  ],

  addChild: () =>
    set((state) => ({
      children: [
        ...state.children,
        {
          firstName: "",
          lastName: "",
          gender: "",
          dateOfBirth: "",
          symptoms: "",
          symptomsDate: "",
          InheritedOrAcquired: "",
          physicalSymptoms: "",
          notes: "",
        },
      ],
    })),

  editChildAttribute: (index, key, value) =>
    set((state) => ({
      children: state.children.map((child, i) => {
        if (i === index) {
          return {
            ...child,
            [key]: value,
          };
        }
        return child;
      }),
    })),

  setParentName: (value) => set({ parentName: value }),
  setCountry: (value) => set({ country: value }),
  setCity: (value) => set({ city: value }),
  setJob: (value) => set({ job: value }),
  setNationalId: (value) => set({ nationalId: value }),
}));

export default useFamily;
