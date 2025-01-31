import dynamic from 'next/dynamic';

const ServerSVG = dynamic(
    () => import('@/shared/ui/svg/server/index').then((mod) => mod.ServerSVG),
    { ssr: false },
);

export const ResourceNodeComponents = {
    server: ServerSVG,
};
