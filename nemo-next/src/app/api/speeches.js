"use server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const SPEECH = prisma.tbl_speech;

export const SelectAll = async () => {
  const result = await SPEECH.findMany();
  return result;
};
