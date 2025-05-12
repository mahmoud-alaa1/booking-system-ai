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

const users = [
    {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        role: "user",
        bookings: 5,
        joined: "Jan 15, 2024",
        status: "active",
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "jane@example.com",
        role: "user",
        bookings: 3,
        joined: "Feb 20, 2024",
        status: "active",
    },
    {
        id: 3,
        name: "Mike Johnson",
        email: "mike@example.com",
        role: "admin",
        bookings: 12,
        joined: "Mar 5, 2024",
        status: "active",
    },
    {
        id: 4,
        name: "Sarah Wilson",
        email: "sarah@example.com",
        role: "user",
        bookings: 0,
        joined: "Apr 10, 2024",
        status: "inactive",
    },
];

export default function Users() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold">Users</h1>
                    <p className="text-sm text-muted-foreground">Manage user accounts and permissions</p>
                </div>
                <Button className="flex items-center gap-2">
                    <FaPlus className="w-4 h-4" />
                    Add User
                </Button>
            </div>

            <Card className="p-6">
                <div className="flex items-center gap-4 mb-6">
                    <div className="relative flex-1">
                        <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                            placeholder="Search users..."
                            className="pl-9 h-10"
                        />
                    </div>
                    <Select defaultValue="all">
                        <SelectTrigger className="w-[140px]">
                            <SelectValue placeholder="Filter by role" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Roles</SelectItem>
                            <SelectItem value="admin">Admin</SelectItem>
                            <SelectItem value="user">User</SelectItem>
                        </SelectContent>
                    </Select>
                    <Select defaultValue="all">
                        <SelectTrigger className="w-[140px]">
                            <SelectValue placeholder="Filter by status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Status</SelectItem>
                            <SelectItem value="active">Active</SelectItem>
                            <SelectItem value="inactive">Inactive</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <Table>
                    <TableHeader>
                        <TableRow className="hover:bg-transparent">
                            <TableHead className="py-4">User</TableHead>
                            <TableHead className="py-4">Role</TableHead>
                            <TableHead className="py-4">Bookings</TableHead>
                            <TableHead className="py-4">Joined</TableHead>
                            <TableHead className="py-4">Status</TableHead>
                            <TableHead className="text-right py-4">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {users.map((user) => (
                            <TableRow key={user.id} className="hover:bg-muted/50">
                                <TableCell className="py-4">
                                    <div>
                                        <p className="font-medium">{user.name}</p>
                                        <p className="text-sm text-muted-foreground">
                                            {user.email}
                                        </p>
                                    </div>
                                </TableCell>
                                <TableCell className="py-4">
                                    <span
                                        className={`inline-flex items-center px-2.5 py-1 rounded-full text-sm font-medium ${user.role === "admin"
                                            ? "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
                                            : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                                            }`}
                                    >
                                        {user.role}
                                    </span>
                                </TableCell>
                                <TableCell className="py-4">{user.bookings}</TableCell>
                                <TableCell className="py-4">{user.joined}</TableCell>
                                <TableCell className="py-4">
                                    <span
                                        className={`inline-flex items-center px-2.5 py-1 rounded-full text-sm font-medium ${user.status === "active"
                                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                                            : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                                            }`}
                                    >
                                        {user.status}
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
                                                Edit User
                                            </DropdownMenuItem>
                                            <DropdownMenuItem className="text-red-600">
                                                <FaTrash className="w-4 h-4 mr-2" />
                                                Delete User
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