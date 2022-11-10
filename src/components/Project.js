export default function Project({ image, title, deployed, repo }) {
  return (
    <div className="card">
      <img src={image} />
      <div>{title}</div>
      <a href={deployed}>Deployed</a>
      <a href={repo}>Repo</a>
    </div>
  );
}
