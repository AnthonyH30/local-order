import { Navbar } from "@/components";
import { HomeAside } from "@/components/HomeAside/HomeAside";

export default function Home() {
  return (
    <main className="flex">
      <Navbar />
      <HomeAside />
    </main>
  );
}
