import { Link } from 'react-router';
import type { Event } from '../../types';

interface EventCardProps {
    event: Event;
}

const EventCard = ({ event }: EventCardProps) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
                src={event.image}
                alt={event.name}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {event.name}
                </h3>
                <p className="text-gray-600 mb-2 line-clamp-2">
                    {event.description}
                </p>
                <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-500">
                        {new Date(event.date).toLocaleDateString()}
                    </span>
                    <span className="text-sm font-medium text-blue-600">
                        ${event.price}
                    </span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                    {event.tags.map(tag => (
                        <span
                            key={tag}
                            className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <Link
                    to={`/events/${event.id}`}
                    className="block w-full text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default EventCard; 