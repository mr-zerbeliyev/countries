import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface Props {
  country: any;
}

const Card: React.FC<Props> = ({ country }) => {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/${country.name.common}`); // "/china" yerine dinamik olarak "/country/${country}" kullanılmalı
  };

  return (
    <div onClick={handleCardClick} className="shadow-header rounded">
      <div>
        <Image
          className="rounded w-[320px] h-[180px]"
          width={320}
          height={180}
          src={country.flags.png}
          alt={country.flags.alt}
        />
      </div>
      <div className="p-2.5 leading-7 h-[150px]">
        <h3 className="font-bold my-3">{country.name.common}</h3>
        <p>Population: {country.population}</p>
        <p>Region: {country.region}</p>
        <p>Capital: {country.capital}</p>
      </div>
    </div>
  );
};

export default Card;
