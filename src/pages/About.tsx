import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Award, Target } from "lucide-react";

export default function About() {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">About CapitalMind</h1>
        <p className="text-muted-foreground">Professional portfolio management and investment research</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-accent" />
              Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              To provide superior investment returns through disciplined research and focused portfolio management.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-accent" />
              Track Record
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Consistent outperformance with 43.5% returns in the last year vs NIFTY50's 26.2%.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-accent" />
              Team
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Experienced investment professionals with deep market expertise and proven results.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}