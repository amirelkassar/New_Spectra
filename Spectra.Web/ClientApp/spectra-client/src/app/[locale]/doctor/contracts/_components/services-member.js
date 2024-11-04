import DeleteIcon from "@/assets/icons/delete";
import ContractLineDoctor from "@/components/contractLineDoctor";
import React from "react";

function ServicesMember({
  data,
  handleServiceDataChange,
  handleDeleteItem,

}) {


  return (
    <div
      dir="ltr"
      className="pb-8 ps-3 lgl:ps-14 border-b mt-8 border-grayDark"
    >
      <div className="flex items-center gap-3 mdl:gap-6 flex-wrap mb-8 mdl:mb-12">
        <h2 className="text-[16px] mdl:text-xl font-Bold ">
          The price of your services as a member of the Spectra team
        </h2>
        <div className="flex items-center gap-2 mdl:gap-4 flex-1">
          <div className="bg-blueLight flex-1 flex items-center gap-1 mdl:gap-2 max-w-[290px] justify-center rounded-xl border border-greenMain text-greenMain font-Bold  mdl:px-4 min-h-9 mdl:min-h-11">
            <h3 className="text-sm mdl:text-xl font-Bold">Duration :</h3>
            <p className="text-sm mdl:text-xl font-Bold">15 min</p>
          </div>
          <div className="bg-blueLight flex-1 flex items-center gap-1 mdl:gap-2 max-w-[290px] justify-center rounded-xl border border-greenMain text-greenMain font-Bold  mdl:px-4 min-h-9 mdl:min-h-11">
            <h3 className="text-sm mdl:text-xl font-Bold">Platform Fee :</h3>
            <p className="text-sm mdl:text-xl font-Bold">30%</p>
          </div>
        </div>
      </div>
      <ul className="flex flex-col gap-3 lgl:ps-7">
        {data.map((service, i) => {
          return (
            <div key={i} className="flex items-center gap-4">
              <button
                onClick={() => {
                  handleDeleteItem("member", service.id);
                }}
                className=" size-8 p-2 flex items-center justify-center duration-200 hover:shadow-md rounded-lg border border-red"
              >
                <DeleteIcon />
              </button>
              <ContractLineDoctor
                activeEdit={false}
                serviceData={service}
                type={"member"}
                handleServiceDataChange={handleServiceDataChange}
                terms={
                  "Lorem Absim Lorem AbsimLorem AbsimLorem AbsimLorem AbsimLorem AbsimLorem AbsimLorem AbsimLorem AbsimLorem AbsimLorem AbsimLorem AbsimLorem Absim "
                }
              />
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default ServicesMember;
