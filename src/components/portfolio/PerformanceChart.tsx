import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Area, ComposedChart } from "recharts";

// Complete NAV history from 2015-2024 - Full Fund Journey (9+ Years)
const chartData = [
  { date: "2015-05", focused: 122.12, nifty50: 85, drawdown: 0, nav: 122.12 },
  { date: "2015-08", focused: 129.54, nifty50: 87, drawdown: -2, nav: 129.54 },
  { date: "2015-12", focused: 130.78, nifty50: 88, drawdown: -1, nav: 130.78 },
  { date: "2016-03", focused: 119.93, nifty50: 84, drawdown: -8, nav: 119.93 },
  { date: "2016-06", focused: 129.87, nifty50: 89, drawdown: -3, nav: 129.87 },
  { date: "2016-09", focused: 140.52, nifty50: 92, drawdown: -2, nav: 140.52 },
  { date: "2016-12", focused: 132.97, nifty50: 90, drawdown: -5, nav: 132.97 },
  { date: "2017-01", focused: 134.26, nifty50: 95, drawdown: -1, nav: 134.26 },
  { date: "2017-03", focused: 145.53, nifty50: 98, drawdown: -2, nav: 145.53 },
  { date: "2017-06", focused: 154.86, nifty50: 102, drawdown: -1, nav: 154.86 },
  { date: "2017-09", focused: 163.70, nifty50: 105, drawdown: -3, nav: 163.70 },
  { date: "2017-12", focused: 173.49, nifty50: 108, drawdown: -1, nav: 173.49 },
  { date: "2018-03", focused: 174.39, nifty50: 105, drawdown: -5, nav: 174.39 },
  { date: "2018-06", focused: 177.67, nifty50: 110, drawdown: -3, nav: 177.67 },
  { date: "2018-08", focused: 185.43, nifty50: 115, drawdown: -2, nav: 185.43 },
  { date: "2018-11", focused: 173.99, nifty50: 120, drawdown: -8, nav: 173.99 },
  { date: "2019-01", focused: 179.57, nifty50: 125, drawdown: -3, nav: 179.57 },
  { date: "2019-06", focused: 182.12, nifty50: 130, drawdown: -5, nav: 182.12 },
  { date: "2019-12", focused: 185.83, nifty50: 135, drawdown: -2, nav: 185.83 },
  { date: "2020-03", focused: 124.26, nifty50: 95, drawdown: -33, nav: 124.26 },
  { date: "2020-06", focused: 182.91, nifty50: 110, drawdown: -15, nav: 182.91 },
  { date: "2020-09", focused: 216.56, nifty50: 125, drawdown: -8, nav: 216.56 },
  { date: "2020-12", focused: 243.96, nifty50: 140, drawdown: -5, nav: 243.96 },
  { date: "2021-04", focused: 311.73, nifty50: 155, drawdown: -3, nav: 311.73 },
  { date: "2021-09", focused: 397.13, nifty50: 170, drawdown: -8, nav: 397.13 },
  { date: "2021-12", focused: 415.20, nifty50: 180, drawdown: -5, nav: 415.20 },
  { date: "2022-03", focused: 427.76, nifty50: 170, drawdown: -12, nav: 427.76 },
  { date: "2022-07", focused: 375.66, nifty50: 155, drawdown: -25, nav: 375.66 },
  { date: "2022-12", focused: 470.68, nifty50: 180, drawdown: -10, nav: 470.68 },
  { date: "2023-03", focused: 408.11, nifty50: 165, drawdown: -18, nav: 408.11 },
  { date: "2023-09", focused: 515.35, nifty50: 195, drawdown: -8, nav: 515.35 },
  { date: "2023-12", focused: 575.51, nifty50: 210, drawdown: -5, nav: 575.51 },
  { date: "2024-04", focused: 658.12, nifty50: 225, drawdown: -3, nav: 658.12 },
];

export default function PerformanceChart() {
  return (
    <div className="space-y-6">
      {/* Main Performance Chart */}
      <div className="h-96">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="date" 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
            />
            <YAxis 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "var(--radius)",
                color: "hsl(var(--card-foreground))"
              }}
            />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="focused" 
              stroke="hsl(var(--financial-positive))" 
              strokeWidth={3}
              name="Focused Portfolio"
              dot={{ fill: "hsl(var(--financial-positive))", strokeWidth: 2, r: 4 }}
            />
            <Line 
              type="monotone" 
              dataKey="nifty50" 
              stroke="hsl(var(--primary))" 
              strokeWidth={2}
              name="NIFTY50"
              dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 3 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Drawdown Chart */}
      <div className="h-64">
        <h4 className="text-sm font-medium mb-4 text-foreground">Drawdown Analysis</h4>
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="date" 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
            />
            <YAxis 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "var(--radius)",
                color: "hsl(var(--card-foreground))"
              }}
            />
            <Area
              type="monotone"
              dataKey="drawdown"
              fill="hsl(var(--financial-negative) / 0.3)"
              stroke="hsl(var(--financial-negative))"
              strokeWidth={2}
              name="Drawdown %"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}