import React from "react";

interface Props {
  children: React.ReactNode;
}

export const Label = ({ children }: Props) => {
  return <span className="font-regular">{children}</span>;
};
