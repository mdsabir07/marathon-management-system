const ApplyRow = ({ application, index }) => {
    const { marathonId, marathonTitle, marathonDate, firstName, lastName, email, contact, additionalInfo } = application || {};
    return (
        <tr className="border-b border-opacity-20 border-gray-700">
            <td className="p-2">
                <p className="clr-secondary font-bold">{index + 1}</p>
            </td>
            <td className="p-2 clr-primary">
                <p>{marathonTitle}</p>
            </td>
            <td className="p-2">
                <p>{firstName} {lastName}</p>
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
            <td className="p-2 text-right">
                <span className="px-3 py-1 font-semibold rounded-md clr-primary-bg">
                    <span>Pending</span>
                </span>
            </td>
        </tr>
    );
};

export default ApplyRow;