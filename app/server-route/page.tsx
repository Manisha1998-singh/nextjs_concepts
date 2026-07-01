import { serverSideFunction } from "../utils/server-utils";
export default function ServerRoutePage() {
  const result = serverSideFunction();
  return (
    <div>
      <h1>Server Route Page {result}</h1>
    </div>
  );
}
