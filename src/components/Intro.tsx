import { TypeAnimation } from 'react-type-animation';
import state from "../store"

const Intro = () => {

    // const snapshot = useSnapshot(state, { sync: true });

    return (
        <TypeAnimation
          cursor={false}
          sequence={[
            // Same substring at the start will only be typed out once, initially
            'Hacking alien device: 0%',
            110,
            // 'Hacking alien device: 10%',
            // 100,
            'Hacking alien device: 20%',
            90,
            // 'Hacking alien device: 30%',
            // 80,
            'Hacking alien device: 40%',
            70,
            // 'Hacking alien device: 50%',
            // 60,
            'Hacking alien device: 60%',
            50,
            // 'Hacking alien device: 70%',
            // 40,
            'Hacking alien device: 80%',
            30,
            // 'Hacking alien device: 90%',
            // 20,
            `Hacking alien device: 100%\nAlien device has been hacked!`,
            400,
            () => {
              // state.isEarthVisible = true
              state.isLoader = false
              state.isIntro = false
              state.isDesc = true
              state.isPanelHacked = true
            },
          ]}
          wrapper="span"
          speed={70}
          style={{ fontSize: '1em', display: 'inline-block', whiteSpace: 'pre-line', textAlign: 'left' }}
          repeat={0}
        />
      );
}

export default Intro