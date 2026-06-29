"use client";

import { useState } from "react";
import React from "react";

export default function DashboardPage() {
  const [name, setName] = useState("");
  console.log("Dashboard client component");
  return (
    <div>
      <label>Dashboard</label>

      <input
        title=" name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>hii {name}</p>
    </div>
  );
}
