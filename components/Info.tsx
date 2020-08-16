import React from "react";
import { Label } from "./Label";

type Info = {
  label: string;
  value: string | number | undefined;
};

export const Info: React.FC<Info> = (info) => {
  return (
    <span className="text-primary">
      <Label>{info.label}</Label>
      {info.value}
    </span>
  );
};
