/*
component for displaying current song and music player controls 
*/

import CurrentSong from "../components/currentSong";
import SongPlayer from "../components/songPlayer"

function BottomControls() {
  return (
    <div className="flex flex-row justify-between p-2">
        <CurrentSong/>
        <SongPlayer/>
    </div>
  )
}

export default BottomControls