/*
component for displaying current song and music player controls 
*/

import CurrentSong from "./currentSong";

function BottomControls() {
  return (
    <div className="flex flex-row justify-between p-2">
        <CurrentSong/>
    </div>
  )
}

export default BottomControls