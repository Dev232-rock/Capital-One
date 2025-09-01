import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Calendar, Download, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import PerformanceChart from "@/components/portfolio/PerformanceChart";
import ReturnsTable from "@/components/portfolio/ReturnsTable";
import NAVHistory from "@/components/portfolio/NAVHistory";
import PerformanceSummary from "@/components/portfolio/PerformanceSummary";

export default function Portfolio() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Portfolio Performance</h1>
            <p className="text-muted-foreground mt-1">Complete Fund Journey: May 2015 - Apr 2024</p>
          </div>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export Data
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 md:grid-cols-4 mb-8">
        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current NAV</CardTitle>
            <TrendingUp className="h-4 w-4 text-financial-positive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹658.12</div>
            <p className="text-xs text-financial-positive">+0.89% from yesterday</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">1Y Return</CardTitle>
            <TrendingUp className="h-4 w-4 text-financial-positive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-financial-positive">43.5%</div>
            <p className="text-xs text-muted-foreground">vs NIFTY50 26.2%</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Since Inception</CardTitle>
            <BarChart3 className="h-4 w-4 text-financial-positive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-financial-positive">439%</div>
            <p className="text-xs text-muted-foreground">From ₹122 to ₹658 (May 2015)</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Max Drawdown</CardTitle>
            <TrendingDown className="h-4 w-4 text-financial-negative" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-financial-negative">-33.1%</div>
            <p className="text-xs text-muted-foreground">COVID-19 crash (Mar 2020)</p>
          </CardContent>
        </Card>
      </div>

      {/* Performance Summary */}
      <div className="mb-8">
        <PerformanceSummary />
      </div>

      {/* Returns Table and NAV History */}
      <div className="grid gap-6 lg:grid-cols-2 mb-8">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Trailing Returns
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ReturnsTable />
          </CardContent>
        </Card>

        <NAVHistory />
      </div>

      {/* Equity Curve Chart */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Complete Portfolio Journey
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Full performance history from May 2015 to April 2024 - 9 years of exceptional growth
          </p>
        </CardHeader>
        <CardContent>
          <PerformanceChart />
        </CardContent>
      </Card>
    </div>
  );
}