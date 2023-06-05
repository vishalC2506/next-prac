import Body from "./Components/Body";
import Header from "./Components/Header";
import ImageFilter from "./Components/ImageFilter";
import Search from "./Components/Search";
import SideNavbar from "./Components/SideNavbar";

export default function Home() {
  return (
    <div
      className={`w-[1440px] h-[1024px] border-2 border-red-500
                 bg-Nobel-black flex flex-row items-start p-3 gap-3
                 relative rounded-3xl`}
    >
      <SideNavbar />
      <div className="flex flex-col">
        <Header />
        <Body />
        <ImageFilter />
        <Search/>
      </div>
    </div>
  );
}
