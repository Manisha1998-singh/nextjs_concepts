import fs from "fs";

export const ServerComponentTwo = () => {
  fs.readFileSync("app/components/server-component-two.tsx", "utf-8");
  return (
    <>
      <div>
        <h1>Server component two</h1>
      </div>
    </>
  );
};
