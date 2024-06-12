import { TypeAnimation } from "react-type-animation";

const Texteffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Coder",
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        "Web developer",
        1500,
        "Designer",
        1500,
        "Programmer",
        1500,
      ]}
      speed={50}
      className=" font-bold bg-gradient-to-r from-red-600 via-slate-500 to-red-300 bg-clip-text text-4xl tracking-tight text-transparent"
      repeat={Infinity}
    />
  );
};

export default Texteffect;
