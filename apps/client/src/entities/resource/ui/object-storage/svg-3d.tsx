import type { ResourceSVGProps } from '../../model/types';

export const ObjectStorageSVG3D = (props: ResourceSVGProps) => {
    const { size, ...svgProps } = props;

    return (
        <svg x="-50" y="-63" overflow="visible" {...svgProps}>
            <path
                fill="#4286c5"
                d="M50.313 1.155v56.693L99.41 29.501z"
                fillRule="evenodd"
            ></path>
            <path
                fill="#26527b"
                d="m1.215 29.501 49.098 28.347V1.155z"
                fillRule="evenodd"
            ></path>
            <path fill="none" stroke="#020406" d="M50.313 1.155v56.693"></path>
            <path
                fill="#26527b"
                d="M50.313 57.847 99.41 29.501l-24.549 70.866-24.548 14.173z"
                fillRule="evenodd"
            ></path>
            <path
                fill="#326ca2"
                d="m1.215 29.501 49.098 28.347v56.692l-24.55-14.173z"
                fillRule="evenodd"
            ></path>
            <path
                fill="none"
                stroke="#0e1e2d"
                d="m1.215 29.501 49.098 28.347L99.41 29.501 50.313 57.848v56.692"
            ></path>
            <path
                fill="none"
                stroke="#000000"
                d="M50.313 1.155 1.214 29.501l24.549 70.866 24.549 14.173 24.548-14.173 24.549-70.866z"
                strokeWidth="2"
            ></path>
        </svg>
    );
};
