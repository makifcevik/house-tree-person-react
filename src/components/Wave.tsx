import { useEffect, useState } from "react";
import useTheme from "../contexts/themeContext";
import {
  waveBackDarkImg,
  waveFrontDarkImg,
  waveBackLightImg,
  waveFrontLightImg,
} from "../utils/index.ts";

function Wave() {
  const { themeMode } = useTheme();

  const [waveBackImg, setWaveBackImg] = useState(waveBackLightImg);
  const [waveFrontImg, setWaveFrontImg] = useState(waveFrontLightImg);

  // Update the wave images based on themeMode
  useEffect(() => {
    if (themeMode === "light") {
      setWaveBackImg(waveBackLightImg);
      setWaveFrontImg(waveFrontLightImg);
    } else {
      setWaveBackImg(waveBackDarkImg);
      setWaveFrontImg(waveFrontDarkImg);
    }
  }, [themeMode]);

  return (
    <div>
      <img src={waveFrontImg} className='w-full absolute bottom-0 z-10 max-lg:hidden' />
      <img src={waveBackImg} className='w-full absolute bottom-0 z-0 max-lg:hidden' />
    </div>
  );
}

export default Wave;
