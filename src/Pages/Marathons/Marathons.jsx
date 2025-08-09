import { useLoaderData } from 'react-router';
import MarathonCard from '../Home/Shared/MarathonCard';

const Marathons = () => {
    const marathons = useLoaderData();

    return (
        <div className="w-11/12 mx-auto py-10 sm:py-20">
            <h1 className='text-3xl mb-8 mt-8'>Total marathon:<strong className='clr-secondary'> {marathons.length}</strong></h1>
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