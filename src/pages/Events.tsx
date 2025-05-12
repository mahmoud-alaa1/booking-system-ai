import { motion } from "framer-motion";
import { useSearchParams, useNavigate } from "react-router";
import EventCard from "@/components/events/EventCard";

// Mock data - In a real app, this would come from an API
const events = [
    {
        id: "1",
        title: "Food & Wine Festival",
        date: "Aug 15, 2024",
        time: "3:00 PM",
        location: "Riverfront Park",
        price: "$65.00",
        category: "food",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
        description: "Join us for a celebration of culinary delights and fine wines.",
    },
    {
        id: "2",
        title: "Gourmet Cooking Workshop",
        date: "Aug 20, 2024",
        time: "2:00 PM",
        location: "Culinary Arts Center",
        price: "$85.00",
        category: "food",
        image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800",
        description: "Learn advanced cooking techniques from master chefs.",
    },
    {
        id: "3",
        title: "International Food Fair",
        date: "Sep 5, 2024",
        time: "11:00 AM",
        location: "City Square",
        price: "$45.00",
        category: "food",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
        description: "Experience cuisines from around the world in one place.",
    },
    {
        id: "4",
        title: "Wine Tasting Evening",
        date: "Sep 15, 2024",
        time: "7:00 PM",
        location: "Vineyard Estate",
        price: "$95.00",
        category: "food",
        image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800",
        description: "An evening of fine wines and gourmet pairings.",
    },
];

const categoryLabels = {
    food: "Food & Drink",
    music: "Music",
    tech: "Technology",
    art: "Art & Culture",
};

function Events() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const category = searchParams.get("category") || "food";

    const handleBookNow = (eventId: string) => {
        navigate(`/event/${eventId}`);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-4 py-8 my-20"
        >
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-8"
            >
                <h1 className="text-3xl font-bold mb-2">{categoryLabels[category as keyof typeof categoryLabels]} Events</h1>
                <p className="text-muted-foreground">Discover and book amazing {categoryLabels[category as keyof typeof categoryLabels].toLowerCase()} events</p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {events.map((event, index) => (
                    <motion.div
                        key={event.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <EventCard {...event} onBook={() => handleBookNow(event.id)} />
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
}

export default Events;