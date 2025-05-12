import { FaDownload, FaSearch, FaEllipsisV } from "react-icons/fa";
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

const bookings = [
    {
        id: 1,
        event: "Food & Wine Festival",
        user: "John Doe",
        tickets: 2,
        total: "$130.00",
        date: "Aug 15, 2025",
        status: "confirmed",
    },
    {
        id: 2,
        event: "Tech Conference",
        user: "Jane Smith",
        tickets: 1,
        total: "$99.00",
        date: "Sep 20, 2025",
        status: "pending",
    },
    {
        id: 3,
        event: "Art Exhibition",
        user: "Mike Johnson",
        tickets: 4,
        total: "$200.00",
        date: "Oct 5, 2025",
        status: "cancelled",
    },
    {
        id: 4,
        event: "Summer Concert",
        user: "Sarah Wilson",
        tickets: 2,
        total: "$150.00",
        date: "Jul 30, 2025",
        status: "confirmed",
    },
];

export default function Bookings() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold">Bookings</h1>
                    <p className="text-sm text-muted-foreground">Manage event bookings and reservations</p>
                </div>
                <Button variant="outline" className="flex items-center gap-2">
                    <FaDownload className="w-4 h-4" />
                    Export
                </Button>
            </div>

            <Card className="p-6">
                <div className="flex items-center gap-4 mb-6">
                    <div className="relative flex-1">
                        <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                            placeholder="Search bookings..."
                            className="pl-9 h-10"
                        />
                    </div>
                    <Select defaultValue="all">
                        <SelectTrigger className="w-[140px]">
                            <SelectValue placeholder="Filter by status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Status</SelectItem>
                            <SelectItem value="confirmed">Confirmed</SelectItem>
                            <SelectItem value="pending">Pending</SelectItem>
                            <SelectItem value="cancelled">Cancelled</SelectItem>
                        </SelectContent>
                    </Select>
                    <Select defaultValue="all">
                        <SelectTrigger className="w-[140px]">
                            <SelectValue placeholder="Sort by date" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Dates</SelectItem>
                            <SelectItem value="upcoming">Upcoming</SelectItem>
                            <SelectItem value="past">Past</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <Table>
                    <TableHeader>
                        <TableRow className="hover:bg-transparent">
                            <TableHead className="py-4">Event</TableHead>
                            <TableHead className="py-4">User</TableHead>
                            <TableHead className="py-4">Tickets</TableHead>
                            <TableHead className="py-4">Total</TableHead>
                            <TableHead className="py-4">Date</TableHead>
                            <TableHead className="py-4">Status</TableHead>
                            <TableHead className="text-right py-4">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {bookings.map((booking) => (
                            <TableRow key={booking.id} className="hover:bg-muted/50">
                                <TableCell className="font-medium py-4">
                                    {booking.event}
                                </TableCell>
                                <TableCell className="py-4">{booking.user}</TableCell>
                                <TableCell className="py-4">{booking.tickets}</TableCell>
                                <TableCell className="py-4">{booking.total}</TableCell>
                                <TableCell className="py-4">{booking.date}</TableCell>
                                <TableCell className="py-4">
                                    <span
                                        className={`inline-flex items-center px-2.5 py-1 rounded-full text-sm font-medium ${booking.status === "confirmed"
                                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                                            : booking.status === "pending"
                                                ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                                                : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                                            }`}
                                    >
                                        {booking.status}
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
                                                View Details
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                Edit Booking
                                            </DropdownMenuItem>
                                            <DropdownMenuItem className="text-red-600">
                                                Cancel Booking
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