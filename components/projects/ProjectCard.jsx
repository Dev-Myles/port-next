export default function ProjectCard({ name, desc, video, liveLink, codeBase }) {
  return (
    <div>
      <h1>{name}</h1>
      <h1>{desc}</h1>
      <h1>{video}</h1>
      <h1>{liveLink}</h1>
      <h1>{codeBase}</h1>
    </div>
  );
}
