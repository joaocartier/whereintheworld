import React from "react";
import { Label } from "./Label";
import Link from "next/link";
import { Country } from "../interfaces";

type Props = {
  country: Country;
};

export const CountryCard: React.FC<Props> = ({ country }: Props) => {
  return (
    <Link href="/country/[id]" as={`/country/${country.alpha3Code}`}>
      <div className="mb-4 last:mb-0 sm:mb-0 transition duration-300 ease-in-out cursor-pointer transform hover:scale-101 hover:shadow-2xl  w-9/12 sm:w-full flex flex-col items-center rounded-md overflow-hidden shadow-md">
        <img
          src={country.flag}
          className="flex-none h-40 object-cover w-full"
        />
        <div className="bg-elements  flex-grow w-full px-6 pt-6 pb-10 text-primary">
          <h3 className="font-bold text-base mb-4">{country.name}</h3>
          <div className="flex flex-col gap-1">
            <span>
              <Label>Population: </Label> {country.population}
            </span>
            <span>
              <Label>Region: </Label> {country.region}
            </span>
            <span>
              <Label>Capital: </Label> {country.capital}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};
