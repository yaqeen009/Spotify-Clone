/*
music player component for playing current song, queuing next song, storing previous song,
shuffling songs, etc...
*/
import next from "../assets/icons/Next.svg";
import pause from "../assets/icons/Pause.svg";
import play from "../assets/icons/Play.svg";
import repeat from "../assets/icons/Repeat.svg";
import shuffle from "../assets/icons/Shuffle.svg";

export default function SongPlayer() {
  //states & refrences

  //utils
  //functions & event handlers
  return (
    <div className="flex justify-between">
      <div className="flex flex-col items-center space-y-1">
        <div className="flex space-x-3 items-center">
          <img src={shuffle} className="w-5 h-5 opacity-50" alt="Shuffle" />
          <img
            src={next}
            className="rotate-180 w-4 h-4 opacity-50"
            alt="Previous"
          />
          <img src={pause} className="w-8 h-8 opacity-50" alt="Pause" />
          <img src={next} className="w-4 h-4 opacity-50" alt="Next" />
          <img src={repeat} className="w-5 h-5 opacity-50" alt="Repeat" />
        </div>
        <div className="flex items-center text-secondary-100 space-x-2">
          <p>-:--</p>
          <div className="w-[35vw] h-1 bg-secondary-100 rounded-full opacity-50"></div>
          <p>-:--</p>
        </div>
      </div>
      <div className="flex">
        
      </div>
    </div>
  );
}
