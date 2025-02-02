import dynamic from 'next/dynamic';

const ServerSVG = dynamic(
    () => import('@/shared/ui/svg/server').then((mod) => mod.ServerSVG),
    { ssr: false },
);

const ContainerSVG = dynamic(
    () => import('@/shared/ui/svg/container').then((mod) => mod.ContainerSVG),
    {
        ssr: false,
    },
);

export const ResourceNodeComponents = {
    server: ServerSVG,
    container: ContainerSVG,
};
