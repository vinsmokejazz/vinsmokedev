import Image from "next/image";
import { Inter } from "next/font/google";
import Container from "@/componets/container";
import Projects from "@/componets/projects";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
export default function Home() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-[200vh] p-4 md:pt-7">
        <h1 className="text-primary text-2xl font-bold tracking-tight md:text-4xl">
          Venu Prasad
        </h1>
        <p className="text-secondary max-w-lg pt-4 text-sm md:text-base">
          I'm a passionate software engineer , building in web2 and web3 world!
        </p>

        <Projects/>
      </Container>
    </div>
  );
}
