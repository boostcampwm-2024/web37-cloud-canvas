import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { useSelectStore } from '@/features/select/model/select.store';

import { useGroupStore } from '@/entities/group/model/group.store';
import { useNodeStore } from '@/entities/node/model/node.store';
import { useResourceStore } from '@/entities/resource/model/resource.store';

import {
    Form,
    FormControl,
    FormField,
    FormItem,
} from '@/shared/ui/shadcn/form';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/shared/ui/shadcn/select';

const REGIONS = [
    { value: 'kr', label: 'Korea' },
    { value: 'jp', label: 'Japan' },
    { value: 'sg', label: 'Singapore' },
];

export const RegionSelect = () => {
    const selectedNodeId = useSelectStore.use.selectedNodeId();
    const { addNodeParentGroup } = useNodeStore.use.actions();
    const { isGroupExist, createGroup, addNodeToGroup } =
        useGroupStore.use.actions();
    const { getResource, setResourceNetwork } = useResourceStore.use.actions();

    const [selectedRegion, setSelectedRegion] = useState<string | undefined>(
        undefined,
    );

    const form = useForm<any>();

    const handleRegionChange = (value: string) => {
        if (!selectedNodeId) return;

        setSelectedRegion(value);

        if (isGroupExist(value)) {
            addNodeToGroup(selectedNodeId, value);
        } else {
            createGroup({
                id: value,
                nodeIds: [selectedNodeId],
                name: REGIONS.find((region) => region.value === value)?.label,
            });
        }
        setResourceNetwork(selectedNodeId, 'region', value);
        addNodeParentGroup(selectedNodeId, value);
    };

    useEffect(() => {
        if (!selectedNodeId) {
            setSelectedRegion(undefined);
            return;
        }

        const nodeRegion = getResource(selectedNodeId)?.networks.region;
        setSelectedRegion(nodeRegion);
    }, [selectedNodeId, getResource]);

    return (
        <div className="flex flex-col">
            <div className="flex items-center justify-between space-x-2">
                <label>Region</label>
            </div>
            <Form {...form}>
                <form>
                    <FormField
                        control={form.control}
                        name="region"
                        render={() => (
                            <FormItem>
                                <Select
                                    onValueChange={handleRegionChange}
                                    value={selectedRegion}
                                >
                                    <FormControl>
                                        <SelectTrigger className="border-none shadow-none hover:bg-accent focus:ring-0 [&>svg]:hidden">
                                            <SelectValue placeholder="Select a region" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {REGIONS.map((region) => (
                                            <SelectItem
                                                key={region.value}
                                                value={region.value}
                                            >
                                                {region.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </FormItem>
                        )}
                    />
                </form>
            </Form>
        </div>
    );
};
