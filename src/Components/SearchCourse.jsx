'use client'

import { useRouter, useSearchParams } from "next/navigation";

const SearchCourse = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const search = searchParams.get('search') || '';

    // get search value and push it to router
    const handleSearch = (e) => {
        e.preventDefault()
        const searchKey = e.target.value;
        router.push(`?search=${searchKey}`);
    }

    // Clear input field on focus
    const handleFocus = () => {
        router.push(`/courses`);
    }


    return (
        <div className="search mt-6">
            <input onChange={handleSearch} onFocus={handleFocus} className="focus:outline-none border border-[#f97316]/70 py-2 px-3 rounded-xl" value={search} type="search" name="search" id="search" placeholder="Search course by title" />
        </div>
    );
};

export default SearchCourse;