import Image from "next/image";
import Link from "next/link";

export default function Home({ time }) {
  return (
    <div className="page-shell">
      <section className="hero-card card">
        <div className="hero-copy">
          <h1>Hi, I&apos;m Amina</h1>
          <h2>Web Developer</h2>
          <p>I build websites using React and Next.js.</p>

          <div className="button-row">
            <Link className="button" href="/about">About Me</Link>
            <Link className="button button-secondary" href="/projects">View Projects</Link>
          </div>
        </div>

        <Image
          className="profile-photo"
          src="/profile.avif"
          alt="My profile"
          width={240}
          height={240}
        />
      </section>

      <section className="info-card card">
        <h2>Let&apos;s build something useful.</h2>
        <p>Server time: {time}</p>
        <Link className="button" href="/contact">Contact Me</Link>
      </section>
    </div>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      time: new Date().toLocaleString(),
    },
  };
}
