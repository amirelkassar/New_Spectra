export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return (
    <main>
      <div>{locale}</div>
    </main>
  );
}
