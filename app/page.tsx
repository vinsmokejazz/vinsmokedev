import Image from "next/image";
import { Inter } from "next/font/google";
import Container from "@/componets/container";

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800', '900'] });
export default function Home() {
  return (
    <div className="  min-h-screen flex items-start justify-start">
      <Container className="min-h-[200vh] p-4 md:pt-7 ">
        <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-primary">Hello there!</h1>
        <p className="text-secondary text-sm md:text-base max-w-lg pt-4 ">I'm a passionate software engineer , building in web2 and web3 world!</p>
      </Container>
    </div>
  );
}
