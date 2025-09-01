import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const returnsData = [
  {
    name: "Focused",
    ytd: -1.7,
    "1d": 0.1,
    "1w": 2.9,
    "1m": 7.6,
    "3m": 2.2,
    "6m": 10.1,
    "1y": 43.5,
    "3y": 23.9,
    si: 22.5,
    dd: -2.8,
    maxdd: -40.3,
  },
  {
    name: "NIFTY50",
    ytd: 3.1,
    "1d": 0.1,
    "1w": 1.1,
    "1m": 1.4,
    "3m": 4.4,
    "6m": 16.2,
    "1y": 26.2,
    "3y": 16.0,
    si: 14.5,
    dd: -1.5,
    maxdd: -38.4,
  },
];

const formatReturn = (value: number) => {
  const isNegative = value < 0;
  return (
    <span className={`font-medium ${isNegative ? 'text-financial-negative' : 'text-financial-positive'}`}>
      {value > 0 ? '+' : ''}{value}%
    </span>
  );
};

export default function ReturnsTable() {
  return (
    <div className="rounded-lg border overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/50">
            <TableHead className="font-semibold">NAME</TableHead>
            <TableHead className="text-center font-semibold">YTD</TableHead>
            <TableHead className="text-center font-semibold">1D</TableHead>
            <TableHead className="text-center font-semibold">1W</TableHead>
            <TableHead className="text-center font-semibold">1M</TableHead>
            <TableHead className="text-center font-semibold">3M</TableHead>
            <TableHead className="text-center font-semibold">6M</TableHead>
            <TableHead className="text-center font-semibold">1Y</TableHead>
            <TableHead className="text-center font-semibold">3Y</TableHead>
            <TableHead className="text-center font-semibold">SI</TableHead>
            <TableHead className="text-center font-semibold">DD</TableHead>
            <TableHead className="text-center font-semibold">MAXDD</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {returnsData.map((row) => (
            <TableRow key={row.name} className="hover:bg-muted/30">
              <TableCell className="font-medium">{row.name}</TableCell>
              <TableCell className="text-center">{formatReturn(row.ytd)}</TableCell>
              <TableCell className="text-center">{formatReturn(row["1d"])}</TableCell>
              <TableCell className="text-center">{formatReturn(row["1w"])}</TableCell>
              <TableCell className="text-center">{formatReturn(row["1m"])}</TableCell>
              <TableCell className="text-center">{formatReturn(row["3m"])}</TableCell>
              <TableCell className="text-center">{formatReturn(row["6m"])}</TableCell>
              <TableCell className="text-center">{formatReturn(row["1y"])}</TableCell>
              <TableCell className="text-center">{formatReturn(row["3y"])}</TableCell>
              <TableCell className="text-center">{formatReturn(row.si)}</TableCell>
              <TableCell className="text-center">{formatReturn(row.dd)}</TableCell>
              <TableCell className="text-center">{formatReturn(row.maxdd)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="px-4 py-2 bg-muted/30 text-xs text-muted-foreground">
        Note: Returns above 1 year are annualized
      </div>
    </div>
  );
}