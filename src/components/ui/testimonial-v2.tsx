import React from 'react';
import { motion } from "framer-motion";

// --- Types ---
interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

// --- Data ---
const testimonials: Testimonial[] = [
  {
    text: "I must say they did a very great job for me and promptly. They know their job. I highly recommend them if you need someone to work on your business plan and other business document preparations.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    name: "CEO",
    role: "Cocomillacakery",
  },
  {
    text: "With just one strategic comment under a post, They helped boost our vendor list sign-ups by up to 30%.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
    name: "CEO",
    role: "Goldnlilies",
  },
  {
    text: "The process was super smooth and fast! My CAC registration was completed in less than a week. The team was professional, always available to answer my questions, and made everything stress-free. I highly recommend them for anyone looking to register their business quickly",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
    name: "CEO",
    role: "Zharn Closet",
  },
  {
    text: "Excellent service! They helped me handle my CAC registration seamlessly, and it was ready in under a week. Communication was clear, and the process was straightforward. I'm really impressed with how efficient and reliable they are.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
    name: "CEO",
    role: "FolaDorm",
  },
  {
    text: "These guys are my go-to for business plans! They've done over 50+ for me and my clients, always on point, detailed, and delivered fast. I don't even think twice before referring people to them. They always deliver.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150",
    name: "CEO",
    role: "Papilopidea",
  },
  {
    text: "Incredible experience! The team developed our business plan, created an effective content strategy, and now manage our social media pages. Their creativity, consistency, and professionalism have truly elevated our brand presence in the UK. Highly recommend!",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150&h=150",
    name: "CEO",
    role: "Elitetidy",
  },
  {
    text: "The CAC registration process was incredibly smooth and fast. Everything was completed in less than a week, and the team made it so easy from start to finish. I'm really impressed with their professionalism and efficiency.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
    name: "CEO",
    role: "Bebest Lash",
  },
  {
    text: "Excellent service! My CAC registration was processed in just a few days. The communication was clear, and the entire process was stress-free. I highly recommend their services to anyone starting a new business.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
    name: "CEO",
    role: "Chi Delight",
  },
  {
    text: "I was amazed at how quickly everything was handled. My CAC certificate was ready in less than a week, and the team kept me updated every step of the way. They truly deliver on their promise of fast, reliable service.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150",
    name: "CEO",
    role: "Fruit Relish",
  },
  {
    text: "I had such a great experience! My CAC registration was completed faster than I expected, and the process was seamless. The team is efficient, professional, and very supportive.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=150&h=150",
    name: "CEO",
    role: "JustABites Cake",
  },
  {
    text: "Working with the team was a turning point for my business. They guided me in developing a strong business concept that helped me win a grant. Their expertise, strategy, and support were outstanding.",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e16fd3c?auto=format&fit=crop&q=80&w=150&h=150",
    name: "CEO",
    role: "Lightning Artz",
  }
];

const firstColumn = testimonials.slice(0, 4);
const secondColumn = testimonials.slice(4, 8);
const thirdColumn = testimonials.slice(8, 11);

// --- Sub-Components ---
const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.ul
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-transparent transition-colors duration-300 list-none m-0 p-0"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <motion.li 
                  key={`${index}-${i}`}
                  aria-hidden={index === 1 ? "true" : "false"}
                  tabIndex={index === 1 ? -1 : 0}
                  whileHover={{ 
                    scale: 1.03,
                    y: -8,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.05)",
                    transition: { type: "spring", stiffness: 400, damping: 17 }
                  }}
                  whileFocus={{ 
                    scale: 1.03,
                    y: -8,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.05)",
                    transition: { type: "spring", stiffness: 400, damping: 17 }
                  }}
                  className="p-10 rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow-lg shadow-black/5 max-w-xs w-full bg-white dark:bg-neutral-900 transition-all duration-300 cursor-default select-none group focus:outline-none focus:ring-2 focus:ring-primary/30" 
                >
                  <blockquote className="m-0 p-0">
                    <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal m-0 transition-colors duration-300">
                      {text}
                    </p>
                    <footer className="flex items-center gap-3 mt-6">
                      <div className="flex flex-col">
                        <cite className="font-semibold not-italic tracking-tight leading-5 text-neutral-900 dark:text-white transition-colors duration-300">
                          {name}
                        </cite>
                        <span className="text-sm leading-5 tracking-tight text-neutral-500 dark:text-neutral-500 mt-0.5 transition-colors duration-300">
                          {role}
                        </span>
                      </div>
                    </footer>
                  </blockquote>
                </motion.li>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.ul>
    </div>
  );
};

export const TestimonialsSection = () => {
  return (
    <section 
      aria-labelledby="testimonials-heading"
      className="bg-transparent py-24 relative overflow-hidden"
    >
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ 
          duration: 1.2, 
          ease: [0.16, 1, 0.3, 1],
          opacity: { duration: 0.8 }
        }}
        className="mx-auto w-[90%] sm:w-[80%] md:w-[85%] lg:w-[85%] px-6 sm:px-8 lg:px-12 z-10"
      >
        <div className="flex flex-col items-start justify-start mb-16">
          <div className="flex justify-start">
            <div className="border border-neutral-300 dark:border-neutral-700 py-1 px-4 rounded-full text-xs font-semibold tracking-wide uppercase text-neutral-600 dark:text-neutral-400 bg-neutral-100/50 dark:bg-neutral-800/50 transition-colors">
              Success Stories
            </div>
          </div>

          <h2 id="testimonials-heading" className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mt-6 text-left text-neutral-900 dark:text-white transition-colors">
            Success Stories
          </h2>
          <p className="text-left mt-5 text-neutral-500 dark:text-neutral-400 text-lg leading-relaxed max-w-sm transition-colors">
            Real results from real businesses
          </p>
        </div>

        <div 
          className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[740px] overflow-hidden"
          role="region"
          aria-label="Scrolling Testimonials"
        >
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </motion.div>
    </section>
  );
};

export default TestimonialsSection;
