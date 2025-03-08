import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const EXT_COLOR = "#B71C1C";
const DEP_COLOR = "#303F9F";
const ANX_COLOR = "#F57C00";
const TRAIL_COLOR = "#ddd";
const TEXT_COLOR = "#94A0B8";
const TEXT_SIZE = 22;
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
            text={`${87}%`} // text of the percent
            strokeWidth={14}
            styles={buildStyles({
              pathColor: EXT_COLOR,
              trailColor: TRAIL_COLOR,
              strokeLinecap: "butt",
              textSize: TEXT_SIZE,
              textColor: TEXT_COLOR,
            })}
          />
        </div>
      </div>
      <div className='flex flex-col items-center gap-3'>
        <label className='text-gray'>Depression</label>
        <div style={{ width: WIDTH, height: HEIGHT }}>
          <CircularProgressbar
            value={99}
            text={`${99}%`}
            strokeWidth={14}
            styles={buildStyles({
              pathColor: DEP_COLOR,
              trailColor: TRAIL_COLOR,
              strokeLinecap: "butt",
              textSize: TEXT_SIZE,
              textColor: TEXT_COLOR,
            })}
          />
        </div>
      </div>
      <div className='flex flex-col items-center gap-3'>
        <label className='text-gray'>Anxiety</label>
        <div style={{ width: WIDTH, height: HEIGHT }}>
          <CircularProgressbar
            value={35}
            text={`${35}%`}
            strokeWidth={14}
            styles={buildStyles({
              pathColor: ANX_COLOR,
              trailColor: TRAIL_COLOR,
              strokeLinecap: "butt",
              textSize: TEXT_SIZE,
              textColor: TEXT_COLOR,
            })}
          />
        </div>
      </div>
    </section>
  );
};

export default DemoResultsSection;
