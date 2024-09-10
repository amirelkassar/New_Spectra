import EditIcon from "@/assets/icons/edit";
import { TextInput } from "@mantine/core";
import React from "react";

function ServicesMember({ selectedServices,serviceOptions }) {
  return (
    <div dir="ltr" className="pb-8">
      {/* {selectedServices.map((service) => (
        <div key={service} className="flex items-center space-x-4">
          <div className="font-medium">{serviceOptions.find(opt => opt.value === service).label}</div>
          <TextInput
            placeholder="$"
            value={serviceData[service]?.price}
            onChange={(e) => handleInputChange(service, 'price', e.currentTarget.value)}
            className="w-24"
            label="Price"
          />
          <TextInput
            placeholder="Duration"
            value={serviceData[service]?.duration}
            onChange={(e) => handleInputChange(service, 'duration', e.currentTarget.value)}
            className="w-24"
            label="Duration"
          />
          <TextInput
            placeholder="%"
            value={serviceData[service]?.discount}
            onChange={(e) => handleInputChange(service, 'discount', e.currentTarget.value)}
            className="w-24"
            label="Discount"
          />
        </div>
      ))} */}
      <h2 className="text-[16px] mdl:text-xl font-Bold mb-4">
        {" "}
        Price of your services as a freelancer
      </h2>
      <ul className="flex flex-col gap-3 lgl:ps-7">
        {selectedServices.map((service, i) => {
          return (
            <li className="flex lgl:items-center gap-3" key={i}>
              <p className="font-Regular text-[12px] mdl:text-[15px] min-w-[120px] mdl:min-w-[150px]">
                {serviceOptions.find((opt) => opt.value === service).label}
              </p>
              <div className="flex items-center gap-3 flex-wrap">
                <div className="flex items-center w-full md:w-[200px] justify-between h-9 overflow-hidden mdl:h-11 rounded-xl border border-grayDark px-4 py-2">
                  <TextInput
                    type="number"
                    className="flex-1"
                    classNames={{
                      input:
                        "border-none h-full flex-1 text-[12px] mdl:text-[16px] text-start px-4",
                    }}
                  />
                  <span className="font-SemiBold text-[12px] mdl:text-[16px]">
                    $
                  </span>
                </div>
                <div className="flex items-center w-[156px] mdl:w-[200px] justify-between h-9 overflow-hidden mdl:h-11 rounded-xl border border-grayDark px-2 py-2">
                  <TextInput
                    placeholder="Duration"
                    type="number"
                    className="flex-1"
                    classNames={{
                      input:
                        "border-none h-full flex-1 text-[12px] mdl:text-[16px] text-start px-2",
                    }}
                  />
                </div>
                <div className="flex items-center w-[156px] mdl:w-[200px] justify-between h-9 overflow-hidden mdl:h-11 rounded-xl border border-grayDark px-2 py-2">
                  <TextInput
                    type="number"
                    placeholder="Discount"
                    className="flex-1"
                    classNames={{
                      input:
                        "border-none h-full flex-1 text-[12px] mdl:text-[16px] text-start px-2",
                    }}
                  />
                  <span className="font-SemiBold text-[12px] mdl:text-[16px]">
                    %
                  </span>
                </div>
             
              </div>
            </li>
          );
        })}

       
      </ul>
    </div>
  );
}

export default ServicesMember;
