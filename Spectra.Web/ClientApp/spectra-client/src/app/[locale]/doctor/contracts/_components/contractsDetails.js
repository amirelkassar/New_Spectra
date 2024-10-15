"use client";
import React, { useState } from "react";
import Card from "@/components/card";
import ContractsTextDetails from "@/components/contractsTextDetails";
import Button from "@/components/button";
import useModal from "@/store/modal-slice";
import Signature from "@/components/Signature";
import Image from "next/image";
import { Modal, ScrollArea } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import CloseIcon from "@/assets/icons/close";

function ContractsDetails() {
  const [EditText, setEditText] = useState(true);
  const [signatureData, setSignatureData] = useState(null);
  const [opened, { open, close }] = useDisclosure(false);

  const { modal, editModal } = useModal();
  const [contractText, setContractText] = useState(`
        <div style="text-align: right;">
        <p >أنه في يوم ______ الموافق _____/______/2024</p>
        <p>تم الاتفاق بين كل من :</p>
        
        <h3>أولاً:</h3>
       <p>مركز سبيكترا الطبي التابع لشركة مستقبل الرعاية الطبية، المقيد بموجب الترخيص الصادر من وزارة التجارة برقم 1010697542 وعنوانه: الرياض، ظهرة لبن، شارع الفروسية، ويمثله في التوقيع على هذا العقد مديرة العمليات والتشغيل في مركز سبيكترا الطبي، ويشار إليه فيما بعد بالطرف الأول.</p>
        
        <h3>ثانيًا:</h3>
        <p>السيد/_______________ ويحمل رقم الهوية الوطنية/___________ (ويشار إليه فيما بعد بـ "الطرف الثاني").</p>
        
        <h3>تمهيد:</h3>
        <p>حيث أن الطرف الأول يمتلك _______ ويرغب في التعاقد مع الطرف الثاني على ___________، وحيث أبدى الطرف الثاني قبوله لهذا العقد ورغبته في التعاقد على ____________.</p>
        
        <p>فقد اتفق الطرفان وهما بكامل الأهلية القانونية للتعاقد والتصرف على الشروط والبنود الآتية:</p>
        
        <h3>البند الأول: موضوع العقد</h3>
        <p>موضوع هذا العقد هو قيام الطرف الثاني بـ __________ وفقاً للتعليمات والتوجيهات الصادرة من الطرف الأول.</p>
        
        <h3>البند الثاني: مدة العقد</h3>
        <p>مدة هذا العقد هي ________ تبدأ من تاريخ توقيع العقد ويمكن تجديدها بناءً على اتفاق الطرفين.</p>
        
        <h3>البند الثالث: المقابل المالي</h3>
        <p>يتقاضى الطرف الثاني مقابل عمله بموجب هذا العقد مبلغاً وقدره ________ يتم دفعه وفقاً للآلية التالية:</p>
        <ul>
          <li>دفعة أولى: ________ عند توقيع العقد.</li>
          <li>دفعة ثانية: ________ عند انتهاء نصف مدة العقد.</li>
          <li>دفعة ثالثة: ________ عند انتهاء العقد وتسليم الأعمال المطلوبة.</li>
        </ul>
        
        <h3>البند الرابع: التزامات الطرفين</h3>
        <ul>
          <li>يلتزم الطرف الأول بتقديم كافة المستندات والمعلومات المطلوبة للطرف الثاني.</li>
          <li>يلتزم الطرف الثاني بتنفيذ العمل وفقاً لما تم الاتفاق عليه ووفقاً للمواعيد المحددة.</li>
        </ul>
        
        <h3>البند الخامس: أحكام عامة</h3>
        <ul>
          <li>في حالة حدوث نزاع بين الطرفين يتم اللجوء إلى ________ لحله.</li>
          <li>هذا العقد مُلزم للطرفين ولا يجوز لأحد الطرفين التنازل عن أي حق أو التزام فيه إلا بموافقة الطرف الآخر.</li>
        </ul>
    
        <p>حرر هذا العقد من نسختين أصليتين، تسلم كل طرف نسخة للعمل بها وقت الحاجة.</p>
        </div>
      
      `);
  return (
    <Card className={"mt-7"}>
      {EditText ? (
        <ContractsTextDetails
          contractText={contractText}
          setContractText={setContractText}
          setEditText={setEditText}
        />
      ) : (
        <div className="contractsDetails">
          <div dangerouslySetInnerHTML={{ __html: contractText }} />
        </div>
      )}
      <div className="mdl:max-w-[80%] mx-auto my-10 pb-5 border-b-2 border-black/40">
        <h3 className="text-end text-sm mb-2 mdl:text-lg font-Bold">
          Signature
        </h3>
        <div className="flex w-full items-center justify-between gap-6">
          <Button
            onClick={open}
            variant="secondary"
            className="mdl:h-16 font-Bold h-14 w-[94px]  mdl:w-[112px] max-w-full text-xs mdl:text-base"
          >
            امضاء
          </Button>
          <div className=" relative w-[132px] h-[62px]">
            {signatureData && (
              <>
                <button
                  onClick={() => {
                    setSignatureData(null);
                  }}
                  className=" absolute -top-1 w-4 h-4 start-0 z-10  rounded-lg duration-200 hover:shadow-md"
                >
                  <CloseIcon className={"w-full h-auto"} />
                </button>
                <Image
                  priority
                  width={600}
                  height={360}
                  className="max-w-[130px] h-[60px] object-contain"
                  alt="Signature"
                  src={signatureData}
                />
              </>
            )}
          </div>
        </div>
      </div>
      {!EditText && (
        <Button
          onClick={() => {
            setEditText(true);
          }}
          className={
            "text-[12px] my-7 lg:text-[16px]   mdl:max-w-[260px] !w-full !py-0 !px-3 md:!px-5 font-bold items-center flex-1 flex  bg-greenMain justify-center  md:w-[120px] !min-h-11 ring-1 !gap-[8px] !ring-greenMain border-none text-white"
          }
        >
          تعديل العقد
        </Button>
      )}
      <Button
        onClick={() => {
          editModal("type", "contractsAccept");
          editModal("open", true);
        }}
        className={
          "text-[12px] lg:text-[16px]   mdl:max-w-[260px] !w-full !py-0 !px-3 md:!px-5 font-bold items-center flex-1 flex  bg-greenMain justify-center  md:w-[120px] !min-h-11 ring-1 !gap-[8px] !ring-greenMain border-none text-white"
        }
      >
        ارسال
      </Button>
      <Modal
        opened={opened}
        size={"lg"}
        onClose={close}
        withCloseButton={false}
        centered
        scrollAreaComponent={ScrollArea.Autosize}
        className="modelReq  "
      >
        <div>
          <button onClick={close}>
            <CloseIcon
              className={"w-7 absolute top-4 start-5 z-10 h-auto mdl:w-9"}
            />
          </button>
          <h2 className="text-base font-Bold text-center hidden mdl:block mdl:text-[24px] mb-7 mdl:mb-7 mdl:leading-[50px]">
            يرجى التوقيع باستخدام الماوس أو لوحة التتبع الخاصة بجهاز اللابتوب
          </h2>
          <h2 className="text-base font-Bold text-center block mdl:hidden mb-7 mdl:mb-7 mdl:leading-[50px]">
            يرجى إدخال توقيعك باستخدام اللمس على شاشة الهاتف المحمول.
          </h2>
          <div className=" max-w-full  mx-auto flex flex-col justify-center items-center">
            <h4 className="text-center mb-1 text-sm mdl:text-xl font-Regular text-grayDark">
              التوقع هنا
            </h4>
            <div className="w-full  ">
              <Signature close={close} setSignatureData={setSignatureData} />
            </div>
          </div>
        </div>
      </Modal>
    </Card>
  );
}

export default ContractsDetails;
