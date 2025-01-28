import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[100px_200px_200px_100px] grid-cols-3 gap-2 text-white">
    <div className="bg-red-400 col-span-3 text-[32px] font-bold text-center content-center" >Header</div>
    <div className="bg-green-400 md:col-span-1 col-span-3 md:row-span-2 p-4 text-[32px] font-bold text-center content-center">SideBar</div>
    <div className="bg-blue-400  col-span-3 md:col-span-2 text-[32px] font-bold text-center content-center">Content-1 </div>

    <div className="bg-pink-400 text-[32px]  md:col-auto col-span-3 font-bold text-center content-center">Content-2 </div>
    
    <div className="bg-purple-400 text-[32px] md:col-auto col-span-3 font-bold text-center content-center">Content-3</div>
    <div className="bg-yellow-400 col-span-3 text-[32px] font-bold text-center content-center">Footer</div>


  </div>
    
  );
}