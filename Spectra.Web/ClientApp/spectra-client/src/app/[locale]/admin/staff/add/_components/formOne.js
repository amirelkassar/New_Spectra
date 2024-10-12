import Button from "@/components/button";
import { Select, TextInput } from "@mantine/core";
import React from "react";

function FormOne({ setFirstData, firstData, setNextForm }) {
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFirstData({
      ...firstData,
      [name]: value,
    });
  };
  return (
    <div>
      <form className="flex flex-col gap-3 lg:gap-6 md:px-3 mb-14 focus:">
        <Select
          data={["متخصص", "دكتور",'سكرتير ']}
          label={"المهنة"}
          placeholder="اختر المهنة"
          name="profession"
          value={firstData.profession || ""}
          onChange={(value) =>
            setFirstData({ ...firstData, profession: value })
          }
          className="MultiSelect"
          classNames={{
            input: " rounded-xl border-greenMain   !h-auto py-1 min-h-[60px]",
            label: "text-base lg:text-xl mb-2",
          }}
        />
        <TextInput
          label={"الاسم كامل"}
          placeholder={"ادخل الاسم كامل"}
          name="fullName"
          value={firstData.fullName || ""}
          onChange={handleOnChange}
          classNames={{
            input: " rounded-xl border-greenMain   !h-auto py-1 min-h-[60px]",
            label: "text-base lg:text-xl mb-2",
          }}
        />
        <Select
          data={["انثى", "ذكر"]}
          label={"اختر النوع"}
          placeholder="اختر النوع"
          name="gender"
          value={firstData.gender || ""}
          onChange={(value) => setFirstData({ ...firstData, gender: value })}
          classNames={{
            input: " rounded-xl border-greenMain   !h-auto py-1 min-h-[60px]",
            label: "text-base lg:text-xl mb-2",
          }}
        />
        <Select
          data={["سعوديه", "مصر"]}
          label={"اختر البلد"}
          placeholder="اختر البلد"
          name="country"
          value={firstData.country || ""}
          onChange={(value) => setFirstData({ ...firstData, country: value })}
          classNames={{
            input: " rounded-xl border-greenMain   !h-auto py-1 min-h-[60px]",
            label: "text-base lg:text-xl mb-2",
          }}
        />
        <Select
          data={["القاهره", "اسكندريه"]}
          label={"اختر المدينة"}
          placeholder="اختر المدينة"
          name="city"
          value={firstData.city || ""}
          onChange={(value) => setFirstData({ ...firstData, city: value })}
          classNames={{
            input: " rounded-xl border-greenMain   !h-auto py-1 min-h-[60px]",
            label: "text-base lg:text-xl mb-2",
          }}
        />
        <TextInput
          label={"رقم الهاتف "}
          type={"number"}
          placeholder={"ادخل رقم الهاتف"}
          name="phone"
          value={firstData.phone || ""}
          onChange={handleOnChange}
          classNames={{
            input: " rounded-xl border-greenMain   !h-auto py-1 min-h-[60px]",
            label: "text-base lg:text-xl mb-2",
          }}
        />
        <TextInput
          label={"البريد الالكترونى "}
          type={"email"}
          placeholder={"ادخل بريدك الالكترونى"}
          name="email"
          value={firstData.email || ""}
          onChange={handleOnChange}
          classNames={{
            input: " rounded-xl border-greenMain   !h-auto py-1 min-h-[60px]",
            label: "text-base lg:text-xl mb-2",
          }}
        />
        <TextInput
          label={"رقم الهوية "}
          type={"number"}
          placeholder={"ادخل رقم الهوية"}
          name="idNumber"
          value={firstData.idNumber || ""}
          onChange={handleOnChange}
          classNames={{
            input: " rounded-xl border-greenMain   !h-auto py-1 min-h-[60px]",
            label: "text-base lg:text-xl mb-2",
          }}
        />
        <Button
          onClick={() => setNextForm(true)}
          variant="secondary"
          className="font-Bold text-base md:text-xl w-[316px] h-14 max-w-full"
        >
          التالى
        </Button>
      </form>
    </div>
  );
}

export default FormOne;
