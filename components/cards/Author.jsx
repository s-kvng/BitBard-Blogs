import React from "react";
import Image from "next/image";

const Author = ({ author }) => {
  return (
    <div className=" text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20">
      <div className=" absolute right-32 left-32 -top-14">
        <Image
          unoptimized
          src={author?.photo.url || "/default_photo_url.jpg"}
          alt={author?.name || "author"}
          className="align-middle rounded-full"
          height={70}
          width={70}
        />
      </div>
      <h3 className="text-white  my-4 text-xl font-bold">{author.name}</h3>
      <p className="text-white text-lg">{author.bio}</p>
    </div>
  );
};

export default Author;
