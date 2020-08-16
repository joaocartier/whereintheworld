import React from "react";
import Layout from "../../components/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Info } from "../../components/Info";
import Link from "next/link";
import { Country } from "../../interfaces";
import { GetStaticPaths, GetStaticProps } from "next";
import useSWR from "swr";
import { Border } from "../../components/Border";

type Props = {
  data: Country;
};

const Details: React.FC<Props> = ({ data }) => {
  const initialData = data;
  const { data: country } = useSWR<Country>(
    `https://restcountries.eu/rest/v2/${data?.alpha3Code}`,
    fetcher,
    {
      initialData,
    }
  );
  return (
    <Layout title={`${country?.name} - Details`}>
      <div className="px-4 sm:px-24 bg-background h-screen">
        <div className="pt-10 pb-12 flex">
          <Link href="/">
            <button className="shadow-lg bg-elements focus:outline-none px-6 py-1 text-primary flex justify-between items-center">
              <FontAwesomeIcon className="mr-3" icon={faArrowLeft} />
              <span>Back</span>
            </button>
          </Link>
        </div>
        <div className="md:flex md:items-start ">
          <img
            src={country?.flag}
            className="md:w-5/12 md:h-auto object-contain"
          />
          <div className="xl:pl-32 md:pl-10 md:pl-10 sm:pt-6">
            <div>
              <h1 className="text-primary font-bold text-xl md:text-2xl pt-10 pb-6 md:pt-0">
                {country?.name}
              </h1>
              <div className="md:flex md:mb-8 md:justify-between ">
                <div className="flex flex-col gap-3 mb-12 md:mb-0">
                  <Info label="Native Name: " value={country?.nativeName} />
                  <Info label="Population: " value={country?.population} />
                  <Info label="Region: " value={country?.region} />
                  <Info label="Sub Region: " value={country?.subregion} />
                  <Info label="Capital: " value={country?.capital} />
                </div>
                <div className="flex flex-col gap-3 mb-12 md:mb-0">
                  <Info
                    label="Top Level Domain: "
                    value={country?.topLevelDomain.map((d) => d).join(", ")}
                  />
                  <Info
                    label="Currencies: "
                    value={country?.currencies.map((c) => c.code).join(", ")}
                  />
                  <Info
                    label="Languages: "
                    value={country?.languages.map((l) => l.name).join(", ")}
                  />
                </div>
              </div>
              <div className="pb-12 md:pb-0 inline-flex flex-wrap gap-2">
                <h3 className="text-primary font-regular text-lg md:mb-0 md:mr-4 whitespace-no-wrap">
                  Border Countries:
                </h3>
                {country?.borders.map((b) => (
                  <Border key={b} border={b} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Details;

function fetcher(url: string): any {
  return fetch(url).then((r) => r.json());
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data: Country[] = await fetcher("https://restcountries.eu/rest/v2/all");

  const paths = data.map((country) => ({
    params: { id: country.alpha3Code },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const data = await fetcher(
      `https://restcountries.eu/rest/v2/alpha/${params?.id}`
    );

    return { props: { data } };
  } catch (err) {
    return { props: { errors: err.message } };
  }
};
