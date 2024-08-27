"use client"

//import { TrendingUp } from "lucide-react"
import { useState } from "react"
import { CartesianGrid, Line, LineChart, Bar, BarChart, Pie, PieChart, XAxis } from "recharts"
import { BarChartIcon, LineChartIcon, PieChartIcon } from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { month: "January", Cyclone: 186, Earthquake: 80, Tsunami: 25, Volcanic: 56, Flood: 99 },
  { month: "February", Cyclone: 305, Earthquake: 200, Tsunami: 85, Volcanic: 56, Flood: 99 },
  { month: "March", Cyclone: 237, Earthquake: 120, Tsunami: 95, Volcanic: 66, Flood: 99 },
  { month: "April", Cyclone: 73, Earthquake: 190, Tsunami: 85, Volcanic: 126, Flood: 99 },
  { month: "May", Cyclone: 209, Earthquake: 130, Tsunami: 5, Volcanic: 62, Flood: 99 },
  { month: "June", Cyclone: 214, Earthquake: 140, Tsunami: 25, Volcanic: 66, Flood: 99 },
]

const chartConfig = {
  Cyclone: {
    label: "Cyclone",
    color: "hsl(var(--chart-1))",
  },
  Earthquake: {
    label: "Earthquake",
    color: "hsl(var(--chart-2))",
  },
  Tsunami: {
    label: "Tsunami",
    color: "hsl(var(--chart-3))",
  },
  Volcanic: {
    label: "Volcanic",
    color: "hsl(var(--chart-4))",
  },
  Flood: {
    label: "Flood",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

export function Egraph() {
  const [chartType, setChartType] = useState("line")

  const renderChart = () => {
    switch (chartType) {
      case "line":
        return (
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line dataKey="Cyclone" type="monotone" stroke="var(--color-Cyclone)" strokeWidth={2} dot={false} />
            <Line dataKey="Earthquake" type="monotone" stroke="var(--color-Earthquake)" strokeWidth={2} dot={false} />
            <Line dataKey="Tsunami" type="monotone" stroke="var(--color-Tsunami)" strokeWidth={2} dot={false} />
            <Line dataKey="Volcanic" type="monotone" stroke="var(--color-Volcanic)" strokeWidth={2} dot={false} />
            <Line dataKey="Flood" type="monotone" stroke="var(--color-Flood)" strokeWidth={2} dot={false} />
          </LineChart>
        )
      case "bar":
        return (
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Bar dataKey="Cyclone" fill="var(--color-Cyclone)" />
            <Bar dataKey="Earthquake" fill="var(--color-Earthquake)" />
            <Bar dataKey="Tsunami" fill="var(--color-Tsunami)" />
            <Bar dataKey="Volcanic" fill="var(--color-Volcanic)" />
            <Bar dataKey="Flood" fill="var(--color-Flood)" />
          </BarChart>
        )
      case "pie":
        return (
          <PieChart>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Pie
              data={chartData}
              dataKey="Cyclone"
              nameKey="month"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="var(--color-Cyclone)"
            />
            <Pie
              data={chartData}
              dataKey="Earthquake"
              nameKey="month"
              cx="50%"
              cy="50%"
              innerRadius={90}
              outerRadius={110}
              fill="var(--color-Earthquake)"
              label
            />
          </PieChart>
        )
      default:
        return <div>No chart available</div> // Fallback 
    }
  }
  

  return (
    <div className="w-8/12">
      <Card className="bg-cyan-900/30 backdrop-blur-3xl text-opacity-100 text-emerald-300">
        <CardHeader className="text-emerald-300">
          <CardTitle>{chartType.charAt(0).toUpperCase() + chartType.slice(1)} Chart - Multiple</CardTitle>
          <CardDescription className="text-emerald-300">January - June 2024</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>{renderChart()}</ChartContainer>
        </CardContent>
        <CardFooter className="text-emerald-300">
          <div className="flex w-full items-start gap-4 text-sm">
            <BarChartIcon onClick={() => setChartType("bar")} className="cursor-pointer" />
            <LineChartIcon onClick={() => setChartType("line")} className="cursor-pointer" />
            <PieChartIcon onClick={() => setChartType("pie")} className="cursor-pointer" />
            <div className="grid gap-2">
              <div className="flex items-center gap-2 leading-none text-muted-foreground text-emerald-300">
                Showing total analysis for the last 6 months
              </div>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}