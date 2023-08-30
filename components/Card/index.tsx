import Image from "next/image";
import React from "react";

const Card = () => {
  return (
    <div className="w-80 h-96 shadow-header rounded">
      <div>
        <Image className="rounded"
          width={320}
          height={20}
          src="https://flagcdn.com/cn.svg"
          alt="image"
        />
      </div>
      <div className="p-2.5 leading-7">
        <h3 className="font-bold my-3">China</h3>
        <p>Population: 1402112000</p>
        <p>Region: Asia</p>
        <p>Capital: Beijing</p>
      </div>
    </div>
  );
};

export default Card;
