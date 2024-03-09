import SectionOne from "@/components/my_component/sectionOne";
import SectionTwo from "@/components/my_component/sectionTwo";

export default function Home() {
  return (
    <>
    <main className="container-xl">
      <div className="flex flex-col">
        <SectionOne />
        <SectionTwo />
      </div>
    </main>
    </>
  );
}
