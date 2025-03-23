import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "../ui/button";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Senior Developer",
    company: "TechCorp",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "As a first-time investor, I always felt overwhelmed by the amount of information out there. This dashboard changed everything! The AI-based financial advice tailored to my goals helped me make smarter investment decisions. Plus, the tax calculation feature ensures I understand my obligations, which is such a relief!.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Full Stack Engineer",
    company: "StartupX",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    quote:
      "The interactive visualizations are a game-changer! I can easily track my investments, see how my portfolio is performing, and even visualize potential future outcomes. The seamless integration with real-time market data means I’m always up-to-date on my investments without having to search multiple sources",
    rating: 5,
  },
  {
    id: 3,
    name: "Miguel Rodriguez",
    role: "CS Student",
    company: "University of Tech",
    avatar: "https://randomuser.me/api/portraits/men/67.jpg",
    quote:
      "I love how the dashboard is personalized to my financial goals. The secure login system makes it easy for me to access my account, and I can track everything in one place. The AI-powered advisory has helped me make decisions that align with my risk tolerance and financial aspirations.",
    rating: 4,
  },
  {
    id: 4,
    name: "Priya Sharma",
    role: "Engineering Lead",
    company: "GlobalSoft",
    avatar: "https://randomuser.me/api/portraits/women/63.jpg",
    quote:
      "This dashboard has made managing my investment portfolio a breeze. The integration with real-time financial data keeps me informed, while the personalized tax advice helps me stay compliant with the latest regulations. It feels like a one-stop-shop for all my investment needs!",
    rating: 5,
  },
];

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleNext = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

    // Reset isAnimating after animation completes
    setTimeout(() => setIsAnimating(false), 600);
  };

  const handlePrevious = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

    setTimeout(() => setIsAnimating(false), 600);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;

    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrevious();
    }

    setTouchStart(null);
  };

  // Auto-advance testimonials
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      handleNext();
    }, 5000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [activeIndex, isAnimating]);

  return (
    <section id="testimonials" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold text-zinc-300 mb-6">
            What Our Users Say
          </h2>
          <p className="text-zinc-500 text-lg">
            Discover how developers around the world are transforming their
            coding skills with our platform.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Wrapper for correct positioning of arrows */}
          <div className="relative flex items-center">
            {/* Left Button */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 border-none -translate-x-12 hidden md:flex z-20"
              onClick={handlePrevious}
              disabled={isAnimating}
            >
              <ChevronLeft className="h-10 w-10" />
            </Button>

            {/* Testimonial Content */}
            <div className="relative overflow-hidden rounded-2xl border border-zinc-700 bg-gradient-to-br from-zinc-800 via-zinc-950 to-zinc-800 p-8 md:p-10 flex-1">
              <div className="relative z-10 min-h-[200px] flex items-center">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className={`transition-opacity duration-500 ease-in-out ${
                      index === activeIndex
                        ? "opacity-100 block"
                        : "opacity-0 hidden"
                    }`}
                  >
                    <div className="md:flex text-zinc-300 items-start gap-8">
                      {/* Image */}
                      <div className="mb-6 md:mb-0">
                        <div className="rounded-lg overflow-hidden h-20 w-20 md:h-24 md:w-24 border border-border">
                          <img
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      {/* Text Content */}
                      <div className="flex-1">
                        <p className="text-lg mb-6">"{testimonial.quote}"</p>
                        <div>
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role} at {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Button */}
            <Button
              variant="outline"
              size="icon"
              className="absolute border-none right-0 translate-x-12 md:flex z-20"
              onClick={handleNext}
              disabled={isAnimating}
            >
              <ChevronRight className="h-10 w-10" />
            </Button>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (isAnimating) return;
                  setIsAnimating(true);
                  setActiveIndex(index);
                  setTimeout(() => setIsAnimating(false), 600);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeIndex ? "bg-primary w-4" : "bg-primary/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
