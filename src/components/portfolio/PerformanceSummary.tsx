import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Calendar, Award, Target } from "lucide-react";

export default function PerformanceSummary() {
  return (
    <Card className="shadow-card bg-gradient-subtle">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Award className="h-5 w-5 text-financial-positive" />
          Performance Highlights
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 md:grid-cols-2">
          {/* Left Column - Key Achievements */}
          <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-card rounded-lg border border-border">
                <div>
                  <div className="text-sm text-muted-foreground">Total Journey</div>
                  <div className="text-xl font-bold text-foreground">9.0 Years</div>
                </div>
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              
              <div className="flex items-center justify-between p-4 bg-card rounded-lg border border-border">
                <div>
                  <div className="text-sm text-muted-foreground">Starting NAV</div>
                  <div className="text-xl font-bold text-foreground">₹122.12</div>
                </div>
                <div className="text-2xl">🚀</div>
              </div>
            
            <div className="flex items-center justify-between p-4 bg-card rounded-lg border border-border">
              <div>
                <div className="text-sm text-muted-foreground">Peak NAV</div>
                <div className="text-xl font-bold text-financial-positive">₹658.12</div>
              </div>
              <TrendingUp className="h-8 w-8 text-financial-positive" />
            </div>
          </div>

          {/* Right Column - Performance Milestones */}
          <div className="space-y-4">
            <div className="p-4 bg-card rounded-lg border border-border">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Market Resilience</span>
                <Badge variant="outline" className="text-xs">COVID Recovery</Badge>
              </div>
              <div className="text-xs text-muted-foreground">
                Recovered from -33% drawdown (Mar 2020) to new highs within 9 months
              </div>
            </div>
            
            <div className="p-4 bg-card rounded-lg border border-border">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Consistent Growth</span>
                <Badge variant="outline" className="text-xs">Outperformance</Badge>
              </div>
              <div className="text-xs text-muted-foreground">
                19.8% CAGR vs NIFTY50's 12.8% over 9 years
              </div>
            </div>
            
            <div className="p-4 bg-card rounded-lg border border-border">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Value Creation</span>
                <Badge className="bg-gradient-financial text-white text-xs">439% Total Return</Badge>
              </div>
              <div className="text-xs text-muted-foreground">
                Every ₹1 lakh invested became ₹5.39 lakh
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}