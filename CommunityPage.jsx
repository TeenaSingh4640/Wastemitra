import { useState } from 'react';
import { Heart, MessageCircle, Share2, MoreHorizontal, Activity } from 'lucide-react';
import profileImg from '../images/Profile.png';
import MCDImg from '../images/MCD.png';
import postImg from '../images/POST.png';

const CommunityPage = () => {
    const [posts, setPosts] = useState([
        {
            id: '1',
            username: 'lilly_ecoWarrior',
            userImage: profileImg,
            organizations: [
                { name: 'MGD-delhi', logo: MCDImg },
                { name: 'GreenPeace', logo: MCDImg },
                { name: 'EcoRiyansha', logo: MCDImg }
            ],
            title: 'Cleaning our mother Earth - Successfully cleaned Janakpuri West Park',
            image: postImg,
            type: 'Sahaz.treating waste',
            likes: 2458,
            comments: 89,
            shares: 156,
            timestamp: '2h ago'
        }
    ]);

    const [commentInput, setCommentInput] = useState('');
    const [showComments, setShowComments] = useState(false);
    const [activeOrganization, setActiveOrganization] = useState(null);

    const handleLike = (postId) => {
        setPosts(posts.map(post =>
            post.id === postId ? {
                ...post,
                likes: post.isLiked ? post.likes - 1 : post.likes + 1,
                isLiked: !post.isLiked
            } : post
        ));
    };

    const handleShare = (postId) => {
        setPosts(posts.map(post =>
            post.id === postId ? { ...post, shares: post.shares + 1 } : post
        ));
    };

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (commentInput.trim()) {
            // Add comment logic
            setCommentInput('');
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8 pt-20" >
            <div className="max-w-3xl mx-auto space-y-8">
                {posts.map((post) => (
                    <article key={post.id} className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
                        {/* Header */}
                        <header className="p-6 border-b border-gray-100">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center space-x-3">
                                    <img
                                        src={post.userImage}
                                        alt={post.username}
                                        className="w-12 h-12 rounded-full object-cover ring-4 ring-blue-50"
                                    />
                                    <div>
                                        <h2 className="font-semibold text-gray-900">@{post.username}</h2>
                                        <p className="text-sm text-gray-500">{post.timestamp}</p>
                                    </div>
                                </div>
                                <button className="p-2 hover:bg-gray-50 rounded-full">
                                    <MoreHorizontal className="w-5 h-5 text-gray-500" />
                                </button>
                            </div>

                            {/* Organizations */}
                            <div className="flex items-center space-x-2 mb-4">
                                {post.organizations.map((org, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveOrganization(org.name)}
                                        className={`p-1.5 rounded-full transition-all ${activeOrganization === org.name ? 'bg-blue-50 ring-2 ring-blue-200' : 'bg-gray-50'}`}
                                        title={org.name}
                                    >
                                        <img
                                            src={org.logo}
                                            alt={org.name}
                                            className="w-7 h-7 object-contain"
                                        />
                                    </button>
                                ))}
                            </div>

                            {/* Activity Type */}
                            <div className="flex items-center space-x-2 text-blue-600">
                                <Activity className="w-5 h-5" />
                                <span className="text-sm font-medium">{post.type}</span>
                            </div>
                        </header>

                        {/* Post Content */}
                        <div className="relative group">
                            <img
                                src={post.image}
                                alt="Post content"
                                className="w-full h-96 object-cover"
                            />
                        </div>

                        {/* Actions */}
                        <div className="p-4 border-b border-gray-100">
                            <div className="flex items-center justify-between">
                                <div className="flex space-x-4">
                                    <button
                                        onClick={() => handleLike(post.id)}
                                        className="flex items-center space-x-1.5 group"
                                    >
                                        <Heart
                                            className={`w-6 h-6 transition-colors ${post.isLiked ? 'fill-red-500 stroke-red-500' : 'stroke-gray-500 group-hover:stroke-red-500'}`}
                                        />
                                        <span className="text-gray-600 group-hover:text-red-600">
                                            {post.likes > 1000 ? `${(post.likes / 1000).toFixed(1)}k` : post.likes}
                                        </span>
                                    </button>

                                    <button
                                        onClick={() => setShowComments(!showComments)}
                                        className="flex items-center space-x-1.5 group"
                                    >
                                        <MessageCircle className="w-6 h-6 stroke-gray-500 group-hover:stroke-blue-600" />
                                        <span className="text-gray-600 group-hover:text-blue-600">
                                            {post.comments}
                                        </span>
                                    </button>
                                </div>

                                <button
                                    onClick={() => handleShare(post.id)}
                                    className="flex items-center space-x-1.5 group"
                                >
                                    <Share2 className="w-6 h-6 stroke-gray-500 group-hover:stroke-green-600" />
                                    <span className="text-gray-600 group-hover:text-green-600">
                                        {post.shares}
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* Caption */}
                        <div className="p-6">
                            <p className="text-gray-900 font-medium">
                                <span className="text-blue-600">#</span>
                                {post.title}
                            </p>
                        </div>

                        {/* Comments Section */}
                        {showComments && (
                            <div className="p-6 bg-gray-50 border-t border-gray-100">
                                <div className="space-y-4">
                                    {/* Sample Comment */}
                                    <div className="flex items-start space-x-3">
                                        <img
                                            src={profileImg}
                                            alt="Commenter"
                                            className="w-8 h-8 rounded-full"
                                        />
                                        <div className="flex-1">
                                            <div className="bg-white p-3 rounded-lg shadow-sm">
                                                <p className="font-medium text-sm">eco_friend_23</p>
                                                <p className="text-gray-600 text-sm">Amazing initiative! How can I join the next cleanup?</p>
                                            </div>
                                            <div className="flex items-center space-x-4 mt-1 ml-3">
                                                <span className="text-xs text-gray-500">2h ago</span>
                                                <button className="text-xs text-gray-500 hover:text-blue-600">
                                                    Reply
                                                </button>
                                                <button className="flex items-center space-x-1">
                                                    <Heart className="w-4 h-4 stroke-gray-500" />
                                                    <span className="text-xs text-gray-500">12</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Comment Input */}
                                    <form onSubmit={handleCommentSubmit} className="flex space-x-3">
                                        <input
                                            type="text"
                                            value={commentInput}
                                            onChange={(e) => setCommentInput(e.target.value)}
                                            placeholder="Add a comment..."
                                            className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                        <button
                                            type="submit"
                                            className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                                        >
                                            Post
                                        </button>
                                    </form>
                                </div>
                            </div>
                        )}
                    </article>
                ))}
            </div>
        </div>
    );
};

export default CommunityPage;