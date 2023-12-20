import React from "react";
import { getPostDetails } from "@/services";

const getParams = async (slug) => {
  const data = await getPostDetails(slug);
  return data;
};

export default getParams;
