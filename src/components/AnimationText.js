import MovingComponent from "react-moving-text";
const AnimationText = () => {
  return (
    <h1 className="ah-headline d-flex">
      {`Je suis`}{" "}
      <MovingComponent
        type="typewriter"
        dataText={[
          "Marco Vassal",
          "développeur web",
          "en freelance",
        ]}
      />
    </h1>
  );
};
export default AnimationText;
