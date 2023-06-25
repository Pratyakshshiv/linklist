import Image from "next/image";
import Logo from "../../components/Logo";

export default function Home() {
  return (
    <div className="">
      <h1 className="text-3xl p-4 font-semibold font-mono text-pink-400">
        Link List
      </h1>
      <div dir="rtl">
        <div class="relative h-32 w-32 ...">
          <div class="-mt-14 p-3 mr-20 absolute h-14 w-14 top-0 start-0 ...">
            hello
          </div>
        </div>
      </div>
      {/* <div className="relative">
          <button className="rounded-full bg-white text-black h-10 start-0 top-0">
            Github
          </button>
        </div> */}
      <div className="-mt-20 flex text-7xl text-transparent h-screen font-extrabold bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600  justify-center items-center">
        <div className="mb-80">All your links in one place</div>
      </div>
    </div>
  );
}
