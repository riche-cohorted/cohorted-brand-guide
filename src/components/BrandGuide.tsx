import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Copy, Download, Palette, Type, Layout, Sparkles } from "lucide-react";
import cohortedLogo from "@/assets/cohorted-logo-modern.png";
import cohortedMoodboard from "@/assets/cohorted-moodboard-modern.png";
import logoTreatments from "@/assets/logo-treatments-modern.png";

const BrandGuide = () => {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedColor(type);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  const brandColors = [
    { name: "Charcoal Black", hex: "#1A1D23", hsl: "220 15% 10%", usage: "Primary - Bold headers, text, authority" },
    { name: "Electric Teal", hex: "#00B3B3", hsl: "180 100% 45%", usage: "Secondary - Tech innovation, accents" },
    { name: "Electric Cyan", hex: "#00CCFF", hsl: "190 100% 50%", usage: "Accent - Energy, growth, highlights" },
    { name: "Coral", hex: "#FF6B6B", hsl: "0 100% 71%", usage: "Warm Energy - CTA highlights, human connection" },
    { name: "Lime", hex: "#A3E635", hsl: "84 81% 56%", usage: "Success/Growth - Revenue growth, positive metrics" },
    { name: "Gold", hex: "#F5D06F", hsl: "40 88% 70%", usage: "Premium/Trust - Luxury accents, premium clients" },
    { name: "Navy", hex: "#0A1E3F", hsl: "220 75% 14%", usage: "Depth/Dimension - Rich backgrounds, gradients" },
    { name: "Slate", hex: "#6E7B8B", hsl: "215 12% 49%", usage: "Muted Tech - Charts, infographics, neutral tone" },
    { name: "Pure White", hex: "#FFFFFF", hsl: "0 0% 100%", usage: "Background, contrast, clean space" },
    { name: "Neutral Gray", hex: "#737373", hsl: "220 10% 45%", usage: "Supporting text, subtle elements" },
    { name: "Light Neutral", hex: "#F8F9FA", hsl: "220 10% 96%", usage: "Backgrounds, cards, sections" },
  ];

  const typography = [
    { name: "Display Hero", font: "Satoshi", weight: "900", size: "48px", usage: "Page titles, hero headlines" },
    { name: "Heading 1", font: "Satoshi", weight: "700", size: "36px", usage: "Section headers" },
    { name: "Heading 2", font: "Satoshi", weight: "700", size: "24px", usage: "Sub-sections" },
    { name: "Heading 3", font: "Satoshi", weight: "500", size: "20px", usage: "Card titles" },
    { name: "Body Large", font: "Satoshi", weight: "500", size: "18px", usage: "Intro text, important body" },
    { name: "Body", font: "Satoshi", weight: "400", size: "16px", usage: "Default body text" },
    { name: "Caption", font: "Satoshi", weight: "400", size: "14px", usage: "Captions, labels" },
    { name: "Tech Accent", font: "Space Mono", weight: "400", size: "14px", usage: "Code, technical labels, wide tracking" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Bold & Modern */}
      <div className="bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6 py-32">
          <div className="text-center">
            <h1 className="text-8xl font-black mb-8 tracking-tight">Cohorted</h1>
            <p className="text-2xl font-medium mb-6 opacity-90">Digital Brand Guide</p>
            <p className="text-xl opacity-80 max-w-3xl mx-auto leading-relaxed">
              AI-enabled growth consultancy transforming post-purchase experiences
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid grid-cols-8 w-full max-w-6xl">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
            <TabsTrigger value="logo">Logo</TabsTrigger>
            <TabsTrigger value="colors">Colors</TabsTrigger>
            <TabsTrigger value="typography">Typography</TabsTrigger>
            <TabsTrigger value="components">Components</TabsTrigger>
            <TabsTrigger value="applications">Applications</TabsTrigger>
            <TabsTrigger value="website">Website</TabsTrigger>
          </TabsList>

          {/* Website Tab */}
          <TabsContent value="website" className="space-y-0">
            <div className="rounded-lg overflow-hidden border border-border">
              <div className="bg-muted/20 px-4 py-2 text-sm text-muted-foreground border-b border-border">
                Cohorted Website Preview
              </div>
              <div className="bg-background">
                <iframe 
                  src="/website" 
                  className="w-full h-[600px] border-0"
                  title="Cohorted Website"
                />
              </div>
            </div>
          </TabsContent>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-secondary" />
                    Brand Foundation
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">Company Name</h4>
                    <p className="text-2xl font-bold text-primary">cohorted</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Primary Tagline</h4>
                    <p className="text-2xl font-bold text-secondary">"Growth Beyond the Sale"</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Brand Promise</h4>
                     <p className="text-muted-foreground">
                       We don't just analyze what happened—we equip you for what's next.
                     </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Power Slogans</h4>
                    <ul className="text-foreground space-y-2 text-lg">
                      <li className="font-bold">• AI-Powered. Human-Driven. Growth-Focused.</li>
                      <li className="font-bold">• Where Customer Experience Meets Revenue Intelligence</li>
                      <li className="font-bold text-accent">• Turn Every Customer Journey Into a Growth Story</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Mood Board</CardTitle>
                </CardHeader>
                <CardContent>
                  <img 
                    src={cohortedMoodboard} 
                    alt="Cohorted Brand Moodboard" 
                    className="w-full rounded-lg shadow-brand"
                  />
                </CardContent>
              </Card>
            </div>

            <Card className="shadow-premium border-0 bg-gradient-premium text-gold-foreground">
              <CardHeader className="pb-8">
                <CardTitle className="text-4xl font-black text-center">Elevator Pitch</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-2xl leading-relaxed max-w-5xl mx-auto font-medium">
                  <strong className="font-black">Cohorted transforms the post-purchase experience into a growth engine.</strong> 
                  We're an AI-enabled consultancy specializing in post-purchase optimization—turning existing customers 
                  into your most profitable growth engine. With enterprise experience from Bank of America, Cigna Healthcare, 
                  and IBM, we deliver tech-enabled strategies that unlock hidden revenue streams.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Messages Tab */}
          <TabsContent value="messages" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Press Release */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-secondary" />
                    Press Release
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-muted p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-4">FOR IMMEDIATE RELEASE</h4>
                    <h3 className="font-bold text-xl mb-4">Cohorted Launches AI-Enabled Growth Consultancy to Transform Post-Purchase Customer Experiences</h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      <strong>New consultancy brings enterprise-grade customer intelligence to mid-market companies, promising 3x revenue growth in 90 days</strong>
                    </p>
                    <p className="text-sm leading-relaxed mb-4">
                      NEW YORK, NY - Cohorted, a pioneering AI-enabled growth consultancy, today announced its official launch with a mission to transform how companies optimize post-purchase customer experiences. Founded by growth specialists with proven track records at Fortune 500 companies including Bank of America, Cigna Healthcare, and IBM, Cohorted addresses the $3 trillion revenue gap created by ineffective post-purchase optimization.
                    </p>
                    <p className="text-sm leading-relaxed">
                      "Companies invest billions in customer acquisition, then watch 70% of potential lifetime value disappear due to poor post-purchase experiences," said [CEO Name], CEO of Cohorted. "We don't just analyze what happened—we architect what's next. Our AI-powered approach transforms customer data into measurable growth strategies."
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* LinkedIn Announcement */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-primary">LinkedIn Company Announcement</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-white border-2 border-secondary/20 p-6 rounded-lg">
                     <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-coral rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-lg">C</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-primary">Cohorted</h4>
                        <p className="text-sm text-muted-foreground">AI Growth Consultancy • 1d</p>
                      </div>
                    </div>
                    <p className="text-foreground mb-4">
                      🚀 <strong>Intelligence Beyond The Sale</strong>
                      <br /><br />
                      Today marks an exciting milestone as we officially launch Cohorted — an AI-enabled growth consultancy transforming how companies optimize post-purchase customer experiences.
                      <br /><br />
                      The problem? Companies spend billions acquiring customers, then watch 70% of revenue potential disappear after the first purchase.
                      <br /><br />
                      Our solution? AI-powered customer intelligence that transforms data into measurable growth strategies. With enterprise expertise from Bank of America, Cigna Healthcare, and IBM, we deliver 3x average revenue growth in 90 days.
                       <br /><br />
                       <span className="text-lime font-bold">#GrowthBeyondTheSale #CustomerIntelligence #AIConsulting</span>
                    </p>
                    <div className="flex gap-2">
                      <Badge variant="outline" className="text-xs">CustomerSuccess</Badge>
                      <Badge variant="outline" className="text-xs">RevenueGrowth</Badge>
                      <Badge variant="outline" className="text-xs">AIEnabled</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Sales Outreach Email */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-primary">Sales Outreach Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted p-6 rounded-lg space-y-4">
                    <div>
                      <p className="text-sm font-medium mb-2">Subject: Turning your customer data into 3x revenue growth</p>
                      <p className="text-sm text-muted-foreground mb-4">To: [CEO/CMO Name]</p>
                    </div>
                    
                    <div className="text-sm space-y-3">
                      <p>Hi [Name],</p>
                      <p>I noticed [Company] has been growing rapidly — congratulations on [recent achievement/milestone].</p>
                      <p>I'm reaching out because most companies in your position face a hidden challenge: while you're excellent at acquiring customers, 70% of potential revenue disappears after the first purchase due to suboptimal post-purchase experiences.</p>
                      <p><strong>What if you could turn that around in 90 days?</strong></p>
                      <p>At Cohorted, we use AI-powered customer intelligence to transform post-purchase data into measurable growth strategies. Our clients typically see 3x revenue growth within 90 days.</p>
                      <p>Our approach worked for companies like [relevant client] who increased customer lifetime value by 240% in their first quarter with us.</p>
                      <p>Worth a 15-minute conversation to explore what this could mean for [Company]?</p>
                      <p>Best,<br />[Your Name]</p>
                      <p className="text-xs text-muted-foreground">P.S. We guarantee measurable results within 90 days — or we work for free until you see them.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* LinkedIn Cold Outreach Sequence */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-primary">LinkedIn Cold Outreach Sequence</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Message 1 */}
                    <div className="bg-muted p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-coral">Message 1 - Connection Request</h5>
                      <p className="text-sm">
                        Hi [Name], I see you're driving growth at [Company]. I help companies like yours turn customer data into revenue engines. Would love to connect and share insights on post-purchase optimization.
                      </p>
                    </div>

                    {/* Message 2 */}
                    <div className="bg-muted p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-coral">Message 2 - Value Add (3 days later)</h5>
                      <p className="text-sm">
                        Thanks for connecting, [Name]! I saw [Company's recent news/content]. Quick question: are you capturing the full revenue potential from your existing customers? Most companies lose 70% of possible LTV after the first purchase. Happy to share some insights specific to your industry if helpful.
                      </p>
                    </div>

                    {/* Message 3 */}
                    <div className="bg-muted p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-lime">Message 3 - Case Study (1 week later)</h5>
                      <p className="text-sm">
                        [Name], thought you might find this interesting: we recently helped a [similar company] increase their customer LTV by 3x in 90 days using AI-powered post-purchase optimization. The approach focused on [specific relevant strategy]. Would a brief call to discuss what this could look like for [Company] be valuable?
                      </p>
                    </div>

                    {/* Message 4 */}
                    <div className="bg-muted p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-gold">Message 4 - Direct Ask (1 week later)</h5>
                      <p className="text-sm">
                        [Name], I'll be direct: if you're not systematically optimizing your post-purchase experience, you're likely leaving significant revenue on the table. We guarantee 3x growth in 90 days or we work for free. Worth 15 minutes to explore what that could mean for [Company]?
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Logo Tab */}
          <TabsContent value="logo" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Logo Treatments</CardTitle>
              </CardHeader>
              <CardContent>
                <img 
                  src={logoTreatments} 
                  alt="Logo Treatments" 
                  className="w-full rounded-lg shadow-brand mb-6"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Logo Usage Guidelines</h4>
                    <ul className="text-muted-foreground space-y-2">
                      <li>• Maintain minimum clear space of 1x logo height</li>
                      <li>• Use primary version on light backgrounds</li>
                      <li>• Use reversed version on dark backgrounds</li>
                      <li>• Icon-only version for social media profiles</li>
                      <li>• Minimum size: 120px width for horizontal logo</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Download Assets</h4>
                    <div className="space-y-2">
                      <Button variant="outline" size="sm" className="w-full justify-start">
                        <Download className="h-4 w-4 mr-2" />
                        Primary Logo (PNG)
                      </Button>
                      <Button variant="outline" size="sm" className="w-full justify-start">
                        <Download className="h-4 w-4 mr-2" />
                        Logo Variations (ZIP)
                      </Button>
                      <Button variant="outline" size="sm" className="w-full justify-start">
                        <Download className="h-4 w-4 mr-2" />
                        Vector Files (AI/SVG)
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Colors Tab */}
          <TabsContent value="colors" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="h-5 w-5 text-secondary" />
                  Brand Colors
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {brandColors.map((color, index) => (
                    <div key={index} className="space-y-3">
                      <div 
                        className="h-24 rounded-lg shadow-brand border"
                        style={{ backgroundColor: color.hex }}
                      />
                      <div>
                        <h4 className="font-semibold">{color.name}</h4>
                        <div className="flex items-center gap-2 mt-2">
                          <code className="text-sm bg-muted px-2 py-1 rounded">{color.hex}</code>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => copyToClipboard(color.hex, color.name)}
                            className="p-1 h-8 w-8"
                          >
                            <Copy className="h-3 w-3" />
                          </Button>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <code className="text-sm bg-muted px-2 py-1 rounded text-xs">{color.hsl}</code>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => copyToClipboard(color.hsl, `${color.name}-hsl`)}
                            className="p-1 h-8 w-8"
                          >
                            <Copy className="h-3 w-3" />
                          </Button>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">{color.usage}</p>
                        {copiedColor === color.name && (
                          <Badge variant="secondary" className="mt-2 text-xs">Copied!</Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <Separator className="my-8" />

                <div>
                  <h4 className="font-semibold mb-4">Gradient Applications</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <div className="h-16 rounded-lg bg-gradient-primary shadow-brand" />
                      <h5 className="font-medium">Primary Gradient</h5>
                      <p className="text-sm text-muted-foreground">Navy to Slate transitions</p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-16 rounded-lg bg-gradient-coral shadow-coral" />
                      <h5 className="font-medium">Coral Energy</h5>
                      <p className="text-sm text-muted-foreground">CTAs, engagement elements</p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-16 rounded-lg bg-gradient-growth shadow-growth" />
                      <h5 className="font-medium">Growth Signal</h5>
                      <p className="text-sm text-muted-foreground">Success states, metrics</p>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h4 className="font-semibold mb-4">Color Usage Guidelines</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-medium mb-2">Primary Applications</h5>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Use Coral (#FF6B6B) for CTAs and human-centric elements</li>
                          <li>• Apply Lime (#A3E635) to highlight growth metrics and success</li>
                          <li>• Reserve Gold (#F5D06F) for premium features and trust signals</li>
                          <li>• Use Navy (#0A1E3F) for rich backgrounds and depth</li>
                          <li>• Employ Slate (#6E7B8B) for technical elements and charts</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium mb-2">Best Practices</h5>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Maintain proper contrast with background colors</li>
                          <li>• Use gradients to create visual hierarchy</li>
                          <li>• Apply accent colors purposefully - less is more</li>
                          <li>• Consider accessibility in color combinations</li>
                          <li>• Keep color usage consistent across platforms</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Typography Tab */}
          <TabsContent value="typography" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Type className="h-5 w-5 text-secondary" />
                  Typography System
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {typography.map((type, index) => (
                    <div key={index} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <Badge variant="outline">{type.name}</Badge>
                          <span className="text-sm text-muted-foreground">
                            {type.font} {type.weight} • {type.size}
                          </span>
                        </div>
                      </div>
                       <div 
                         className={`p-4 border rounded-lg ${
                           type.font === 'Space Mono' ? 'font-mono tracking-wider' : ''
                         }`}
                         style={{ 
                           fontSize: type.size,
                           fontWeight: type.weight,
                           fontFamily: type.font === 'Space Mono' ? 'Space Mono, monospace' : 'Satoshi, sans-serif'
                         }}
                       >
                         The quick brown fox jumps over the lazy dog
                       </div>
                      <p className="text-sm text-muted-foreground">{type.usage}</p>
                      <Separator />
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-muted rounded-lg">
                  <h4 className="font-semibold mb-4">Typography Guidelines</h4>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• Use Satoshi font family for all primary text elements</li>
                    <li>• Headlines/Taglines: Use bold weights (700) and black (900) for hero text</li>
                    <li>• Body Text: Use regular/medium weights (400-500) for readable, modern content</li>
                    <li>• Tech Accents: Use Space Mono with wide letter-spacing for tech-savvy flair</li>
                    <li>• Maintain consistent line height: 1.5 for body text, 1.2 for headings</li>
                    <li>• Ensure sufficient contrast ratios (minimum 4.5:1)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Components Tab */}
          <TabsContent value="components" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Layout className="h-5 w-5 text-secondary" />
                  Component Library
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Buttons */}
                <div>
                  <h4 className="font-semibold mb-4">Buttons</h4>
                  <div className="flex flex-wrap gap-4">
                    <Button>Primary Button</Button>
                    <Button variant="secondary">Secondary Button</Button>
                    <Button className="bg-coral hover:bg-coral/90 text-coral-foreground">Coral Button</Button>
                    <Button className="bg-lime hover:bg-lime/90 text-lime-foreground">Growth Button</Button>
                    <Button className="bg-gold hover:bg-gold/90 text-gold-foreground">Premium Button</Button>
                    <Button className="bg-navy hover:bg-navy/90 text-navy-foreground">Navy Button</Button>
                  </div>
                </div>

                <Separator />

                {/* Cards */}
                <div>
                  <h4 className="font-semibold mb-4">Cards</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Default Card</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          This is the default card styling with shadow and rounded corners.
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="bg-gradient-coral text-coral-foreground">
                      <CardHeader>
                        <CardTitle>Coral Energy Card</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-coral-foreground/90">
                          Human-centric card with warm energy for CTA and engagement.
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="bg-gradient-growth text-lime-foreground mt-4">
                      <CardHeader>
                        <CardTitle>Growth Card</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-lime-foreground/90">
                          Vibrant signal for success metrics and positive growth indicators.
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="bg-gradient-premium text-gold-foreground mt-4">
                      <CardHeader>
                        <CardTitle>Premium Card</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gold-foreground/90">
                          Luxurious tone for premium client features and case studies.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <Separator />

                {/* Badges */}
                <div>
                  <h4 className="font-semibold mb-4">Badges</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Default</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge className="bg-coral text-coral-foreground">Coral</Badge>
                    <Badge className="bg-lime text-lime-foreground">Growth</Badge>
                    <Badge className="bg-gold text-gold-foreground">Premium</Badge>
                    <Badge className="bg-navy text-navy-foreground">Navy</Badge>
                    <Badge className="bg-slate text-slate-foreground">Slate</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Applications Tab */}
          <TabsContent value="applications" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Website Applications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-gradient-depth rounded-lg text-navy-foreground">
                    <h3 className="text-xl font-semibold mb-2">Hero Section</h3>
                    <p className="text-navy-foreground/90">Growth Beyond the Sale</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold text-primary mb-2">Section Header</h4>
                    <p className="text-slate">Clean, minimal card design with proper spacing</p>
                  </div>
                  <div className="flex gap-2">
                    <Button className="bg-coral hover:bg-coral/90 text-coral-foreground">Get Started</Button>
                    <Button className="bg-transparent border-gold text-gold hover:bg-gold/10">Learn More</Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Social Media Applications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-lime text-lime-foreground rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 bg-navy rounded-full flex items-center justify-center">
                        <span className="text-xs text-navy-foreground font-bold">C</span>
                      </div>
                      <span className="font-semibold">@Cohorted</span>
                    </div>
                    <p className="text-sm">
                      Turn your biggest challenge—keeping customers engaged after they buy—into your most powerful competitive advantage. 🚀
                    </p>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <p className="font-medium mb-2">Brand Voice Guidelines:</p>
                    <ul className="space-y-1">
                      <li>• Confident yet approachable</li>
                      <li>• Data-driven insights</li>
                      <li>• Actionable advice</li>
                      <li>• Growth-focused messaging</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Brand Guidelines Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Do's</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>✓ Use brand colors consistently</li>
                      <li>✓ Maintain proper logo spacing</li>
                      <li>✓ Follow typography hierarchy</li>
                      <li>✓ Use gradients purposefully</li>
                      <li>✓ Include growth-focused messaging</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Don'ts</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>✗ Distort or modify the logo</li>
                      <li>✗ Use off-brand colors</li>
                      <li>✗ Mix different font families</li>
                      <li>✗ Overcrowd visual elements</li>
                      <li>✗ Use generic consulting language</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Key Principles</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• AI-powered, human-driven</li>
                      <li>• Professional yet approachable</li>
                      <li>• Data-driven optimization</li>
                      <li>• Growth beyond the sale</li>
                      <li>• Hands-on execution</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default BrandGuide;