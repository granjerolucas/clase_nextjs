import Image from "next/image";

export default function Home() {
  return (
    <div className=" bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-slate-800 from-15%  via-slate-900  via-25% to-slate-900 to-40%">
      <div className="flex min-h-[30rem] items-center  ">
        <div className="max-w-3xl mx-auto w-full ">
          <h3 className="text-left text-4xl">Hi, I am</h3>
          <h3 className="text-right text-6xl my-10 font-bold">
            Jaspinder Singh
          </h3>
          <p className="text-left text-2xl">WEB DEVELOPER UI & UX DESIGNER</p>
        </div>
      </div>
    </div>
  );
}
