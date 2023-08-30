"use client";

import { useRouter } from "next/navigation";
import React from "react";

interface Props {
  name: string;
}

const Country: React.FC<Props> = ({ name }) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(`/${name}`)}
      className="px-2.5 py-0.5 shadow-header rounded"
    >
      {name}
    </button>
  );
};

export default Country;
