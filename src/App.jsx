import Container from "./components/Container";
import CuteCafeGirl from "./assets/bg-cafe.jpg";

export default function App() {
  return (
    <div className="bg-[#111315] font-dm-sans flex justify-center items-center relative py-16">
      <img
        src={CuteCafeGirl}
        alt="bg-cafe"
        className="absolute top-0 -z-1 h-64 w-full"
      />
      <Container />
    </div>
  );
}
