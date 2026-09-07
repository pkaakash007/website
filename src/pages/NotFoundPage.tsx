import React from "react";
import { Link } from "react-router-dom";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/common/Button";
import { Compass, ArrowRight } from "lucide-react";

export const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] py-20 bg-canvas text-center">
      <Container size="sm">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-50 border border-gold-300 text-gold-900 text-xs font-mono uppercase tracking-widest font-bold">
            <Compass className="w-3.5 h-3.5 text-gold-600 animate-spin" />
            <span>404 · Page Not Found</span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-black text-primary tracking-tight uppercase">
            LOST IN <span className="text-gold font-serif italic font-normal lowercase">the</span> STREAM.
          </h1>

          <p className="text-base sm:text-lg text-secondary max-w-md mx-auto leading-relaxed">
            The page or resource you are seeking has moved, expired, or does not exist in our network.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Button variant="gold" size="md" withArrow href="/">
              Return to Homepage
            </Button>
            <Button variant="secondary" size="md" href="/marketing">
              Explore Marketing
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NotFoundPage;
