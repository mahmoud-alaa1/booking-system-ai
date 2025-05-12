import { FaPlus, FaEdit, FaTrash, FaSearch, FaEllipsisV } from "react-icons/fa";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const events = [
    {
        id: 1,
        title: "Summer Music Festival",
        date: "Jul 15, 2024",
        location: "Central Park",
        capacity: 1000,
        bookings: 750,
        status: "upcoming",
    },
    {
        id: 2,
        title: "Tech Conference 2024",
        date: "Aug 20, 2024",
        location: "Convention Center",
        capacity: 500,
        bookings: 320,
        status: "upcoming",
    },
    {
        id: 3,
        title: "Food & Wine Expo",
        date: "Jun 5, 2024",
        location: "Exhibition Hall",
        capacity: 800,
        bookings: 800,
        status: "sold-out",
    },
    {
        id: 4,
        title: "Art Gallery Opening",
        date: "May 10, 2024",
        location: "Modern Art Museum",
        capacity: 200,
        bookings: 150,
        status: "upcoming",
    },
];

export default function Events() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold">Events</h1>
                    <p className="text-sm text-muted-foreground">Manage events and bookings</p>
                </div>
                <Button className="flex items-center gap-2">
                    <FaPlus className="w-4 h-4" />
                    Add Event
                </Button>
            </div>

            <Card className="p-6">
                <div className="flex items-center gap-4 mb-6">
                    <div className="relative flex-1">
                        <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                            placeholder="Search events..."
                            className="pl-9 h-10"
                        />
                    </div>
                    <Select defaultValue="all">
                        <SelectTrigger className="w-[140px]">
                            <SelectValue placeholder="Filter by status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Status</SelectItem>
                            <SelectItem value="upcoming">Upcoming</SelectItem>
                            <SelectItem value="sold-out">Sold Out</SelectItem>
                            <SelectItem value="cancelled">Cancelled</SelectItem>
                        </SelectContent>
                    </Select>
                    <Select defaultValue="all">
                        <SelectTrigger className="w-[140px]">
                            <SelectValue placeholder="Sort by" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="date-asc">Date (Asc)</SelectItem>
                            <SelectItem value="date-desc">Date (Desc)</SelectItem>
                            <SelectItem value="capacity">Capacity</SelectItem>
                            <SelectItem value="bookings">Bookings</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <Table>
                    <TableHeader>
                        <TableRow className="hover:bg-transparent">
                            <TableHead className="py-4">Event</TableHead>
                            <TableHead className="py-4">Date</TableHead>
                            <TableHead className="py-4">Location</TableHead>
                            <TableHead className="py-4">Capacity</TableHead>
                            <TableHead className="py-4">Bookings</TableHead>
                            <TableHead className="py-4">Status</TableHead>
                            <TableHead className="text-right py-4">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {events.map((event) => (
                            <TableRow key={event.id} className="hover:bg-muted/50">
                                <TableCell className="py-4">
                                    <div>
                                        <p className="font-medium">{event.title}</p>
                                    </div>
                                </TableCell>
                                <TableCell className="py-4">{event.date}</TableCell>
                                <TableCell className="py-4">{event.location}</TableCell>
                                <TableCell className="py-4">{event.capacity}</TableCell>
                                <TableCell className="py-4">{event.bookings}</TableCell>
                                <TableCell className="py-4">
                                    <span
                                        className={`inline-flex items-center px-2.5 py-1 rounded-full text-sm font-medium ${event.status === "upcoming"
                                            ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                                            : event.status === "sold-out"
                                                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                                                : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                                            }`}
                                    >
                                        {event.status}
                                    </span>
                                </TableCell>
                                <TableCell className="text-right py-4">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                                <FaEllipsisV className="w-4 h-4" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end" className="w-48">
                                            <DropdownMenuItem>
                                                <FaEdit className="w-4 h-4 mr-2" />
                                                Edit Event
                                            </DropdownMenuItem>
                                            <DropdownMenuItem className="text-red-600">
                                                <FaTrash className="w-4 h-4 mr-2" />
                                                Delete Event
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Card>
        </div>
    );
} 