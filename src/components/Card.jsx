export const Card = ({ image, title, description }) => {
    console.log(description, 'help');

    return (

        <div className="bg-white  mt-10 w-1/3  mx-auto shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 duration-300">
            <img src={image} alt={title} className="h-48 object-cover items-center" />
            <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">{title}</h2>
                <p className="text-gray-700 mb-4">{description}</p>
                <a href="/" className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300">
                    Learn More
                </a>
            </div>
        </div>

    );
};