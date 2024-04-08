import { TypeAnimation } from 'react-type-animation';

type Desc = {
  splitter?: (str: string) => string[];
  text?: [];
  sequence: (string | number)[];
  speed?: { type: 'keyStrokeDelayInMs', value: number };
  style?: React.CSSProperties;
  repeat?: number;
}

const Desc = ({ sequence }: Desc) => (
  <TypeAnimation 
    sequence={sequence}
    speed = {{ type: 'keyStrokeDelayInMs', value: 30 }}
    style = {{display: 'block', minHeight: '200px', textAlign: 'left'}}
    repeat = {0}
    cursor={false}
    splitter = {str => str.split(/(?= )/)} 
  />
)

export default Desc