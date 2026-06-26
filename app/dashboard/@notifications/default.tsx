import { Card } from "@/app/components/card";
import Link from "next/link";

export default function Notifications() {
  return (
    <Card>
      <div>Notifications</div>
      <div>
        <Link
          href="/dashboard/archived"
          style={{
            color: "red",
            textDecoration: "underline",
          }}>
          Archived
        </Link>
      </div>
    </Card>
  );
}
