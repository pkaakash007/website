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
          <p className="text-xs font-mono uppercase tracking-widest font-bold text-primary">
            404 · Page Not Found
          </p>

          <h1 className="text-5xl sm:text-7xl font-black text-primary tracking-tight uppercase">
            LOST IN <span className="text-gold-700">THE</span> STREAM.
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
