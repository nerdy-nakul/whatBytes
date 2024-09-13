"use client";
import Content from "@/components/Content";
import Navbar from "@/components/Navbar";
import SideBar from "@/components/SideBar";
import { useState } from "react";

export default function Home() {
  const [data, setData] = useState(1);
  console.log(data);
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1 flex-col md:flex-row">
        <SideBar data={{ data, setData }} className="w-full md:w-1/4" />
        <Content data={data} className="w-full md:w-3/4" />
      </div>
    </div>
  );
}
