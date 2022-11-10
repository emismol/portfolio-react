import profilePic from "../emismol.jpeg";

export default function AboutMe() {
  return (
    <div>
      <h1>About Me</h1>
      <div>
        <img src={profilePic} />
      </div>
      <div>
        <p>Hi my name is Emily...Bio</p>
      </div>
    </div>
  );
}
