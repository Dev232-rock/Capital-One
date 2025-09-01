import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, TrendingUp, Calendar } from "lucide-react";

export default function Research() {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Research</h1>
        <p className="text-muted-foreground">In-depth market analysis and investment research</p>
      </div>

      <div className="grid gap-6">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Coming Soon
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Comprehensive research reports and market analysis will be available here soon.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}