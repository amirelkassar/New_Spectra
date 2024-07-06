import ImagePlaceholderIcon from "@/assets/icons/image-placeholder";
import MenuActions from "@/components/menu-actions";

const Card = ({ title, values }) => {
  return (
    <div className="bg-white py-7 px-12 rounded-xl flex flex-col gap-2">
      <p>{title}</p>
      <div className="w-full flex flex-wrap gap-3 gap-y-2 ">
        {values.map((value, index) => (
          <h2 key={index}>{value}</h2>
        ))}
      </div>
    </div>
  );
};

const ClientDetails = ({ title }) => {
  return (
    <section className="grow grid grid-cols-2 gap-y-2.5 gap-x-5 ">
      <div className="col-span-2 bg-white p-12 rounded-xl relative">
        <MenuActions className={"absolute top-5 end-5"} />
        <h1 className="mb-6">بيانات {title}</h1>
        <div className="grid grid-cols-2">
          <div className="flex gap-8">
            <div className="size-24 rounded-full overflow-hidden flex items-center justify-center">
              <label htmlFor="file" className="cursor-pointer">
                <ImagePlaceholderIcon />
              </label>
              <input id="file" type="file" className="hidden" />
            </div>
            <div className="flex flex-col items-start justify-around">
              <p>الاسم</p>
              <h2>مستشفى الصفوة</h2>
            </div>
          </div>
          <div className="flex flex-col items-start justify-around">
            <p>اخر دخول</p>
            <h2>25/4/2024</h2>
          </div>
        </div>
      </div>
      <Card title={"نوع العمل"} values={["منظمة"]} />
      <Card title={"الرقم الضريبى"} values={["623-456-782"]} />
      <Card title={"العنوان"} values={["jabal Al Noor، العسيلة، مكة 24421"]} />
      <Card title={"رقم الهاتف"} values={["9874563+", "9874563+"]} />
      <Card title={"البريد الالكترونى"} values={["safwa@gmail.com"]} />
      <Card title={"الموقع الالكترونى"} values={["safwa@gmail.com"]} />
      <Card title={"عدد العائلات"} values={["15 عائلة"]} />
      <Card title={"مجمل عدد الاطفال"} values={["20 طفل"]} />
    </section>
  );
};

export default ClientDetails;
