import { useTheme } from "../theme-provider";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Category {
    name: string;
    image: string;
    tag: string;
    tagColor: string;
    count: number;
    description?: string;
}

const categories: Category[] = [
    {
        name: "Music",
        image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&auto=format&fit=crop&q=60",
        tag: "Live",
        tagColor: "bg-blue-500",
        count: 12,
        description: "Experience the best live music events in town."
    },
    {
        name: "Tech",
        image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&auto=format&fit=crop&q=60",
        tag: "Workshop",
        tagColor: "bg-green-500",
        count: 8,
        description: "Hands-on tech workshops to boost your skills."
    },
    {
        name: "Art",
        image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&auto=format&fit=crop&q=60",
        tag: "art",
        tagColor: "bg-purple-500",
        count: 5,
        description: "Explore stunning art from local and global artists."
    },
    {
        name: "Food",
        image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&auto=format&fit=crop&q=60",
        tag: "Food",
        tagColor: "bg-red-500",
        count: 10,
        description: "Experience the best food from local and global chefs."
    },
    {
        name: "Food",
        image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&auto=format&fit=crop&q=60",
        tag: "Food",
        tagColor: "bg-red-500",
        count: 10,
        description: "Experience the best food from local and global chefs."
    },
    {
        name: "Food",
        image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&auto=format&fit=crop&q=60",
        tag: "Food",
        tagColor: "bg-red-500",
        count: 10,
        description: "Experience the best food from local and global chefs."
    },
    {
        name: "Food",
        image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&auto=format&fit=crop&q=60",
        tag: "Food",
        tagColor: "bg-red-500",
        count: 10,
        description: "Experience the best food from local and global chefs."
    },
    {
        name: "Sports",
        image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&auto=format&fit=crop&q=60",
        tag: "Sports",
        tagColor: "bg-orange-500",
        count: 10,
        description: "Experience the best sports from local and global athletes."
    }
];

function CategorySectionV() {
    const { theme } = useTheme();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 100,
            scale: 0.95
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                mass: 1
            }
        }
    };

    return (
        <div className="container mx-auto px-4 py-12">
            <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                {categories.map((category, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        className={`group relative overflow-hidden rounded-xl ${theme === 'dark'
                            ? 'bg-gray-800/50 backdrop-blur-sm'
                            : 'bg-white/50 backdrop-blur-sm'
                            } shadow-lg hover:shadow-xl `}
                    >
                        {/* Card Image */}
                        <div className="relative h-48 overflow-hidden">
                            <img
                                src={category.image}
                                alt={category.name}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <motion.h3
                                    className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                                        }`}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    {category.name}
                                </motion.h3>
                                <span className={`px-3 py-1 rounded-full text-sm font-medium ${category.tagColor} text-white`}>
                                    {category.tag}
                                </span>
                            </div>

                            <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                                }`}>
                                {category.description}
                            </p>

                            <div className="flex items-center justify-between">
                                <div className={`flex items-center gap-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                                    }`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <span>{category.count} Events</span>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`cursor-pointer px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${theme === 'dark'
                                        ? 'bg-white/10 hover:bg-white/20 text-white'
                                        : 'bg-gray-900/10 hover:bg-gray-900/20 text-gray-900'
                                        }`}
                                >
                                    View Events →
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}

export default CategorySectionV;