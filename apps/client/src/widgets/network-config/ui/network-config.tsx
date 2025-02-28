import { CirclePlusIcon } from 'lucide-react';
import { useState } from 'react';

import { useSelectStore } from '@/features/select/model/select.store';

import { useResourceStore } from '@/entities/resource/model/resource.store';

import { cn } from '@/shared/lib/shadcn/utils';
import { Button } from '@/shared/ui/shadcn/button';
import { Card } from '@/shared/ui/shadcn/card';
import { Separator } from '@/shared/ui/shadcn/separator';

import { ConfigSheet } from './config-sheet';
import { RegionSelect } from './region-select';
import { VpcForm } from './vpc-form';

interface NetworkConfigProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
}

export const NetworkConfig = (props: NetworkConfigProps) => {
    const selectedId = useSelectStore.use.selectedNodeId();
    const { getResource } = useResourceStore.use.actions();
    const { className } = props;

    if (!selectedId) return null;

    return (
        <>
            <Card
                className={cn(
                    'absolute top-16 left-4 flex items-center p-4',
                    className,
                )}
            >
                <div className="flex items-center space-x-4">
                    <p>
                        {getResource(selectedId)?.properties.type.toUpperCase()}
                    </p>
                    <Separator orientation="vertical" className="h-6" />
                    <RegionSelect />
                    <Separator orientation="vertical" className="h-6" />
                    <div className="flex flex-col">
                        <div className="flex max-h-6 items-center justify-between space-x-2">
                            <p>VPC</p>
                            <ConfigSheet
                                title="VPC Name"
                                description="VPC Name"
                                trigger={
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="w-fit"
                                    >
                                        <CirclePlusIcon />
                                    </Button>
                                }
                                renderForm={(props) => <VpcForm {...props} />}
                            />
                        </div>
                        <Button variant="ghost" className="px-3 font-normal">
                            VPC Name
                        </Button>
                    </div>
                    <Separator orientation="vertical" className="h-6" />
                    <div className="flex flex-col">
                        <div className="flex max-h-6 items-center justify-between space-x-2">
                            <p>Subnet</p>
                            <ConfigSheet
                                title="VPC Name"
                                description="VPC Name"
                                trigger={
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="w-fit"
                                    >
                                        <CirclePlusIcon />
                                    </Button>
                                }
                                renderForm={({ onOpenChangeSheet }) => (
                                    <VpcForm />
                                )}
                            />
                        </div>
                        <Button variant="ghost" className="px-3 font-normal">
                            Subnet Name
                        </Button>
                    </div>
                    <Separator orientation="vertical" className="h-6" />
                </div>
            </Card>
        </>
    );
};
