import grocery from "../images/grocery.png";
import bus from "../images/Bus.png";
import metro from "../images/metro.png";
import product from "../images/Products.png";
import ProfileImage from "../images/Profile.png";

const RewardPage = () => {
    const challenges = [
        "Segregate Your Waste Today to Earn 50 Points!",
        "Participate in the Weekly Recycling Drive to Win Extra Rewards!",
        "Invite Friends to Join the Community and Get 100 Bonus Points!"
    ];

    const redeemOffers = [
        {
            image: grocery,
            points: 500,
            description: "Get 40% off on your next grocery shopping with 500 points!",
        },
        {
            image: metro,
            points: 300,
            description: "Redeem 300 points for a free one-week metro pass!",
        },
        {
            image: bus,
            points: 300,
            description: "Redeem 300 points for a free one month bus pass!",
        },
        {
            image: product,
            points: 400,
            description: "Use 400 points to get discounts on eco-friendly household products!",
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 pt-6 md:pt-16">
            {/* Profile Header */}
            <div className="bg-white rounded-xl shadow-md p-4 mb-6">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <img
                            src={ProfileImage}
                            alt="Profile"
                        />
                        <div>
                            <h2 className="text-lg font-semibold text-gray-800">lilly</h2>
                            <p className="text-sm text-gray-500">📍 Delhi, Ashok vihar</p>
                        </div>
                    </div>
                    <div className="flex space-x-4">
                        <button className="p-2 hover:bg-gray-100 rounded-full">
                            <span className="text-2xl">🔔</span>
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-full">
                            <span className="text-2xl">💬</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
                {/* Daily Challenges Card */}
                <div className="md:col-span-2 bg-white rounded-xl shadow-md p-6">
                    <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                        <span className="mr-2">🎯</span>Daily Challenges
                    </h2>
                    <div className="space-y-4">
                        {challenges.map((challenge, index) => (
                            <div
                                key={index}
                                className="flex items-center p-3 bg-green-50 rounded-lg border border-green-100"
                            >
                                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white mr-3">
                                    {index + 1}
                                </div>
                                <p className="text-gray-700">{challenge}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="space-y-6">
                    <div className="bg-white rounded-xl shadow-md p-6">
                        <h3 className="text-lg font-medium text-gray-700 mb-3">Total Reward Earned</h3>
                        <div className="flex items-center">
                            <span className="text-3xl mr-2">💰</span>
                            <span className="text-4xl font-bold text-green-600">1000</span>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl shadow-md p-6">
                        <h3 className="text-lg font-medium text-gray-700 mb-3">Community Joined</h3>
                        <div className="flex items-center">
                            <span className="text-3xl mr-2">🤝</span>
                            <span className="text-4xl font-bold text-blue-600">5</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Redeem Offers Section */}
            <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-xl font-semibold mb-6 text-gray-800 flex items-center">
                    <span className="mr-2">🎁</span>Redeem Offers
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {redeemOffers.map((offer, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                        >
                            <img
                                src={offer.image}
                                alt="Offer"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <div className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-2">
                                    {offer.points} Points
                                </div>
                                <p className="text-gray-600 text-sm">{offer.description}</p>
                                <button className="mt-4 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors">
                                    Redeem Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RewardPage;