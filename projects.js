import Image from "next/image";

export default function Projects() {
  return (
    <div className="page-shell">
      <h1>My Projects</h1>

      <div className="project-grid">
        <article className="project-card card">
          <Image src="/todoapp.JPG" alt="ToDo App" width={400} height={300} />
          <h2>ToDo App</h2>
          <p>Task management application.</p>
          <button type="button">View Project</button>
        </article>

        <article className="project-card card">
          <Image src="/weather.JPG" alt="Weather App" width={400} height={300} />
          <h2>Weather App</h2>
          <p>Weather application using API.</p>
          <button type="button">View Project</button>
        </article>

        <article className="project-card card">
          <Image src="/moviezone.JPG" alt="Movie App" width={400} height={300} />
          <h2>Movie App</h2>
          <p>Movie discovery application.</p>
          <button type="button">View Project</button>
        </article>
      </div>
    </div>
  );
}