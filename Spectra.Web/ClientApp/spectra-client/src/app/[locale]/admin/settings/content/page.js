import Card from "@/components/card";
import { Link } from "@/navigation";
import ROUTES from "@/routes";

const ContentPage = () => {
  const sections = [
    {
      id: 0,
      title: "الخدمات",
      link:ROUTES.ADMIN.SETTINGS.CONTENT.SERVICES
    },
    {
      id: 1,
      title: "البانرات الدعائية",
      link:ROUTES.ADMIN.SETTINGS.CONTENT.BANNERSAD

    },
    {
      id: 2,
      title: "المقالات",
      link:ROUTES.ADMIN.SETTINGS.CONTENT.ARTICLES

    },
    {
      id: 3,
      title: "التخصصات الطبية",
      link:ROUTES.ADMIN.SETTINGS.CONTENT.MEDICAL

    },
    {
      id: 4,
      title: "قصص النجاح",
      link:ROUTES.ADMIN.SETTINGS.CONTENT.DASHBOARD

    },
  ];
  const media = [
    {
      id: 0,
      title: "تسجيل الدخول",
      link:ROUTES.ADMIN.SETTINGS.CONTENT.DASHBOARD

    },
    {
      id: 1,
      title: "ماذا نعالج",
      link:ROUTES.ADMIN.SETTINGS.CONTENT.DASHBOARD

    },
  ];

  return (
    <Card>
      <div>
        <h2 className="text-[16px] mdl:text-[20px] font-Bold mb-4">
          الاعدادات - المحتوى
        </h2>
        <div className="flex flex-col gap-10 w-full">
          <div>
            <h3 className="bg-blueLight w-full text-[16px] mdl:text-[20px] rounded-[10px] px-5 py-2 font-Bold mb-8">
              الاقسام
            </h3>
            <div className="mt-10 flex flex-col gap-6">
              {sections.map((item, i) => {
                return (
                  <div key={item.id} className="flex items-center justify-between gap-4 flex-wrap pb-5 border-b border-grayLight mdl:pb-8 last-of-type:border-none">
                    <h3 className="text-[14px] md:text-[20px] font-bold">
                      {item.title}
                    </h3>
                    <Link
                      href={item.link}
                      className="w-fit md:w-[140px] flex items-center justify-center py-2 px-7 rounded-[10px] bg-greenMain text-white font-Bold text-[14px] md:text-[20px]"
                    >
                      تعديل
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h3 className="bg-blueLight w-full text-[16px] mdl:text-[20px] rounded-[10px] px-5 py-2 font-Bold mb-8">
            وسائط ( صور )
            </h3>
            <div className="mt-10 flex flex-col gap-6">
              {media.map((item, i) => {
                return (
                  <div key={item.id} className="flex items-center justify-between gap-4 flex-wrap pb-5 border-b border-grayLight last-of-type:border-none mdl:pb-8 ">
                    <h3 className="text-[14px] md:text-[20px] font-bold">
                      {item.title}
                    </h3>
                    <Link
                      href={ROUTES.ADMIN.SETTINGS.PERMISSIONS.PERMISSIONSEDIT(
                        5
                      )}
                      className="w-fit md:w-[140px] flex items-center justify-center py-2 px-7 rounded-[10px] bg-greenMain text-white font-Bold text-[14px] md:text-[20px]"
                    >
                      تعديل
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ContentPage;
