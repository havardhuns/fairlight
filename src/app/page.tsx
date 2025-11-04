import Projects from "@/components/Projects";
import ShortInfo from "@/components/ShortInfo";
import { Separator } from "@/components/ui/separator";

const Home = () => {
  return (
    <>
      <ShortInfo />
      <Separator />
      <Projects />
      <Separator />
    </>
  );
};

export default Home;
