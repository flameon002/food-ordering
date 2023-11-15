import Header from "./components/layout/Header";
import Hero from "./components/layout/Hero";
import HomeMenu from "./components/layout/HomeMenu";
import SecctionHeaders from "./components/layout/SecctionHeaders";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HomeMenu />

      <section className="text-center my-16">
        <SecctionHeaders subHeader={"Our story"} mainHeader={"About us"} />
        <p className="max-w-2xl mx-auto mt-8 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nis ut labore
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nis
        </p>
      </section>
      <section className="text-center my-8">
        <SecctionHeaders
          subHeader={"Don't hesitate"}
          mainHeader={"Contact us"}
        />
        <a href="tel:+1234567890" className="text-4xl mt-8 underline text-gray-600">
          <h1>+12 3456 7890</h1>
        </a>
      </section>
      <footer className="border-t p-8 text-center text-gray-500 mt-16">
          &copy; 2023 All right reserved
      </footer>
    </>
  );
}
