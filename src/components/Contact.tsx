'use client';

import { useState, FormEvent, ChangeEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Example: Send to a backend API or email service
      // For now, we'll simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
          Let&apos;s Connect
        </h2>
        <p className="text-center text-gray-300 mb-12 text-lg">
          Have a project in mind? Let&apos;s collaborate and build something amazing together.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-300">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors text-white"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-300">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors text-white"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors text-white resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 rounded-lg font-semibold transition-all transform hover:scale-105"
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>

              {submitted && (
                <div className="p-4 bg-green-900 border border-green-500 rounded-lg text-green-200">
                  ✓ Thanks for your message! I&apos;ll get back to you soon.
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 hover:border-blue-500 transition-colors">
              <h3 className="text-xl font-bold mb-3 text-blue-300">Email</h3>
              <a href="mailto:your.email@example.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                your.email@example.com
              </a>
            </div>

            <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 hover:border-blue-500 transition-colors">
              <h3 className="text-xl font-bold mb-3 text-blue-300">Social Links</h3>
              <div className="space-y-3 text-gray-300">
                <a href="#" className="block hover:text-blue-400 transition-colors">
                  → LinkedIn Profile
                </a>
                <a href="#" className="block hover:text-blue-400 transition-colors">
                  → GitHub Portfolio
                </a>
                <a href="#" className="block hover:text-blue-400 transition-colors">
                  → Twitter
                </a>
              </div>
            </div>

            <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 hover:border-blue-500 transition-colors">
              <h3 className="text-xl font-bold mb-3 text-blue-300">Location</h3>
              <p className="text-gray-300">Available for remote and on-site opportunities worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
