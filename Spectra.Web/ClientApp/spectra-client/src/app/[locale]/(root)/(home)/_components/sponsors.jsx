import Image from "next/image";
import { Carousel } from "../../_components/carousel";
import { Section } from "../../_components/section";

export const Sponsors = () => {
  return (
    <Section
      aria-label="Sponsors"
      aria-labelledby="sponsors"
      id="sponsors"
      heading="شركاء النجاح"
      type="basic"
    >
      <Carousel
        withControls={false}
        loop
        slideGap="md"
        classNames={{
          root: "px-0",
        }}
        slideSize={{ base: "50%", sm: "25%" }}
        data={[
          ...Array.from({ length: 5 }).map((_, i) => (
            <Image
              key={i}
              src={
                "https://s3-alpha-sig.figma.com/img/1db7/64e8/6db96292ca4b4986c7e7e834351c3f0d?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EG7vOMHps7DxPu7MVp988g3WX9Lrb0IK4ahZKWwNpsLSCqHVJYn3Av5b45Haor5tVETIvxPYeNLN6namFt4156obzPqJyseBTxXX80SoSZ0T~691xpno5bh5ui9T2TWoYpAVZAYm06zRCrDHX2yf9vr~PwxK4sU5cHmBge33mGOFVEgK4QUXODsaYfN818InGZYU9IVEkr7LyNZLmEXnttmcx0w636X-qXmMqjBkIsXuKEXryOwACfODsejvBD4dcP04aQfy27RnZqbBjrRH8clujAXjtwNufuDgB5WgER1Ub92SUnUTNCViwGKlw3DkpzhmKW~OswK1PnL7sLBxwQ__"
              }
              alt="sponsor"
              width={450}
              height={350}
              className="object-contain object-center w-56 h-20"
            />
          )),
        ]}
      />
    </Section>
  );
};
