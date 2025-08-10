import MarathonCard from './MarathonCard';

const MarathonSection = ({ title, data }) => {
    if (!data || data.length === 0) return null;

    return (
        <div className="my-12">
            <h2 className="text-3xl sm:text-5xl font-bold mb-5 sm:mb-8 text-secondary text-center">
                {title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.map((marathon) => (
                    <MarathonCard key={marathon._id} marathon={marathon} />
                ))}
            </div>
        </div>
    );
};

export default MarathonSection;