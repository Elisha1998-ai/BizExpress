const testimonials = [
  {
    quote: "I must say they did a very great job for me and promptly. They know their job. I highly recommend them if you need someone to work on your business plan and other business document preparations.",
    author: "CEO, Cocomillacakery",
  },
  {
    quote: "With just one strategic comment under a post, They helped boost our vendor list sign-ups by up to 30%.",
    author: "CEO, Goldnlilies",
  },
  {
    quote: "The process was super smooth and fast! My CAC registration was completed in less than a week. The team was professional, always available to answer my questions, and made everything stress-free. I highly recommend them for anyone looking to register their business quickly",
    author: "CEO, Zharn Closet",
  },
  {
    quote: "Excellent service! They helped me handle my CAC registration seamlessly, and it was ready in under a week. Communication was clear, and the process was straightforward. I'm really impressed with how efficient and reliable they are.",
    author: "CEO, FolaDorm",
  },
  {
    quote: "These guys are my go-to for business plans! They've done over 50+ for me and my clients, always on point, detailed, and delivered fast. I don't even think twice before referring people to them. They always deliver.",
    author: "CEO, Papilopidea",
  },
  {
    quote: "Incredible experience! The team developed our business plan, created an effective content strategy, and now manage our social media pages. Their creativity, consistency, and professionalism have truly elevated our brand presence in the UK. Highly recommend!",
    author: "CEO Elitetidy",
  },
  {
    quote: "The CAC registration process was incredibly smooth and fast. Everything was completed in less than a week, and the team made it so easy from start to finish. I'm really impressed with their professionalism and efficiency.",
    author: "CEO, Bebest Lash",
  },
  {
    quote: "Excellent service! My CAC registration was processed in just a few days. The communication was clear, and the entire process was stress-free. I highly recommend their services to anyone starting a new business.",
    author: "CEO, Chi Delight",
  },
  {
    quote: "I was amazed at how quickly everything was handled. My CAC certificate was ready in less than a week, and the team kept me updated every step of the way. They truly deliver on their promise of fast, reliable service.",
    author: "CEO, Fruit Relish",
  },
  {
    quote: "I had such a great experience! My CAC registration was completed faster than I expected, and the process was seamless. The team is efficient, professional, and very supportive.",
    author: "CEO, JustABites Cake",
  },
  {
    quote: "Working with the team was a turning point for my business. They guided me in developing a strong business concept that helped me win a grant. Their expertise, strategy, and support were outstanding.",
    author: "CEO, Lightning Artz",
  }
];

export const TestimonialCarousel = () => {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
          >
            <div className="mb-4">
              <svg className="w-8 h-8 text-primary/30" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-5">
              {testimonial.quote}
            </p>
            <div className="pt-4 border-t border-gray-100">
              <p className="font-semibold text-primary text-sm">{testimonial.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
