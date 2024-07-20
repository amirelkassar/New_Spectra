import { create } from "zustand";

const useProv = create((set) => ({
  ProvName: "",
  ProvGender: "",
  ProvCountry: "",
  ProvCity: "",
  ProvPhone: "",
  ProvEmail: "",
  ProvNationalId: "",
  ProvSpecialist: "",
  ProvLicenseNum: "",
  ProvLicenseFrom: "",
  ProvDegree: "",
  ProvCertificates: "",

  setProvName: (ProvName) => set({ ProvName }),
  seProvGender: (ProvGender) => set({ ProvGender }),
  setProvCountry: (ProvCountry) => set({ ProvCountry }),
  setProvCity: (value) => set({ city: value }),
  setPhone: (ProvPhone) => set({ ProvPhone }),
  setEmail: (ProvEmail) => set({ ProvEmail }),
  setNationalId: (ProvNationalId) => set({ ProvNationalId }),
  setProvSpecialist: (ProvSpecialist) => set({ ProvSpecialist }),
  setProvLicenseNum: (ProvLicenseNum) => set({ ProvLicenseNum }),
  setProvLicenseFrom: (ProvLicenseFrom) => set({ ProvLicenseFrom }),
  setProvDegree: (ProvDegree) => set({ ProvDegree }),
  setProvCertificates: (ProvCertificates) => set({ ProvCertificates }),
}));

export default useProv;
