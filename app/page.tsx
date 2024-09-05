import AboutMe from "../components/AboutMe";
import Gallery from "../components/Gallery";

export default function HomePage() {
  return (
    <main className="min-h-screen flex justify-end items-center px-6 bg-[#121212]">
      <div className="w-full max-w-2xl space-y-8">
        <AboutMe />
        <Gallery />
      </div>
    </main>
  );
}
