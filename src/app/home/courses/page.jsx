
import { Syne } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaArrowRightLong, FaStar } from "react-icons/fa6";
import { MdOutlineTimer } from "react-icons/md";


const syne = Syne({
    subsets: ['latin'],
    display: 'swap',
})


const Course = async () => {
    let courses = [];
    try {
        const res = await fetch('https://assainment-08.vercel.app/course.json');
        if (res.ok) {
            courses = await res.json();
        }
    } catch (error) {
        console.error("Fetch error:", error);
    }


    return (
        <section className='text-white w-[90%] max-w-360 mx-auto space-y-4 py-20'>
            <div className="top">
                <h1 className={`${syne.className} text-5xl font-black`}>All Courses</h1>
            </div>

            <div className="middle flex justify-between text-[#8a8799]">
                <p>Everything we offer — filter by search, explore by category.</p>
            </div>

            <div className="search mt-6">
                <input className="focus:outline-none border border-[#f97316]/70 py-2 px-3 rounded-xl" type="search" name="search" id="search" placeholder="Search course by title" />
            </div>


            <div className="cards grid grid-cols-4 gap-6 gap-y-15 mt-25">
                {
                    courses.map((course, idx) => {
                        const { id, rating, duration, title, instructor, category, level, image } = course;

                        return (
                            <div key={id} className="ccard border border-white/10 transition-all duration-900 hover:scale-102 hover:border hover:border-[#f97316]/60 pb-8 rounded-2xl shadow-[0_0_2px_#fff]/40">

                                <div className="cbadge relative">
                                    <Image src={image} width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%' }} alt={id} className="bg-amber-300/30 h-40 rounded-t-2xl"></Image>
                                    <h1 className="text-white absolute -top-4 left-6 text-[14px] rounded-full px-3 py-1 bg-[#f97316] w-fit uppercase">{level}</h1>
                                </div>


                                <div className="content mt-4 space-y-3 px-4">
                                    <h3 className="text-[#f97316]">{category}</h3>
                                    <h4 className="font-bold">{title}</h4>
                                    <h5 className="text-[#8a8799]">👤 {instructor}</h5>
                                    <div className="ratting flex justify-between">
                                        <h5 className="flex items-center text-[#fbbf24] text-[14px]">
                                            {
                                                [<FaStar key={idx} />, <FaStar key={title} />, <FaStar key={instructor} />, <FaStar key={id} />, <FaStarHalfAlt key={rating} />].map(icon => icon)
                                            }
                                            <span className="ml-1 font-bold text-white text-[18px]">{rating}</span>
                                        </h5>
                                        <p className="flex items-center text-[#8a8799]"><MdOutlineTimer />{duration}</p>
                                    </div>
                                    <Link href={`/home/courses/${id}`} className="text-[#f97316] hover:text-[#f97316]/80 border border-[#f97316]/80 flex items-center gap-1.5 justify-center py-2 rounded-xl w-full">View Details<FaArrowRightLong /></Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
};

export default Course;