import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User, TrendingUp, BarChart3, ExternalLink } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "CM Fixed Income: Exiting Banking & PSU to Add a New Gilt Fund",
    date: "Apr 18, 2024",
    excerpt: "We are increasing the duration of our Fixed Income portfolio to reflect the current macro conditions. We want to take advantage of the current higher rates to further increase the duration of the Gilt funds we hold.",
    category: "Fixed Income",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Craftsman Automation: Poised for Growth Amid Temporary Headwinds",
    date: "Apr 05, 2024",
    excerpt: "Unlock this post by trail. Craftsman Automation excels in making precise parts for cars and machines. Amidst temporary headwinds, looks resilient with a focus on growth and innovation.",
    category: "Stock Analysis",
    readTime: "8 min read",
  },
  {
    id: 3,
    title: "The Focused Way of Investing: Our Four-Quadrant Strategy and FY24 Review",
    date: "Apr 03, 2024",
    excerpt: "FY24 brought us a 42% gain in our Capitalmind Focused portfolio, gently outperforming the Nifty's 29%. It's been a bit of a rollercoaster, especially these last few months, but that's part of the equity investing.",
    category: "Portfolio Strategy",
    readTime: "12 min read",
  },
  {
    id: 4,
    title: "Poonawalla Fincorp: One right step at a time",
    date: "Mar 25, 2024",
    excerpt: "There are some winning patterns in investing that keep repeating. One such pattern is when a big company buys a struggling company, fixes old problems, and brings in new leadership to grow the business.",
    category: "Financial Services",
    readTime: "6 min read",
  },
  {
    id: 5,
    title: "CM Focused: Reducing our allocation to smallcaps & increasing cash",
    date: "Mar 18, 2024",
    excerpt: "In the last few days, we have seen increased volatility in the mid and small-cap stocks in our portfolio and portfolios of others, which has followed from the recent RBI warnings about excessive speculation.",
    category: "Portfolio Update",
    readTime: "4 min read",
  },
  {
    id: 6,
    title: "A Small CAD for India, Yet Again",
    date: "Mar 27, 2024",
    excerpt: "Yet again, India's Current Account Deficit is a mere 10 bn in the quarter (Dec 2023), less than levels more than a decade back, and less than 2017-18 too. Why net of gold?",
    category: "Economic Analysis",
    readTime: "7 min read",
  },
];

const quickActions = [
  { title: "Get started", description: "Read our getting started guide to get the most out of your Capitalmind subscription.", icon: ArrowRight },
  { title: "Community", description: "Join the conversation on our exclusive community on Slack for Capitalmind Premium subscribers", icon: User },
  { title: "Visit website", description: "Keep up with our latest content on our website", icon: ExternalLink },
];

export default function Index() {
  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Home</h1>
        <p className="text-muted-foreground">Welcome to your investment research dashboard</p>
      </div>

      {/* Quick Actions */}
      <div className="grid gap-4 md:grid-cols-3 mb-8">
        {quickActions.map((action, index) => (
          <Card key={index} className="shadow-card hover:shadow-financial transition-smooth cursor-pointer group">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-base group-hover:text-accent">
                <action.icon className="h-5 w-5" />
                {action.title}
                <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-smooth" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{action.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Latest Posts Section */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-foreground">Latest Posts</h2>
          <Button variant="outline" className="gap-2">
            View All Posts
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {blogPosts.map((post) => (
            <Card key={post.id} className="shadow-card hover:shadow-financial transition-smooth cursor-pointer group">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {post.category}
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground gap-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <CardTitle className="group-hover:text-accent transition-smooth line-clamp-2">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-4">
                  {post.excerpt}
                </p>
                <Button variant="ghost" className="text-accent hover:text-accent-foreground hover:bg-accent/10 p-0 h-auto font-medium">
                  Read full post
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Performance Overview */}
      <Card className="shadow-card bg-gradient-subtle">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-financial-positive" />
            Portfolio Performance Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="text-center p-4 bg-card rounded-lg">
              <div className="text-2xl font-bold text-financial-positive mb-1">+43.5%</div>
              <div className="text-sm text-muted-foreground">1Y Return</div>
            </div>
            <div className="text-center p-4 bg-card rounded-lg">
              <div className="text-2xl font-bold text-financial-positive mb-1">+23.9%</div>
              <div className="text-sm text-muted-foreground">3Y Annualized</div>
            </div>
            <div className="text-center p-4 bg-card rounded-lg">
              <div className="text-2xl font-bold text-foreground mb-1">658.12</div>
              <div className="text-sm text-muted-foreground">Current NAV</div>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-border">
            <Button className="w-full bg-gradient-financial text-white hover:opacity-90 transition-smooth">
              <BarChart3 className="mr-2 h-4 w-4" />
              View Detailed Analytics
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}