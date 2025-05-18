import React from "react";
import { useLoaderData } from "react-router";
import CoffeeCard from "./CoffeeCard";

const Home = () => {
  const coffees = useLoaderData();
  console.log(coffees);
  return (
    <div>
      <h2>Our Popular Coffee </h2>

      <div className="grid grid-cols-2 gap-4 mx-10">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
