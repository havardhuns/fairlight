import Projects from "@/components/Projects";
import ShortInfo from "@/components/ShortInfo";
import { Separator } from "@/components/ui/separator";

const Home = () => {
  return (
    <>
      <ShortInfo />
      <Separator className="hidden md:block" />
      <Projects />
    </>
  );
};

export default Home;
