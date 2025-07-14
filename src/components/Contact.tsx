import React, { useState } from 'react';
import { Send, Terminal, User, Mail, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [terminalOutput, setTerminalOutput] = useState<string[]>([
    '> Initializing contact form...',
    '> Form validation active',
    '> Ready to receive your message'
  ]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTerminalOutput(prev => [
      ...prev,
      `> Processing message from ${formData.name}...`,
      '> Message sent successfully',
      '> Thank you for reaching out!',
      '> I will get back to you soon.'
    ]);
  };

  return (
    <section className="py-20 px-4">
      {/* Circular Next Page Navigation */}
      <button
        onClick={() => {
          const event = new CustomEvent('navigateToPage', { detail: { page: 1 } });
          window.dispatchEvent(event);
        }}
        className="fixed right-12 top-1/2 transform -translate-y-1/2 z-50 w-24 h-24 bg-gray-800/80 backdrop-blur-sm border-2 border-indigo-500/30 rounded-full flex items-center justify-center text-indigo-400 hover:text-white hover:bg-indigo-600/20 transition-all duration-300 group hover:rotate-[360deg]"
      >
        <div className="transform -rotate-90 text-xs font-bold tracking-wider whitespace-nowrap">
          NEXT PAGE
        </div>
      </button>

      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 dev-title">
          <span className="text-success">GET IN</span>
          <span className="text-primary"> TOUCH</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Terminal Output */}
          <div className="order-2 lg:order-1">
            <div className="bg-black border-2 border-success rounded-lg overflow-hidden">
              <div className="bg-success text-black px-4 py-2 font-mono text-sm flex items-center gap-2">
                <Terminal className="w-4 h-4" />
                DEVELOPER_TERMINAL_v1.0
              </div>
              
              <div className="p-6 font-mono text-sm h-80 overflow-y-auto">
                {terminalOutput.map((line, index) => (
                  <div key={index} className="text-success mb-2 typing-animation">
                    {line}
                  </div>
                ))}
                <div className="text-success">
                  <span className="opacity-100">$</span>
                  <span className="cursor-blink">|</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="order-1 lg:order-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="dev-form-group">
                <label className="dev-label">
                  <User className="w-4 h-4" />
                  YOUR NAME
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="dev-input"
                  placeholder="Enter your name..."
                  required
                />
              </div>

              <div className="dev-form-group">
                <label className="dev-label">
                  <Mail className="w-4 h-4" />
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="dev-input"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="dev-form-group">
                <label className="dev-label">
                  <MessageSquare className="w-4 h-4" />
                  MESSAGE
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="dev-input resize-none"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="neon-button neon-button-primary w-full">
                <Send className="w-5 h-5" />
                SEND MESSAGE
              </button>
            </form>

            {/* Connection Status */}
            <div className="mt-8 bg-black/30 backdrop-blur-sm border border-primary/30 rounded-lg p-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                <span className="text-success font-mono text-sm">
                  FORM READY
                </span>
              </div>
              <div className="text-gray-400 text-xs mt-2 font-mono">
                Your message will be sent securely
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer info */}
      <div className="mt-16 pt-8 border-t border-primary/20">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="space-y-2">
            <h4 className="font-semibold text-primary">Location</h4>
            <p className="text-gray-400 text-sm">San Francisco, CA</p>
            <p className="text-gray-400 text-sm">Available Worldwide</p>
          </div>
          
          <div className="space-y-2">
            <h4 className="font-semibold text-primary">Email</h4>
            <p className="text-gray-400 text-sm">alex@developer.com</p>
            <p className="text-gray-400 text-sm">Response within 24h</p>
          </div>
          
          <div className="space-y-2">
            <h4 className="font-semibold text-primary">GitHub</h4>
            <p className="text-gray-400 text-sm">github.com/alexdev</p>
            <p className="text-gray-400 text-sm">50+ Public Repos</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;