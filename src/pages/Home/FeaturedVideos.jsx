const FeaturedVideos = () => {
    return (
        <div className="w-full">
            <h2 className="text-4xl font-bold text-center mb-10">Featured Blog Videos</h2>
            <div className="mx-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {/* first */}
                    <div className="">
                        <iframe className="md:w-[350px] md:h-[300px]" src="https://www.youtube.com/embed/xNRJwmlRBNU" title="How To Embed YouTube Videos in React / Gatsby (and make them Responsive)" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <h2 className="text-xl pr-10 py-2 font-bold mt-2 mb-5">What is a Blog?</h2>
                    </div>
                    {/* second */}
                    <div className="">
                    <iframe className="md:w-[350px] md:h-[300px]" src="https://www.youtube.com/embed/Qrdew-7kb5w" title="How to Start a Blog in 10 Mins - Simple &amp; Easy (Step-by-Step)" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <h2 className="text-xl font-bold mt-2 mb-7">How to Start a Blog in 10 Mins</h2>
                    </div>
                    {/* third */}
                    <div className="">
                    <iframe className="md:w-[350px] md:h-[300px]" src="https://www.youtube.com/embed/KkKp56E6UVo" title="How to Write a Blog Post for Beginners: From Start to End" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <h2 className="text-xl font-bold mt-2 mb-7 pr-2">How to Write a Blog Post for Beginners: From Start to End</h2>
                    </div>
                    {/* fourth */}
                    <div className="">
                    <iframe className="md:w-[350px] md:h-[300px]" src="https://www.youtube.com/embed/HCaURbwBA8k" title="How to Write a Blog using AI in 10 minutes (Undetectable &amp; Plagiarism Free)" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <h2 className="text-xl font-bold mt-2 mb-7">How to Write a Blog using AI in 10 minutes</h2>
                    </div>
                    {/* fifth */}
                    <div className="">
                    <iframe className="md:w-[350px] md:h-[300px]" src="https://www.youtube.com/embed/HoT9naGLgNk" title="How to Write a PERFECT Blog Post in 2023 (Start → Finish)" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <h2 className="text-xl font-bold mt-2 mb-7">How to Write a PERFECT Blog Post in 2023 (Start → Finish)</h2>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FeaturedVideos;