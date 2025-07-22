import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, TrendingUp, Users, Zap, CheckCircle, Star, ArrowUpRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-black">Cohorted</div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#approach" className="text-muted-foreground hover:text-foreground transition-colors">Approach</a>
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Services</a>
            <a href="#results" className="text-muted-foreground hover:text-foreground transition-colors">Results</a>
            <Button variant="outline" size="sm">Contact</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Sophisticated & Minimal */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.border)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.border)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-depth opacity-5"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-5xl">
            <div className="mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <Badge variant="outline" className="mb-6 text-sm px-4 py-2 bg-navy/5 border-navy/20">AI-Enabled Growth Consultancy</Badge>
              <h1 className="text-6xl md:text-8xl font-black leading-none mb-8">
                <span className="inline-block">Growth</span>
                <br />
                <span className="text-muted-foreground inline-block" style={{ animationDelay: "0.2s" }}>Beyond</span>
                <br />
                <span className="bg-gradient-coral bg-clip-text text-transparent inline-block" style={{ animationDelay: "0.3s" }}>The Sale</span>
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-slate max-w-3xl mb-12 leading-relaxed animate-fade-in" style={{ animationDelay: "0.4s" }}>
              We transform post-purchase customer data into sustainable revenue growth. 
              Where customer experience meets revenue intelligence.
            </p>
            
            <div className="flex items-center gap-6 animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <Button size="lg" className="font-semibold px-8 py-6 text-lg bg-coral hover:bg-coral/90 text-coral-foreground rounded-full shadow-coral transition-all hover:shadow-lg hover:translate-y-[-2px]">
                Start Transformation
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="ghost" size="lg" className="font-semibold px-8 py-6 text-lg border border-navy/10 rounded-full hover:bg-navy/5 hover:border-navy/20">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating Cards */}
        <div className="absolute top-1/4 right-8 hidden lg:block animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <Card className="w-64 shadow-growth border-0 bg-card/90 backdrop-blur-sm transform hover:scale-105 transition-all">
            <CardContent className="p-6">
              <div className="text-3xl font-black text-lime mb-2">3.2x</div>
              <div className="text-sm text-slate">Average Revenue Growth</div>
            </CardContent>
          </Card>
        </div>
        
        <div className="absolute bottom-1/3 right-1/4 hidden lg:block animate-fade-in" style={{ animationDelay: "0.7s" }}>
          <Card className="w-48 shadow-coral border-0 bg-card/90 backdrop-blur-sm transform hover:scale-105 transition-all">
            <CardContent className="p-4">
              <div className="text-2xl font-black text-coral mb-1">90 Days</div>
              <div className="text-xs text-slate">To Measurable ROI</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Problem & Solution - Clean Layout */}
      <section className="py-32 bg-muted/20" id="approach">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-5xl font-black mb-8 leading-tight text-navy">
                The Post-Purchase <span className="text-coral">Revenue Gap</span>
              </h2>
              <p className="text-xl text-slate mb-8 leading-relaxed">
                Companies invest billions in customer acquisition, then watch 70% of potential 
                lifetime value disappear due to poor post-purchase experiences.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-coral/10 flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 rounded-full bg-coral"></div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">$3 Trillion Problem</h3>
                    <p className="text-muted-foreground">Annual revenue lost globally due to ineffective post-purchase optimization</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-coral/10 flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 rounded-full bg-coral"></div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">5x Cost Multiplier</h3>
                    <p className="text-muted-foreground">New customer acquisition vs. existing customer retention costs</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-coral/10 flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 rounded-full bg-coral"></div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">90% Data Waste</h3>
                    <p className="text-muted-foreground">Customer behavioral insights never converted to revenue actions</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Card className="shadow-navy border-0 bg-gradient-depth text-white overflow-hidden rounded-2xl">
                <CardContent className="p-12">
                  <h3 className="text-4xl font-black mb-6">Our Solution</h3>
                  <p className="text-xl leading-relaxed mb-8 text-white/90">
                    AI-powered revenue intelligence that transforms customer data into 
                    measurable growth strategies.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 flex-shrink-0" />
                      <span className="font-medium">Enterprise-grade methodologies</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 flex-shrink-0" />
                      <span className="font-medium">AI customer intelligence platform</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 flex-shrink-0" />
                      <span className="font-medium">90-day implementation guarantee</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services - Modern Grid */}
      <section className="py-32" id="services">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black mb-6">How We Create Growth</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Three integrated capabilities that transform customer relationships into revenue engines
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-brand border-0 bg-card group hover:shadow-lime transition-all duration-300 rounded-2xl overflow-hidden">
              <CardContent className="p-8 bg-gradient-to-b from-lime/5 to-transparent">
                <div className="w-16 h-16 rounded-full bg-lime/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <TrendingUp className="h-8 w-8 text-lime" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-lime transition-colors">Revenue Intelligence</h3>
                <p className="text-slate leading-relaxed mb-6">
                  AI-powered analysis reveals hidden revenue opportunities in your customer data, 
                  identifying precise moments for intervention and growth.
                </p>
                <Button variant="ghost" className="p-0 h-auto font-semibold text-lime group-hover:translate-x-1 transition-transform">
                  Learn More <ArrowUpRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
            
            <Card className="shadow-brand border-0 bg-card group hover:shadow-coral transition-all duration-300 rounded-2xl overflow-hidden">
              <CardContent className="p-8 bg-gradient-to-b from-coral/5 to-transparent">
                <div className="w-16 h-16 rounded-full bg-coral/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Users className="h-8 w-8 text-coral" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-coral transition-colors">Experience Architecture</h3>
                <p className="text-slate leading-relaxed mb-6">
                  Strategic redesign of post-purchase journeys, optimizing every touchpoint 
                  for retention, expansion, and advocacy.
                </p>
                <Button variant="ghost" className="p-0 h-auto font-semibold text-coral group-hover:translate-x-1 transition-transform">
                  Learn More <ArrowUpRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
            
            <Card className="shadow-brand border-0 bg-card group hover:shadow-gold transition-all duration-300 rounded-2xl overflow-hidden">
              <CardContent className="p-8 bg-gradient-to-b from-gold/5 to-transparent">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="h-8 w-8 text-gold" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-gold transition-colors">Growth Execution</h3>
                <p className="text-slate leading-relaxed mb-6">
                  Hands-on implementation with enterprise-proven methodologies, delivering 
                  measurable results within 90 days.
                </p>
                <Button variant="ghost" className="p-0 h-auto font-semibold text-gold group-hover:translate-x-1 transition-transform">
                  Learn More <ArrowUpRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Offer - Premium Design */}
      <section className="py-32 bg-muted/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Badge className="mb-6 text-sm px-4 py-2 bg-gold text-gold-foreground shadow-premium">Featured Program</Badge>
            <h2 className="text-5xl font-black mb-6 bg-gradient-premium bg-clip-text text-transparent">Customer Intelligence Accelerator</h2>
            <p className="text-xl text-slate">
              90-day intensive program that transforms your post-purchase experience into a revenue multiplier
            </p>
          </div>
          
          <Card className="shadow-premium border-0 bg-gradient-premium text-gold-foreground max-w-6xl mx-auto overflow-hidden rounded-2xl">
            <div className="grid lg:grid-cols-2">
              <CardContent className="p-12">
                <h3 className="text-3xl font-bold mb-8">Program Components</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-lime/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-lime" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">AI Customer Intelligence Audit</h4>
                      <p className="text-muted-foreground text-sm">Deep analysis of behavioral patterns and revenue opportunities</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-lime/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-lime" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Revenue Optimization Strategy</h4>
                      <p className="text-muted-foreground text-sm">Custom roadmap for post-purchase revenue maximization</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-lime/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-lime" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Experience Architecture Design</h4>
                      <p className="text-muted-foreground text-sm">Optimized customer journeys for retention and growth</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-lime/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-lime" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">90-Day Implementation</h4>
                      <p className="text-muted-foreground text-sm">Dedicated specialists ensure measurable results</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              
              <div className="bg-gradient-depth p-12 flex flex-col justify-center text-navy-foreground">
                <div className="text-center mb-8">
                  <div className="text-6xl font-black text-lime mb-4">3.2x</div>
                  <h4 className="text-xl font-bold mb-2">Average Revenue Growth</h4>
                  <p className="text-muted-foreground">Within 90 days of implementation</p>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <span className="text-muted-foreground">Investment</span>
                    <span className="font-bold text-xl">$50,000</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-muted-foreground">Typical 90-day ROI</span>
                    <span className="font-bold text-xl text-lime">$150,000+</span>
                  </div>
                </div>
                
                <Button size="lg" className="w-full font-semibold text-lg py-6 bg-coral hover:bg-coral/90 text-coral-foreground rounded-full shadow-coral transition-all hover:shadow-lg hover:translate-y-[-2px]">
                  Start Your Transformation
                  <ArrowUpRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Social Proof - Elegant */}
      <section className="py-32" id="results">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black mb-6">Trusted by Industry Leaders</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our team has delivered growth results for Fortune 500 companies. 
              Now we bring that expertise to ambitious mid-market organizations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {[
              { name: 'Bank of America', industry: 'Financial Services' },
              { name: 'Cigna Healthcare', industry: 'Healthcare' },
              { name: 'IBM', industry: 'Technology' },
              { name: 'American Express', industry: 'Financial Services' }
            ].map((company, index) => (
              <Card key={index} className="shadow-brand border-0 bg-card p-6 text-center group hover:shadow-gold transition-all rounded-2xl">
                <CardContent className="p-4">
                  <h4 className="font-bold text-lg mb-2">{company.name}</h4>
                  <p className="text-sm text-muted-foreground mb-4">{company.industry}</p>
                  <div className="flex justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-gold fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card className="shadow-electric border-0 bg-gradient-depth text-white rounded-2xl">
            <CardContent className="p-16 text-center">
              <h3 className="text-4xl font-black mb-6">Ready to Transform Your Growth?</h3>
              <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-90">
                Join industry leaders who've discovered the power of AI-enabled post-purchase optimization.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button size="lg" className="bg-coral hover:bg-coral/90 text-coral-foreground font-semibold text-lg px-8 py-6 rounded-full shadow-coral transition-all hover:shadow-lg hover:translate-y-[-2px]">
                  Schedule Strategy Call
                  <ArrowUpRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white bg-white/5 hover:bg-white hover:text-navy font-semibold text-lg px-8 py-6 rounded-full shadow-coral/10 transition-all hover:shadow-lg hover:translate-y-[-2px]">
                  Download Case Study
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer - Minimal */}
      <footer className="py-16 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <div className="text-2xl font-black mb-2">Cohorted</div>
              <p className="text-muted-foreground">Intelligence Beyond The Sale</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground mb-2">AI-Powered. Human-Driven. Growth-Focused.</p>
              <p className="text-sm text-muted-foreground">© 2024 Cohorted. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;