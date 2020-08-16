import React from "react";
import Link from "next/link";

type Props = {
  border: string;
};

export const Border: React.FC<Props> = ({ border }) => {
  return (
    <Link href="/country/[id]" as={`/country/${border}`}>
      <div className="transition duration-300 ease-in-out cursor-pointer transform hover:scale-110 px-8 py-2 text-xs bg-elements shadow-lg text-primary">
        <span>{border}</span>
      </div>
    </Link>
  );
};
