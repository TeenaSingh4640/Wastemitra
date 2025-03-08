import React from 'react';
import { Link } from 'react-router-dom'
import { ArrowRight, Award, Users, Recycle, ChevronRight, ArrowUpRight } from 'lucide-react';
import POST1 from "../images/POST.png";
import plastic from "../images/battery.png";
import fam from "../photos/Fam.png";
import vision from "../photos/vision.png";
import BG from "../photos/BG3.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        {/* Background Image */}
        <div className="absolute inset-0  ">
          <img
            src={BG}
            alt="Sustainable World"
            className="w-full h-full object-cover blur-sm"
          />
        </div>

        {/* Hero Content */}
        <div className="relative h-full max-w-6xl mx-auto px-4">
          <div className="flex flex-col justify-center h-full text-white">
            <h1 className="text-white text-5xl font-extrabold drop-shadow-[3px_3px_5px_rgba(0,0,0,0.8)]">
              Transform Waste into <br />
              <span className="text-green-400">Rewards</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl">
              Join our community of eco-warriors making the world cleaner,
              one recycling action at a time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-green-500 hover:bg-green-600 rounded-full text-white font-semibold flex items-center justify-center group transition-all">
                Get Started
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-3 bg-white/10 hover:bg-white/20 rounded-full text-white font-semibold backdrop-blur-sm">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Rewards Card */}
            <div className="group p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Earn Rewards</h3>
              <p className="text-gray-600 mb-4">
                Turn your recyclables into points. Redeem them for exciting rewards
                and exclusive offers.
              </p>
              <Link to='/rewards' className="text-green-600 font-medium flex items-center group-hover:text-green-700">
                View Rewards
                <ArrowUpRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            {/* Community Card */}
            <div className="group p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Join Community</h3>
              <p className="text-gray-600 mb-4">
                Connect with like-minded individuals and share your sustainable
                journey with others.
              </p>
              <Link to="/community" className="text-green-600 font-medium flex items-center group-hover:text-green-700">
                Meet Community
                <ArrowUpRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            {/* Vendors Card */}
            <div className="group p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
                <Recycle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Waste Vendors</h3>
              <p className="text-gray-600 mb-4">
                Connect with certified waste collectors and ensure proper disposal
                of your recyclables.
              </p>
              <Link to="/vendors" className="text-green-600 font-medium flex items-center group-hover:text-green-700">
                Find Vendors
                <ArrowUpRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Latest from Our Blog</h2>
            <p className="text-gray-600">Discover tips, stories, and insights about sustainable living</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "10 Ways to Reduce Daily Waste",
                category: "Lifestyle",
                image: fam
              },
              {
                title: "Understanding Plastic Recycling Symbols",
                category: "Education",
                image: plastic
              },
              {
                title: "Success Stories: Community Impact",
                category: "Community",
                image: POST1
              }
            ].map((blog, index) => (
              <div key={index} className="group bg-white rounded-xl overflow-hidden hover:shadow-lg transition-all">
                <div className="relative overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <span className="text-sm text-green-600 font-medium">{blog.category}</span>
                  <h3 className="text-xl font-semibold mt-2 mb-4">{blog.title}</h3>
                  <a href="/blog" className="text-green-600 font-medium flex items-center">
                    Read More
                    <ChevronRight className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={vision}
                alt="About Us"
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-gray-600 mb-6">
                we envision a cleaner, greener, and more sustainable future by revolutionizing waste management. Our mission is to empower individuals, communities, and organizations with innovative and effective solutions to segregate, manage, and recycle waste efficiently.
                We strive to create a world where waste is not just discarded but transformed into a valuable resource, reducing environmental impact and promoting a circular economy. Through our smart waste management solutions
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;