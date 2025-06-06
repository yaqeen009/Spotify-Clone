import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import SideNav from "./components/sideNav";
import Split from "react-split";
import TopNav from "./components/topNav";
import BottomControls from "./components/bottomControls";
import ExpandedTrack from "./components/expandedTrack";
import { useSelector } from "react-redux";
import type { RootState } from "@reduxjs/toolkit/query";

function App() {
  //states
  const isExpanded = useSelector(
    (state: RootState) => state.expander.isExpanded
  );

  return (
    <div className="w-screen h-screen bg-primary-100 font-open_sans flex flex-col">
      <div className="w-full h-[6vh] bg-primary-100">
        <TopNav />
      </div>
      <div className="w-full h-[84vh] p-2">
        <Split
          direction="horizontal"
          sizes={isExpanded ? [35, 40, 25]:[35, 65, 0]}
          minSize={[60, 500, 0]}
          maxSize={[400, Infinity, 250]}
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
          <ExpandedTrack />
        </Split>
      </div>
      <div className="w-full h-[10vh] bg-primary-100">
        <BottomControls />
      </div>
    </div>
  );
}

export default App;
