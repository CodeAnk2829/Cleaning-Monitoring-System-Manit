import PageNav from "../components/PageNav";

function PageNotFound() {
  return (
    <div className=" text-white h-[calc(100vh-5rem)] m-10 bg-[url('../src/assets/bg.jpg')]  bg-cover px-20 py-10 ">
      <PageNav />
      <div className="flex items-center justify-center">PageNotFound ;)</div>
    </div>
  );
}

export default PageNotFound;
