import React from 'react'
import { motion } from 'framer-motion'
import { 
  Apple, 
  Facebook, 
  Github, 
  Linkedin, 
  Twitter, 
  Youtube,
  Slack,
  Chrome
} from 'lucide-react'

const companyLogos = [
  { name: 'Apple', Icon: Apple },
  { name: 'Facebook', Icon: Facebook },
  { name: 'Github', Icon: Github },
  { name: 'LinkedIn', Icon: Linkedin },
  { name: 'Twitter', Icon: Twitter },
  { name: 'YouTube', Icon: Youtube },
  { name: 'Slack', Icon: Slack },
  { name: 'Chrome', Icon: Chrome },
]

export default function CompanyLogosSlider() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-50 py-16">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] bg-fixed"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-12">
            We use the same technologies as
          </h2>
        </motion.div>
        <div className="relative overflow-hidden">
          <div className="flex">
            <motion.div
              className="flex space-x-16"
              animate={{
                x: ["0%", "-50%"]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
            >
              {[...companyLogos, ...companyLogos].map((logo, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 flex flex-col items-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <logo.Icon size={48} className="text-gray-600 hover:text-purple-600 transition-colors duration-300" />
                  <motion.span
                    className="mt-2 text-sm font-medium text-gray-700"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {logo.name}
                  </motion.span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}