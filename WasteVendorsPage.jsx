import React, { useState } from 'react';
import { Bell, MapPin, Clock, Home, Calendar, History, User, ChevronRight, ArrowRight, TrendingUp } from 'lucide-react';

const WasteVendorsPage = () => {
    const [activeTab, setActiveTab] = useState('schedule');

    const categories = [
        {
            name: 'Metal',
            price: '₹45/kg',
            trend: '+2.5%',
            description: 'Scrap metal, cans, and metal items',
            color: 'from-emerald-500 to-green-600'
        },
        {
            name: 'Glass',
            price: '₹15/kg',
            trend: '+1.2%',
            description: 'Bottles, jars, and glass containers',
            color: 'from-green-400 to-emerald-500'
        },
        {
            name: 'Paper',
            price: '₹12/kg',
            trend: '+3.0%',
            description: 'Newspapers, cardboard, and documents',
            color: 'from-teal-400 to-green-500'
        },
        {
            name: 'Plastic',
            price: '₹20/kg',
            trend: '-1.5%',
            description: 'Bottles, containers, and packaging',
            color: 'from-green-500 to-teal-600'
        },
        {
            name: 'E-waste',
            price: '₹80/kg',
            trend: '+5.0%',
            description: 'Electronics, batteries, and gadgets',
            color: 'from-emerald-400 to-green-500'
        },
        {
            name: 'Organic',
            price: '₹8/kg',
            trend: '+0.8%',
            description: 'Food waste and garden waste',
            color: 'from-green-400 to-teal-500'
        }
    ];

    const pickupDays = [
        { day: 'Wed', date: '01', month: 'Mar', available: true },
        { day: 'Thu', date: '02', month: 'Mar', available: true },
        { day: 'Fri', date: '03', month: 'Mar', available: false },
        { day: 'Sat', date: '04', month: 'Mar', available: true },
        { day: 'Sun', date: '05', month: 'Mar', available: true }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm p-4 fixed top-0 w-full z-10">
                <div className="max-w-6xl mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-gray-800">Waste Collection</h1>
                    <div className="relative">
                        <Bell className="w-6 h-6 text-gray-600 hover:text-green-600 cursor-pointer" />
                        <span className="absolute -top-1 -right-1 bg-green-500 w-2 h-2 rounded-full"></span>
                    </div>
                </div>
            </header>

            <main className="pt-20 pb-24 px-4">
                <div className="max-w-6xl mx-auto space-y-8">
                    {/* Market Prices Section */}
                    <section className="bg-white rounded-xl shadow-sm p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-semibold text-gray-800">Market Prices</h2>
                            <a href="/marketplace" className="text-green-600 flex items-center hover:text-green-700">
                                View All <ChevronRight className="w-4 h-4 ml-1" />
                            </a>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {categories.map((category) => (
                                <div key={category.name}
                                    className="relative overflow-hidden rounded-lg p-4 bg-gradient-to-r hover:shadow-md transition-shadow duration-300"
                                >
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="text-lg font-medium text-gray-800">{category.name}</h3>
                                            <p className="text-sm text-gray-600 mt-1">{category.description}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-xl font-bold text-gray-800">{category.price}</p>
                                            <span className={`text-sm ${category.trend.startsWith('+') ? 'text-green-600' : 'text-red-500'}`}>
                                                {category.trend}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Schedule Section */}
                    <section className="bg-white rounded-xl shadow-sm p-6">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                            <h2 className="text-xl font-semibold text-gray-800">Collection Schedule</h2>
                            <div className="flex space-x-2 mt-4 sm:mt-0">
                                <button
                                    onClick={() => setActiveTab('schedule')}
                                    className={`px-4 py-2 rounded-full text-sm ${activeTab === 'schedule'
                                        ? 'bg-green-500 text-white'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                        }`}
                                >
                                    Schedule
                                </button>
                                <button
                                    onClick={() => setActiveTab('history')}
                                    className={`px-4 py-2 rounded-full text-sm ${activeTab === 'history'
                                        ? 'bg-green-500 text-white'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                        }`}
                                >
                                    History
                                </button>
                            </div>
                        </div>
                        <div className="flex space-x-4 overflow-x-auto pb-4">
                            {pickupDays.map((pickup) => (
                                <div
                                    key={pickup.date}
                                    className={`flex-shrink-0 w-20 h-24 rounded-lg ${pickup.available
                                        ? 'bg-green-50 border-2 border-green-200 hover:border-green-300'
                                        : 'bg-gray-50 border-2 border-gray-200'
                                        } flex flex-col items-center justify-center cursor-pointer transition-colors duration-200`}
                                >
                                    <span className="text-sm text-gray-600">{pickup.day}</span>
                                    <span className="text-xl font-bold text-gray-800">{pickup.date}</span>
                                    <span className="text-sm text-gray-600">{pickup.month}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Address Section */}
                    <section className="bg-white rounded-xl shadow-sm p-6">
                        <h2 className="text-xl font-semibold text-gray-800 mb-6">Pickup Location</h2>
                        <div className="space-y-4">
                            <div className="flex space-x-4">
                                <input
                                    type="text"
                                    placeholder="Enter your address"
                                    className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                />
                                <button className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200">
                                    Schedule
                                </button>
                            </div>
                            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                                <button className="flex items-center justify-center px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200">
                                    <MapPin className="w-4 h-4 mr-2 text-gray-600" />
                                    <span className="text-gray-600">Use Current Location</span>
                                </button>
                                <button className="flex items-center justify-center px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200">
                                    <Clock className="w-4 h-4 mr-2 text-gray-600" />
                                    <span className="text-gray-600">Saved Addresses</span>
                                </button>
                            </div>
                        </div>
                    </section>
                </div>
            </main>

            {/* Footer Navigation */}
            <footer className="fixed bottom-0 w-full bg-white border-t border-gray-200">
                <nav className="max-w-6xl mx-auto px-4">
                    <div className="flex justify-around py-3">
                        <a href="#home" className="flex flex-col items-center text-green-600">
                            <Home className="w-6 h-6" />
                            <span className="text-xs mt-1">Home</span>
                        </a>
                        <a href="#schedule" className="flex flex-col items-center text-gray-400 hover:text-green-600">
                            <Calendar className="w-6 h-6" />
                            <span className="text-xs mt-1">Schedule</span>
                        </a>
                        <a href="#history" className="flex flex-col items-center text-gray-400 hover:text-green-600">
                            <History className="w-6 h-6" />
                            <span className="text-xs mt-1">History</span>
                        </a>
                        <a href="#profile" className="flex flex-col items-center text-gray-400 hover:text-green-600">
                            <User className="w-6 h-6" />
                            <span className="text-xs mt-1">Profile</span>
                        </a>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default WasteVendorsPage;