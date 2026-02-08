import { useState, useEffect } from "react";
import { 
  Menu, X, ChevronRight, ArrowRight, Check, Star, 
  Rocket, Target, TrendingUp, Award, Users, Globe,
  Smartphone, Layout, Database, Lock, Zap, BarChart,
  MessageSquare, Mail, MapPin, Phone, Linkedin, 
  Twitter, Instagram, Github, CheckCircle2, Play,
  ArrowUpRight, Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Our Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const services = [
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native iOS and Android applications with seamless user experiences and robust performance.",
  },
  {
    icon: Layout,
    title: "Web Applications",
    description: "Responsive web platforms built with modern frameworks and best practices.",
  },
  {
    icon: Database,
    title: "Backend Systems",
    description: "Scalable server architectures and API development for enterprise solutions.",
  },
  {
    icon: Lock,
    title: "Security Solutions",
    description: "Comprehensive security audits and implementation for your digital assets.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Speed and efficiency improvements that enhance user satisfaction.",
  },
  {
    icon: BarChart,
    title: "Analytics Integration",
    description: "Data-driven insights to help you make informed business decisions.",
  },
];

const projects = [
  {
    title: "FinanceHub",
    category: "Fintech",
    description: "Digital banking platform with real-time transactions",
    metrics: ["500K+ Users", "99.9% Uptime"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "MediConnect",
    category: "Healthcare",
    description: "Telemedicine platform connecting patients and doctors",
    metrics: ["200K+ Sessions", "4.8★ Rating"],
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "ShopFlow",
    category: "E-commerce",
    description: "Multi-vendor marketplace with AI recommendations",
    metrics: ["$10M+ GMV", "50K+ Products"],
    color: "from-purple-500 to-pink-500"
  },
];

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "VP Engineering",
    company: "TechVision Inc",
    avatar: "SM",
    quote: "Outstanding technical expertise and professionalism. They delivered beyond our expectations.",
  },
  {
    name: "James Anderson",
    role: "Product Director",
    company: "InnovateCo",
    avatar: "JA",
    quote: "The team's attention to detail and commitment to quality is remarkable. Highly recommended.",
  },
  {
    name: "Maria Garcia",
    role: "CTO",
    company: "StartupLabs",
    avatar: "MG",
    quote: "They transformed our vision into a robust, scalable solution. Excellent communication throughout.",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-background/80 backdrop-blur-md border-b border-border/40' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2 group">
           <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center bg-white">
  <img 
    src="/we4ge_2nd.png" 
    alt="Logo"
    className="w-full h-full object-contain"
  />
</div>

            <span className="text-lg font-semibold">we4ge</span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-secondary/50"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm" className="text-sm">
              Sign In
            </Button>
            <Button size="sm" className="text-sm">
              Get Started
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md hover:bg-secondary/50"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border/40">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-sm font-medium rounded-md hover:bg-secondary/50"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 space-y-2">
              <Button variant="outline" size="sm" className="w-full text-sm">
                Sign In
              </Button>
              <Button size="sm" className="w-full text-sm">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const HeroSection = () => (
  <section 
    id="home" 
    className="relative min-h-screen flex items-center pt-20 px-4 sm:px-6 lg:px-8 bg-background"
  >
    {/* Subtle background glow */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-background to-purple-500/5" />
    <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
    <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

    <div className="max-w-7xl mx-auto relative z-10 w-full">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <div className="space-y-6 text-left">
          <Badge 
            variant="secondary" 
            className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full"
          >
            <Sparkles className="w-3 h-3 text-blue-500" />
            Trusted by 100+ companies
          </Badge>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight">
            Build digital products that{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              stand out
            </span>
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
            We design and build modern, high-performance digital experiences using 
            cutting-edge technology, clean design, and scalable architecture.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="h-12 px-6">
              Start Your Project
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>

            <Button variant="outline" size="lg" className="h-12 px-6">
              View Our Work
            </Button>
          </div>

          {/* Social Proof */}
          <div className="flex items-center gap-6 pt-6">
            <div className="flex -space-x-2">
              {["A", "B", "C", "D"].map((letter, i) => (
                <Avatar key={i} className="w-9 h-9 border-2 border-background">
                  <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white text-xs font-medium">
                    {letter}
                  </AvatarFallback>
                </Avatar>
              ))}
            </div>

            <div className="text-sm">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-xs text-muted-foreground">From 500+ reviews</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE — Clean Dashboard Card */}
        <Card className="bg-gradient-to-br from-blue-50/60 to-purple-50/60 dark:from-blue-950/20 dark:to-purple-950/20 border border-border/40 backdrop-blur-sm shadow-lg rounded-2xl">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold">Project Dashboard</h3>
                <Badge variant="secondary" className="text-xs">
                  Live
                </Badge>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-background/60 backdrop-blur-sm rounded-lg p-4 border border-border/40">
                  <TrendingUp className="w-5 h-5 text-blue-600 mb-2" />
                  <div className="text-2xl font-bold">150+</div>
                  <div className="text-xs text-muted-foreground">Projects</div>
                </div>

                <div className="bg-background/60 backdrop-blur-sm rounded-lg p-4 border border-border/40">
                  <Award className="w-5 h-5 text-purple-600 mb-2" />
                  <div className="text-2xl font-bold">98%</div>
                  <div className="text-xs text-muted-foreground">Satisfaction</div>
                </div>
              </div>

              <div className="bg-background/60 backdrop-blur-sm rounded-lg p-4 border border-border/40">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-medium">Performance</span>
                  <span className="text-sm font-bold">95%</span>
                </div>
                <div className="w-full bg-secondary/50 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                    style={{ width: "95%" }}
                  ></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  </section>
);

const StatsSection = () => (
  <section className="py-12 px-4 sm:px-6 lg:px-8 bg-secondary/30">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { value: "150+", label: "Projects Completed" },
          { value: "98%", label: "Client Satisfaction" },
          { value: "50+", label: "Team Members" },
          { value: "15", label: "Countries Served" },
        ].map((stat, i) => (
          <div key={i} className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-1">
              {stat.value}
            </div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ServicesSection = () => (
  <section id="services" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <Badge variant="secondary" className="mb-3 text-xs">Services</Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          What we do best
        </h2>
        <p className="text-muted-foreground">
          Comprehensive digital solutions tailored to your business needs
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <Card key={i} className="group hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-950/20 flex items-center justify-center mb-4 group-hover:bg-blue-100 dark:group-hover:bg-blue-950/30 transition-colors">
                <service.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const WorkSection = () => (
  <section id="work" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
    <div className="max-w-6xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <Badge variant="secondary" className="mb-3 text-xs">Portfolio</Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Featured projects
        </h2>
        <p className="text-muted-foreground">
          Real-world solutions that deliver measurable results
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <Card key={i} className="group overflow-hidden hover:shadow-lg transition-shadow">
            <div className={`h-40 bg-gradient-to-br ${project.color} relative`}>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              <div className="absolute top-4 left-4">
                <Badge className="bg-white/90 text-gray-900 text-xs">
                  {project.category}
                </Badge>
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.metrics.map((metric, j) => (
                  <Badge key={j} variant="secondary" className="text-xs">
                    {metric}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const AboutSection = () => (
  <section id="about" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <Badge variant="secondary" className="mb-3 text-xs">About Us</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Building digital excellence since 2018
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            We're a team of passionate developers, designers, and strategists dedicated to 
            creating digital experiences that make a difference. Our approach combines technical 
            expertise with creative thinking to deliver solutions that drive real business value.
          </p>
          
          <div className="space-y-3">
            {[
              "Expert team with 10+ years combined experience",
              "Agile methodology for faster delivery",
              "Dedicated support and maintenance",
              "Transparent communication throughout",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: Users, value: "50+", label: "Team Members" },
            { icon: Award, value: "98%", label: "Success Rate" },
            { icon: Globe, value: "15", label: "Countries" },
            { icon: Rocket, value: "150+", label: "Projects" },
          ].map((item, i) => (
            <Card key={i}>
              <CardContent className="p-6 text-center">
                <item.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <div className="text-2xl font-bold mb-1">{item.value}</div>
                <div className="text-xs text-muted-foreground">{item.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const TestimonialsSection = () => (
  <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
    <div className="max-w-6xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <Badge variant="secondary" className="mb-3 text-xs">Testimonials</Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          What clients say
        </h2>
        <p className="text-muted-foreground">
          Trusted by businesses around the world
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t">
                <Avatar className="w-10 h-10">
                  <AvatarFallback className="bg-gradient-to-br from-blue-600 to-purple-600 text-white text-xs">
                    {testimonial.avatar}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="text-sm font-semibold">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="secondary" className="mb-3 text-xs">Contact</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's work together
          </h2>
          <p className="text-muted-foreground">
            Have a project in mind? We'd love to hear about it.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="md:col-span-2">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Name</label>
                    <Input 
                      placeholder="John Doe" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="h-10"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input 
                      type="email"
                      placeholder="john@example.com" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="h-10"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea 
                    placeholder="Tell us about your project..." 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={5}
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-950/20 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium mb-1">Email</div>
                    <a href="mailto:we4ge.lalit@gmail.com" className="text-sm text-muted-foreground hover:text-foreground">
                      we4ge.lalit@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-50 dark:bg-purple-950/20 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium mb-1">Phone</div>
                    <a href="tel:+1234567890" className="text-sm text-muted-foreground hover:text-foreground">
                      +91 9325443405
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-green-50 dark:bg-green-950/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium mb-1">Office</div>
                    <p className="text-sm text-muted-foreground">
                     Pune
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-3">
              {[Linkedin, Twitter, Github, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-secondary hover:bg-secondary/80 flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTASection = () => (
  <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-purple-600">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Ready to start your project?
      </h2>
      <p className="text-lg text-white/90 mb-8">
        Let's discuss how we can help bring your vision to life.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Button size="lg" className="bg-white text-blue-600 hover:bg-white/90">
          Get Started
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
        <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
          Schedule a Call
        </Button>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t">
    <div className="max-w-6xl mx-auto">
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
        <div className="sm:col-span-2">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center bg-white">
  <img 
    src="/we4ge_2nd.png" 
    alt="Logo"
    className="w-full h-full object-contain"
  />
</div>

            <span className="text-lg font-semibold">we4ge</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs mb-4">
            Creating exceptional digital experiences for businesses worldwide.
          </p>
          <div className="flex gap-2">
            {[Linkedin, Twitter, Github, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-lg bg-secondary hover:bg-secondary/80 flex items-center justify-center transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-3">Company</h4>
          <ul className="space-y-2">
            {["About", "Services", "Work", "Contact"].map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-foreground">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-3">Resources</h4>
          <ul className="space-y-2">
            {["Blog", "Case Studies", "Support", "Privacy"].map((link) => (
              <li key={link}>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="pt-8 border-t text-center sm:flex sm:justify-between sm:text-left">
        <p className="text-sm text-muted-foreground">
          © 2025 we4ge. All rights reserved.
        </p>
        <div className="flex gap-4 justify-center sm:justify-start mt-4 sm:mt-0">
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Privacy</a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Terms</a>
        </div>
      </div>
    </div>
  </footer>
);

const App = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <WorkSection />
      <AboutSection />
      <TestimonialsSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;