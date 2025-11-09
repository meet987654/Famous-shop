import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MessageCircle, Facebook, Instagram, MapPin, Clock, ShoppingBag, Users, Heart, Moon, Sun, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import heroImage from "@/assets/stock_images/clothing_store_displ_8a16cec3.jpg";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem('theme') === 'dark';
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-4">
            <button 
              onClick={() => scrollToSection('hero')}
              className="font-['Poppins'] text-xl md:text-2xl font-semibold text-primary hover-elevate active-elevate-2 px-3 py-1 rounded-md -ml-3"
              data-testid="link-home"
            >
              FAMOUS
            </button>
            
            <nav className="hidden md:flex items-center gap-1">
              <Button 
                variant="ghost" 
                onClick={() => scrollToSection('about')}
                data-testid="link-about"
              >
                About
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => scrollToSection('products')}
                data-testid="link-products"
              >
                Products
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => scrollToSection('contact')}
                data-testid="link-contact"
              >
                Contact
              </Button>
            </nav>

            <div className="flex items-center gap-2">
              <Button
                onClick={() => scrollToSection('contact')}
                className="hidden sm:inline-flex"
                data-testid="button-contact-header"
              >
                Contact Us
              </Button>
              <Button
                size="icon"
                variant="ghost"
                onClick={toggleTheme}
                data-testid="button-theme-toggle"
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                data-testid="button-mobile-menu"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t py-4">
              <nav className="flex flex-col gap-2">
                <Button 
                  variant="ghost" 
                  onClick={() => scrollToSection('about')}
                  className="justify-start"
                  data-testid="link-mobile-about"
                >
                  About
                </Button>
                <Button 
                  variant="ghost" 
                  onClick={() => scrollToSection('products')}
                  className="justify-start"
                  data-testid="link-mobile-products"
                >
                  Products
                </Button>
                <Button 
                  variant="ghost" 
                  onClick={() => scrollToSection('contact')}
                  className="justify-start"
                  data-testid="link-mobile-contact"
                >
                  Contact
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-300"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        
        {/* Enhanced Multi-layer Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background/85 to-accent/15"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/75 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background)/0.3)_100%)]"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center z-10">
          {/* Badge with Animation */}
          <div className="inline-flex items-center gap-2 bg-primary/15 backdrop-blur-sm border border-primary/20 text-primary px-5 py-2.5 rounded-full text-sm font-medium mb-8 shadow-lg animate-fade-in">
            <Heart className="h-4 w-4 animate-pulse" />
            <span>Trusted Family Service Since Years</span>
          </div>
          
          {/* Main Heading with Enhanced Typography */}
          <div className="mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h1 className="font-['Poppins'] text-6xl md:text-7xl lg:text-8xl font-bold mb-2 bg-gradient-to-r from-primary via-foreground to-accent bg-clip-text text-transparent drop-shadow-2xl leading-tight">
              FAMOUS
            </h1>
            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
              <ShoppingBag className="h-6 w-6 text-primary" />
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            </div>
          </div>
          
          {/* Subtitle with Enhanced Styling */}
          <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-5 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            The Family Undergarment Shop
          </p>
          
          {/* Description with Better Contrast */}
          <p className="text-base md:text-lg lg:text-xl text-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed font-medium animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Quality undergarments for the whole family. We provide comfortable, durable products with trusted service you can count on.
          </p>
          
          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg"
              className="text-base px-10 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection('contact')}
              data-testid="button-hero-contact"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Contact Us Now
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="text-base px-10 py-6 bg-background/70 backdrop-blur-md border-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection('products')}
              data-testid="button-hero-products"
            >
              <ShoppingBag className="mr-2 h-5 w-5" />
              View Products
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-16 text-sm text-foreground/70 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <span className="font-medium">Family Owned</span>
            </div>
            <div className="w-px h-4 bg-border"></div>
            <div className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-accent" />
              <span className="font-medium">Quality Guaranteed</span>
            </div>
            <div className="w-px h-4 bg-border"></div>
            <div className="flex items-center gap-2">
              <ShoppingBag className="h-5 w-5 text-primary" />
              <span className="font-medium">Wide Selection</span>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-foreground/30 rounded-full p-1">
            <div className="w-1.5 h-2 bg-foreground/30 rounded-full mx-auto animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">About FAMOUS</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="space-y-8">
            <p className="text-lg md:text-xl text-center text-muted-foreground leading-relaxed">
              At FAMOUS, we understand that quality undergarments are essential for every family member's comfort and confidence. Our shop has been serving families with premium quality products, combining durability with affordability.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
              <Card className="hover-elevate">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Family Focused</h3>
                  <p className="text-sm text-muted-foreground">
                    Products for every family member, from children to adults
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hover-elevate">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Quality First</h3>
                  <p className="text-sm text-muted-foreground">
                    Premium materials and careful selection for lasting comfort
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hover-elevate">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShoppingBag className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Trusted Service</h3>
                  <p className="text-sm text-muted-foreground">
                    Friendly assistance and guidance for all your needs
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Our Product Range</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quality undergarments designed for comfort and durability, available for the entire family
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover-elevate overflow-hidden" data-testid="card-category-men">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShoppingBag className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">Men's</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground">
                  Comfortable and durable undergarments designed for men. Quality fabrics that provide all-day comfort and support.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover-elevate overflow-hidden" data-testid="card-category-women">
              <div className="aspect-square bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-10 w-10 text-accent" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">Women's</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground">
                  Elegant and comfortable undergarments for women. Designed with care for both style and everyday comfort.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover-elevate overflow-hidden" data-testid="card-category-children">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/5 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">Children's</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground">
                  Soft and gentle undergarments for kids. Safe, comfortable materials perfect for growing children.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're here to help! Reach out to us through any of these channels
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            <Card className="hover-elevate" data-testid="card-contact-email">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-sm text-muted-foreground mb-4 break-words">Send us a message</p>
                <Button 
                  variant="outline"
                  size="sm"
                  asChild
                  className="w-full"
                  data-testid="button-email"
                >
                  <a href="mailto:famousundergarmentbardoli@gmail.com">
                    Email Us
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover-elevate" data-testid="card-contact-whatsapp">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">WhatsApp</h3>
                <p className="text-sm text-muted-foreground mb-4">Chat with us</p>
                <Button 
                  variant="outline"
                  size="sm"
                  asChild
                  className="w-full"
                  data-testid="button-whatsapp"
                >
                  <a href="https://wa.me/919638349438" target="_blank" rel="noopener noreferrer">
                    WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover-elevate" data-testid="card-contact-instagram">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Instagram className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Instagram</h3>
                <p className="text-sm text-muted-foreground mb-4">Follow us</p>
                <Button 
                  variant="outline"
                  size="sm"
                  asChild
                  className="w-full"
                  data-testid="button-instagram"
                >
                  <a href="https://www.instagram.com/famous_undergarment_bardoli?igsh=MWZtdncxeXYxYXZkNw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
                    Visit Profile
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover-elevate" data-testid="card-contact-facebook">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Facebook className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Facebook</h3>
                <p className="text-sm text-muted-foreground mb-4">Follow us</p>
                <Button 
                  variant="outline"
                  size="sm"
                  asChild
                  className="w-full"
                  data-testid="button-facebook"
                >
                  <a href="https://www.facebook.com/share/1N5CGyrvMQ/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                    Visit Page
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover-elevate" data-testid="card-contact-phone">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-sm text-muted-foreground mb-4">Call us directly</p>
                <Button 
                  variant="outline"
                  size="sm"
                  asChild
                  className="w-full"
                  data-testid="button-phone"
                >
                  <a href="tel:+919638349438">
                    Call Now
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card data-testid="card-business-hours">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Business Hours</h3>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>Daily: 9:30 AM - 8:00 PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card data-testid="card-location">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Visit Our Store</h3>
                    <p className="text-sm text-muted-foreground">
                      Empire Plaza, L 3, Sardar Patel Marg, Hirachand Nagar, Bardoli, Gujarat 394601.
                      <br />
                      Visit us in person for personalized service and to see our full product range.
                    </p>
                    <a
                      href="https://maps.app.goo.gl/m5WSjxgR8ePMiAKS8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline text-sm mt-2 inline-block"
                    >
                      Open in Google Maps
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-['Poppins'] text-xl font-semibold mb-3 text-primary">FAMOUS</h3>
              <p className="text-sm text-muted-foreground mb-4">
                The Family Undergarment Shop - Quality products for the whole family.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Quick Links</h4>
              <div className="space-y-2">
                <button 
                  onClick={() => scrollToSection('about')}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-footer-about"
                >
                  About Us
                </button>
                <button 
                  onClick={() => scrollToSection('products')}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-footer-products"
                >
                  Our Products
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-footer-contact"
                >
                  Contact Us
                </button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Contact</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p className="flex items-start gap-2">
                  <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span className="break-all">famousundergarmentbardoli@gmail.com</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <span>9638349438</span>
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <Button 
                    size="icon"
                    variant="ghost"
                    asChild
                    data-testid="button-footer-instagram"
                  >
                    <a href="https://www.instagram.com/famous_undergarment_bardoli?igsh=MWZtdncxeXYxYXZkNw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
                      <Instagram className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button 
                    size="icon"
                    variant="ghost"
                    asChild
                    data-testid="button-footer-facebook"
                  >
                    <a href="https://www.facebook.com/share/1N5CGyrvMQ/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                      <Facebook className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button 
                    size="icon"
                    variant="ghost"
                    asChild
                    data-testid="button-footer-whatsapp"
                  >
                    <a href="https://wa.me/919638349438" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} FAMOUS: The Family Undergarment Shop. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
