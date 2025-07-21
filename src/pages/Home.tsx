import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, TrendingUp, Users, Zap, CheckCircle, Star, ArrowUpRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
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
        <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.border)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.border)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-5xl">
            <div className="mb-8">
              <Badge variant="outline" className="mb-6 text-sm px-4 py-2">AI-Enabled Growth Consultancy</Badge>
              <h1 className="text-6xl md:text-8xl font-black leading-none mb-8">
                Growth
                <br />
                <span className="text-muted-foreground">Beyond</span>
                <br />
                <span className="bg-gradient-electric bg-clip-text text-transparent">The Sale</span>
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mb-12 leading-relaxed">
              We transform post-purchase customer data into sustainable revenue growth. 
              Where customer experience meets revenue intelligence.
            </p>
            
            <div className="flex items-center gap-6">
              <Button size="lg" className="font-semibold px-8 py-6 text-lg">
                Start Transformation
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="ghost" size="lg" className="font-semibold px-8 py-6 text-lg">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating Cards */}
        <div className="absolute top-1/4 right-8 hidden lg:block">
          <Card className="w-64 shadow-electric border-0 bg-card/90 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="text-3xl font-black text-secondary mb-2">3.2x</div>
              <div className="text-sm text-muted-foreground">Average Revenue Growth</div>
            </CardContent>
          </Card>
        </div>
        
        <div className="absolute bottom-1/3 right-1/4 hidden lg:block">
          <Card className="w-48 shadow-brand border-0 bg-card/90 backdrop-blur-sm">
            <CardContent className="p-4">
              <div className="text-2xl font-black text-accent mb-1">90 Days</div>
              <div className="text-xs text-muted-foreground">To Measurable ROI</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Problem & Solution - Clean Layout */}
      <section className="py-32 bg-muted/20" id="approach">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-5xl font-black mb-8 leading-tight">
                The Post-Purchase Revenue Gap
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Companies invest billions in customer acquisition, then watch 70% of potential 
                lifetime value disappear due to poor post-purchase experiences.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 rounded-full bg-destructive"></div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">$3 Trillion Problem</h3>
                    <p className="text-muted-foreground">Annual revenue lost globally due to ineffective post-purchase optimization</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 rounded-full bg-destructive"></div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">5x Cost Multiplier</h3>
                    <p className="text-muted-foreground">New customer acquisition vs. existing customer retention costs</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 rounded-full bg-destructive"></div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">90% Data Waste</h3>
                    <p className="text-muted-foreground">Customer behavioral insights never converted to revenue actions</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Card className="shadow-electric border-0 bg-gradient-electric text-white overflow-hidden">
                <CardContent className="p-12">
                  <h3 className="text-4xl font-black mb-6">Our Solution</h3>
                  <p className="text-xl leading-relaxed mb-8 opacity-90">
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
            <Card className="shadow-brand border-0 bg-card group hover:shadow-electric transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-3xl bg-secondary/10 flex items-center justify-center mb-6">
                  <TrendingUp className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Revenue Intelligence</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  AI-powered analysis reveals hidden revenue opportunities in your customer data, 
                  identifying precise moments for intervention and growth.
                </p>
                <Button variant="ghost" className="p-0 h-auto font-semibold text-secondary">
                  Learn More <ArrowUpRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
            
            <Card className="shadow-brand border-0 bg-card group hover:shadow-electric transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-3xl bg-accent/10 flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Experience Architecture</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Strategic redesign of post-purchase journeys, optimizing every touchpoint 
                  for retention, expansion, and advocacy.
                </p>
                <Button variant="ghost" className="p-0 h-auto font-semibold text-accent">
                  Learn More <ArrowUpRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
            
            <Card className="shadow-brand border-0 bg-card group hover:shadow-electric transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-3xl bg-primary/10 flex items-center justify-center mb-6">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Growth Execution</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Hands-on implementation with enterprise-proven methodologies, delivering 
                  measurable results within 90 days.
                </p>
                <Button variant="ghost" className="p-0 h-auto font-semibold text-primary">
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
            <Badge className="mb-6 text-sm px-4 py-2">Featured Program</Badge>
            <h2 className="text-5xl font-black mb-6">Customer Intelligence Accelerator</h2>
            <p className="text-xl text-muted-foreground">
              90-day intensive program that transforms your post-purchase experience into a revenue multiplier
            </p>
          </div>
          
          <Card className="shadow-electric border-0 bg-card max-w-6xl mx-auto overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <CardContent className="p-12">
                <h3 className="text-3xl font-bold mb-8">Program Components</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">AI Customer Intelligence Audit</h4>
                      <p className="text-muted-foreground text-sm">Deep analysis of behavioral patterns and revenue opportunities</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Revenue Optimization Strategy</h4>
                      <p className="text-muted-foreground text-sm">Custom roadmap for post-purchase revenue maximization</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Experience Architecture Design</h4>
                      <p className="text-muted-foreground text-sm">Optimized customer journeys for retention and growth</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">90-Day Implementation</h4>
                      <p className="text-muted-foreground text-sm">Dedicated specialists ensure measurable results</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              
              <div className="bg-gradient-subtle p-12 flex flex-col justify-center">
                <div className="text-center mb-8">
                  <div className="text-6xl font-black text-accent mb-4">3.2x</div>
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
                    <span className="font-bold text-xl text-accent">$150,000+</span>
                  </div>
                </div>
                
                <Button size="lg" className="w-full font-semibold text-lg py-6">
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
              <Card key={index} className="shadow-brand border-0 bg-card p-6 text-center group hover:shadow-electric transition-all">
                <CardContent className="p-4">
                  <h4 className="font-bold text-lg mb-2">{company.name}</h4>
                  <p className="text-sm text-muted-foreground mb-4">{company.industry}</p>
                  <div className="flex justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-accent fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card className="shadow-electric border-0 bg-primary text-primary-foreground">
            <CardContent className="p-16 text-center">
              <h3 className="text-4xl font-black mb-6">Ready to Transform Your Growth?</h3>
              <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-90">
                Join industry leaders who've discovered the power of AI-enabled post-purchase optimization.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold text-lg px-8 py-6">
                  Schedule Strategy Call
                  <ArrowUpRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold text-lg px-8 py-6">
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