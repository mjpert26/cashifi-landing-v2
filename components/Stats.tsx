'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Users, Zap, CheckCircle } from 'lucide-react';

const stats = [
  {
    icon: Users,
    number: '500+',
    label: 'Licensed Lenders',
    color: 'from-blue-500 to-blue-600',
    iconColor: 'text-blue-400',
  },
  {
    icon: TrendingUp,
    number: '$2B+',
    label: 'Businesses Funded',
    color: 'from-emerald-500 to-emerald-600',
    iconColor: 'text-emerald-400',
  },
  {
    icon: Zap,
    number: '48-Hour',
    label: 'Approval Time',
    color: 'from-orange-500 to-orange-600',
    iconColor: 'text-orange-400',
  },
  {
    icon: CheckCircle,
    number: '95%',
    label: 'Approval Rate',
    color: 'from-blue-500 to-emerald-500',
    iconColor: 'text-blue-400',
  },
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

export default function Stats() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -4 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl -z-10 from-blue-500/20 to-emerald-500/20" />
                
                <div className="relative bg-[#111116] rounded-2xl border border-white/5 p-8 hover:border-white/10 transition-all duration-300">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} bg-opacity-10 mb-6`}>
                    <Icon className={`w-6 h-6 ${stat.iconColor}`} />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-5xl font-bold text-white tracking-tight">
                      {stat.number}
                    </h3>
                    <p className="text-base font-medium text-gray-400 tracking-wide">
                      {stat.label}
                    </p>
                  </div>
                  
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}