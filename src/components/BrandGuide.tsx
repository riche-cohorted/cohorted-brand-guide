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
    { name: "Pure White", hex: "#FFFFFF", hsl: "0 0% 100%", usage: "Background, contrast, clean space" },
    { name: "Neutral Gray", hex: "#737373", hsl: "220 10% 45%", usage: "Supporting text, subtle elements" },
    { name: "Light Neutral", hex: "#F8F9FA", hsl: "220 10% 96%", usage: "Backgrounds, cards, sections" },
  ];

  const typography = [
    { name: "Display", font: "Inter", weight: "700", size: "48px", usage: "Page titles, hero headlines" },
    { name: "Heading 1", font: "Inter", weight: "600", size: "36px", usage: "Section headers" },
    { name: "Heading 2", font: "Inter", weight: "600", size: "24px", usage: "Sub-sections" },
    { name: "Heading 3", font: "Inter", weight: "500", size: "20px", usage: "Card titles" },
    { name: "Body Large", font: "Inter", weight: "400", size: "18px", usage: "Intro text, important body" },
    { name: "Body", font: "Inter", weight: "400", size: "16px", usage: "Default body text" },
    { name: "Small", font: "Inter", weight: "400", size: "14px", usage: "Captions, metadata" },
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
          <TabsList className="grid grid-cols-6 w-full max-w-4xl">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="logo">Logo</TabsTrigger>
            <TabsTrigger value="colors">Colors</TabsTrigger>
            <TabsTrigger value="typography">Typography</TabsTrigger>
            <TabsTrigger value="components">Components</TabsTrigger>
            <TabsTrigger value="applications">Applications</TabsTrigger>
          </TabsList>

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
                    <p className="text-2xl font-bold text-primary">Cohorted</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Primary Tagline</h4>
                    <p className="text-2xl font-bold text-secondary">"Growth Beyond the Sale"</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Brand Promise</h4>
                    <p className="text-muted-foreground">
                      We don't just analyze what happened—we architect what's next.
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

            <Card className="shadow-electric border-0 bg-gradient-electric text-white">
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
                      <p className="text-sm text-muted-foreground">Hero sections, CTAs</p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-16 rounded-lg bg-gradient-subtle shadow-brand" />
                      <h5 className="font-medium">Subtle Gradient</h5>
                      <p className="text-sm text-muted-foreground">Backgrounds, cards</p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-16 rounded-lg bg-gradient-accent shadow-brand" />
                      <h5 className="font-medium">Accent Gradient</h5>
                      <p className="text-sm text-muted-foreground">Special highlights</p>
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
                        className="text-foreground"
                        style={{ 
                          fontSize: type.size, 
                          fontWeight: type.weight,
                          fontFamily: type.font
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
                    <li>• Use Inter font family for all text elements</li>
                    <li>• Maintain consistent line height: 1.5 for body text, 1.2 for headings</li>
                    <li>• Ensure sufficient contrast ratios (minimum 4.5:1)</li>
                    <li>• Use font weights purposefully: 400 for body, 500-600 for emphasis, 700 for headlines</li>
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
                    <Button variant="outline">Outline Button</Button>
                    <Button variant="ghost">Ghost Button</Button>
                    <Button variant="destructive">Destructive Button</Button>
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
                    <Card className="bg-gradient-primary text-primary-foreground">
                      <CardHeader>
                        <CardTitle>Gradient Card</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-primary-foreground/90">
                          Special card with brand gradient background for featured content.
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
                    <Badge variant="outline">Outline</Badge>
                    <Badge variant="destructive">Destructive</Badge>
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
                  <div className="p-4 bg-gradient-primary rounded-lg text-primary-foreground">
                    <h3 className="text-xl font-semibold mb-2">Hero Section</h3>
                    <p className="text-primary-foreground/90">Growth Beyond the Sale</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold text-primary mb-2">Section Header</h4>
                    <p className="text-muted-foreground">Clean, minimal card design with proper spacing</p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm">Get Started</Button>
                    <Button variant="outline" size="sm">Learn More</Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Social Media Applications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-secondary text-secondary-foreground rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-xs text-primary-foreground font-bold">C</span>
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