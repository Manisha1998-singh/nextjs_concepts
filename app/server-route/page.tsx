import { ImageSlider } from "../components/imageSlider";
import { serverSideFunction } from "../utils/server-utils";
import { clientSideFunction } from "../utils/client-utils";
export default function ServerRoutePage() {
  const result = serverSideFunction();
  const clientResult = clientSideFunction();
  return (
    <div>
      <h1>Server Route Page {result}</h1>
      <h1>Client Route Page {clientResult}</h1>
      <ImageSlider />
    </div>
  );
}
