import ContactForm from "../../components/ContactForm";

export default function ContactFormPage() {
  return (
    <main className="demo-content">
      <div className="demo-wrapper">
        <section className="demo-section">
          <div className="section-header">
            <h2>Contact Form Island</h2>
            <span className="island-badge">Island</span>
          </div>
          <p className="section-description">
            This form loads its submit functionality as an island. The form
            demonstrates how islands can handle form validation, submission, and
            user feedback without affecting the rest of the page.
          </p>
          <div className="component-demo">
            <ContactForm />
          </div>
          <div className="section-info">
            <h3>How it works:</h3>
            <ul>
              <li>Form renders as static HTML initially</li>
              <li>Validation and submission logic loads as island</li>
              <li>Real-time validation becomes active after hydration</li>
              <li>Form submission handled within the island boundary</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
