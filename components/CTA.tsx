'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Shield, TrendingUp } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Gradient background orbs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="relative"
        >
          {/* Main CTA Card */}
          <div className="relative bg-gradient-to-br from-blue-500/10 via-emerald-500/5 to-transparent rounded-3xl border border-white/10 p-12 md:p-16 backdrop-blur-xl overflow-hidden">
            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-emerald-500/5 opacity-50" />
            
            {/* Content */}
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              {/* Trust badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-6 py-2 mb-8"
              >
                <Shield className="w-4 h-4 text-emerald-400" />
                <span className="text-sm font-medium text-gray-300">SBA Approved Partner</span>
              </motion.div>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight"
              >
                Ready to Get{' '}
                <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                  Funded?
                </span>
              </motion.h2>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
              >
                Join 500+ businesses that have secured over $2B in SBA funding through Cashifi's streamlined marketplace
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <button className="group relative bg-gradient-to-r from-blue-500 to-emerald-500 text-white rounded-full px-10 py-4 font-semibold text-lg shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 hover:scale-105 transition-all duration-300 w-full sm:w-auto">
                  <span className="flex items-center justify-center gap-2">
                    Get Your Free Quote
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>

                <button className="group bg-white/5 border border-white/10 text-white rounded-full px-10 py-4 font-semibold text-lg hover:bg-white/10 hover:border-white/20 transition-all duration-300 w-full sm:w-auto">
                  <span className="flex items-center justify-center gap-2">
                    Talk to an Expert
                  </span>
                </button>
              </motion.div>

              {/* Key benefits row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 pt-16 border-t border-white/10"
              >
                <div className="flex flex-col items-center gap-2">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/20 mb-2">
                    <TrendingUp className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="text-2xl font-bold text-white">48 Hours</div>
                  <div className="text-sm text-gray-400">Average Approval Time</div>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-2">
                    <Shield className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div className="text-2xl font-bold text-white">95%</div>
                  <div className="text-sm text-gray-400">Approval Rate</div>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/20 mb-2">
                    <div className="text-blue-400 font-bold text-xl">$</div>
                  </div>
                  <div className="text-2xl font-bold text-white">Up to $5M</div>
                  <div className="text-sm text-gray-400">Loan Amount Available</div>
                </div>
              </motion.div>
            </div>

            {/* Decorative corner accents */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-emerald-500/10 to-transparent rounded-full blur-3xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}