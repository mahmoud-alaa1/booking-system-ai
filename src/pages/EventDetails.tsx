// import { useParams } from "react-router";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaMapMarkerAlt, FaTag, FaClock, FaUser, FaTicketAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function EventDetails() {
    // const { id } = useParams();

    // This would typically come from an API call using the id
    const event = {
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
        category: "Food",
        categoryColor: "bg-yellow-500",
        title: "Food & Wine Festival",
        date: "Aug 15, 2025",
        time: "3:00 PM",
        location: "Riverfront Park",
        description: "Savor exquisite flavors at our annual Food & Wine Festival. Meet celebrity chefs, attend cooking demonstrations, and taste dishes from the finest restaurants in the city. This year's festival promises to be bigger and better than ever, featuring exclusive wine tastings, live entertainment, and culinary workshops.",
        tags: ["food", "wine", "festival"],
        price: "$65.00",
        organizer: "City Events Committee",
        duration: "4 hours",
        capacity: "500 attendees",
        included: [
            "Access to all food stations",
            "Wine tasting sessions",
            "Cooking demonstration entry",
            "Event souvenir",
            "Complimentary water"
        ]
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen w-screen pt-[72px]"
        >
            {/* Hero Section */}
            <div className="relative h-[60vh] w-full">
                <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                        <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 ${event.categoryColor}`}>
                            {event.category}
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">{event.title}</h1>
                        <div className="flex items-center justify-center gap-4 text-lg">
                            <span className="flex items-center">
                                <FaCalendarAlt className="mr-2" />
                                {event.date}
                            </span>
                            <span className="flex items-center">
                                <FaClock className="mr-2" />
                                {event.time}
                            </span>
                            <span className="flex items-center">
                                <FaMapMarkerAlt className="mr-2" />
                                {event.location}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        <Card className="p-6">
                            <h2 className="text-2xl font-bold mb-4">About This Event</h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">{event.description}</p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {event.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-200 text-sm font-medium"
                                    >
                                        <FaTag className="mr-2" /> {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                <div className="flex items-center gap-3">
                                    <FaUser className="text-gray-500" />
                                    <div>
                                        <p className="text-sm text-gray-500">Organizer</p>
                                        <p className="font-medium">{event.organizer}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <FaClock className="text-gray-500" />
                                    <div>
                                        <p className="text-sm text-gray-500">Duration</p>
                                        <p className="font-medium">{event.duration}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <FaUser className="text-gray-500" />
                                    <div>
                                        <p className="text-sm text-gray-500">Capacity</p>
                                        <p className="font-medium">{event.capacity}</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold mb-3">What's Included</h3>
                                <ul className="space-y-2">
                                    {event.included.map((item, index) => (
                                        <li key={index} className="flex items-center gap-2">
                                            <span className="text-green-500">✓</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Card>
                    </div>

                    {/* Booking Card */}
                    <div className="lg:col-span-1">
                        <Card className="p-6 sticky top-24">
                            <div className="text-center mb-6">
                                <h3 className="text-2xl font-bold mb-2">Book Your Spot</h3>
                                <p className="text-3xl font-bold text-primary">{event.price}</p>
                            </div>

                            <div className="space-y-4">
                                <Button className="w-full cursor-pointer" size="lg">
                                    <FaTicketAlt className="mr-2" />
                                    Book Now
                                </Button>
                                <p className="text-sm text-center text-gray-500">
                                    Secure your spot now! Limited tickets available.
                                </p>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}