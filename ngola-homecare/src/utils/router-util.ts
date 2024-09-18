import { useRouter } from 'next/navigation';

export const navigate = (router: ReturnType<typeof useRouter>, url: string) => {
    router.push(url);
};
