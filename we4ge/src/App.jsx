import { useState } from "react";
import { Menu, Sparkles, Code, Palette, Cloud, Zap, Shield, Users, MessageCircle, Mail, Phone, MapPin, ArrowRight, Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#features", label: "Features" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom web applications built with modern technologies for optimal performance and scalability.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that delight users and drive engagement.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure that grows with your business needs.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Speed up your applications with our expert optimization services.",
  },
];

const features = [
  { icon: Sparkles, title: "AI-Powered", description: "Leverage cutting-edge AI to automate workflows" },
  { icon: Shield, title: "Enterprise Security", description: "Bank-grade security for your peace of mind" },
  { icon: Zap, title: "Lightning Fast", description: "Optimized for speed and performance" },
  { icon: Users, title: "Team Collaboration", description: "Work together seamlessly in real-time" },
  { icon: Cloud, title: "Cloud Native", description: "Built for modern cloud infrastructure" },
  { icon: MessageCircle, title: "24/7 Support", description: "Expert help whenever you need it" },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechFlow",
    avatar: "SJ",
    quote: "Working with this team transformed our business. The attention to detail and innovative solutions exceeded all our expectations.",
  },
  {
    name: "Michael Chen",
    role: "CTO, StartupHub",
    avatar: "MC",
    quote: "The best investment we've made. Our platform performance improved by 300% and our users couldn't be happier.",
  },
  {
    name: "Emily Rodriguez",
    role: "Product Lead, InnovateCo",
    avatar: "ER",
    quote: "Exceptional quality and professionalism. They delivered a product that truly understands our users' needs.",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">we4ge</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button variant="hero" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <Button variant="hero" size="lg" className="mt-4">
                  Get Started
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

const HeroSection = () => (
  <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
    {/* Background gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
    <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
    <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm">
            ✨ Launching something new
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Build the future with{" "}
            <span className="gradient-text">innovative</span> solutions
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
            Transform your ideas into powerful digital experiences. We craft beautiful, 
            high-performance applications that drive growth and delight users.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button variant="hero" size="xl">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Learn More
            </Button>
          </div>
        </div>

        {/* Right Content - Gradient Card */}
        <div className="relative">
          <div className="glass-card rounded-3xl p-8 animate-float">
            <div className="gradient-primary rounded-2xl p-8 text-primary-foreground">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary-foreground/20 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Analytics Dashboard</h3>
                  <p className="text-sm opacity-80">Real-time insights</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm opacity-80">Revenue Growth</span>
                  <span className="font-bold">+127%</span>
                </div>
                <div className="h-2 bg-primary-foreground/20 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-primary-foreground/60 rounded-full" />
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm opacity-80">User Engagement</span>
                  <span className="font-bold">+89%</span>
                </div>
                <div className="h-2 bg-primary-foreground/20 rounded-full overflow-hidden">
                  <div className="h-full w-2/3 bg-primary-foreground/60 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const AboutSection = () => (
  <section id="about" className="section-padding bg-secondary/30">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left - Image */}
        <div className="relative">
          <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 p-8 flex items-center justify-center">
            <div className="glass-card rounded-2xl p-6 w-full max-w-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-3xl font-bold">500+</p>
                  <p className="text-muted-foreground">Happy Clients</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center">
                  <Star className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <p className="text-3xl font-bold">4.9</p>
                  <p className="text-muted-foreground">Average Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right - Content */}
        <div>
          <Badge variant="secondary" className="mb-4">About Us</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            We build digital products that make an impact
          </h2>
          <p className="text-muted-foreground mb-4">
            Founded in 2020, we've grown from a small team of passionate developers to a 
            full-service digital agency. Our mission is to help businesses thrive in the 
            digital age through innovative technology solutions.
          </p>
          <p className="text-muted-foreground mb-6">
            We combine cutting-edge technology with creative design to deliver products 
            that not only look beautiful but perform exceptionally well.
          </p>
          <ul className="space-y-3">
            {[
              "Expert team with 10+ years experience",
              "Agile development methodology",
              "24/7 dedicated support",
              "Proven track record of success",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <div className="w-5 h-5 gradient-primary rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-primary-foreground" />
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const ServicesSection = () => (
  <section id="services" className="section-padding">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <Badge variant="secondary" className="mb-4">Our Services</Badge>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Solutions tailored to your needs
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We offer comprehensive digital services to help your business grow and succeed in the modern marketplace.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, i) => (
          <Card key={i} className="group glass-card border-0 hover-lift cursor-pointer">
            <CardContent className="p-6">
              <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <service.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const FeaturesSection = () => (
  <section id="features" className="section-padding bg-secondary/30">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <Badge variant="secondary" className="mb-4">Why Choose Us</Badge>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Built for modern teams
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Everything you need to build, scale, and succeed with your digital products.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, i) => (
          <div
            key={i}
            className="flex gap-4 p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/20 transition-colors"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
              <feature.icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const TestimonialsSection = () => (
  <section id="testimonials" className="section-padding">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <Badge variant="secondary" className="mb-4">Testimonials</Badge>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          What our clients say
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Don't just take our word for it — hear from some of our satisfied clients.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, i) => (
          <Card key={i} className="glass-card border-0">
            <CardContent className="p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6">"{testimonial.quote}"</p>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback className="gradient-primary text-primary-foreground">
                    {testimonial.avatar}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const CTASection = () => (
  <section className="section-padding">
    <div className="max-w-5xl mx-auto">
      <div className="gradient-primary rounded-3xl p-8 sm:p-12 lg:p-16 text-center text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_50%)]" />
        <div className="relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Ready to build something amazing?
          </h2>
          <p className="text-lg sm:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Let's work together to bring your vision to life. Start your journey today.
          </p>
          <Button 
            size="xl" 
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          >
            Contact Us
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  </section>
);

const ContactSection = () => (
  <section id="contact" className="section-padding bg-secondary/30">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <Badge variant="secondary" className="mb-4">Contact</Badge>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Get in touch
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Have a project in mind? We'd love to hear from you.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <Card className="glass-card border-0">
          <CardContent className="p-6 sm:p-8">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <Input placeholder="Your name" className="rounded-xl" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="your@email.com" className="rounded-xl" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea 
                  placeholder="Tell us about your project..." 
                  rows={5}
                  className="rounded-xl resize-none"
                />
              </div>
              <Button variant="hero" size="lg" className="w-full">
                Send Message
                <ArrowRight className="w-4 h-4" />
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">hello@we4ge.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">+1 234 567 890</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Address</p>
                  <p className="font-medium">123 Innovation Street, Tech City, TC 12345</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50">
            <h4 className="font-semibold mb-2">Quick Response</h4>
            <p className="text-sm text-muted-foreground">
              We typically respond within 24 hours. For urgent matters, 
              please call us directly.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-t border-border/50 py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">we4ge</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs">
            Building the future of digital experiences, one project at a time.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {["Home", "About", "Services", "Contact"].map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-semibold mb-4">Resources</h4>
          <ul className="space-y-2">
            {["Blog", "Documentation", "Help Center", "Privacy Policy"].map((link) => (
              <li key={link}>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-semibold mb-4">Follow Us</h4>
          <div className="flex gap-3">
            {["Twitter", "LinkedIn", "GitHub"].map((social) => (
              <a
                key={social}
                href="#"
                className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors"
              >
                <span className="text-xs font-medium">{social[0]}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
        © 2025 we4ge. All rights reserved.
      </div>
    </div>
  </footer>
);

const App = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
