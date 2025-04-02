function Project({ imageSrc, titlle, text, link }) {
    return (
        <a href={link}>
            <div className="flex flex-col ">
                <img className="mt-6 w-[400px] h-[230px] " src={imageSrc} alt=" flex" />
                <h1 className="text-[26px] font-bold text-left md:mt-4 ">{titlle}</h1>
                <div className="">
                    <p className="text-[14px] font-bold text-left mt-1 ">{text}</p>

                </div>



            </div>
        </a>

    );
};

export default Project