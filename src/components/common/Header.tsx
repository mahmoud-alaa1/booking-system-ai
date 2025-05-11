import { NavLink } from "react-router"
import { Button } from "../ui/button"
import { ModeToggle } from "../mode-toggle"
import { useAppSelector, useAppDispatch } from "@/store/hooks"
import { logoutSuccess } from "@/store/slices/authSlice"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { LogOut, User, Menu } from "lucide-react"
import toast from "react-hot-toast"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

export function Header() {
    const { data, isAuthenticated } = useAppSelector(state => state.auth)
    const dispatch = useAppDispatch()
    const [isScrolled, setIsScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const handleLogout = () => {
        dispatch(logoutSuccess())
        toast.success("Logged out successfully!")
        setIsOpen(false)
    }

    const navItems = [
        { label: "Home", to: "/" },
        ...(isAuthenticated && data ? [{ label: "My Bookings", to: "/bookings" }] : [])
    ];

    const NavLinks = () => (
        <div className="relative  flex items-center flex-col md:flex-row justify-center gap-2 px-2 py-2  rounded-full bg-black/40 dark:bg-zinc-900/80 shadow-lg" style={{ backdropFilter: 'blur(6px)' }}>
            {navItems.map(({ label, to }) => (
                <NavLink
                    key={to}
                    to={to}
                    className={({ isActive }) =>
                        cn(
                            "relative flex items-center   px-6 py-2 rounded-full font-medium transition-all duration-300",
                            isActive
                                ? "bg-white/75 text-black shadow-lg font-semibold"
                                : "text-white/80 hover:bg-white/10 hover:text-white"
                        )
                    }
                    style={{ zIndex: 1 }}
                >
                    {({ isActive }) => (
                        <>
                            {isActive && (
                                <>
                                    <span
                                        className={`absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-4 rounded-full pointer-events-none blur-md bg-white/60`}
                                        style={{ zIndex: 2 }}
                                    />
                                    <span className={`absolute -top-1.5 left-1/2 -translate-x-1/2  -z-50 w-[60%] h-1.5  bg-white rounded-t-md `} />
                                </>
                            )}
                            <span className="relative z-10">{label}</span>

                        </>
                    )}
                </NavLink>
            ))}
        </div>
    )

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300",
                isScrolled
                    ? "bg-background/80 backdrop-blur-md shadow-sm"
                    : "bg-background"
            )}
        >
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo */}
                <NavLink to="/" className="text-2xl font-bold">
                    EventBook
                </NavLink>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center justify-between flex-1">
                    {/* Centered Nav Links */}
                    <nav className="flex items-center justify-center gap-6 flex-1">
                        <NavLinks />
                    </nav>

                    {/* Right Side Actions */}
                    <div className="flex items-center gap-4">
                        {isAuthenticated && data ? (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                                        <Avatar className="h-8 w-8">
                                            <AvatarFallback>{data.name[0].toUpperCase()}</AvatarFallback>
                                        </Avatar>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-56" align="end" forceMount>
                                    <DropdownMenuLabel className="font-normal">
                                        <div className="flex flex-col space-y-1">
                                            <p className="text-sm font-medium leading-none">{data.name}</p>
                                            <p className="text-xs leading-none text-muted-foreground">
                                                {data.email}
                                            </p>
                                        </div>
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem asChild>
                                        <NavLink
                                            to="/profile"
                                            className={({ isActive }) =>
                                                cn(
                                                    "cursor-pointer flex items-center",
                                                    isActive && "text-primary font-semibold"
                                                )
                                            }
                                        >
                                            <User className="mr-2 h-4 w-4" />
                                            <span>Profile</span>
                                        </NavLink>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                        className="cursor-pointer text-red-600 focus:text-red-600"
                                        onClick={handleLogout}
                                    >
                                        <LogOut className="mr-2 h-4 w-4" />
                                        <span>Log out</span>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        ) : (
                            <div className="flex items-center gap-4">
                                <NavLink to="/login">
                                    <Button variant="ghost">Login</Button>
                                </NavLink>
                                <NavLink to="/sign-up">
                                    <Button>Sign Up</Button>
                                </NavLink>
                            </div>
                        )}
                        <ModeToggle />
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div className="flex items-center gap-4 md:hidden">
                    <ModeToggle />
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent className="bg-black/70 dark:bg-zinc-900/90 backdrop-blur-lg p-6 rounded-2xl flex flex-col gap-6 h-full">
                            <SheetHeader>
                                <SheetTitle>Menu</SheetTitle>
                            </SheetHeader>
                            <div className="flex flex-col gap-4 mt-6 flex-1">
                                {navItems.map(({ label, to }) => (
                                    <NavLink
                                        key={to}
                                        to={to}
                                        className={({ isActive }) =>
                                            cn(
                                                "relative flex items-center justify-center w-full px-6 py-3 rounded-full font-medium transition-all duration-300 text-lg",
                                                isActive
                                                    ? "bg-white/80 text-black shadow font-semibold"
                                                    : "text-white/80 hover:bg-white/10 hover:text-white"
                                            )
                                        }
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {({ isActive }) => (
                                            <>
                                                {isActive && (
                                                    <>
                                                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-4 rounded-full pointer-events-none blur-md bg-white/60" style={{ zIndex: 2 }} />
                                                        <span className="absolute -top-1.5 left-1/2 -translate-x-1/2  -z-50 w-[60%] h-1.5  bg-white rounded-t-md " />
                                                    </>
                                                )}
                                                <span className="relative z-10">{label}</span>
                                            </>
                                        )}
                                    </NavLink>
                                ))}
                                {isAuthenticated && data && (
                                    <NavLink
                                        to="/profile"
                                        className={({ isActive }) =>
                                            cn(
                                                "flex items-center gap-2 py-3 px-6 rounded-full text-lg font-medium transition-colors hover:text-primary hover:bg-white/10 w-full justify-center",
                                                isActive && "text-primary font-semibold bg-white/20"
                                            )
                                        }
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <User className="h-5 w-5" />
                                        <span>Profile</span>
                                    </NavLink>
                                )}
                                {!isAuthenticated && (
                                    <div className="flex flex-col gap-2">
                                        <NavLink to="/login" onClick={() => setIsOpen(false)}>
                                            <Button variant="ghost" className="w-full py-3 px-6 rounded-full text-lg">Login</Button>
                                        </NavLink>
                                        <NavLink to="/sign-up" onClick={() => setIsOpen(false)}>
                                            <Button className="w-full py-3 px-6 rounded-full text-lg">Sign Up</Button>
                                        </NavLink>
                                    </div>
                                )}
                            </div>
                            {isAuthenticated && data && (
                                <Button
                                    variant="ghost"
                                    className="flex items-center justify-center gap-2 text-red-600 hover:text-red-700 w-full py-3 px-6 rounded-full text-lg mt-auto mb-2"
                                    onClick={handleLogout}
                                >
                                    <LogOut className="h-5 w-5" />
                                    <span>Log out</span>
                                </Button>
                            )}
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
} 