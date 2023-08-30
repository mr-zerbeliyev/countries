import Card from "@/components/Card";
import Dropdown from "@/components/Dropdown";
import SearchInput from "@/components/SearchInput";
import React from "react";
const Home = () => {
  return (
    <main className="px-[100px]">
      <section className="flex justify-between mt-10">
        <SearchInput />
        <Dropdown/>
      </section>
      <section>
        <h1 className="text-3xl font-bold mt-10 mb-5">All Countries</h1>
        <Card/>
      </section>
    </main>
  );
};

export default Home;
