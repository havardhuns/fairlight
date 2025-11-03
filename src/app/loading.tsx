import { Spinner } from "@/components/ui/spinner";

const Loading = () => (
  <div className="flex justify-center items-center flex-1">
    <Spinner className="m-auto size-8" />
  </div>
);

export default Loading;
