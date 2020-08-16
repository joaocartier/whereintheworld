import Layout from "../components/Layout";
import { SearchBar } from "../components/SearchBar";
import { Spinner } from "../components/Spinner";
import { CountryCard } from "../components/CountryCard";
import { Country } from "../interfaces";
import useSWR from "swr";
import { useState } from "react";

type Props = {
  countries: Country[];
};

const IndexPage: React.FC<Props> = (props: any) => {
  const initialData = props.data;
  const { data } = useSWR<Country[]>(
    "https://restcountries.eu/rest/v2/all",
    fetcher,
    {
      initialData,
    }
  );

  const [searchText, setSearchText] = useState("");
  const [region, setRegion] = useState("");

  function filterData(): Country[] | undefined {
    if ((region === "" || region === "All") && searchText === "") {
      return data;
    }
    if (region !== "" && searchText === "") {
      return data?.filter((c) => c.region === region);
    }
    if ((region === "" || region === "All") && searchText !== "") {
      return data?.filter(
        (c) => c.name.toUpperCase().indexOf(searchText.toUpperCase()) > -1
      );
    }
    return data?.filter(
      (c) =>
        c.region === region &&
        c.name.toUpperCase().indexOf(searchText.toUpperCase()) > -1
    );
  }

  return (
    <Layout title="Where in the world?">
      <div className="px-4 sm:px-24 bg-background">
        <div className="sm:grid sm:grid-cols-12 sm:gap-4 sm:content-center items-center mb-8 sm:mb-0">
          <SearchBar setSearchText={setSearchText} />
          <Spinner region={region} setRegion={setRegion} />
        </div>
        <div className="flex flex-col sm:items-start items-center justify-center gap-16 sm:grid sm:grid-cols-2 content-start lg:grid-cols-4 sm:gap-12">
          {filterData()?.map((country, index) => {
            return <CountryCard key={String(index)} country={country} />;
          })}
        </div>
      </div>
    </Layout>
  );
};

function fetcher(url: string): any {
  return fetch(url).then((r) => r.json());
}

export async function getInitialProps() {
  const data = await fetcher("https://restcountries.eu/rest/v2/all");
  return { props: { data } };
}

export default IndexPage;
