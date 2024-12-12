import Navbar from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { MainContent } from "./components/MainContent";

function App(): JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send("ping");

  return (
    <div className="flex flex-col items-stretch bg-blue-500/20 rounded-lg overflow-hidden">
      <Navbar />
      <div className="flex flex-row items-stretch min-h-0 flex-1 pb-2 gap-2 px-2">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
