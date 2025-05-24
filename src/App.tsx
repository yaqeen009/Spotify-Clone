import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import SideNav from "./components/sideNav";
import Split from "react-split";

function App() {
  return (
    <div className="w-screen h-screen bg-primary-100 font-open_sans flex flex-col">
      <div className="w-full h-[5vh] bg-primary-200"></div>
      <div className="w-full h-[85vh] p-2">
        <Split
          direction="horizontal"
          sizes={[40, 60]}
          minSize={[60, 400]}
          maxSize={[320, Infinity]}
          gutterSize={8}
          className="flex h-full w-full"
          dragInterval={20}
          snapOffset={100}
        >
          <SideNav />
          <div>
            <BrowserRouter>
              <AppRoutes />
            </BrowserRouter>
          </div>
        </Split>
      </div>
      <div className="w-full h-[10vh] bg-primary-200"></div>
    </div>
  );
}

export default App;
