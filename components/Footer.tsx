import { motion } from 'framer-motion';
import { Building2, Shield, Award, Lock, FileCheck, Users, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

const footerLinks = {
  products: [
    { name: 'SBA 7(a) Loans', href: '#7a-loans' },
    { name: 'CDC/504 Loans', href: '#504-loans' },
    { name: 'CAPLines', href: '#caplines' },
    { name: 'Express Loans', href: '#express' },
  ],
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Lender Network', href: '#lenders' },
    { name: 'Success Stories', href: '#testimonials' },
    { name: 'Careers', href: '#careers' },
  ],
  resources: [
    { name: 'SBA Loan Guide', href: '#guide' },
    { name: 'Eligibility Calculator', href: '#calculator' },
    { name: 'Blog', href: '#blog' },
    { name: 'FAQs', href: '#faq' },
    { name: 'Support Center', href: '#support' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms of Service', href: '#terms' },
    { name: 'Licenses', href: '#licenses' },
    { name: 'Compliance', href: '#compliance' },
  ],
};

const trustBadges = [
  { icon: Building2, text: 'SBA Approved Partner' },
  { icon: Shield, text: 'Bank-Level Security' },
  { icon: Award, text: 'BBB A+ Rating' },
  { icon: Lock, text: '256-bit Encryption' },
  { icon: FileCheck, text: 'Licensed & Regulated' },
  { icon: Users, text: 'Trusted by 10,000+ Businesses' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

export default function Footer() {
  return (
    <footer className="relative bg-[#0A0A0F] border-t border-white/5 overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* CTA Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="py-24 border-b border-white/5"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-emerald-500/10 border border-white/10 mb-6">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm font-medium text-white/80 uppercase tracking-wider">Start Your Application Today</span>
            </motion.div>

            <motion.h2 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
              Ready to Get <span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-blue-400 bg-clip-text text-transparent">Funded?</span>
            </motion.h2>

            <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join thousands of businesses that have secured SBA financing through our marketplace. Get your free quote in minutes.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-full shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300">
                <span className="relative z-10">Get Your Free Quote</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              <button className="px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 hover:scale-105 transition-all duration-300">
                Schedule a Consultation
              </button>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-12 flex flex-wrap items-center justify-center gap-6">
              <div className="flex items-center gap-2 text-gray-400">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-sm">1-800-CASHIFI</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Mail className="w-5 h-5 text-emerald-400" />
                <span className="text-sm">funding@cashifi.com</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="py-16 border-b border-white/5"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {trustBadges.map((badge, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col items-center text-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-all duration-300"
              >
                <badge.icon className="w-8 h-8 text-blue-400" />
                <span className="text-xs text-gray-400 leading-tight">{badge.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="py-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8">
            {/* Brand Column */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center">
                  <span className="text-xl font-bold text-white">C</span>
                </div>
                <span className="text-2xl font-bold text-white tracking-tight">Cashifi</span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6 max-w-sm">
                The #1 SBA Lending Marketplace connecting businesses with licensed lenders nationwide. Streamlining access to capital since 2018.
              </p>
              <div className="flex items-start gap-2 text-sm text-gray-500">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  123 Financial District<br />
                  New York, NY 10004
                </span>
              </div>
            </motion.div>

            {/* Products */}
            <motion.div variants={itemVariants}>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Products</h3>
              <ul className="space-y-3">
                {footerLinks.products.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div variants={itemVariants}>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div variants={itemVariants}>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Resources</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Legal */}
            <motion.div variants={itemVariants}>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Legal</h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="py-8 border-t border-white/5"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.p variants={itemVariants} className="text-sm text-gray-500 text-center md:text-left">
              © 2024 Cashifi. All rights reserved. NMLS #1234567
            </motion.p>

            <motion.div variants={itemVariants} className="flex items-center gap-6">
              <Link href="#" className="text-gray-500 hover:text-white transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-white transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-white transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                </svg>
              </Link>
            </motion.div>
          </div>

          <motion.p variants={itemVariants} className="text-xs text-gray-600 mt-6 text-center max-w-4xl mx-auto leading-relaxed">
            Cashifi is a marketplace platform that connects borrowers with lenders. We are not a lender and do not make credit decisions. Loan terms and availability subject to lender approval and eligibility requirements. All loan applications are subject to credit review and approval. SBA loans are provided by participating SBA-approved lenders. NMLS Consumer Access: www.nmlsconsumeraccess.org
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}