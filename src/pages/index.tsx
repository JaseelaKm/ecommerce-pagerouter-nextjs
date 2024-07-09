import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Banner from "@/components/banner/Banner";
import HomeProducts from "@/components/homeProducts/HomeProducts";
import CategoryFilter from "@/components/categoryFilter/CategoryFilter";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Commercejs-PageRouter</title>
        <meta name="description" content="Generated by anisha" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Banner/>
        <CategoryFilter/>
        <HomeProducts/>

      </main>
    </>
  );
}
