import { SideNavBar } from "./components/sideNavBar";
import { DefaultMainPage } from "./components/defaultmainpage";
import { AddingProject } from "./components/addingproject";
import { useState } from "react";
function App() {
  const [showAddingProject, setShowAddingProject] = useState(false);
  function handleAddingProject() {
    setShowAddingProject(true);
  }
  return (
    <>
      <div className="flex flex-row bg-[#f9f9f9] min-h-screen gap-20">
        <SideNavBar onCreateProjectClick={handleAddingProject} />
        <div className="flex-grow">
          {showAddingProject ? (
            <AddingProject onCreateProjectClick={handleAddingProject} />
          ) : (
            <DefaultMainPage />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
