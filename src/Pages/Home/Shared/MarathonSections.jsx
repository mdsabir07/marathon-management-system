import axios from 'axios';
import { useEffect, useState } from 'react';

const MarathonSections = ({ children }) => {
    const [trending, setTrending] = useState([]);
    const [featured, setFeatured] = useState([]);
    const [recent, setRecent] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMarathons = async () => {
            try {
                const baseUrl = import.meta.env.VITE_API_URL;

                const [trendingRes, featuredRes, recentRes] = await Promise.all([
                    axios.get(`${baseUrl}/marathons?sort=marathonDate&order=asc&limit=3`),
                    axios.get(`${baseUrl}/marathons?featured=true&limit=3`),
                    axios.get(`${baseUrl}/marathons?sort=createdAt&order=desc&limit=3`)
                ]);

                setTrending(trendingRes.data);
                setFeatured(featuredRes.data);
                setRecent(recentRes.data);
            } catch (error) {
                console.error('Failed to fetch marathons:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchMarathons();
    }, [])
    return children({ trending, featured, recent, loading });
};

export default MarathonSections;