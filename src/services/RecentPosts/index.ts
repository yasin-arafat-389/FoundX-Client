/* eslint-disable padding-line-between-statements */
/* eslint-disable prettier/prettier */
import envConfig from "@/src/config/envConfig";

export const getRecentPosts = async () => {
  const res = await fetch(
    `${envConfig.baseApi}/items?sortBy=-createdAt&limit=9`
  );

  return res.json();
};
