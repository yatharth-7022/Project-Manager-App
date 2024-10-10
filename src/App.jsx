import { SideNavBar } from "./components/sideNavBar";
import { DefaultMainPage } from "./components/defaultmainpage";
function App() {
  return (
    <>
      <div className="flex flex-row bg-[#f9f9f9] min-h-screen">
        <SideNavBar />
        <DefaultMainPage />
      </div>
    </>
  );
}

export default App;
