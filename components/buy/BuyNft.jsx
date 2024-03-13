"use client";


const BuyNft = ({ isOpen, setIsOpen, itemId }) => {
    const handleCloseModal = () => {
        setIsOpen(false);
    };

    return (
        <>
            {isOpen && (
                 <div className="fixed top-20vh right-0 w-64 h-40 bg-white border border-gray-300 rounded-lg shadow-md p-4 z-50 transition-transform duration-300 transform translate-y-full slide-in">
                    <p>Modal Content</p>
                    <p>Item ID: {itemId}</p>
                    <button onClick={handleCloseModal} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            )}
        </>
    );
};

export default BuyNft;
