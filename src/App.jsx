import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import {
  Phone,
  Mail,
  MapPin,
  Shield,
  Sparkles,
  Car,
  Eye,
  CheckCircle,
  Star,
  Menu,
  X,
  Clock,
  Award,
  Users,
  Calendar
} from 'lucide-react'
import './App.css'

// Import images
import heroBg1 from '@/assets/hero_bg_1.png'
import heroBg2 from '@/assets/hero_bg_2.png'
import heroBg3 from '@/assets/hero_bg_3.png'
import Photo1 from '@/assets/photo1.jpeg'
import Photo2 from '@/assets/photo2.jpeg'
import Photo3 from '@/assets/photo3.jpeg'
import Photo4 from '@/assets/photo4.jpeg'
import Photo5 from '@/assets/photo5.jpeg'
import Photo6 from '@/assets/photo6.jpeg'
import windshieldProtection from '@/assets/4BJ17ov0xUcs.jpg'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
        }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-gradient">
              Jose DeLuna Mobile Detailing
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection('gallery')} className="hover:text-primary transition-colors">
                Gallery
              </button>
              <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">
                Contact
              </button>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="outline" className="btn-luxury-outline">
                <Phone className="w-4 h-4 mr-2" />
                (480) 555-0123
              </Button>
              <Button className="btn-luxury">
                Book Mobile Service
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-border">
              <nav className="flex flex-col space-y-4 mt-4">
                <button onClick={() => scrollToSection('services')} className="text-left hover:text-primary transition-colors">
                  Services
                </button>
                <button onClick={() => scrollToSection('gallery')} className="text-left hover:text-primary transition-colors">
                  Gallery
                </button>
                <button onClick={() => scrollToSection('about')} className="text-left hover:text-primary transition-colors">
                  About
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-left hover:text-primary transition-colors">
                  Contact
                </button>
                <div className="flex flex-col space-y-2 pt-4">
                  <Button variant="outline" className="btn-luxury-outline justify-start">
                    <Phone className="w-4 h-4 mr-2" />
                    (480) 555-0123
                  </Button>
                  <Button className="btn-luxury">
                    Book Mobile Service
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-bg min-h-screen flex items-center justify-center relative">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
              Luxury Protection. Delivered.
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
              Ceramic Coating • Paint Correction • Mobile Detailing • Windshield Protection Film
            </p>
            <p className="text-lg mb-12 max-w-2xl mx-auto">
              Premium automotive care that comes to you. Protecting Arizona's finest vehicles with professional-grade services and uncompromising quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button size="lg" className="btn-luxury text-lg px-8 py-4">
                <Calendar className="w-5 h-5 mr-2" />
                Book Mobile Service
              </Button>
              <Button size="lg" variant="outline" className="btn-luxury-outline text-lg px-8 py-4">
                <Phone className="w-5 h-5 mr-2" />
                Call (480) 555-0123
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Badge variant="secondary" className="bg-secondary/50">
                <Shield className="w-4 h-4 mr-1" />
                Insured
              </Badge>
              <Badge variant="secondary" className="bg-secondary/50">
                <Award className="w-4 h-4 mr-1" />
                Licensed
              </Badge>
              <Badge variant="secondary" className="bg-secondary/50">
                <Star className="w-4 h-4 mr-1" />
                Trusted by Luxury Vehicle Owners
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Premium Automotive Care at Your Location
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the convenience of professional detailing without leaving your driveway.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Mobile Convenience</h3>
              <p className="text-muted-foreground">
                We come to you. No need to disrupt your schedule with our fully-equipped mobile units.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Luxury-Safe Methods</h3>
              <p className="text-muted-foreground">
                Specialized techniques and premium products designed specifically for high-end vehicles.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Insured Service</h3>
              <p className="text-muted-foreground">
                Fully licensed, bonded, and insured. Your vehicle is protected throughout the entire process.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Pro-Grade Products</h3>
              <p className="text-muted-foreground">
                Professional-grade ceramics, compounds, and protective films that deliver lasting results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Our Premium Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive automotive care designed for discerning vehicle owners.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Ceramic Coating */}
            <Card className="card-luxury">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Ceramic Coating</CardTitle>
                <CardDescription className="text-primary font-semibold">
                  3 & 5 Year Protection
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Transform your vehicle's paint with our professional-grade ceramic coating systems. Create an ultra-durable, hydrophobic barrier.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    Hydrophobic Properties
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    UV Protection
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    Enhanced Gloss
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Paint Correction */}
            <Card className="card-luxury">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Paint Correction</CardTitle>
                <CardDescription className="text-primary font-semibold">
                  Restore Factory Perfection
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Multi-stage paint correction process that eliminates swirl marks, scratches, and oxidation.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    Swirl Mark Removal
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    Scratch Elimination
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    Paint Restoration
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Mobile Detailing */}
            <Card className="card-luxury">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Car className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Mobile Detailing</CardTitle>
                <CardDescription className="text-primary font-semibold">
                  Complete Care at Your Location
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Comprehensive interior and exterior detailing services that bring showroom quality results to your doorstep.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    Interior Deep Cleaning
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    Exterior Wash & Wax
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    Engine Bay Cleaning
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Windshield Protection */}
            <Card className="card-luxury">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Windshield Protection Film</CardTitle>
                <CardDescription className="text-primary font-semibold">
                  Essential for Arizona Highways
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Optically-clear protection film that shields your windshield from road debris and environmental damage.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    Optically Clear
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    Impact Resistance
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    Arizona Highway Tested
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Windshield Protection Spotlight */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
                Arizona Highway Protection
              </h2>
              <h3 className="text-2xl font-semibold mb-6">
                Don't Let Road Debris Ruin Your Investment
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Arizona's highways present unique challenges for vehicle owners. High-speed traffic, construction zones, and desert conditions create the perfect storm for windshield damage.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold">Heavy Construction Traffic</h4>
                    <p className="text-muted-foreground">Increases debris risk on major highways</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold">High-Speed Impact</h4>
                    <p className="text-muted-foreground">Highway speeds amplify damage from small rocks</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold">Desert Conditions</h4>
                    <p className="text-muted-foreground">Sandstorms and extreme weather create additional hazards</p>
                  </div>
                </div>
              </div>
              <Button className="btn-luxury">
                Protect Your Windshield Today
              </Button>
            </div>
            <div className="gloss-effect">
              <img
                src={windshieldProtection}
                alt="Windshield Protection Film Installation"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Why Luxury Vehicle Owners Choose Jose DeLuna
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the difference that expertise and dedication make.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Car className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Mobile Convenience</h3>
              <p className="text-muted-foreground">
                We come to you - home, office, or anywhere convenient. Schedule service around your life.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Fully Insured</h3>
              <p className="text-muted-foreground">
                Complete protection with comprehensive insurance coverage including liability and bonding.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Transparent Pricing</h3>
              <p className="text-muted-foreground">
                Clear, upfront pricing with detailed service explanations. No hidden fees or surprise charges.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Trusted on Luxury</h3>
              <p className="text-muted-foreground">
                Specialized expertise in high-end vehicles from exotic supercars to premium sedans.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Choose Your Protection Package
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Customized solutions for every vehicle and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Essential Package */}
            <Card className="card-luxury">
              <CardHeader>
                <CardTitle className="text-2xl">Essential Protection</CardTitle>
                <CardDescription className="text-3xl font-bold text-primary">
                  Starting at $899
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-3" />
                    Complete mobile detailing service
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-3" />
                    3-year ceramic coating application
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-3" />
                    Paint decontamination
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-3" />
                    6-month maintenance kit
                  </li>
                </ul>
                <Button className="w-full btn-luxury">
                  Get Quote
                </Button>
              </CardContent>
            </Card>

            {/* Premium Package */}
            <Card className="card-luxury border-primary">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-primary text-primary-foreground">Most Popular</Badge>
                <CardTitle className="text-2xl">Premium Protection</CardTitle>
                <CardDescription className="text-3xl font-bold text-primary">
                  Starting at $1,499
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-3" />
                    Single-stage paint correction
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-3" />
                    5-year ceramic coating system
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-3" />
                    Windshield protection film
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-3" />
                    Interior ceramic coating
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-3" />
                    12-month maintenance kit
                  </li>
                </ul>
                <Button className="w-full btn-luxury">
                  Get Quote
                </Button>
              </CardContent>
            </Card>

            {/* Ultimate Package */}
            <Card className="card-luxury">
              <CardHeader>
                <CardTitle className="text-2xl">Ultimate Protection</CardTitle>
                <CardDescription className="text-3xl font-bold text-primary">
                  Starting at $2,299
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-3" />
                    Multi-stage paint correction
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-3" />
                    Premium 5-year ceramic coating
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-3" />
                    Windshield protection film
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-3" />
                    Wheel ceramic coating
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-3" />
                    Annual maintenance program
                  </li>
                </ul>
                <Button className="w-full btn-luxury">
                  Get Quote
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              See the Transformation
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional results that speak for themselves.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="gloss-effect">
              <img
                src={Photo1}
                alt="Before and after detailing transformation"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
            </div>
            <div className="gloss-effect">
              <img
                src={Photo2}
                alt="Paint correction results"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
            </div>
            <div className="gloss-effect">
              <img
                src={Photo3}
                alt="Ceramic coating gloss finish"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
            </div>
            <div className="gloss-effect">
              <img
                src={Photo4}
                alt="Mobile detailing service"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
            </div>
            <div className="gloss-effect">
              <img
                src={Photo5}
                alt="Windshield protection film"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
            </div>
            <div className="gloss-effect">
              <img
                src={Photo6}
                alt="Luxury vehicle detailing"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Trusted by luxury vehicle owners across Phoenix Metro.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-luxury">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-primary fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Exceptional service and attention to detail. Jose transformed my Porsche 911 Turbo and the ceramic coating has been incredible. Water just rolls right off and the shine is amazing."
                </p>
                <div>
                  <p className="font-semibold">Michael Rodriguez</p>
                  <p className="text-sm text-muted-foreground">2023 Porsche 911 Turbo • Scottsdale</p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-luxury">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-primary fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "The mobile service was so convenient. They came to my office and detailed my Range Rover while I worked. The paint correction removed years of swirl marks. Looks better than when I bought it!"
                </p>
                <div>
                  <p className="font-semibold">Sarah Chen</p>
                  <p className="text-sm text-muted-foreground">2022 Range Rover Sport • Phoenix</p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-luxury">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-primary fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "After getting my windshield protection film installed, I've had several rocks hit it on the 101. Not a single chip! Best investment I've made for my Tesla."
                </p>
                <div>
                  <p className="font-semibold">David Thompson</p>
                  <p className="text-sm text-muted-foreground">2024 Tesla Model S • Tempe</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Serving Phoenix Metro
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional mobile detailing throughout the Valley of the Sun.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Scottsdale', 'Phoenix', 'Glendale', 'Tempe',
              'Goodyear', 'Chandler', 'Mesa', 'Peoria'
            ].map((city) => (
              <Card key={city} className="card-luxury text-center">
                <CardContent className="pt-6">
                  <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="text-lg font-semibold">{city}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              We proudly serve a 30-mile radius from central Phoenix. Contact us to confirm service availability in your specific area.
            </p>
            <Button className="btn-luxury">
              Check Service Availability
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Ready to Protect Your Investment?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Schedule your premium automotive care service today.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="card-luxury">
              <CardHeader>
                <CardTitle className="text-2xl">Get Your Custom Quote</CardTitle>
                <CardDescription>
                  Tell us about your vehicle and we'll provide a detailed quote within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input placeholder="Your Name" className="bg-input border-border" />
                    <Input placeholder="Phone Number" className="bg-input border-border" />
                  </div>
                  <Input placeholder="Email Address" className="bg-input border-border" />
                  <Input placeholder="Vehicle Make & Model" className="bg-input border-border" />
                  <Input placeholder="Preferred Service Date" className="bg-input border-border" />
                  <Textarea
                    placeholder="Tell us about your vehicle and desired services..."
                    className="bg-input border-border min-h-[120px]"
                  />
                  <Button className="w-full btn-luxury">
                    Get Custom Quote
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="card-luxury">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <Phone className="w-6 h-6 text-primary mr-3" />
                    <div>
                      <h3 className="font-semibold">Call Us Today</h3>
                      <p className="text-2xl font-bold text-primary">(480) 555-0123</p>
                    </div>
                  </div>
                  <Button className="w-full btn-luxury">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="card-luxury">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <Mail className="w-6 h-6 text-primary mr-3" />
                    <div>
                      <h3 className="font-semibold">Email Us</h3>
                      <p className="text-muted-foreground">info@josedetunamobiledetailing.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-luxury">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <Clock className="w-6 h-6 text-primary mr-3" />
                    <div>
                      <h3 className="font-semibold">Business Hours</h3>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>7:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>8:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>By appointment</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Button className="w-full btn-luxury text-lg py-6">
                <Calendar className="w-5 h-5 mr-2" />
                Book Instant Online Appointment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gradient mb-4">
                Jose DeLuna Mobile Detailing
              </h3>
              <p className="text-muted-foreground mb-4">
                Premium automotive care delivered to your location.
              </p>
              <div className="flex space-x-4">
                <Button size="sm" variant="outline" className="btn-luxury-outline">
                  <Phone className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="outline" className="btn-luxury-outline">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Ceramic Coating</li>
                <li>Paint Correction</li>
                <li>Mobile Detailing</li>
                <li>Windshield Protection</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Service Areas</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Scottsdale</li>
                <li>Phoenix</li>
                <li>Glendale</li>
                <li>Tempe</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>(480) 555-0123</p>
                <p>info@josedetunamobiledetailing.com</p>
                <p>Phoenix Metro Area</p>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 Jose DeLuna Mobile Detailing & Ceramic Coating. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
