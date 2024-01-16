import Categorycarousel from "./components/Carousel";
import VerifiedIcon from "@mui/icons-material/Verified";
function App() {
  return (
    <>
      <nav className="w-full">
        <ul className="flex w-full flex-wrap items-center justify-between px-3 py-7">
          <li>logo</li>
          <div className="flex w-[40%] items-center justify-evenly text-blue-400 font-serif font-500">
            <li>Find Doctors</li>
            <li>Sign Up</li>
            <li>Login</li>
            <li>About Us</li>
          </div>
        </ul>
      </nav>
      <main className="flex justify-between bg-blue-400 h-[360px]">
        <section className=" h-full py-6 text-white px-[70px] flex flex-col justify-around">
          <p className="text-5xl font-800 font-serif">Heading</p>
          <p className="text-xl mb-8 font-serif font-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam hic
            possimus accusantium obcaecati assumenda repellendus aut, accusamus
            reprehenderit
          </p>
          <button
            type="button"
            className="focus:outline-none font-serif font-500 text-white bg-green-600 hover:bg-green-800 text-lg rounded-full px-5 py-2.5 w-[150px]"
          >
            Get Started!
          </button>
          <p className="font-serif font-500">
            <VerifiedIcon /> Get connected to verified doctors nearest to you
          </p>
        </section>
        <section className="hidden sm:block min-w-[360px] mx-9">
          <img src="https://png.pngtree.com/png-clipart/20230918/ourmid/pngtree-photo-men-doctor-physician-chest-smiling-png-image_10132895.png" />
        </section>
      </main>
      <main className="flex flex-col mt-10 font-serif text-center">
        <p className="text-4xl mt-6 mb-4 pl-[36px] font-800 ">Services</p>
        <p className="text-2xl my-2 mb-8 pl-[36px] font-400 text-stone-500">We offer</p>
        <Categorycarousel />
        <br></br>
      </main>

      <main>
        <p className="text-4xl my-5 mb-14 pl-[36px] font-serif font-600 text-center">
          Heading
        </p>
      </main>
    </>
  );
}

export default App
