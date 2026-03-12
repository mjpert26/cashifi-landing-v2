'use client'

import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Shield, Zap } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0F] pt-20">
      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-3xl opacity-20" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-3xl opacity-20" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <div className="text-center">
          {/* Overline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-8"
          >
            <TrendingUp className="w-4 h-4 text-emerald-400" />
            <span className="text-sm font-medium tracking-wide uppercase text-gray-300">
              #1 SBA Lending Marketplace
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-6 leading-[1.1]"
          >
            <span className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
              Streamline Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-blue-400 bg-clip-text text-transparent">
              SBA Lending
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-lg md:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed font-light"
          >
            Connect with 500+ licensed lenders and secure funding for your business in as little as 48 hours. From working capital to commercial real estate, we make SBA loans simple.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-emerald-500 text-white rounded-full font-medium text-lg shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300">
              <span className="flex items-center gap-2">
                Get Your Free Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-medium text-lg hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all duration-300">
              See How It Works
            </button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
            className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500"
          >
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-emerald-400" />
              <span>SBA Approved Partner</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-blue-400" />
              <span>Bank-Level Security</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 flex items-center justify-center">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              </div>
              <span>95% Approval Rate</span>
            </div>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
          className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { value: '500+', label: 'Licensed Lenders', gradient: 'from-blue-500/20 to-blue-600/10' },
            { value: '$2B+', label: 'Businesses Funded', gradient: 'from-emerald-500/20 to-emerald-600/10' },
            { value: '48hr', label: 'Approval Time', gradient: 'from-orange-500/20 to-orange-600/10' },
            { value: '95%', label: 'Approval Rate', gradient: 'from-blue-500/20 to-emerald-500/10' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
              className={`relative bg-gradient-to-br ${stat.gradient} rounded-2xl border border-white/5 p-8 backdrop-blur-xl hover:border-white/10 transition-all duration-300 hover:scale-105 group`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              <div className="relative">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0F] to-transparent pointer-events-none" />
    </section>
  )
}