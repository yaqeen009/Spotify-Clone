/*
All types go in here
*/

//button prop types
export interface ButtonProps {
  btnName: string;
  btnClick: () => void;
  btnType: "button" | "submit" | "reset";
  isScale: boolean;
  colors: string;
}

//props for player card
export interface PlaylistCardProps {
  name: string;
  img: string;
}

//props for library playlist
export interface PlaylistNavProps {
  name: string;
  image: string;
  isLib: boolean;
}

//props for currently playing song
export interface CurrentSongProps {
  title: string;
  image: string;
  addToPlaylist: () => void;
}
