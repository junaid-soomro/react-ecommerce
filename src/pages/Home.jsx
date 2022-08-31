import React from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import { Slider } from "../components/Slider";
import { Categoeies } from "../components/Categoeies";
import { Products } from "../components/Products";

function Home() {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categoeies />
      <Products />
    </div>
  );
}

export default Home;
