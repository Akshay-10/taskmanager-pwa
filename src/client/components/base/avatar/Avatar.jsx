const Avatar = ({ src, alt, size }) => {
    return (
        <img
        src={src}
        alt={alt}
        height={size}
        width={size}
        className={`object-cover rounded-full border-1 border-black/10`}
        />
    );
};

export default Avatar;