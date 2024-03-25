"use server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const PRODUCT = prisma.tbl_product;

export const findByPName = async (key) => {
  console.log("상품", key);
  const result = await PRODUCT.findMany({
    where: {
      OR: [
        { p_name: { contains: key } },
        { p_code: { contains: key } },
      ],
    },
  });
  console.log("상품", result);
  return result;
};
