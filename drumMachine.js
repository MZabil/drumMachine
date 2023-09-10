import { useEffect } from "https://cdn.skypack.dev/react@17.0.1";
function DrumMachine() {
  React.useEffect(() => {
    document.addEventListener("keydown", (event) => {
      playSound(event.key.toUpperCase());
    });
  }, []);

  const [str, setStr] = React.useState(" ");
  const drumPads = [
    {
      keyCode: 81,
      text: "Q",
      id: "Heater-1",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
    },
    {
      keyCode: 87,
      text: "W",
      id: "Heater-2",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
    },
    {
      keyCode: 69,
      text: "E",
      id: "Heater-3",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
    },
    {
      keyCode: 65,
      text: "A",
      id: "Heater-4",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
    },
    {
      keyCode: 83,
      text: "S",
      id: "Clap",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
    },
    {
      keyCode: 68,
      text: "D",
      id: "Open-HH",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
    },
    {
      keyCode: 90,
      text: "Z",
      id: "kick-n'-hat",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
    },
    {
      keyCode: 88,
      text: "X",
      id: "kick",
      src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
    },
    {
      keyCode: 67,
      text: "C",
      id: "Closed-HH",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
    }
  ];

  function playSound(selector) {
    const audio = document.getElementById(selector);
    audio.play();
    setStr(audio.id);
  }

  return (
    <>
      <div id="display">
        <div id="left">
          {drumPads.map((drumPad) => (
            <button
              key={drumPad.src}
              onClick={() => playSound(drumPad.text)}
              className="drum-pad"
              id={drumPad.src}
            >
              {drumPad.text}
              <audio className="clip" src={drumPad.src} id={drumPad.text} />
            </button>
          ))}
        </div>
        <div id="right">
          <p>
            FCC (<i className="fa-solid fa-fire-flame-curved"></i>)
          </p>
          <h4>{str}</h4>
        </div>
      </div>
    </>
  );
}
ReactDOM.render(<DrumMachine />, document.getElementById("drum-machine"));
