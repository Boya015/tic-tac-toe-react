import { useEffect, useState } from "react";

const useSound = (url, options) => {
  const [sound, setSound] = useState(null);

  useEffect(() => {
    const audio = new Audio(url);
    audio.load();
    audio.volume = options.volume;

    // Only set sound once loaded
    setSound(audio);

    return () => {
      // Clean up on component unmount
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, [url, options.volume]);

  // Play sound function triggered by user interaction
  const playSound = () => {
    if (sound) {
      sound.play().catch((error) => {
        // Handle play error, log or take any action
        console.error("Playback failed:", error);
      });

      setTimeout(() => {
        sound.pause();
        sound.currentTime = 0;
      }, options.timeout);
    }
  };

  return playSound;
};

export default useSound;
