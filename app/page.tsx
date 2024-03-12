// import SectionOne from "@/components/my_component/sectionOne";
// import SectionTwo from "@/components/my_component/sectionTwo";
import {SectionOne, SectionTwo} from "@/components/my_component/section"

export default function Home() {
  return (
    <>
    <main className="container-xl">
      <SectionOne />
      <SectionTwo />
    </main>
    </>
  );
}
