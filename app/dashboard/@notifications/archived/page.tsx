import { Card } from "@/app/components/card";
import Link from "next/link";

export default function ArchivedNotifications() {
  return (
    <Card>
      <div> Archived Notifications</div>
      <div>
        <Link
          href="/dashboard"
          style={{
            color: "red",
            textDecoration: "underline",
          }}>
          Default
        </Link>
      </div>
    </Card>
  );
}
