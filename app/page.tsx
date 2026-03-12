'use client'

import { motion } from 'framer-motion'
import { 
  ArrowRight, 
  TrendingUp, 
  Shield, 
  Zap, 
  Building2, 
  CheckCircle2, 
  Award, 
  Lock, 
  Users, 
  BarChart3,
  FileText,
  Clock,
  DollarSign,
  Star,
  Banknote,
  Landmark,
  CreditCard
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function Home() {
  return (
    <div className="bg-[#09090B] text-white min-h-screen">
      {/* Navbar */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/50 border-b border-white/5"
      >
        <div className="max-w-[1280px] mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#10B981] flex items-center justify-center">
              <Banknote className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-[#3B82F6] to-[#10B981] bg-clip-text text-transparent">
              Cashifi
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <Link href="#products" className="text-[#A1A1AA] hover:text-white transition-colors">
              Products
            </Link>
            <Link href="#lenders" className="text-[#A1A1AA] hover:text-white transition-colors">
              Lenders
            </Link>
            <Link href="#about" className="text-[#A1A1AA] hover:text-white transition-colors">
              About
            </Link>
            <Link href="#resources" className="text-[#A1A1AA] hover:text-white transition-colors">
              Resources
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden md:block text-white hover:text-[#3B82F6] transition-colors">
              Sign In
            </button>
            <button className="bg-gradient-to-r from-[#3B82F6] to-[#10B981] text-white rounded-full px-6 py-2.5 font-medium hover:scale-105 transition-transform shadow-lg shadow-[#3B82F6]/25">
              Get Started
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#3B82F6] rounded-full blur-[150px] opacity-20"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#10B981] rounded-full blur-[150px] opacity-15"></div>
        
        <div className="max-w-[1280px] mx-auto px-6 py-32 relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
              <Award className="w-4 h-4 text-[#10B981]" />
              <span className="text-sm font-medium text-[#A1A1AA]">
                #1 SBA LENDING MARKETPLACE
              </span>
            </motion.div>

            <motion.h1 
              variants={fadeInUp}
              className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.1] tracking-tight"
            >
              Streamline Your{' '}
              <span className="bg-gradient-to-r from-[#3B82F6] via-[#10B981] to-[#FB923C] bg-clip-text text-transparent">
                SBA Lending
              </span>
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl text-[#A1A1AA] mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Connect with 500+ licensed lenders nationwide. Get approved in 48 hours for SBA 7(a), CDC/504, and CAPLines loans up to $5.5M.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-gradient-to-r from-[#3B82F6] to-[#10B981] text-white rounded-full px-10 py-4 font-semibold text-lg hover:scale-105 transition-transform shadow-2xl shadow-[#3B82F6]/30 flex items-center gap-2 group">
                Get Your Free Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/5 border border-white/10 text-white rounded-full px-10 py-4 font-semibold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">
                See How It Works
              </button>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-[#71717A]"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                <span>No Credit Impact</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                <span>Same-Day Response</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 relative">
        <div className="max-w-[1280px] mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { number: '500+', label: 'Licensed Lenders', icon: Building2, gradient: 'from-[#3B82F6] to-[#60A5FA]' },
              { number: '$2B+', label: 'Businesses Funded', icon: DollarSign, gradient: 'from-[#10B981] to-[#34D399]' },
              { number: '48-Hour', label: 'Approval Time', icon: Clock, gradient: 'from-[#FB923C] to-[#FDBA74]' },
              { number: '95%', label: 'Approval Rate', icon: TrendingUp, gradient: 'from-[#8B5CF6] to-[#A78BFA]' }
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl" 
                     style={{ background: `linear-gradient(135deg, ${stat.gradient.includes('3B82F6') ? '#3B82F6' : stat.gradient.includes('10B981') ? '#10B981' : stat.gradient.includes('FB923C') ? '#FB923C' : '#8B5CF6'} 0%, transparent 100%)` }}>
                </div>
                <div className="relative bg-[#111116] rounded-2xl border border-white/5 p-8 hover:border-white/10 transition-all duration-300">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mb-4`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-4xl font-bold mb-2 bg-gradient-to-br bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(135deg, ${stat.gradient.replace('from-', '').replace('to-', ', ')})` }}>
                    {stat.number}
                  </div>
                  <div className="text-[#A1A1AA] font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-32 relative" id="products">
        <div className="max-w-[1280px] mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp} className="inline-block">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#10B981] mb-4">
                SBA LOAN PRODUCTS
              </div>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Choose Your{' '}
              <span className="bg-gradient-to-r from-[#3B82F6] to-[#10B981] bg-clip-text text-transparent">
                Funding Solution
              </span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-[#A1A1AA] max-w-2xl mx-auto">
              Access flexible financing options tailored to your business needs with competitive rates and terms.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: 'SBA 7(a) Loans',
                amount: 'Up to $5M',
                description: 'The most versatile SBA loan for working capital, equipment purchases, real estate acquisition, and business expansion.',
                color: '#3B82F6',
                icon: Landmark,
                features: [
                  'Terms up to 25 years',
                  'Competitive interest rates',
                  'Multiple use cases',
                  'Fast approval process'
                ]
              },
              {
                title: 'CDC/504 Loans',
                amount: 'Up to $5.5M',
                description: 'Long-term, fixed-rate financing for major fixed assets like commercial real estate and heavy equipment.',
                color: '#10B981',
                icon: Building2,
                features: [
                  'Low down payments (10%)',
                  'Fixed interest rates',
                  'Up to 25-year terms',
                  'Commercial real estate'
                ]
              },
              {
                title: 'CAPLines',
                amount: 'Flexible Credit',
                description: 'Revolving lines of credit designed to help small businesses meet short-term and cyclical working capital needs.',
                color: '#FB923C',
                icon: CreditCard,
                features: [
                  'Seasonal working capital',
                  'Contract financing',
                  'Builders line of credit',
                  'Asset-based lending'
                ]
              }
            ].map((product, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="relative group"
              >
                <div 
                  className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{ background: `linear-gradient(135deg, ${product.color} 0%, transparent 100%)` }}
                ></div>
                <div className="relative bg-[#111116] rounded-2xl border border-white/5 p-8 hover:border-white/10 transition-all duration-300 h-full flex flex-col">
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                    style={{ background: `linear-gradient(135deg, ${product.color}, ${product.color}CC)` }}
                  >
                    <product.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2">{product.title}</h3>
                  <div 
                    className="text-3xl font-bold mb-4"
                    style={{ color: product.color }}
                  >
                    {product.amount}
                  </div>
                  <p className="text-[#A1A1AA] mb-6 leading-relaxed flex-grow">
                    {product.description}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {product.features.map((feature, j) => (
                      <div key={j} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: product.color }} />
                        <span className="text-sm text-[#D4D4D8]">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button 
                    className="w-full rounded-full py-3 font-semibold transition-all duration-300 hover:scale-105 border"
                    style={{ 
                      background: `linear-gradient(135deg, ${product.color}15, ${product.color}05)`,
                      borderColor: `${product.color}30`,
                      color: product.color
                    }}
                  >
                    Apply Now
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 relative">
        <div className="max-w-[1280px] mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#10B981] mb-4">
                TRUSTED & SECURE
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">
                Enterprise-Grade Security
              </h2>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {[
                {
                  icon: Award,
                  title: 'SBA Approved Partner',
                  description: 'Official SBA-approved lending partner with full regulatory compliance'
                },
                {
                  icon: Lock,
                  title: 'Bank-Level Security',
                  description: '256-bit encryption and SOC 2 Type II certified infrastructure'
                },
                {
                  icon: Shield,
                  title: 'Licensed Lenders',
                  description: 'All partners are federally licensed and regulated institutions'
                },
                {
                  icon: Star,
                  title: 'BBB A+ Rating',
                  description: 'Accredited business with highest rating and verified reviews'
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="bg-[#111116] rounded-2xl border border-white/5 p-6 hover:border-white/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#3B82F6]/20 to-[#10B981]/20 flex items-center justify-center mb-4 border border-white/5">
                    <item.icon className="w-6 h-6 text-[#3B82F6]" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-[#A1A1AA] leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 relative">
        <div className="max-w-[1280px] mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#10B981] mb-4">
                CLIENT TESTIMONIALS
              </div>
              <h2 className="text-5xl md:text-6xl font-bold">
                Success Stories
              </h2>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {[
                {
                  name: 'Michael Chen',
                  title: 'Founder & CEO',
                  company: 'TechStart Solutions',
                  quote: 'Cashifi made the SBA loan process incredibly smooth. We secured $2.5M in funding within 3 weeks to expand our operations. The team was professional and guided us every step.',
                  image: '/testimonial-1.jpg'
                },
                {
                  name: 'Sarah Williams',
                  title: 'Owner',
                  company: 'Green Valley Organics',
                  quote: 'After being turned down by traditional banks, Cashifi connected us with the perfect lender. Got approved for $800K to purchase our commercial kitchen. Game changer!',
                  image: '/testimonial-2.jpg'
                },
                {
                  name: 'David Rodriguez',
                  title: 'Managing Partner',
                  company: 'Rodriguez Construction',
                  quote: 'The CDC/504 loan we obtained through Cashifi allowed us to buy our warehouse. Fixed rates, low down payment, and amazing support throughout. Highly recommend!',
                  image: '/testimonial-3.jpg'
                }
              ].map((testimonial, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="bg-[#111116] rounded-2xl border border-white/5 p-8 hover:border-white/10 transition-all duration-300"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-5 h-5 fill-[#FB923C] text-[#FB923C]" />
                    ))}
                  </div>
                  <p className="text-[#D4D4D8] mb-6 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#10B981]"></div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-[#A1A1AA]">
                        {testimonial.title}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/20 via-[#10B981]/20 to-[#FB923C]/20"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#3B82F6] rounded-full blur-[200px] opacity-20"></div>
        
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                Ready to Get{' '}
                <span className="bg-gradient-to-r from-[#3B82F6] to-[#10B981] bg-clip-text text-transparent">
                  Funded?
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-[#A1A1AA] mb-12 max-w-3xl mx-auto">
                Join thousands of businesses that have secured funding through Cashifi. Get your free quote in minutes.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="bg-gradient-to-r from-[#3B82F6] to-[#10B981] text-white rounded-full px-12 py-5 font-semibold text-lg hover:scale-105 transition-transform shadow-2xl shadow-[#3B82F6]/40 flex items-center gap-2 group">
                  Start Your Application
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="bg-white/5 border border-white/10 text-white rounded-full px-12 py-5 font-semibold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">
                  Schedule a Call
                </button>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            >
              {[
                { icon: FileText, text: 'Simple online application' },
                { icon: Users, text: '500+ lender network' },
                { icon: Zap, text: '48-hour approvals' }
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-center gap-3">
                  <item.icon className="w-5 h-5 text-[#10B981]" />
                  <span className="text-[#D4D4D8]">{item.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-16">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#10B981] flex items-center justify-center">
                  <Banknote className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-[#3B82F6] to-[#10B981] bg-clip-text text-transparent">
                  Cashifi
                </span>
              </div>
              <p className="text-[#A1A1AA] mb-6 max-w-sm">
                The #1 SBA lending marketplace connecting businesses with licensed lenders nationwide.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-3 text-[#A1A1AA]">
                <li><a href="#" className="hover:text-white transition-colors">SBA 7(a) Loans</a></li>
                <li><a href="#" className="hover:text-white transition-colors">CDC/504 Loans</a></li>
                <li><a href