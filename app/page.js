"use client";
import Image from "next/image";
import ServiceDescription from "./components/ServiceDescription";
import ServiceButton from "./components/ServiceButton";
import services from "./data";
import { useState } from "react";

export default function Home() {
  const [service, setService] = useState(services[0]);

  const handleServiceButtonClick = (service) => {
    setService(service);
  };

  return (
    <div className="min-h-screen p-20 lg:p-22 lg:px-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-row justify-center">
        <section className="flex flex-col grow lg:grow-0">
          {services.map((e) => (
            <ServiceButton
              key={e.id}
              service={e}
              handleServiceButtonClick={handleServiceButtonClick}
            />
          ))}
        </section>
        <ServiceDescription service={service} />
      </main>
    </div>
  );
}
