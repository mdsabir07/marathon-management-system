const UpcomingMarathons = () => {
    const marathons = [
        {
            id: 1,
            title: "New York City Marathon",
            image: "https://i.ibb.co/ZzX2rFRS/m7.jpg",
            location: "New York, USA",
            registrationDate: "Aug 15, 2025",
        },
        {
            id: 2,
            title: "London Marathon",
            image: "https://i.ibb.co/39k7Q2WS/m6.jpg",
            location: "London, UK",
            registrationDate: "Sep 10, 2025",
        },
        {
            id: 3,
            title: "Tokyo Marathon",
            image: "https://i.ibb.co/s9wnpxhg/m5.jpg",
            location: "Tokyo, Japan",
            registrationDate: "Oct 5, 2025",
        },
        {
            id: 4,
            title: "Berlin Marathon",
            image: "https://i.ibb.co/fdcq0KGL/m3.jpg",
            location: "Berlin, Germany",
            registrationDate: "Nov 1, 2025",
        },
    ];

    return (
        <section className="py-12">
            <div className="px-4">
                <h2 className="text-3xl sm:text-5xl text-secondary font-bold text-center mb-10">
                    Upcoming Marathon Events
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {marathons.map(({ id, title, image, location, registrationDate }) => (
                        <div key={id} className="border border-gray-600 rounded-lg shadow-md overflow-hidden">
                            <img src={image} alt={title} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-primary">{title}</h3>
                                <p className="text-sm mt-1">📍 {location}</p>
                                <p className="text-sm mt-2">
                                    🗓️ Registration: <span className="text-secondary font-medium">{registrationDate}</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UpcomingMarathons;
