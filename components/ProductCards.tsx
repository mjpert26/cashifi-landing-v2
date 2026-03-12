'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Building2, Landmark, CreditCard, ArrowRight, Shield, Clock, DollarSign } from 'lucide-react';

const products = [
  {
    id: 'sba-7a',
    title: 'SBA 7(a) Loans',
    subtitle: 'The Most Flexible SBA Loan',
    description: 'Fund working capital, equipment purchases, real estate acquisition, and business expansion with up to $5 million in financing.',
    amount: 'Up to $5M',
    color: 'from-blue-600 to-blue-400',
    borderColor: 'border-blue-500/20',
    shadowColor: 'shadow-blue-500/10',
    icon: TrendingUp,
    features: [
      { label: 'Terms', value: 'Up to 25 years' },
      { label: 'Rate', value: 'From 5.5%' },
      { label: 'Use Case', value: 'Working Capital' },
      { label: 'Down Payment', value: 'As low as 10%' },
    ],
    benefits: [
      'Lowest down payments',
      'Longest repayment terms',
      'Most versatile usage',
      'Competitive rates',
    ],
  },
  {
    id: 'cdc-504',
    title: 'CDC/504 Loans',
    subtitle: 'Commercial Real Estate Financing',
    description: 'Acquire, construct, or renovate commercial real estate and purchase heavy equipment with fixed-rate, long-term financing up to $5.5 million.',
    amount: 'Up to $5.5M',
    color: 'from-emerald-600 to-emerald-400',
    borderColor: 'border-emerald-500/20',
    shadowColor: 'shadow-emerald-500/10',
    icon: Building2,
    features: [
      { label: 'Terms', value: 'Up to 20-25 years' },
      { label: 'Rate', value: 'Fixed from 5.0%' },
      { label: 'Use Case', value: 'Real Estate & Equipment' },
      { label: 'Down Payment', value: 'As low as 10%' },
    ],
    benefits: [
      'Fixed interest rates',
      'Long-term stability',
      'Lower down payments',
      'Major asset purchases',
    ],
  },
  {
    id: 'caplines',
    title: 'CAPLines',
    subtitle: 'Flexible Working Capital Lines',
    description: 'Access revolving credit lines designed for seasonal businesses, contract-based operations, or companies needing flexible short-term financing.',
    amount: 'Up to $5M',
    color: 'from-orange-600 to-orange-400',
    borderColor: 'border-orange-500/20',
    shadowColor: 'shadow-orange-500/10',
    icon: CreditCard,
    features: [
      { label: 'Terms', value: 'Up to 10 years' },
      { label: 'Rate', value: 'Variable from 6.0%' },
      { label: 'Use Case', value: 'Seasonal & Contract' },
      { label: 'Access', value: 'Revolving Credit' },
    ],
    benefits: [
      'Flexible draw schedule',
      'Seasonal cash flow',
      'Contract financing',
      'Pay as you use',
    ],
  },
];

export default function ProductCards() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl opacity-20" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.1em] font-medium text-blue-400 mb-4">
            Our Loan Products
          </p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
            Choose the Right
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-orange-400 bg-clip-text text-transparent">
              SBA Loan for You
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Whether you need working capital, real estate financing, or flexible credit,
            we connect you with the perfect SBA loan program.
          </p>
        </motion.div>

        {/* Product cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              whileHover={{ scale: 1.02, y: -4 }}
              className={`group bg-[#111116] rounded-2xl border ${product.borderColor} p-8 transition-all duration-300 hover:border-white/20 hover:shadow-2xl ${product.shadowColor} relative overflow-hidden`}
            >
              {/* Top gradient line */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${product.color} opacity-60`} />

              {/* Icon and badge */}
              <div className="flex items-start justify-between mb-6">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center shadow-lg ${product.shadowColor}`}>
                  <product.icon className="w-7 h-7 text-white" strokeWidth={2} />
                </div>
                <div className={`px-4 py-1.5 rounded-full bg-gradient-to-r ${product.color} bg-opacity-10 border ${product.borderColor}`}>
                  <span className="text-xs font-semibold text-white uppercase tracking-wider">
                    {product.amount}
                  </span>
                </div>
              </div>

              {/* Title and description */}
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">
                  {product.title}
                </h3>
                <p className="text-sm font-medium text-gray-400 mb-4 uppercase tracking-wide">
                  {product.subtitle}
                </p>
                <p className="text-base text-gray-400 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Key features grid */}
              <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-white/5">
                {product.features.map((feature, idx) => (
                  <div key={idx} className="space-y-1">
                    <p className="text-xs uppercase tracking-wider text-gray-500 font-medium">
                      {feature.label}
                    </p>
                    <p className="text-sm font-semibold text-white">
                      {feature.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Benefits list */}
              <div className="space-y-3 mb-8">
                {product.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${product.color}`} />
                    <span className="text-sm text-gray-400">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTA button */}
              <button className="w-full group/btn relative overflow-hidden rounded-full bg-white/5 border border-white/10 px-6 py-3 text-white font-medium hover:bg-white/10 transition-all duration-300 hover:scale-105 active:scale-95">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Learn More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </span>
                <div className={`absolute inset-0 bg-gradient-to-r ${product.color} opacity-0 group-hover/btn:opacity-10 transition-opacity duration-300`} />
              </button>

              {/* Decorative gradient orb */}
              <div className={`absolute -bottom-24 -right-24 w-48 h-48 bg-gradient-to-br ${product.color} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-8 bg-[#111116] rounded-2xl border border-white/5 p-8">
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-blue-400" />
              <div className="text-left">
                <p className="text-sm font-semibold text-white">SBA Approved</p>
                <p className="text-xs text-gray-500">Official Partner</p>
              </div>
            </div>
            <div className="h-12 w-px bg-white/10" />
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-emerald-400" />
              <div className="text-left">
                <p className="text-sm font-semibold text-white">48-Hour Approval</p>
                <p className="text-xs text-gray-500">Fast Processing</p>
              </div>
            </div>
            <div className="h-12 w-px bg-white/10" />
            <div className="flex items-center gap-3">
              <DollarSign className="w-6 h-6 text-orange-400" />
              <div className="text-left">
                <p className="text-sm font-semibold text-white">$2B+ Funded</p>
                <p className="text-xs text-gray-500">Trusted Platform</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}