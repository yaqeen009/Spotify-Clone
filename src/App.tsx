import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import SideNav from "./components/sideNav";
import Split from "react-split";
import TopNav from "./components/topNav";
import BottomControls from './components/bottomControls'


function App() {
  return (
    <div className="w-screen h-screen bg-primary-100 font-open_sans flex flex-col">
      <div className="w-full h-[6vh] bg-primary-100">
        <TopNav/>
      </div>
      <div className="w-full h-[84vh] p-2">
        <Split
          direction="horizontal"
          sizes={[40, 60]}
          minSize={[60, 1000]}
          maxSize={[400, Infinity]}
          gutterSize={8}
          className="flex h-full w-full"
          dragInterval={20}
          snapOffset={50}
        >
          <SideNav />
          <div>
            <BrowserRouter>
              <AppRoutes />
            </BrowserRouter>
          </div>
        </Split>
      </div>
      <div className="w-full h-[10vh] bg-primary-100">
        <BottomControls/>
      </div>
    </div>
  );
}

export default App;
