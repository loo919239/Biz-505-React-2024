"use server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const ORDER = prisma.tbl_orders;
const CUSTOMER = prisma.tbl_customer;

export const SelectAll = async () => {
  const result = await ORDER.findMany();
  return result;
};

export const SelectAll2 = async () => {
  const result = await CUSTOMER.findMany();
  return result;
};
