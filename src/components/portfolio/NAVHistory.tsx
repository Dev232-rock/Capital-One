import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, TrendingUp, TrendingDown } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Recent NAV history from your data
const navHistory = [
  { date: "24-04-2024", nav: 658.12, change: 5.81, changePercent: 0.89 },
  { date: "23-04-2024", nav: 652.31, change: 2.61, changePercent: 0.40 },
  { date: "22-04-2024", nav: 649.70, change: 8.08, changePercent: 1.26 },
  { date: "19-04-2024", nav: 641.62, change: -1.73, changePercent: -0.27 },
  { date: "18-04-2024", nav: 643.77, change: 1.27, changePercent: 0.20 },
  { date: "16-04-2024", nav: 642.01, change: -8.73, changePercent: -1.34 },
  { date: "15-04-2024", nav: 650.72, change: 4.56, changePercent: 0.71 },
  { date: "12-04-2024", nav: 654.16, change: 4.48, changePercent: 0.69 },
  { date: "10-04-2024", nav: 649.86, change: 1.00, changePercent: 0.15 },
  { date: "09-04-2024", nav: 648.64, change: -4.90, changePercent: -0.75 },
];

const formatChange = (change: number, changePercent: number) => {
  const isPositive = change > 0;
  const icon = isPositive ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />;
  const colorClass = isPositive ? "text-financial-positive" : "text-financial-negative";
  
  return (
    <div className={`flex items-center gap-1 ${colorClass}`}>
      {icon}
      <span className="font-medium">
        {isPositive ? '+' : ''}{change.toFixed(2)}
      </span>
      <span className="text-xs">
        ({isPositive ? '+' : ''}{changePercent.toFixed(2)}%)
      </span>
    </div>
  );
};

export default function NAVHistory() {
  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          Recent NAV History
        </CardTitle>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-xs">
            Quant Active Fund Gr
          </Badge>
          <Badge variant="secondary" className="text-xs">
            Last 10 Trading Days
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-lg border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="font-semibold">Date</TableHead>
                <TableHead className="text-right font-semibold">NAV (₹)</TableHead>
                <TableHead className="text-right font-semibold">Change</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {navHistory.map((row, index) => (
                <TableRow key={row.date} className="hover:bg-muted/30">
                  <TableCell className="font-medium">{row.date}</TableCell>
                  <TableCell className="text-right font-mono text-sm">
                    {row.nav.toFixed(2)}
                  </TableCell>
                  <TableCell className="text-right">
                    {formatChange(row.change, row.changePercent)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        
        {/* Summary Stats */}
        <div className="mt-4 pt-4 border-t border-border">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-lg font-bold text-foreground">658.12</div>
              <div className="text-xs text-muted-foreground">Current NAV</div>
            </div>
            <div>
              <div className="text-lg font-bold text-financial-positive">+2.89%</div>
              <div className="text-xs text-muted-foreground">10-Day Return</div>
            </div>
            <div>
              <div className="text-lg font-bold text-muted-foreground">7/10</div>
              <div className="text-xs text-muted-foreground">Positive Days</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}