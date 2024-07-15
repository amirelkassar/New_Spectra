"use client";

import Input from "@/components/input";
import SelectBox from "@/components/select-box";
import useFamily from "@/store/auth/signup/family-slice";

const ChildForm = ({ index }) => {
  const { children, editChildAttribute } = useFamily();

  return (
    <>
      <h1>إضافة طفل</h1>
      <Input
        value={children[index].firstName}
        handleOnChange={(e) =>
          editChildAttribute(index, "firstName", e.target.value)
        }
        label={"الاسم الاول للطفل"}
        placeholder={" الاسم الاول للطفل"}
      />
      <Input
        value={children[index].lastName}
        handleOnChange={(e) =>
          editChildAttribute(index, "lastName", e.target.value)
        }
        label={"الاسم الثاني للطقل"}
        placeholder={" الاسم الثاني للطفل"}
      />
      <SelectBox
        options={["ولد", "بنت"]}
        selectedOption={children[index].gender}
        handleOnChange={(selected) =>
          editChildAttribute(index, "gender", selected)
        }
        placeholder={" النوع"}
        label={"النوع"}
      />
      <Input
        value={children[index].dateOfBirth}
        handleOnChange={(e) =>
          editChildAttribute(index, "dateOfBirth", e.target.value)
        }
        label={"تاريخ الميلاد"}
        placeholder={" تاريخ الميلاد"}
        type={"date"}
      />{" "}
      <Input
        value={children[index].symptoms}
        handleOnChange={(e) =>
          editChildAttribute(index, "symptoms", e.target.value)
        }
        label={"اعراض على الطفل"}
        placeholder={" اعراض على الطفل"}
      />{" "}
      <Input
        value={children[index].symptomsDate}
        handleOnChange={(e) =>
          editChildAttribute(index, "symptomsDate", e.target.value)
        }
        label={"تاريخ ظهور الاعراض"}
        placeholder={" تاريخ ظهور الاعراض"}
        type={"date"}
      />{" "}
      <SelectBox
        options={["وراثة", "مكتسبة"]}
        selectedOption={children[index].InheritedOrAcquired}
        handleOnChange={(selected) =>
          editChildAttribute(index, "InheritedOrAcquired", selected)
        }
        label={"وراثة ام مكتسبة"}
        placeholder={" وراثة ام مكتسبة"}
      />
      <Input
        value={children[index].physicalSymptoms}
        handleOnChange={(e) =>
          editChildAttribute(index, "physicalSymptoms", e.target.value)
        }
        label={"اعراض جسدية"}
        placeholder={" اعراض جسدية"}
      />{" "}
      <Input
        value={children[index].notes}
        handleOnChange={(e) =>
          editChildAttribute(index, "notes", e.target.value)
        }
        label={"ملحوظات"}
        placeholder={" ملحوظات"}
      />
    </>
  );
};

export default ChildForm;
