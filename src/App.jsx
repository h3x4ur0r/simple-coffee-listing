import Container from "./components/Container";

export default function App() {
  return (
    <div className="bg-[#111315] font-dm-sans flex justify-center items-center relative py-16">
      <img
        src="src/assets/bg-cafe.jpg"
        alt="bg-cafe"
        className="absolute top-0 -z-1 h-64 w-full"
      />
      <Container />
    </div>
  );
}
