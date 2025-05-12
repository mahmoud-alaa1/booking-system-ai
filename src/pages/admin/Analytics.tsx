import { FaArrowUp, FaArrowDown, FaChartLine, FaTicketAlt, FaDollarSign, FaUsers } from "react-icons/fa";
import { Card } from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";

const stats = [
    {
        title: "Total Revenue",
        value: "$45,678",
        change: "+12.5%",
        trend: "up",
        icon: FaDollarSign,
    },
    {
        title: "Total Bookings",
        value: "1,234",
        change: "+8.1%",
        trend: "up",
        icon: FaTicketAlt,
    },
    {
        title: "Average Ticket Price",
        value: "$65.00",
        change: "-2.3%",
        trend: "down",
        icon: FaChartLine,
    },
    {
        title: "Conversion Rate",
        value: "3.2%",
        change: "+1.1%",
        trend: "up",
        icon: FaUsers,
    },
];

const topEvents = [
    {
        name: "Food & Wine Festival",
        revenue: "$12,500",
        tickets: 250,
        growth: "+15.3%",
        progress: 85,
    },
    {
        name: "Tech Conference",
        revenue: "$9,800",
        tickets: 200,
        growth: "+8.7%",
        progress: 75,
    },
    {
        name: "Summer Concert",
        revenue: "$8,400",
        tickets: 180,
        growth: "+5.2%",
        progress: 65,
    },
];

export default function Analytics() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold">Analytics</h1>
                    <p className="text-sm text-muted-foreground mt-1">Track your event performance and revenue</p>
                </div>
                <Select defaultValue="30">
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select period" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="7">Last 7 days</SelectItem>
                        <SelectItem value="30">Last 30 days</SelectItem>
                        <SelectItem value="90">Last 90 days</SelectItem>
                        <SelectItem value="365">Last year</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat) => (
                    <Card key={stat.title} className="p-6">
                        <div className="flex items-center justify-between">
                            <div className="p-3 rounded-lg bg-primary/10">
                                <stat.icon className="w-5 h-5 text-primary" />
                            </div>
                            <span
                                className={`flex items-center gap-1 text-sm font-medium ${stat.trend === "up"
                                    ? "text-green-600 dark:text-green-400"
                                    : "text-red-600 dark:text-red-400"
                                    }`}
                            >
                                {stat.trend === "up" ? (
                                    <FaArrowUp className="w-4 h-4" />
                                ) : (
                                    <FaArrowDown className="w-4 h-4" />
                                )}
                                {stat.change}
                            </span>
                        </div>
                        <h3 className="text-2xl font-bold mt-4">{stat.value}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{stat.title}</p>
                    </Card>
                ))}
            </div>

            {/* Top Events */}
            <Card className="p-6">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-semibold">Top Performing Events</h2>
                    <Select defaultValue="revenue">
                        <SelectTrigger className="w-[160px]">
                            <SelectValue placeholder="Sort by" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="revenue">Revenue</SelectItem>
                            <SelectItem value="tickets">Tickets</SelectItem>
                            <SelectItem value="growth">Growth</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-6">
                    {topEvents.map((event) => (
                        <div key={event.name} className="space-y-2">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-medium">{event.name}</p>
                                    <p className="text-sm text-muted-foreground">
                                        {event.tickets} tickets sold
                                    </p>
                                </div>
                                <div className="text-right">
                                    <p className="font-medium">{event.revenue}</p>
                                    <p className="text-sm text-green-600 dark:text-green-400">
                                        {event.growth}
                                    </p>
                                </div>
                            </div>
                            <Progress value={event.progress} className="h-2" />
                        </div>
                    ))}
                </div>
            </Card>

            {/* Charts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <Card className="p-6">
                    <h2 className="text-lg font-semibold mb-4">Revenue Overview</h2>
                    <div className="h-[300px] bg-muted/50 rounded-lg flex items-center justify-center">
                        <p className="text-sm text-muted-foreground">Revenue chart will be displayed here</p>
                    </div>
                </Card>

                <Card className="p-6">
                    <h2 className="text-lg font-semibold mb-4">Booking Trends</h2>
                    <div className="h-[300px] bg-muted/50 rounded-lg flex items-center justify-center">
                        <p className="text-sm text-muted-foreground">Booking trends chart will be displayed here</p>
                    </div>
                </Card>
            </div>

            {/* Additional Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="p-6">
                    <h2 className="text-lg font-semibold mb-4">User Demographics</h2>
                    <div className="h-[250px] bg-muted/50 rounded-lg flex items-center justify-center">
                        <p className="text-sm text-muted-foreground">Demographics chart will be displayed here</p>
                    </div>
                </Card>

                <Card className="p-6">
                    <h2 className="text-lg font-semibold mb-4">Ticket Categories</h2>
                    <div className="h-[250px] bg-muted/50 rounded-lg flex items-center justify-center">
                        <p className="text-sm text-muted-foreground">Ticket categories chart will be displayed here</p>
                    </div>
                </Card>
            </div>
        </div>
    );
} 