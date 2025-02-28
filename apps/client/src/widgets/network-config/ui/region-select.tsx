import { useForm } from 'react-hook-form';

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
    { id: 'korea', value: 'kr', label: 'Korea' },
    { id: 'japan', value: 'jp', label: 'Japan' },
    { id: 'singapore', value: 'sg', label: 'Singapore' },
];

export const RegionSelect = () => {
    const form = useForm<any>({
        defaultValues: {
            region: REGIONS[0].value,
        },
    });

    const handleRegionChange = (value: string) => {
        console.log('Region changed to:', value);
    };

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
                        render={({ field }) => (
                            <FormItem>
                                <Select
                                    onValueChange={handleRegionChange}
                                    defaultValue={field.value}
                                >
                                    <FormControl>
                                        <SelectTrigger className="border-none shadow-none hover:bg-accent focus:ring-0 [&>svg]:hidden">
                                            <SelectValue placeholder="Select a region" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {REGIONS.map((region) => (
                                            <SelectItem
                                                key={region.id}
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
