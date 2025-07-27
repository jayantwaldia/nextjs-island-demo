import SubmitButton from "./SubmitButton";

export default function ContactForm() {
  return (
    <form action="/api/contact" method="POST">
      <input name="email" type="email" required placeholder="Your email" />
      <textarea name="message" required placeholder="Your message" />
      <SubmitButton />
    </form>
  );
}
