import { waveBackImg, waveFrontImg } from "../utils";

function Wave() {
  return (
    <div>
      <img src={waveFrontImg} className='w-full' />
      <img src={waveBackImg} className='w-full' />
    </div>
  );
}

export default Wave;
