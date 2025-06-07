/* eslint-disable react-hooks/exhaustive-deps */
/*
 custom hook for handling howler instances with useState, useRef, Howler and useEffect
 to be primarily used in the songPlayer.tsx
*/

import { useEffect, useRef, useState } from "react";
import { Howl } from "howler";

export const useAudioPlayer = (src: string) => {
  // states
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [duration, setDuration] = useState(0);
  const [seek, setSeek] = useState(0);

  // howler instance with reference
  const soundRef = useRef<Howl | null>(null);

  let reference = soundRef.current;

  // useEffect to handle creating and cleaning howler instance
  useEffect(() => {
    reference = new Howl({
      src: src,
      html5: true,
      volume,
      onload: () => setDuration(reference?.duration() || 0),
      onend: () => setIsPlaying(false),
    });

    const interval = setInterval(() => {
      if (reference && isPlaying) {
        setSeek(reference.seek() as number);
      }
    });
    return () => {
      clearInterval(interval);
      reference?.unload();
    };
  }, [src, isPlaying, reference]);
  // useEffect to handle volume
  useEffect(() => {
    if (reference) {
      reference.volume(volume);
    }
  }, [volume]);

  // play-pause-toggle, stop and seek functionalities
  const togglePlay = () => {
    if (isPlaying) {
      reference?.play();
      setIsPlaying(true);
    } else {
      reference?.pause();
      setIsPlaying(false);
    }
  };

  const stop = () => {
    reference?.stop();
    setIsPlaying(false);
    setSeek(0);
  };

  const seekTo = (time: number) => {
    reference?.seek(time);
    setSeek(time);
  };

  return {
    isPlaying,
    seekTo,
    stop,
    togglePlay,
    volume,
    seek,
    duration,
    setVolume,
  };
};
