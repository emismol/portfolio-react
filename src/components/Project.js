export default function Project({ image, title, deployed, repo }) {
  return (
    <div className="card">
      <img src={image} />
      <div>{title}</div>
      <a href={deployed}>Deployed</a>
      <div className="repo">
        <a href={repo}>Repo</a>
      </div>
    </div>
  );
}
