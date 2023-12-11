import React from "react";

const Header = () => {
  return (
    <header className="container mx-auto px-10 mb-8">
      <div className="border-b border-blue-400 inline-block w-full py-8">
        <div className="md:float-left block">logo</div>
        <div className="hidden md:float-right md:block">nav links</div>
      </div>
    </header>
  );
};

export default Header;
