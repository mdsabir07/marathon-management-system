
import { useEffect, useState } from 'react';
import MarathonCard from '../Home/Shared/MarathonCard';
import axios from 'axios';


const sortOptions = [
    { label: 'Default', value: '' },
    { label: 'Most Recent', value: 'createdAt_desc' },
    { label: 'Upcoming Events', value: 'marathonDate_asc' },
    { label: 'Past Events', value: 'marathonDate_desc' }
];

const Marathons = () => {
    const [marathons, setMarathons] = useState([]);
    const [sortBy, setSortBy] = useState('');

    useEffect(() => {
        const fetchMarathons = async () => {
            try {
                const baseUrl = import.meta.env.VITE_API_URL;

                let url = `${baseUrl}/marathons`;

                if (sortBy) {
                    const [sort, order] = sortBy.split('_');
                    url += `?sort=${sort}&order=${order}`;
                }

                const res = await axios.get(url);
                setMarathons(res.data);
            } catch (error) {
                console.error('❌ Error fetching marathons:', error);
            }
        };

        fetchMarathons();
    }, [sortBy]);

    return (
        <div className="w-11/12 mx-auto pt-20 pb-10 sm:pt-30">
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-6">
                <h1 className="text-xl sm:text-3xl">
                    Total marathons: <strong className="text-secondary">{marathons.length}</strong>
                </h1>
                <select
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border border-gray-300 px-3 py-2 rounded-md"
                >
                    {sortOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                </select>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    marathons.map(marathon => (
                        <MarathonCard key={marathon._id} marathon={marathon} />
                    ))
                }
            </div>
        </div>
    );
};

export default Marathons;