"use client";
import { useState } from "react";

export default function SubmitButton() {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      alert("Message sent! (Demo only)");
    }, 2000);
  };

  return (
    <button
      type="submit"
      disabled={loading}
      onClick={handleClick}
      className="submit-button"
    >
      {loading ? "⏳ Sending..." : "📤 Send Message"}
    </button>
  );
}
