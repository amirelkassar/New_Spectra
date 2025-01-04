import { create } from "zustand";

const useOrg = create((set) => ({
  orgName: "",
  orgAddress: "",
  orgCountry: "",
  orgCity: "",
  orgSpecialist: "",
  orgWebsite: "",
  manName: "",
  manJob: "",
  manPhone: "",
  manEmail: "",

  setOrgName: (orgName) => set({ orgName }),
  setOrgAddress: (orgAddress) => set({ orgAddress }),
  setOrgCountry: (orgCountry) => set({ orgCountry }),
  setOrgCity: (orgCity) => set({ orgCity }),
  setOrgSpecialist: (orgSpecialist) => set({ orgSpecialist }),
  setOrgWebsite: (orgWebsite) => set({ orgWebsite }),
  setManName: (manName) => set({ manName }),
  setManJob: (manJob) => set({ manJob }),
  setManPhone: (manPhone) => set({ manPhone }),
  setManEmail: (manEmail) => set({ manEmail }),
}));

export default useOrg;
