import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaUser, FaEnvelope, FaComment } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: '',
    loading: false,
  });

  const formRef = useRef(null);
  const isInView = true; // You can use your useInView hook here if desired

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Set loading state
    setFormStatus({
      submitted: false,
      success: false,
      message: '',
      loading: true
    });

    try {
      // EmailJS configuration from environment variables
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

      const templateParams = {
        from_name: formState.name,
        from_email: formState.email,
        message: formState.message,
        to_email: 'oluwadamilolaogunbode@gmail.com'
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setFormStatus({
        submitted: true,
        success: true,
        message: 'Thanks for reaching out! I\'ll get back to you soon.',
        loading: false
      });

      // Reset form after successful submission
      setFormState({
        name: '',
        email: '',
        message: '',
      });

    } catch (error) {
      console.error('Failed to send email:', error);
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Sorry, there was an error sending your message. Please try again or email me directly.',
        loading: false
      });
    }
  };

  return (
    <section className="text-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.h2
          className="text-4xl lg:text-5xl font-bold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-400"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.7 }}
        >
          Get In Touch
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
          {/* Contact Info */}
          <motion.div
            className="lg:w-1/3"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="glass-dark backdrop-blur-md p-4 sm:p-6 rounded-xl shadow-2xl shadow-black/20 h-full hover:shadow-green-500/10 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4">Contact Info</h3>

              <div className="space-y-4 mt-6">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-500/20 p-2 rounded-full flex-shrink-0 mt-1">
                    <FaEnvelope className="text-blue-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-gray-400 text-sm">Email</p>
                    <a
                      href="mailto:oluwadamilolaogunbode@gmail.com"
                      className="hover:text-blue-400 transition-colors break-all text-sm sm:text-base"
                    >
                      oluwadamilolaogunbode@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-green-500/20 p-2 rounded-full">
                    <FaUser className="text-green-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p>Maryland, USA</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-gray-300">
                  Feel free to reach out to me for collaborations, opportunities,
                  or just to say hello. I'm always open to discussing new projects
                  and ideas.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:w-2/3"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="glass-dark backdrop-blur-md p-4 sm:p-6 rounded-xl shadow-2xl shadow-black/20 hover:shadow-blue-500/10 transition-all duration-300">
              {formStatus.loading ? (
                <motion.div
                  className="text-center py-10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="mx-auto w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-4 animate-pulse">
                    <FaPaperPlane className="text-blue-400 text-2xl animate-pulse" />
                  </div>
                  <h3 className="text-2xl font-semibold text-blue-400 mb-2">Sending...</h3>
                  <p className="text-gray-300">Please wait while your message is being sent.</p>
                </motion.div>
              ) : formStatus.submitted ? (
                <motion.div
                  className="text-center py-10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className={`mx-auto w-16 h-16 ${formStatus.success ? 'bg-green-500/20' : 'bg-red-500/20'} rounded-full flex items-center justify-center mb-4`}>
                    <FaPaperPlane className={`${formStatus.success ? 'text-green-400' : 'text-red-400'} text-2xl`} />
                  </div>
                  <h3 className={`text-2xl font-semibold ${formStatus.success ? 'text-green-400' : 'text-red-400'} mb-2`}>
                    {formStatus.success ? 'Message Sent!' : 'Oops! Something went wrong'}
                  </h3>
                  <p className="text-gray-300 mb-6">{formStatus.message}</p>
                  <button
                    onClick={() => setFormStatus({ submitted: false, success: false, message: '', loading: false })}
                    className={`px-5 py-2 ${formStatus.success ? 'bg-blue-600 hover:bg-blue-700' : 'bg-red-600 hover:bg-red-700'} rounded-md transition-colors`}
                  >
                    {formStatus.success ? 'Send Another Message' : 'Try Again'}
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} ref={formRef} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2 flex items-center gap-2">
                      <FaUser className="text-gray-400" />
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full glass-dark border border-gray-600/30 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 transition-all placeholder:text-gray-400"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2 flex items-center gap-2">
                      <FaEnvelope className="text-gray-400" />
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full glass-dark border border-gray-600/30 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all placeholder:text-gray-400"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-300 mb-2 flex items-center gap-2">
                      <FaComment className="text-gray-400" />
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full glass-dark border border-gray-600/30 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all resize-none placeholder:text-gray-400"
                      placeholder="Hello Dami, I'd like to talk about..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={formStatus.loading}
                    className="btn-modern w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 disabled:from-gray-500 disabled:to-gray-600 disabled:cursor-not-allowed rounded-lg py-3 font-medium flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:shadow-green-500/25"
                    whileHover={!formStatus.loading ? { scale: 1.02 } : {}}
                    whileTap={!formStatus.loading ? { scale: 0.98 } : {}}
                  >
                    <FaPaperPlane className={formStatus.loading ? 'animate-pulse' : ''} />
                    {formStatus.loading ? 'Sending...' : 'Send Message'}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;