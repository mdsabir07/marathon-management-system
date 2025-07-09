const MarathonRow = ({ index, application, onUpdate, onDelete }) => {
    const { marathonTitle, marathonDate, firstName, lastName, email, contact, additionalInfo } = application || {};
    return (
        <tr className="border-b border-opacity-20 border-gray-700">
            <td className="p-2">
                <p className="clr-secondary font-bold">{index + 1}</p>
            </td>
            <td className="p-2 clr-primary">
                <p>{marathonTitle}</p>
            </td>
            <td className="p-2">
                <p>{firstName}<span> {lastName}</span></p>
            </td>
            <td className="p-2 clr-secondary">
                <p>{marathonDate}</p>
            </td>
            <td className="p-2 max-w-3xs">
                <p>{additionalInfo}</p>
            </td>
            <td className="p-2 clr-secondary">
                <p>{contact}</p>
                <p>{email}</p>
            </td>
            <td className="p-2 grid gap-3 justify-end items-center">
                <button 
                onClick={() => onUpdate(application)}
                className="btn rounded-md clr-primary-bg cursor-pointer">
                    Update
                </button>
                <button 
                onClick={() => onDelete(application)}
                className="btn rounded-md bg-red-500 cursor-pointer">
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default MarathonRow;