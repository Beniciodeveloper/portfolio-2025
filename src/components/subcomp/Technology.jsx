function Technology({ imageSrc, altText, className, name }) {
  return (
    <div>
      <div className="p-4 rounded-full shadow-2xs h-[120px] w-[120px] flex items-center justify-center bg-[#C5D4F0] ">
        <img src={imageSrc} alt={altText} className={className} />
      </div>
      <p className="mt-3">{name}</p>
    </div>
  );
}

export default Technology;