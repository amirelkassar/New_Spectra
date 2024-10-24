import Link from "next/link";
import Logo from "@/assets/icons/logo";
import ROUTES from "@/routes";
import LeftSide from "./left-side";

export default function authLayout({ children }) {
  return (
    <main className="container flex items-center py-5 mdl:py-7 justify-center">
      <section className="flex  items-stretch w-full justify-around gap-10">
        <section className="w-full mdl:w-[433px]">
          <div className="mb-5 ">
            <Link
              href={ROUTES.HOME}
              className="block w-fit mx-auto mdl:ms-0 mdl:me-auto"
            >
              <Logo />
            </Link>
          </div>
          {children}
        </section>
        <LeftSide />
      </section>
    </main>
  );
}
