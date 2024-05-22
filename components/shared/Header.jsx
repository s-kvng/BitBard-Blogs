"use client";

import React, { useState, useEffect } from "react";
// import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";

import { getCategories } from "@/services";

const Header = () => {
  const [categories, setCategories] = useState([]);

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
  ];

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} shouldHideOnScroll>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          {/* <AcmeLogo /> */}
          <p className="font-bold text-inherit">PYCODE-CAMP</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.label}-${index}`}>
            <Link
              color={"foreground"}
              className="w-full"
              href={item.href}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
        {categories.map((category) => (
          <NavbarItem key={category.slug}>
            <Link
              color={"foreground"}
              className="w--full"
              size="lg"
              href={`category/${category.slug}`}
            >
              {category.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.label}-${index}`}>
            <Link
              color={"foreground"}
              className="w-full"
              href={item.href}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
        {categories.map((category) => (
          <NavbarMenuItem key={category.slug}>
            <Link
              color={"foreground"}
              className="w--full"
              size="lg"
              href={`category/${category.slug}`}
            >
              {category.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>

    // <header className="container mx-auto px-10 mb-8">

    //   <div className="border-b border-blue-400 inline-block w-full py-5">
    //     <div className="md:float-left block text-4xl font-bold">
    //       Pycode-camp
    //     </div>
    //     <div className="hidden md:float-left md:contents">
    //       {categories.map((category) => (
    //         <Link key={category.slug} href={`category/${category.slug}`}>
    //           <span className="font-semibold align-middle mt-2 md:float-right cursor-pointer ml-4">
    //             {category.name}
    //           </span>
    //         </Link>
    //       ))}
    //     </div>
    //   </div>
    // </header>
  );
};

export default Header;
