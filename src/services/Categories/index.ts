/* eslint-disable prettier/prettier */
"use server";

import axiosInstance from "@/src/lib/AxiosInstance";

export const getCategories = async () => {
  try {
    const { data } = await axiosInstance.get("/item-categories");

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
