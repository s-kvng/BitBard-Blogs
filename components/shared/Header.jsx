"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

import { getCategories } from "@/services";

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);
  return (
    <header className="container mx-auto px-10 mb-8">
      <div className="border-b border-blue-400 inline-block w-full py-5">
        <div className="md:float-left block text-4xl font-bold">logo</div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category) => (
            <Link key={category.slug} href={`category/${category.slug}`}>
              <span className="font-semibold align-middle mt-2 md:float-right cursor-pointer ml-4">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
