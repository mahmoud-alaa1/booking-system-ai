import { FaUsers, FaCalendarAlt, FaTicketAlt, FaChartLine } from "react-icons/fa";
import { Card } from "@/components/ui/card";

const stats = [
    {
        title: "Total Users",
        value: "2,543",
        change: "+12.5%",
        icon: FaUsers,
        color: "text-blue-500",
    },
    {
        title: "Active Events",
        value: "24",
        change: "+3.2%",
        icon: FaCalendarAlt,
        color: "text-green-500",
    },
    {
        title: "Total Bookings",
        value: "1,234",
        change: "+8.1%",
        icon: FaTicketAlt,
        color: "text-purple-500",
    },
    {
        title: "Revenue",
        value: "$45,678",
        change: "+15.3%",
        icon: FaChartLine,
        color: "text-orange-500",
    },
];

const recentActivity = [
    {
        id: 1,
        user: "John Doe",
        action: "booked",
        event: "Food & Wine Festival",
        time: "2 minutes ago",
    },
    {
        id: 2,
        user: "Jane Smith",
        action: "cancelled",
        event: "Summer Concert",
        time: "15 minutes ago",
    },
    {
        id: 3,
        user: "Mike Johnson",
        action: "booked",
        event: "Tech Conference",
        time: "1 hour ago",
    },
    {
        id: 4,
        user: "Sarah Wilson",
        action: "booked",
        event: "Art Exhibition",
        time: "2 hours ago",
    },
];

export default function Dashboard() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <p className="text-muted-foreground">Welcome back to your admin dashboard</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => (
                    <Card key={stat.title} className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">
                                    {stat.title}
                                </p>
                                <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                                <p className="text-sm text-green-500 mt-1">{stat.change}</p>
                            </div>
                            <div className={`p-3 rounded-full bg-primary/10 ${stat.color}`}>
                                <stat.icon className="w-6 h-6" />
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            {/* Recent Activity */}
            <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
                <div className="space-y-4">
                    {recentActivity.map((activity) => (
                        <div
                            key={activity.id}
                            className="flex items-center justify-between py-3 border-b last:border-0"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                    <span className="text-primary font-semibold">
                                        {activity.user[0]}
                                    </span>
                                </div>
                                <div>
                                    <p className="font-medium">{activity.user}</p>
                                    <p className="text-sm text-muted-foreground">
                                        {activity.action} {activity.event}
                                    </p>
                                </div>
                            </div>
                            <span className="text-sm text-muted-foreground">
                                {activity.time}
                            </span>
                        </div>
                    ))}
                </div>
            </Card>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <button className="p-4 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                            Create Event
                        </button>
                        <button className="p-4 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                            View Reports
                        </button>
                        <button className="p-4 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                            Manage Users
                        </button>
                        <button className="p-4 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                            Settings
                        </button>
                    </div>
                </Card>

                <Card className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-medium">Food & Wine Festival</p>
                                <p className="text-sm text-muted-foreground">Aug 15, 2025</p>
                            </div>
                            <span className="text-sm text-green-500">24 tickets left</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-medium">Tech Conference</p>
                                <p className="text-sm text-muted-foreground">Sep 20, 2025</p>
                            </div>
                            <span className="text-sm text-green-500">156 tickets left</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-medium">Art Exhibition</p>
                                <p className="text-sm text-muted-foreground">Oct 5, 2025</p>
                            </div>
                            <span className="text-sm text-red-500">Sold out</span>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
} 