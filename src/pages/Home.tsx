import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Clock, Target, Star } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Home = () => {
  const features = [
    {
      icon: Zap,
      title: "AI-Powered Content",
      description: "Generate stunning visuals and compelling captions with advanced AI technology."
    },
    {
      icon: Clock,
      title: "Smart Scheduling",
      description: "Schedule posts across multiple platforms with optimal timing recommendations."
    },
    {
      icon: Target,
      title: "Multi-Platform",
      description: "Post to Instagram, WhatsApp, Telegram, and Email from one dashboard."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      content: "Social Postify has revolutionized our content strategy. The AI-generated images are incredible!",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "Small Business Owner",
      content: "Saves me hours every week. The scheduling feature is a game-changer for my business.",
      rating: 5
    }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-2xl">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Social Postify Hero" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-primary opacity-80"></div>
        </div>
        <div className="relative z-10 p-12 text-center">
          <h1 className="text-5xl font-bold mb-6 text-white">
            AI-Powered Social Media
            <span className="block bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              Automation Platform
            </span>
          </h1>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Generate stunning content, schedule posts across multiple platforms, 
            and grow your social media presence with the power of AI.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/create">
              <Button size="lg" className="btn-gradient gap-2">
                Create Post <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button size="lg" variant="outline" className="btn-glass">
                View Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground text-lg">
            Three simple steps to transform your social media presence
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="glass-card p-6 text-center hover-glow">
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 glow-primary">
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Actions */}
      <section className="glass-card p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Get Started Now</h2>
          <p className="text-muted-foreground">
            Jump into the most popular features right away
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <Link to="/create" className="group">
            <div className="glass-surface p-6 rounded-lg group-hover:bg-glass/80 transition-smooth">
              <Zap className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-lg font-semibold mb-2">Create AI Post</h3>
              <p className="text-muted-foreground text-sm">
                Generate stunning visuals and captions with AI
              </p>
            </div>
          </Link>
          
          <Link to="/schedule" className="group">
            <div className="glass-surface p-6 rounded-lg group-hover:bg-glass/80 transition-smooth">
              <Clock className="w-8 h-8 text-accent mb-3" />
              <h3 className="text-lg font-semibold mb-2">Schedule Posts</h3>
              <p className="text-muted-foreground text-sm">
                Plan your content calendar with smart scheduling
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-muted-foreground text-lg">
            Join thousands of satisfied customers
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass-card p-6">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-foreground mb-4 italic">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-muted-foreground text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;