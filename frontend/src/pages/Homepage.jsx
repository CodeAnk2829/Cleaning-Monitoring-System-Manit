import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";

function Homepage() {
  return (
    <main className=" text-white h-[calc(100vh-5rem)] m-10 bg-[url('../src/assets/bg.jpg')]  bg-cover px-20 py-10 ">
      <PageNav />

      <section className=" h-4/5 flex items-center justify-center">
        <h1 className="text">Cleaning monitoring system!</h1>
      </section>
    </main>
  );
}

export default Homepage;
