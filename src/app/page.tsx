"use client";

import Image from "next/image";
import {
  CustomFilter,
  Hero,
  SearchBar,
  CarCard,
  ShowMore,
} from "../../components";
import { fetchCars } from "../../utils";
import { CarProps } from "../../types";
import { fuels, yearsOfProduction } from "../../constants";
import { useEffect, useState } from "react";

export default function Home() {
  const [allCars, setAllcars] = useState([]);
  const [loading, setLoading] = useState(false);

  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  const [year, setYear] = useState(2020);
  const [fuel, setFuel] = useState("");

  const [limit, setLimit] = useState(10);

  const getCars = async () => {
    setLoading(true);
    try {
      const result = await fetchCars({
        manufacurer: manufacturer || "",
        year: year || 2022,
        fuel: fuel || "",
        limit: limit || 10,
        model: model || "",
      });

      setAllcars(result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log(year, model, fuel, manufacturer);
    console.log(allCars);
    getCars();
  }, [model, fuel, year, limit, manufacturer]);

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className=" overflow-hidden">
      <Hero />
      <div className=" mt-12 padding-x padding-y max-width" id="carros">
        <div className="home__text-container">
          <h1 className=" text-4xl font-extrabold">Catálogo de Carros</h1>
          <p>Descobre carros que você poderia gostar</p>
        </div>
        <div className="home__filters">
          <SearchBar setManufacturer={setManufacturer} setModel={setModel} />
          <div className="home__filter-container">
            <CustomFilter
              title="Ano"
              options={yearsOfProduction}
              setFilter={setYear}
            />
            <CustomFilter
              title="Combustível"
              options={fuels}
              setFilter={setFuel}
            />
          </div>
        </div>

        {allCars.length > 0 ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars.map((car: CarProps) => (
                <CarCard car={car} />
              ))}
            </div>
            {loading && (
              <div className="mt-16 w-full flex-center">
                <Image
                  src="./tube-spinner.svg"
                  alt="loader"
                  height={50}
                  width={50}
                  className=" object-contain"
                />
              </div>
            )}
            <div className="">
              <ShowMore
                pageNumber={limit / 10}
                isNext={limit > allCars.length}
                setLimit={setLimit}
              />
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className=" text-black text-xl">Nenhum carro encontrado !</h2>
            <p>{allCars}</p>
          </div>
        )}
      </div>
    </main>
  );
}
