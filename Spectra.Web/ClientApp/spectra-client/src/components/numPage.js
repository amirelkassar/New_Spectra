'use client';
import { useSearchParams } from 'next/navigation';

function NumPage() {
    const pageParam = useSearchParams()?.get("page") || "1";
    const page = parseInt(pageParam, 10);
    // Validate the page number
    const validPage = isNaN(page) || page <= 0 ? 1 : page;

    return validPage;
}

export default NumPage;
