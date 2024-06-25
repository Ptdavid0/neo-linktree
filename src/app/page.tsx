import Image from "next/image";
import { Background } from "./components/Background";
import MainContainer from "./components/MainContainer";

export default function Home() {
  return (
    <Background>
      <MainContainer />
    </Background>
  );
}
