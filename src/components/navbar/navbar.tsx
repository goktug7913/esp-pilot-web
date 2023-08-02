"use client";
import React from "react";
import { useAppContext } from "@/context/appContext";
import styles from "./navbar.module.css";
import Select from "@/components/select/select";
import { useRestartEsp } from "@/api/queries";
import Link from "next/link";

const pages = [
  { name: "Home", path: "/" },
  { name: "PID", path: "/pid" },
  { name: "Settings", path: "/settings" },
];

export default function Navbar() {
  const ctx = useAppContext();
  const mutation = useRestartEsp();
  return (
    <div className={styles.navbar}>
      ESP Pilot Web UI
      <Select
        options={ctx.devices}
        onSelect={(device) => ctx.setSelectedDevice(device)}
      />
      {pages.map((page) => (
        <Link href={page.path} key={page.path}>
          {page.name}
        </Link>
      ))}
      <button
        disabled={mutation.isLoading}
        onClick={() => mutation.mutate()}
        style={{
          backgroundColor: mutation.isLoading ? "gray" : "red",
          color: "white",
          borderRadius: "0.5rem",
          padding: "0.5rem",
          border: "none",
          cursor: "pointer",
        }}
      >
        Restart ESP
      </button>
    </div>
  );
}
