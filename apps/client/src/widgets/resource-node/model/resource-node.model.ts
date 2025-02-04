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

const CloudFunctionSVG = dynamic(
    () =>
        import('@/shared/ui/svg/cloud-function').then(
            (mod) => mod.CloudFunctionSVG,
        ),
    { ssr: false },
);

const AutoScalingSVG = dynamic(
    () =>
        import('@/shared/ui/svg/auto-scaling').then(
            (mod) => mod.AutoScalingSVG,
        ),
    {
        ssr: false,
    },
);

export const ResourceNodeComponents = {
    server: ServerSVG,
    container: ContainerSVG,
    'cloud-function': CloudFunctionSVG,
    'auto-scaling': AutoScalingSVG,
};
