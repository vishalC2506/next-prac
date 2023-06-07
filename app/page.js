import Body from "./Components/Body";
import Header from "./Components/Header";
import Search from "./Components/Search";
//import ImageFilter from "./Components/ImageFilter";
import SideNavbar from "./Components/SideNavbar";

export default function Home() {

  return (
    <div
      className={`w-full h-screen
                 bg-Nobel-black flex flex-row items-start p-3 gap-3
                 relative rounded-3xl transistion ease-in-out delay-300`}
    >
      <SideNavbar />
      <div className="flex flex-col w-full h-screen absolute left-0 sm:relative">
        <Header />
        <Body />

        <Search />
      </div>
    </div>
  );
}
