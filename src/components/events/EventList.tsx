import { useState, useEffect } from 'react';
import EventCard from './EventCard';
import type { Event } from '../../types';

interface EventListProps {
    searchQuery: string;
}

const EventList = ({ searchQuery }: EventListProps) => {
    const [events, setEvents] = useState<Event[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // TODO: Replace with actual API call
        const fetchEvents = async () => {
            try {
                // Simulated API call
                const mockEvents: Event[] = [
                    {
                        id: '1',
                        name: 'Summer Music Festival',
                        description: 'A three-day music festival featuring top artists',
                        category: 'Music',
                        date: '2024-07-15',
                        venue: 'Central Park',
                        price: 150,
                        image: 'https://via.placeholder.com/300x200',
                        tags: ['music', 'festival', 'summer']
                    },
                    // Add more mock events as needed
                ];

                setEvents(mockEvents);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching events:', error);
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);

    const filteredEvents = events.filter(event =>
        event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (loading) {
        return <div className="text-center">Loading events...</div>;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map(event => (
                <EventCard key={event.id} event={event} />
            ))}
        </div>
    );
};

export default EventList; 