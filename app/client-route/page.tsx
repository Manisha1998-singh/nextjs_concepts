"use client";
import { useTheme } from "../components/theme-provider";
import { clientSideFunction } from "../utils/client-utils";
export default function ClientRoutePage() {
  const theme = useTheme();
  const result = clientSideFunction();
  return (
    <>
      <div style={{ color: theme.colors.primary }}>Client Route Page </div>
      <p>{result}</p>
    </>
  );
}
