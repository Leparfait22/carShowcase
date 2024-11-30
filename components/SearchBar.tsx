"use client";
import React, { useState } from "react";
import SearchManufacturer from "./SearchManufacturer";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => {
  return (
    <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
      <Image
        src="/magnifying-glass.svg"
        alt="magnifing glass"
        width={25}
        height={25}
      />
    </button>
  );
};

interface searchBarProps{
    setManufacturer : (manufacturer:string) => void;
    setModel : (model:string) => void;
}

const SearchBar = ({setManufacturer, setModel } : searchBarProps) => {
  const [searchManufactuer, setSearchManufacturer] = useState("");

  const [searchModel, setSearchModel] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchManufactuer === "" && searchModel === "") {
      return alert("Please fill in the search bar");
    }

    setModel(searchModel)
    setManufacturer(searchManufactuer)
    // updateSearchParams(
    //   searchModel.toLowerCase(), 
    //    searchManufactuer.toLowerCase());
  };


  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          selected={searchManufactuer}
          setSelected={setSearchManufacturer}
        />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          alt="model icon"
          className="absolute w-[20px] h-[20px] ml-4"
        />
        <input
          type="text"
          name="model"
          value={searchModel}
          onChange={(e) => setSearchModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input "
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
