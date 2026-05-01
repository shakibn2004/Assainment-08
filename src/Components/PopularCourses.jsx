import { Syne } from "next/font/google";
import Link from "next/link";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaArrowRightLong, FaStar } from "react-icons/fa6";
import { MdOutlineTimer } from "react-icons/md";


const syne = Syne({
    subsets: ['latin'],
    display: 'swap',
})


const PopularCourses = async () => {
    const coursesPromised = await fetch('https://assainment-08.vercel.app/course.json');
    const courses = await coursesPromised.json();
    const coursesSort = courses.sort((a, b) => b.rating-a.rating);
    const coursesSlice = coursesSort.slice(0, 3)
    console.log(coursesSlice);

    return (
        <div className='text-white w-[90%] max-w-360 mx-auto space-y-4'>
            <div className="top">
                <h1 className={`${syne.className} text-5xl font-black`}>Popular Courses</h1>
            </div>

            <div className="middle flex justify-between text-[#8a8799]">
                <p>Handpicked by our team based on student ratings and <br /> outcomes.</p>
                <Link href={'/'} className="flex gap-2 items-center mt-10  btn-secondary">View All<FaArrowRightLong /></Link>
            </div>


            <div className="cards grid grid-cols-4 gap-4">
                {
                    coursesSlice.map(course => {
                        const {id, rating, duration, title, instructor, category, level} = course;

                        return (
                            <div key={id} className="rounded-2xl shadow-[0_0_2px_#fff]/40">
                                <div className="bg-amber-300/30 h-40 rounded-t-2xl">
                                    <div className="cbadge p-4">
                                        <h1 className="text-[#4ade80] text-[14px] rounded-[4px] border border-[#4ade80]/40 px-3 py-1 bg-[#4ade80]/20 w-fit uppercase">{level}</h1>
                                    </div>
                                </div>

                                <div className="content mt-4 space-y-3 px-4">
                                    <h3 className="text-[#f97316]">{category}</h3>
                                    <h4 className="font-bold">{title}</h4>
                                    <h5 className="text-[#8a8799]">👤 {instructor}</h5>
                                    <div className="ratting flex justify-between">
                                        <h5 className="flex items-center text-[#fbbf24] text-[14px]">
                                            {
                                                [<FaStar key={id} />, <FaStar key={id} />, <FaStar key={id} />, <FaStar key={id} />, <FaStarHalfAlt key={id} />].map(icon => icon)
                                            }
                                            <span className="ml-1 font-bold text-white text-[18px]">{rating}</span>
                                        </h5>
                                        <p className="flex items-center text-[#8a8799]"><MdOutlineTimer />{duration}</p>
                                    </div>
                                    <Link href={'/home/courses/coursedetails'} className="text-[#f97316] border border-[#f97316]/80 flex items-center gap-1.5 justify-center py-2 rounded-xl w-full">View Details<FaArrowRightLong /></Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default PopularCourses;