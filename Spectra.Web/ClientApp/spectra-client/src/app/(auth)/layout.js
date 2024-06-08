import Link from "next/link";
import Logo from "@/assets/icons/logo";
import ROUTES from "@/routes";
import LeftSide from "./left-side";

export default function authLayout({ children }) {
  return (
    <main className="container flex items-center py-10 justify-center">
      <section className="flex items-stretch justify-center gap-28">
        <section className="w-[433px]">
          <div className="mb-14">
            <Link href={ROUTES.HOME} className="block w-fit">
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
