'use client';

import { motion } from 'framer-motion';
import { Shield, Lock, Award, CheckCircle } from 'lucide-react';

const badges = [
  {
    icon: Shield,
    title: 'SBA Approved Partner',
    description: 'Official SBA lending partner',
    color: '#3B82F6'
  },
  {
    icon: Lock,
    title: 'Bank-Level Security',
    description: '256-bit encryption',
    color: '#10B981'
  },
  {
    icon: Award,
    title: 'Licensed & Regulated',
    description: 'All lenders fully vetted',
    color: '#3B82F6'
  },
  {
    icon: CheckCircle,
    title: 'BBB A+ Rating',
    description: 'Trusted by businesses nationwide',
    color: '#10B981'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const badgeVariants = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.4, 0.25, 1]
    }
  }
};

export default function TrustBadges() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-blue-400 uppercase tracking-[0.1em] mb-4">
            TRUSTED & SECURE
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Enterprise-Grade Security
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Your business data and financial information are protected by industry-leading security standards
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={index}
                variants={badgeVariants}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="relative group"
              >
                <div className="relative bg-[#111116] border border-white/5 rounded-2xl p-8 h-full transition-all duration-300 hover:border-white/10">
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(circle at top, ${badge.color}15, transparent 70%)`
                    }}
                  />
                  
                  <div className="relative">
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                      style={{
                        background: `linear-gradient(135deg, ${badge.color}20, ${badge.color}10)`
                      }}
                    >
                      <Icon 
                        className="w-7 h-7" 
                        style={{ color: badge.color }}
                      />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-2 tracking-tight">
                      {badge.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {badge.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3">
            <Lock className="w-4 h-4 text-green-400" />
            <span className="text-sm font-medium text-gray-300">
              All data encrypted end-to-end • SOC 2 Type II Certified • FDIC Insured Partners
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}