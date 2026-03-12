'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Marcus Chen',
    title: 'Founder & CEO',
    company: 'Velocity Manufacturing',
    image: '/testimonials/marcus.jpg',
    quote: 'Cashifi transformed our expansion plans. We secured a $2.3M SBA 7(a) loan in under 3 weeks — our traditional bank took 4 months to decline us. The marketplace connected us with the perfect lender who understood our industry.',
    amount: '$2.3M',
    loanType: 'SBA 7(a)',
  },
  {
    name: 'Sarah Patel',
    title: 'Owner',
    company: 'Patel Restaurant Group',
    image: '/testimonials/sarah.jpg',
    quote: 'The CDC/504 program through Cashifi helped us purchase our flagship location. Their team guided us through every step, and the rates were significantly better than conventional financing. We saved $180K in interest over the loan term.',
    amount: '$1.8M',
    loanType: 'CDC/504',
  },
  {
    name: 'David Okonkwo',
    title: 'Managing Partner',
    company: 'Summit Dental Partners',
    image: '/testimonials/david.jpg',
    quote: 'After being turned down by two banks, Cashifi found us a lender within 48 hours. The approval process was seamless, and we had our funds in 3 weeks. Used it to acquire two additional practices and expand our team.',
    amount: '$3.2M',
    loanType: 'SBA 7(a)',
  },
  {
    name: 'Jennifer Morrison',
    title: 'President',
    company: 'Morrison Tech Solutions',
    image: '/testimonials/jennifer.jpg',
    quote: 'CAPLines through Cashifi gave us the working capital flexibility we desperately needed during seasonal fluctuations. The application took 20 minutes, and we were approved in 2 days. Game changer for our cash flow management.',
    amount: '$500K',
    loanType: 'CAPLines',
  },
  {
    name: 'Robert Tanaka',
    title: 'CEO',
    company: 'Tanaka Industrial Supply',
    image: '/testimonials/robert.jpg',
    quote: 'We consolidated three high-interest loans into one SBA 7(a) loan and cut our monthly payments by 40%. The Cashifi team found us a rate we didn\'t think was possible. Highly recommend for any growing business.',
    amount: '$1.5M',
    loanType: 'SBA 7(a)',
  },
  {
    name: 'Amanda Rodriguez',
    title: 'Founder',
    company: 'Verde Coffee Roasters',
    image: '/testimonials/amanda.jpg',
    quote: 'Purchasing our roasting facility seemed impossible until Cashifi. The CDC/504 program had perfect terms for commercial real estate. Our advisor walked us through everything — from application to closing in 45 days.',
    amount: '$2.1M',
    loanType: 'CDC/504',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
}

export default function Testimonials() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <div className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-sm font-medium tracking-wider uppercase text-gray-400">
              Client Success Stories
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            Trusted by{' '}
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Growing Businesses
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Join thousands of business owners who have secured SBA financing through our marketplace. 
            Real stories from real entrepreneurs who transformed their vision into reality.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative bg-[#111116] rounded-2xl border border-white/5 p-8 hover:border-white/10 transition-all duration-300"
            >
              {/* Quote icon */}
              <div className="absolute top-8 right-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-12 h-12 text-white" />
              </div>

              {/* Loan badge */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    testimonial.loanType === 'SBA 7(a)'
                      ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                      : testimonial.loanType === 'CDC/504'
                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                      : 'bg-orange-500/10 text-orange-400 border border-orange-500/20'
                  }`}
                >
                  {testimonial.loanType}
                </div>
                <div className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  {testimonial.amount}
                </div>
              </div>

              {/* Quote */}
              <p className="text-gray-400 leading-relaxed mb-8 relative z-10">
                "{testimonial.quote}"
              </p>

              {/* Author info */}
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden bg-gradient-to-br from-blue-500/20 to-emerald-500/20 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-emerald-500 opacity-50" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-bold text-white">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-white mb-1">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">
                    {testimonial.title}, {testimonial.company}
                  </div>
                </div>
              </div>

              {/* Hover gradient overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 via-transparent to-emerald-500/0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col items-center gap-6 px-12 py-10 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-6 h-6 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">4.9/5 Rating</div>
              <div className="text-gray-400">Based on 2,847+ verified reviews</div>
            </div>
            <div className="flex items-center gap-8 pt-4 border-t border-white/10">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">98%</div>
                <div className="text-sm text-gray-500">Would Recommend</div>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">4.2x</div>
                <div className="text-sm text-gray-500">Faster Than Banks</div>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">$0</div>
                <div className="text-sm text-gray-500">Application Fees</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}