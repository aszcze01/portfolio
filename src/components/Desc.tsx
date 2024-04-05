import { TypeAnimation } from 'react-type-animation';
// import state from "../store"

/**
 * Renders a text animation component with a sequence of text and pause times.
 *
 * @param splitter A function that splits a string into an array of substrings.
 * @param sequence An array of strings and numbers. A string is a piece of text to be typed,
 * a number is the time in milliseconds to pause before typing the next piece of text.
 * @param speed An object specifying the speed of the animation. The only supported type
 * is 'keyStrokeDelayInMs'.
 * @param style CSS styles to apply to the rendered component.
 * @param repeat The number of times the animation should repeat.
 * @returns A React component that displays the animation.
 */
const Desc = ({
  splitter = (str: string): string[] => str.split(/(?= )/),
  sequence = [
    `
      Alien Watch Agency Log - 0000020240319

      CONFIDENTIAL

      Finally! After over a year of research, we've managed to decode data from the device we found in the wreckage of an alien probe that crashed in December 2022 somewhere in the remote regions of Poland.
      The Agency masked the crash site by placing a decoy of a lost training rocket there, although we don't think anyone noticed anything anyway. The only device that survived the crash is likely some kind of mind scanner. It seems that the aliens are mass collecting data either through abductions or remotely scanning minds using probes.

      Unfortunately, almost all the data on the device is damaged. We've only been able to partially reconstruct the last record, which contains a scan of the mind of a man from central Poland.
    `,
    3000,
  ] as (string | number)[],
  speed = { type: 'keyStrokeDelayInMs', value: 30 } as { type: 'keyStrokeDelayInMs', value: number },
  style = { display: 'block', minHeight: '200px', textAlign: 'left' } as React.CSSProperties,
  repeat = 0,
}: {
  splitter?: (str: string) => string[];
  sequence?: (string | number)[];
  speed?: { type: 'keyStrokeDelayInMs', value: number };
  style?: React.CSSProperties;
  repeat?: number;
}): JSX.Element => {
  return (
    <TypeAnimation
      splitter={splitter}
      sequence={sequence}
      speed={speed}
      style={style}
      repeat={repeat}
      cursor={false}
    />
  );
};


export default Desc