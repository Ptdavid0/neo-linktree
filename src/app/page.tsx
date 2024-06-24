import Image from "next/image";
import { Background } from "./components/Background";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Background />
      <a href="https://www.google.com" target="_blanc">
        Test
      </a>
    </main>
  );
}
