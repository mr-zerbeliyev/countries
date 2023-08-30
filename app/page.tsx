"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "@/components/Card";
import Dropdown from "@/components/Dropdown";
import SearchInput from "@/components/SearchInput";

const Home = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await axios.get("https://restcountries.com/v3.1/all");
        setCountries(res.data);
      } catch (error) {
        console.error("Ülkeler alınırken hata oluştu:", error);
      }
    };
    fetchCountries();
  }, []);

  return (
    <main className="px-[100px]">
      <section className="flex justify-between mt-10">
        <SearchInput />
        <Dropdown />
      </section>
      <section>
        <h1 className="text-3xl font-bold mt-10 mb-5">Tüm Ülkeler</h1>
        <div className="grid grid-cols-3 gap-10 place-items-center">
          {countries.map((country, index) => (
            <Card country={country} key={index} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
