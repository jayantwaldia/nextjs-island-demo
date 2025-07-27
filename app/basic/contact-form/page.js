export default function ContactFormPage() {
  return (
    <main className="demo-content">
      <div className="demo-wrapper">
        <section className="demo-section">
          <div className="section-header">
            <h2>Contact Form (Traditional)</h2>
            <span className="traditional-badge">Traditional</span>
          </div>
          <p className="section-description">
            This form loads all JavaScript upfront with the page. Form
            validation and submission logic is always available.
          </p>
          <div className="component-demo">
            <form action="/api/contact" method="POST">
              <input
                name="email"
                type="email"
                required
                placeholder="Your email"
              />
              <textarea name="message" required placeholder="Your message" />
              <button type="submit">Send Message</button>
            </form>
          </div>
          <div className="section-info">
            <h3>How it works:</h3>
            <ul>
              <li>Form validation JavaScript loads immediately</li>
              <li>All form functionality available from page load</li>
              <li>No progressive enhancement or lazy loading</li>
              <li>Form submission handled by traditional form action</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
