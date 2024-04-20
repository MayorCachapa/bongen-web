"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="relative w-full h-screen flex justify-center items-center">
        <div className="overlay absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-12 h-1/3">
          <div className="mb-4 border-8 border-solid border-emerald-600">
            <Image
              src="/JEO.jpg"
              alt="logo"
              width={400}
              height={400}
              className="p-2"
            />
          </div>
          <div className="flex flex-col gap-12">
            <motion.div
              className="flex md:hidden justify-center gap-12 items-center bg-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ ease: "easeOut", duration: 7 }}
            >
              <Link href="https://twitter.com/JeoBongden">
                <img
                  src="./x copy.png"
                  alt="test"
                  className="h-[80px] w-[80px] cursor-pointer"
                />
              </Link>
              <Link href="https://t.me/JeoBongen">
                <img
                  src="./Tg.png"
                  alt="Blood ritual"
                  className="h-[80px] w-[80px] cursor-pointer"
                />
              </Link>
              <Link href="https://dexscreener.com/solana/">
                <img
                  src="./Dex.png"
                  alt="test"
                  className="h-[80px] w-[80px] cursor-pointer bg-transparent"
                />
              </Link>
            </motion.div>
            <div className="h-full">
              <h1 className="text-center text-white text-4xl md:text-6xl font-semibold tracking-wide">
                <span>J</span>
                <span>E</span>
                <span>O</span>
                <span className="text-emerald-600">|</span>
                <span>$</span>
                <span>B</span>
                <span>O</span>
                <span>N</span>
                <span>G</span>
                <span>E</span>
                <span>N</span>
              </h1>
              <motion.p
                className="text-white text-3xl text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ ease: "easeOut", duration: 7 }}
              >
                &quot;Have a puff, Jack&quot;
              </motion.p>
            </div>
            <motion.div
              className="hidden md:flex justify-center gap-12 items-center bg-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ ease: "easeOut", duration: 7 }}
            >
              <Link href="https://twitter.com/JeoBongden">
                <img
                  src="./x copy.png"
                  alt="test"
                  className="h-[80px] w-[80px] cursor-pointer"
                />
              </Link>
              <Link href="https://t.me/JeoBongen">
                <img
                  src="./Tg.png"
                  alt="Blood ritual"
                  className="h-[80px] w-[80px] cursor-pointer"
                />
              </Link>
              <Link href="https://dexscreener.com/solana/">
                <img
                  src="./Dex.png"
                  alt="test"
                  className="h-[80px] w-[80px] cursor-pointer bg-transparent"
                />
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="absolute inset-0 overflow-hidden">
          <video
            src="./s1.mp4"
            autoPlay
            muted
            loop
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </section>
    </main>
  );
}
