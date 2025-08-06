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
    <div className="space-y-24 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Social Postify Hero" 
            className="w-full h-full object-cover opacity-30 scale-105 transition-transform duration-700 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-primary opacity-90"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-transparent to-pink-900/50"></div>
        </div>
        <div className="relative z-10 w-full px-8 md:px-16 py-20 text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-white leading-tight">
              AI-Powered Social Media
              <span className="block bg-gradient-to-r from-purple-200 via-pink-200 to-purple-300 bg-clip-text text-transparent mt-2 animate-pulse">
                Automation Platform
              </span>
            </h1>
            <p className="text-lg md:text-xl text-purple-100/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Generate stunning content, schedule posts across multiple platforms, 
              and grow your social media presence with the power of AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/create" className="group">
                <Button size="lg" className="btn-gradient gap-3 px-8 py-4 text-lg shadow-elevated hover-scale">
                  Create Post <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/dashboard" className="group">
                <Button size="lg" variant="outline" className="btn-glass px-8 py-4 text-lg border-white/30 hover:border-white/50">
                  View Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 gradient-primary rounded-full opacity-60 animate-bounce" style={{animationDelay: '0s'}}></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 gradient-surface rounded-full opacity-40 animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-20 w-12 h-12 bg-white/20 rounded-full opacity-50 animate-bounce" style={{animationDelay: '2s'}}></div>
      </section>

      {/* How It Works */}
      <section className="px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed">
            Three simple steps to transform your social media presence
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card p-8 text-center hover-glow group cursor-pointer transition-all duration-500 hover:scale-105"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 gradient-primary rounded-2xl flex items-center justify-center mx-auto glow-primary group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center text-accent font-bold text-sm">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-accent transition-colors">{feature.title}</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Actions */}
      <section className="relative px-4">
        <div className="glass-card p-12 shadow-elevated">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
              Get Started Now
            </h2>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
              Jump into the most popular features right away
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link to="/create" className="group">
              <div className="glass-surface p-8 rounded-2xl group-hover:bg-glass/80 transition-all duration-300 hover:scale-105 shadow-elevated">
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-6 glow-primary group-hover:scale-110 transition-transform">
                  <Zap className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">Create AI Post</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Generate stunning visuals and captions with AI
                </p>
              </div>
            </Link>
            
            <Link to="/schedule" className="group">
              <div className="glass-surface p-8 rounded-2xl group-hover:bg-glass/80 transition-all duration-300 hover:scale-105 shadow-elevated">
                <div className="w-16 h-16 gradient-surface rounded-2xl flex items-center justify-center mb-6 glow-accent group-hover:scale-110 transition-transform">
                  <Clock className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">Schedule Posts</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Plan your content calendar with smart scheduling
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            What Our Users Say
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed">
            Join thousands of satisfied customers transforming their social media presence
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="glass-card p-8 hover-glow group cursor-pointer transition-all duration-500 hover:scale-105 relative"
              style={{animationDelay: `${index * 0.3}s`}}
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 gradient-primary rounded-2xl flex items-center justify-center text-primary-foreground font-bold text-xl shadow-elevated">
                "
              </div>
              <div className="flex items-center gap-2 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-accent text-accent glow-accent" />
                ))}
              </div>
              <p className="text-foreground mb-6 italic text-lg leading-relaxed group-hover:text-accent transition-colors">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 gradient-surface rounded-full flex items-center justify-center text-accent font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-lg">{testimonial.name}</p>
                  <p className="text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;