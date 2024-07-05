import * as anchor from "@coral-xyz/anchor";
import { getProvider } from "./provider";
import { PublicKey } from "@solana/web3.js";
import { IDL, Tritium } from "../idl/idl";

export const getProgram = (wallet: anchor.Wallet) => {
  const provider = getProvider(wallet);

  const idl = IDL as anchor.Idl;
  const program = new anchor.Program(
    idl,
    new PublicKey("82oj9UHXLpwMw5TnZujMWnUm2epxVBotimvjxwBuWf1e"),
    provider
  ) as unknown as anchor.Program<Tritium>;

  return program;
};