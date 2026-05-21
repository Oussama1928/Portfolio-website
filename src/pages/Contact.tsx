import { useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus("sending");
    setErrorMessage(null);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 20000); // 8s max

    try {
        const res = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        signal: controller.signal,
        });

        let data: any = null;
        try {
        data = await res.json();
        } catch {
        // backend returned non-json
        }

        if (!res.ok) {
        throw new Error(
            typeof data?.detail === "string"
            ? data.detail
            : `Server error (${res.status})`
        );
        }

        setStatus("success");
        setFormData({ name: "", email: "", message: "" });

    } catch (err: any) {
        if (err.name === "AbortError") {
        setErrorMessage("Server timeout. Please try again.");
        } else if (typeof err?.message === "string") {
        setErrorMessage(err.message);
        } else {
        setErrorMessage("Unexpected error. Please try again.");
        }
        setStatus("error");
    } finally {
        clearTimeout(timeoutId);
    }
    };

  return (
    <section className="relative w-full min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center px-6 md:px-12 py-24">
      <h1 className="text-4xl md:text-5xl font-playfair font-bold text-center mb-6">
        Let’s Get In Touch
      </h1>

      <p className="text-center text-lg text-gray-700 max-w-2xl mb-10 font-sans">
        Got a question, want to work together, or just want to say hi? I’d love to hear from you!
      </p>

    <p className="text-center mb-10 italic">
    You can also check my{" "}
    <a
        href="https://github.com/bensaii23"
        target="_blank"
        rel="noopener noreferrer"
        className="text-cyan-500 font-bold underline"
    >
        GitHub
    </a>{" "}
    and{" "}
    <a
        href="https://www.linkedin.com/in/eyabensaid/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-cyan-500 font-bold underline"
    >
        LinkedIn
    </a>{" "}
    for more details.
    </p>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-gray-50 p-8 rounded-xl border border-gray-200 shadow-lg"
      >
        <div className="flex flex-col gap-4">
          {/* Name */}
          <label className="font-sans text-sm text-gray-600">Name</label>
          <input
            type="text"
            name="name"
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-400"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          {/* Email */}
          <label className="font-sans text-sm text-gray-600">Email</label>
          <input
            type="email"
            name="email"
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-400"
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />

          {/* Message */}
          <label className="font-sans text-sm text-gray-600">Message</label>
          <textarea
            name="message"
            rows={6}
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-400"
            placeholder="Write your message here"
            value={formData.message}
            onChange={handleChange}
            required
          />

          {/* Submit */}
          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-4 w-full py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {/* Status messages */}
          {status === "success" && (
            <p className="text-center text-sm text-green-600 mt-2">
              Message sent! I will reply soon 😊
            </p>
          )}

          {status === "error" && errorMessage && (
            <p className="text-center text-sm text-red-600 mt-2">
              {errorMessage}
            </p>
          )}
        </div>
      </form>
    </section>
  );
}
