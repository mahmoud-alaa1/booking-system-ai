import NewsletterSection from "../components/home/NewsletterSection";
import { motion } from "framer-motion";
import HeroSection from "@/components/home/HeroSection";
import CategorySectionV from "@/components/home/CategorySectionV";
import EventCardList from "@/components/events/EventCardList";



const events = [
    {
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
        category: "Food",
        categoryColor: "bg-yellow-500",
        title: "Food & Wine Festival",
        date: "Aug 15, 2025",
        time: "3:00 PM",
        location: "Riverfront Park",
        description: "Savor exquisite flavors at our annual Food & Wine Festival. Meet celebrity chefs, attend cooking demonstrations, and taste dishes...",
        tags: ["food", "wine", "festival"],
        price: "$65.00",
        onBook: () => alert("Booking!"),
    },
    // ...more events
    {
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
        category: "Music",
        categoryColor: "bg-blue-500",
        title: "Music Festival",
        date: "Aug 15, 2025",
        time: "3:00 PM",
        location: "Riverfront Park",
        description: "Savor exquisite flavors at our annual Food & Wine Festival. Meet celebrity chefs, attend cooking demonstrations, and taste dishes...",
        tags: ["music", "festival"],
        price: "$65.00",
        onBook: () => alert("Booking!"),
    },
    {
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
        category: "Art",
        categoryColor: "bg-red-500",
        title: "Art Festival",
        date: "Aug 15, 2025",
        time: "3:00 PM",
        location: "Riverfront Park",
        description: "Savor exquisite flavors at our annual Food & Wine Festival. Meet celebrity chefs, attend cooking demonstrations, and taste dishes...",
        tags: ["art", "festival"],
        price: "$65.00",
        onBook: () => alert("Booking!"),
    },
];

const Home = () => {



    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen w-screen pt-[72px]"
        >
            <HeroSection />

            <div className="container mx-auto px-4 py-16 space-y-24">

                {/* Categories Section */}
                <CategorySectionV />

                <EventCardList events={events} />
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl" />
                    <NewsletterSection />
                </div>
            </div>
        </motion.div>
    );
};

export default Home;
