export default function Contact() {
  return (
    <div className="page-shell">
      <section className="card contact-card">
      <h1>Contact Me</h1>

      <p>Email: amina@email.com</p>
      <p>Phone: +216 12 345 678</p>

      <form className="contact-form">
        <input placeholder="Your name" />
        <br /><br />

        <input placeholder="Your email" />
        <br /><br />

        <textarea placeholder="Your message"></textarea>
        <br /><br />

        <button>Send</button>
      </form>
      </section>
    </div>
  );
}