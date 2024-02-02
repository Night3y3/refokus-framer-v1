import NavBar from "./components/NavBar"
import Products from "./components/Products";
import Stripes from "./components/Stripes";
import Work from "./components/Work";

function App() {

  return (
    <div className=" min-w-full min-h-screen bg-zinc-900 font-[satoshi_variable] text-white">
      <NavBar />
      <Work />
      <Stripes />
      <Products />
    </div>
  )
}

export default App;
