import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, Calendar, Heart, Brain, Users } from "lucide-react";
import heroImage from "@/assets/hero-therapy.jpg";
import therapistPortrait from "@/assets/therapist-portrait.jpg";
import therapySession from "@/assets/therapy-session.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-foreground">Dr. Sarah Mitchell</h2>
            <div className="flex gap-6">
              <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About Me
              </a>
              <a href="#psychotherapy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Psychotherapy
              </a>
              <a href="#book" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Book Session
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-20">
        <div className="relative h-[600px] overflow-hidden">
          <img 
            src={heroImage} 
            alt="Calm and modern therapy office with natural lighting" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl">
                <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                  Your Journey to Wellness Begins Here
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Licensed psychotherapist offering compassionate, evidence-based therapy in a safe and supportive environment
                </p>
                <Button size="lg" className="text-base" asChild>
                  <a href="#book">Schedule a Consultation</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* About Me Section */}
      <section id="about" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl font-bold text-foreground mb-6">About Me</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  With over 15 years of experience in clinical psychology, I specialize in helping individuals 
                  navigate life's challenges with compassion and evidence-based therapeutic approaches.
                </p>
                <p>
                  My practice is built on the belief that every person has the capacity for growth and healing. 
                  I work collaboratively with my clients to create a personalized treatment plan that addresses 
                  their unique needs and goals.
                </p>
                <p>
                  I hold a Ph.D. in Clinical Psychology from Stanford University and am licensed by the California 
                  Board of Psychology. I maintain active membership in the American Psychological Association and 
                  regularly engage in continuing education to stay current with the latest therapeutic techniques.
                </p>
              </div>
              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3 text-foreground">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>sarah.mitchell@therapy.com</span>
                </div>
                <div className="flex items-center gap-3 text-foreground">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>(555) 123-4567</span>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src={therapistPortrait} 
                alt="Dr. Sarah Mitchell - Licensed Psychotherapist" 
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Psychotherapy Section */}
      <section id="psychotherapy" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Psychotherapy Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I offer a range of therapeutic approaches tailored to your individual needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Cognitive Behavioral Therapy</h3>
              <p className="text-muted-foreground">
                Evidence-based approach focusing on identifying and changing negative thought patterns 
                and behaviors to improve emotional regulation and develop personal coping strategies.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Mindfulness-Based Therapy</h3>
              <p className="text-muted-foreground">
                Integrating mindfulness practices to help you develop present-moment awareness, 
                reduce stress, and cultivate a more balanced relationship with your thoughts and emotions.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Relationship Counseling</h3>
              <p className="text-muted-foreground">
                Supporting individuals and couples in building healthier relationships through 
                improved communication, conflict resolution, and emotional connection.
              </p>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={therapySession} 
                alt="Peaceful therapy session setting with comfortable seating" 
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">What to Expect</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">Initial Consultation</h4>
                  <p className="text-muted-foreground">
                    We'll start with a comprehensive assessment to understand your concerns, 
                    goals, and develop a personalized treatment plan.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">Ongoing Sessions</h4>
                  <p className="text-muted-foreground">
                    Regular 50-minute sessions in a confidential, supportive environment where 
                    we work collaboratively toward your goals.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">Flexible Approach</h4>
                  <p className="text-muted-foreground">
                    Treatment plans are adapted as needed to ensure you're making progress and 
                    feeling supported throughout your therapeutic journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book a Session Section */}
      <section id="book" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Calendar className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-foreground mb-6">Ready to Begin?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Taking the first step toward therapy is an act of courage. I'm here to support you 
              on your journey to better mental health and wellbeing.
            </p>
            
            <Card className="p-8 mb-8">
              <div className="space-y-6 text-left">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Session Information</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Individual therapy sessions: 50 minutes</li>
                    <li>• Evening and weekend appointments available</li>
                    <li>• Teletherapy options for remote sessions</li>
                    <li>• Initial consultation: complimentary 15-minute phone call</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Insurance & Fees</h3>
                  <p className="text-muted-foreground">
                    I accept most major insurance plans. Please contact me to verify your coverage. 
                    Self-pay options and sliding scale fees are available based on financial need.
                  </p>
                </div>
              </div>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-base">
                <Phone className="w-5 h-5 mr-2" />
                Call (555) 123-4567
              </Button>
              <Button size="lg" variant="outline" className="text-base">
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/30 py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <h3 className="text-xl font-semibold text-foreground">Dr. Sarah Mitchell, Ph.D.</h3>
            <p className="text-muted-foreground">Licensed Clinical Psychologist</p>
            <div className="flex justify-center gap-8 text-sm text-muted-foreground">
              <span>License #PSY12345</span>
              <span>•</span>
              <span>California Board of Psychology</span>
            </div>
            <p className="text-sm text-muted-foreground pt-4">
              © 2024 All rights reserved. Confidential therapeutic services.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;