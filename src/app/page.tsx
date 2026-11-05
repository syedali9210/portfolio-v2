import type { Metadata } from "next";
import { Home as Front } from "@/components/Home";
import { RevealObserver } from "@/components/motion";
import { SmoothScroll } from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: { absolute: "Syed Ali · Design engineer" },
  description: "Syed Ali designs products and ships them in code: Trace, Animation Engine, KIPRUN, Kodex, Uniqkey and Anime Sports League.",
};

export default function Home() {
  return (
    <>
      <RevealObserver />
      <SmoothScroll />
      <Front />
    </>
  );
}
