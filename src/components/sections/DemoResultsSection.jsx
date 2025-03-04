import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const EXT_COLOR = "#B71C1C";
const DEP_COLOR = "#303F9F";
const ANX_COLOR = "#F57C00";
const TRAIL_COLOR = "#ddd";
const WIDTH = 80;
const HEIGHT = 80;

const DemoResultsSection = () => {
  return (
    <section className='flex flex-grow p-common justify-end gap-8'>
      <div className='flex flex-col items-center gap-3'>
        <label className='text-gray'>Externalization</label>
        <div style={{ width: WIDTH, height: HEIGHT }}>
          <CircularProgressbar
            value={87}
            strokeWidth={14}
            styles={buildStyles({
              pathColor: EXT_COLOR,
              trailColor: TRAIL_COLOR,
              strokeLinecap: "butt",
            })}
          />
        </div>
      </div>
      <div className='flex flex-col items-center gap-3'>
        <label className='text-gray'>Depression</label>
        <div style={{ width: WIDTH, height: HEIGHT }}>
          <CircularProgressbar
            value={99}
            strokeWidth={14}
            styles={buildStyles({
              pathColor: DEP_COLOR,
              trailColor: TRAIL_COLOR,
              strokeLinecap: "butt",
            })}
          />
        </div>
      </div>
      <div className='flex flex-col items-center gap-3'>
        <label className='text-gray'>Anxiety</label>
        <div style={{ width: WIDTH, height: HEIGHT }}>
          <CircularProgressbar
            value={35}
            strokeWidth={14}
            styles={buildStyles({
              pathColor: ANX_COLOR,
              trailColor: TRAIL_COLOR,
              strokeLinecap: "butt",
            })}
          />
        </div>
      </div>
    </section>
  );
};

export default DemoResultsSection;
