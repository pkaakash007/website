import React, { useEffect } from "react";
import { Container } from "@/components/layout/Container";
import { Star, ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/common/Button";

const GOOGLE_REVIEW_URL =
  "https://search.google.com/local/writereview?placeid=ChIJCeVk0hrVqzsRp7foI1ppMUo";

export const ReviewPage: React.FC = () => {
  useEffect(() => {
    // Attempt automatic instant redirect to Google Review Modal
    const timer = setTimeout(() => {
      window.location.href = GOOGLE_REVIEW_URL;
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-canvas flex flex-col justify-center items-center py-20 px-4">
      <Container size="sm">
        <div className="max-w-md mx-auto p-8 sm:p-10 rounded-3xl bg-white border border-border shadow-card text-center space-y-6">
          {/* Animated 5 Stars */}
          <div className="flex justify-center items-center gap-1.5 text-gold-500">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star
                key={s}
                className="w-7 h-7 fill-gold text-gold animate-bounce"
                style={{ animationDelay: `${s * 100}ms` }}
              />
            ))}
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-primary">
              Review Real Result
            </h1>
            <p className="text-sm text-secondary leading-relaxed">
              Redirecting you directly to our official Google Review form...
            </p>
          </div>

          <div className="py-2">
            <div className="w-12 h-1 bg-gold/30 rounded-full mx-auto animate-pulse" />
          </div>

          <div className="space-y-3 pt-2">
            <a
              href={GOOGLE_REVIEW_URL}
              className="inline-flex w-full items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-primary text-white text-sm font-semibold hover:bg-black transition-all shadow-md"
            >
              <span>Click to Open Review Modal</span>
              <ExternalLink className="w-4 h-4 text-gold" />
            </a>

            <p className="text-xs text-muted">
              If the Google review window doesn't open automatically, click the button above.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ReviewPage;
