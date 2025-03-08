const SignupPage = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);

    const handleFileSelect = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewUrl(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="container">
            <div className="auth-card">
                <div className="header">
                    <div className="motto">
                        <h2>"It's not WASTE until it's WASTED"</h2>
                    </div>
                    <div className="logo-container">
                        <div className="logo-inner">
                            <img src="/api/placeholder/24/24" alt="Offer" className="offer-image" />
                        </div>
                    </div>
                </div>

                <div className="form-container">
                    <h3 className="form-title">Create Account</h3>

                    <form>
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="input"
                        />

                        <div className="file-upload">
                            <label className="file-upload-label">
                                {selectedFile ? 'Change Photo' : 'Upload Photo'}
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileSelect}
                                />
                            </label>
                            {previewUrl && (
                                <img
                                    src={previewUrl}
                                    alt="Preview"
                                    className="preview-image"
                                />
                            )}
                        </div>

                        <input
                            type="email"
                            placeholder="Email Address"
                            className="input"
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            className="input"
                        />

                        <button type="submit" className="button">
                            <span>Sign Up</span>
                            <span className="icon">→</span>
                        </button>
                    </form>

                    <div className="toggle-text">
                        Already have an account? <Link to="/login">Login</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SignupPage;