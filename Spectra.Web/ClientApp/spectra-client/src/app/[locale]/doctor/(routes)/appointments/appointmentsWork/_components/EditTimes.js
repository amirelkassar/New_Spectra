"use client";
import BackIcon from "@/assets/icons/back";
import Button from "@/components/button";
import { Link } from "@/navigation";
import ROUTES from "@/routes";
import React, { useState } from "react";
import InputTime from "./InputTime";
import { Modal, ScrollArea } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import CalenderModalIcon from "@/assets/icons/calenderModal";
import CalenderModalError from "@/assets/icons/calenderModalError";
function EditTimes() {
  const [TimeFrom, setTimeFrom] = useState({
    hours: 0,
    minutes: 0,
    period: "AM",
  });
  const [TimeTo, setTimeTo] = useState({
    hours: 0,
    minutes: 0,
    period: "AM",
  });
  const [opened, { open, close }] = useDisclosure(false);
  const [ModelOne, setModelOne] = useState(false);
  return (
    <div className="p-4">
      <div className="flex items-center gap-8 flex-wrap mb-6">
        <div className="flex items-center gap-3">
          <Link href={ROUTES.DOCTOR.APPOINTMENTSWORK}>
            <BackIcon className={"w-[30px] h-[30px] mdl:w-11 mdl:h-11"} />
          </Link>
          <h2 className=" text-base mdl:text-xl">تعديل ميعاد</h2>
        </div>
      </div>
      <div className="flex flex-wrap gap-3 mdl:gap-5 mb-4">
        <h3
          className={` h-9 mdl:h-11 text-xs mdl:text-base duration-150 opacity-55 bg-blueLight text-black font-Bold rounded-lg mdl:rounded-xl w-[80px] mdl::w-[112px] hover:shadow-md flex items-center justify-center  `}
        >
          الجمعة
        </h3>
      </div>

      <div className="flex lg:flex-row flex-col  gap-3 mdl:gap-5 mb-4 mt-9 mdl:mt-[60px]">
        <InputTime setTime={setTimeFrom} time={TimeFrom} title="من /" />
        <span className="w-[2px] hidden h-20 bg-grayLight lg:block"></span>
        <InputTime setTime={setTimeTo} time={TimeTo} title="الى /" />
      </div>

      <Button
        onClick={open}
        variant="secondary"
        className=" w-full font-Bold max-w-[288px] mt-16 mx-auto mdl:mx-0 text-xs mdl:text-base"
      >
        حفظ
      </Button>
      <Modal
        opened={opened}
        size={"md"}
        withCloseButton={false}
        centered
        onClose={close}
        scrollAreaComponent={ScrollArea.Autosize}
        className="modelReq !mb-0 !pb-0"
      >
        {ModelOne ? (
          <div>
            <CalenderModalIcon className={"mx-auto h-[166px] w-auto mb-7"} />
            <h3 className="text-[28px] font-Bold text-center mb-2">
              تعارض مواعيد
            </h3>
            <p className="text-xl font-Regular text-center mb-12">
              الموعد الجديد الذي اخترته يتعارض مع مواعيد موجودة مسبقًا لمرضى
              لديك. يُرجى اختيار وقت آخر أو تعديل مواعيد المرضى المتأثرة.
            </p>
            <div>
              <h4 className="text-xl font-Bold text-center">
                هل ترغب فى الاستمرار بغيير المواعيد ؟
              </h4>
              <div className=" flex items-center justify-center gap-4 mt-6">
                <Button
                  onClick={close}
                  className=" border-2 border-greenMain font-Bold flex-1  text-xs mdl:text-base"
                >
                  نعم
                </Button>
                <Button
                  onClick={close}
                  variant="secondary"
                  className="  font-Bold flex-1  text-xs mdl:text-base"
                >
                  لا
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <CalenderModalError className={"mx-auto h-[166px] w-auto mb-7"} />
            <h3 className="text-[28px] font-Bold text-center mb-2">
              تغيير الموعد يتطلب دفع شرط جزائى
            </h3>
            <p className="text-xl font-Regular text-center mb-12">
              أنت على وشك تغيير موعد قبل أقل من 48 ساعة من موعد مريضك المحدد،
              وهذا التغيير يتطلب دفع شرط جزائي طبقًا لسياسة سبيكترا.
            </p>
            <div>
              <h4 className="text-xl font-Bold text-center">
                هل ترغب فى الاستمرار بغيير المواعيد ؟
              </h4>
              <div className=" flex items-center justify-center gap-4 mt-6">
                <Button
                  onClick={close}
                  className=" border-2 border-greenMain font-Bold flex-1  text-xs mdl:text-base"
                >
                  نعم
                </Button>
                <Button
                  onClick={close}
                  variant="secondary"
                  className="  font-Bold flex-1  text-xs mdl:text-base"
                >
                  لا
                </Button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default EditTimes;
