"use client";

import Country from "@/components/Country";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Detail = ({ params }: { params: { name: string } }) => {
  const router = useRouter();
  const [country, setCountry] = useState<any>(null);

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/name/${params.name}?fullText=true`)
      .then((res) => {
        console.log(res.data[0]);
        setCountry(res.data[0]);
      });
  }, [params.name]);

  if (!country)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );

  return (
    <div className="flex flex-col px-[100px]">
      <button
        onClick={() => router.back()}
        className="flex w-[100px] rounded justify-start mt-[50px] shadow-header py-4 px-[35px]"
      >
        Back
      </button>
      <div className="flex items-center gap-10 mt-10 ">
        <div>
          <Image
            className="h-full"
            width={600}
            height={400}
            src={country.flags.png}
            alt={country.name.common}
          />
        </div>
        <div className="flex flex-col  leading-7 gap-10">
          <div className="flex flex-col gap-10">
            <div>
              <h3>{country.name.common}</h3>
            </div>
            <div className="flex gap-10">
              <div>
                <p>Population: {country.population}</p>
                <p>Region: {country.region}</p>
                <p>Sub Region: {country.subregion}</p>
                <p>Capital: {country.capital}</p>
              </div>
              <div>
                <p>Top Level Domain: {country.tld[0]}</p>
                <p>Currencies: {Object.keys(country.currencies).join(", ")}</p>
                <p>Languages: {Object.keys(country.languages).join(", ")}</p>
              </div>
            </div>
          </div>
          <div className="h-[67px]">
            <div className="flex">
              <div>
                <p className="w-[90px]">Border Countries:</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {country.borders.map((border: string, index: number) => (
                  <Country name={border} key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
