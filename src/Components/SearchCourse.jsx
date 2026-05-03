'use client'

import { useRouter, useSearchParams } from "next/navigation";

const SearchCourse = () => {
    const router = useRouter();
    // get search value and push it to router
    const handleSearch = (e) => {
        e.preventDefault()
        const searchKey = e.target.value;
        router.push(`?search=${searchKey}`);
    }


    return (
        <div className="search mt-6">
            <input onChange={handleSearch} className="focus:outline-none border border-[#f97316]/70 py-2 px-3 rounded-xl" type="search" name="search" id="search" placeholder="Search course by title" />
        </div>
    );
};

export default SearchCourse;