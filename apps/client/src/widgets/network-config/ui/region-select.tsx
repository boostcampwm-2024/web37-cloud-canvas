import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { useSelectStore } from '@/features/select/model/select.store';

import { useGroupStore } from '@/entities/group/model/group.store';
import { useResourceStore } from '@/entities/resource/model/resource.store';

import {
    Form,
    FormControl,
    FormField,
    FormItem,
} from '@/shared/ui/shadcn/form';
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from '@/shared/ui/shadcn/select';

const REGIONS = [
    { value: 'kr', label: 'Korea' },
    { value: 'jp', label: 'Japan' },
    { value: 'sg', label: 'Singapore' },
];

export const RegionSelect = () => {
    const selectedNodeId = useSelectStore.use.selectedNodeId();
    const { createGroup } = useGroupStore.use.actions();
    const { getResource, setResourceNetwork } = useResourceStore.use.actions();

    const [selectedRegion, setSelectedRegion] = useState<string | undefined>(
        undefined,
    );

    const form = useForm<any>();

    const handleRegionChange = (value: string) => {
        if (!selectedNodeId) return;

        setSelectedRegion(value);

        createGroup({
            id: value,
            nodeIds: [selectedNodeId],
            name: REGIONS.find((region) => region.value === value)?.label,
        });
        setResourceNetwork(selectedNodeId, 'region', value);
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
