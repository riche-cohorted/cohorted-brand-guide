import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, TrendingUp, Users, Zap, CheckCircle, Star } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Bold & Impactful */}
      <section className="bg-primary text-primary-foreground min-h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-7xl md:text-9xl font-black mb-12 tracking-tight leading-none">
            Turn Every Customer<br />
            Into a<br />
            <span className="text-secondary">Growth Story</span>
          </h1>
          <p className="text-2xl md:text-3xl font-medium mb-12 max-w-4xl mx-auto leading-relaxed opacity-90">
            AI-powered post-purchase optimization that transforms customer data into sustainable revenue growth
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-xl px-12 py-6">
              Unlock Hidden Revenue
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            <Button size="lg" variant="outline" className="text-xl px-12 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-bold">
              See Our Approach
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black mb-8 text-foreground">The $3 Trillion Problem</h2>
            <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Companies spend billions acquiring customers, then watch 70% of revenue potential 
              disappear after the first purchase. The post-purchase experience is broken.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <Card className="shadow-brand border-0 bg-card text-center p-8">
              <CardContent className="pt-8">
                <div className="text-6xl font-black text-destructive mb-6">70%</div>
                <h3 className="text-2xl font-bold mb-4">Revenue Lost</h3>
                <p className="text-muted-foreground text-lg">
                  Of customer lifetime value evaporates due to poor post-purchase experiences
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-brand border-0 bg-card text-center p-8">
              <CardContent className="pt-8">
                <div className="text-6xl font-black text-destructive mb-6">5x</div>
                <h3 className="text-2xl font-bold mb-4">Cost Multiplier</h3>
                <p className="text-muted-foreground text-lg">
                  More expensive to acquire new customers than retain existing ones
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-brand border-0 bg-card text-center p-8">
              <CardContent className="pt-8">
                <div className="text-6xl font-black text-destructive mb-6">90%</div>
                <h3 className="text-2xl font-bold mb-4">Data Unused</h3>
                <p className="text-muted-foreground text-lg">
                  Of customer behavioral data sits dormant, never converted to growth actions
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution - Our Approach */}
      <section className="py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black mb-8 text-foreground">Intelligence Beyond The Sale</h2>
            <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We don't just analyze what happened—we architect what's next. Our AI-enabled approach 
              transforms your customer data into a precision growth engine.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
              <div className="flex items-start gap-6">
                <div className="bg-secondary rounded-2xl p-4 flex-shrink-0">
                  <TrendingUp className="h-8 w-8 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-4">Revenue Intelligence</h3>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    AI-powered analysis of customer behavior patterns to identify untapped revenue opportunities 
                    in onboarding, retention, and expansion.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-accent rounded-2xl p-4 flex-shrink-0">
                  <Users className="h-8 w-8 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-4">Experience Architecture</h3>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Strategic design and implementation of post-purchase journeys that convert 
                    customers into advocates and revenue multipliers.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-primary rounded-2xl p-4 flex-shrink-0">
                  <Zap className="h-8 w-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-4">Growth Execution</h3>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Hands-on implementation with enterprise-grade expertise, backed by our work 
                    with Fortune 500 companies like Bank of America and IBM.
                  </p>
                </div>
              </div>
            </div>

            <Card className="shadow-electric border-0 bg-gradient-electric text-white p-12">
              <CardContent>
                <div className="text-center mb-8">
                  <h3 className="text-4xl font-black mb-6">The Cohorted Difference</h3>
                  <p className="text-xl leading-relaxed opacity-90">
                    We combine AI technology with human expertise to deliver measurable growth results.
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <CheckCircle className="h-6 w-6 flex-shrink-0" />
                    <span className="text-lg font-medium">Enterprise-proven methodologies</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <CheckCircle className="h-6 w-6 flex-shrink-0" />
                    <span className="text-lg font-medium">AI-powered customer intelligence</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <CheckCircle className="h-6 w-6 flex-shrink-0" />
                    <span className="text-lg font-medium">Hands-on implementation support</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <CheckCircle className="h-6 w-6 flex-shrink-0" />
                    <span className="text-lg font-medium">Measurable ROI within 90 days</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Signature Offer */}
      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <Badge className="mb-6 text-lg px-6 py-3 font-bold">Featured Offer</Badge>
            <h2 className="text-6xl font-black mb-8 text-foreground">Customer Intelligence Accelerator</h2>
            <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Transform your customer onboarding and post-purchase experience in 90 days with our 
              signature AI-enabled growth program.
            </p>
          </div>

          <Card className="shadow-brand border-0 bg-card max-w-5xl mx-auto">
            <CardContent className="p-16">
              <div className="grid md:grid-cols-2 gap-16">
                <div>
                  <h3 className="text-4xl font-bold mb-8">What You Get</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-secondary/20 rounded-full p-2 flex-shrink-0 mt-1">
                        <CheckCircle className="h-5 w-5 text-secondary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-xl mb-2">AI Customer Intelligence Audit</h4>
                        <p className="text-muted-foreground">Comprehensive analysis of your customer data and behavior patterns</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-secondary/20 rounded-full p-2 flex-shrink-0 mt-1">
                        <CheckCircle className="h-5 w-5 text-secondary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-xl mb-2">Revenue Optimization Strategy</h4>
                        <p className="text-muted-foreground">Custom roadmap for maximizing post-purchase revenue opportunities</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-secondary/20 rounded-full p-2 flex-shrink-0 mt-1">
                        <CheckCircle className="h-5 w-5 text-secondary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-xl mb-2">Experience Architecture Design</h4>
                        <p className="text-muted-foreground">Redesigned customer journeys optimized for retention and growth</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-secondary/20 rounded-full p-2 flex-shrink-0 mt-1">
                        <CheckCircle className="h-5 w-5 text-secondary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-xl mb-2">90-Day Implementation</h4>
                        <p className="text-muted-foreground">Hands-on execution with dedicated growth specialists</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-subtle rounded-2xl p-8">
                  <div className="text-center mb-8">
                    <div className="text-5xl font-black text-accent mb-4">3x</div>
                    <h4 className="text-2xl font-bold mb-2">Average Revenue Increase</h4>
                    <p className="text-muted-foreground">Within first 90 days of implementation</p>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Program Investment</span>
                      <span className="font-bold text-xl">$50,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Typical 90-day ROI</span>
                      <span className="font-bold text-xl text-accent">$150,000+</span>
                    </div>
                  </div>
                  
                  <Button size="lg" className="w-full font-bold text-lg py-6">
                    Start Your Transformation
                    <ArrowRight className="ml-3 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black mb-8 text-foreground">Trusted by Industry Leaders</h2>
            <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Our team has delivered growth results for Fortune 500 companies. Now we bring 
              that enterprise expertise to ambitious mid-market companies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {['Bank of America', 'Cigna Healthcare', 'IBM', 'American Express'].map((company, index) => (
              <Card key={index} className="shadow-brand border-0 bg-card p-8 text-center">
                <CardContent>
                  <div className="text-3xl font-black text-muted-foreground mb-4">{company}</div>
                  <div className="flex justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-accent fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="shadow-electric border-0 bg-primary text-primary-foreground">
            <CardContent className="p-16 text-center">
              <h3 className="text-4xl font-black mb-8">Ready to Transform Your Growth?</h3>
              <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-90">
                Join industry leaders who've discovered the power of AI-enabled post-purchase optimization. 
                Let's turn your customer data into your competitive advantage.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-xl px-12 py-6">
                  Schedule Strategy Call
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
                <Button size="lg" variant="outline" className="text-xl px-12 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-bold">
                  Download Case Study
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-black mb-6">Cohorted</h3>
          <p className="text-xl mb-8 opacity-80">Intelligence Beyond The Sale</p>
          <div className="space-y-2 text-background/70">
            <p>© 2024 Cohorted. All rights reserved.</p>
            <p>AI-Powered. Human-Driven. Growth-Focused.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;