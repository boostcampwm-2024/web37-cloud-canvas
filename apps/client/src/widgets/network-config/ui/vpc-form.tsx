import { zodResolver } from '@hookform/resolvers/zod';
import { Label } from '@radix-ui/react-label';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/shared/ui/shadcn/button';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/shared/ui/shadcn/form';
import { Input } from '@/shared/ui/shadcn/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/shared/ui/shadcn/select';
import { useGroupStore } from '@/entities/group/model/group.store';
import { nanoid } from 'nanoid';

const vpcFormSchema = z.object({
    name: z.string().min(3, {
        message: 'VPC name must be at least 3 characters.',
    }),
    cidrBlock: z.string().regex(/^(\d{1,3}\.){3}\d{1,3}\/\d{1,2}$/, {
        message: 'Please enter a valid CIDR block (e.g., 10.0.0.0/16).',
    }),
    tenancy: z.enum(['default', 'dedicated', 'host'], {
        required_error: 'Please select a tenancy option.',
    }),
    enableDnsSupport: z.boolean().default(true),
    enableDnsHostnames: z.boolean().default(true),
});

type VpcFormValues = z.infer<typeof vpcFormSchema>;

interface VpcFormProps {
    onOpenChangeSheet?: (open: boolean) => void;
}

// VPC 폼 컴포넌트
export const VpcForm = (props: VpcFormProps) => {
    const { onOpenChangeSheet } = props;

    const { createGroup } = useGroupStore.use.actions();

    const form = useForm<VpcFormValues>({
        resolver: zodResolver(vpcFormSchema),
        defaultValues: {
            name: '',
            cidrBlock: '10.0.0.0/16',
            tenancy: 'default',
            enableDnsSupport: true,
            enableDnsHostnames: true,
        },
    });

    const onSubmit = (values: VpcFormValues) => {
        const { name } = values;
        if (!name) return;

        createGroup({
            id: nanoid(),
            children: [],
            name,
        });
        onOpenChangeSheet?.(false);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>VPC Name</FormLabel>
                            <FormControl>
                                <Input placeholder="my-vpc" {...field} />
                            </FormControl>
                            <FormDescription>
                                A name to identify your VPC
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="cidrBlock"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>CIDR Block</FormLabel>
                            <FormControl>
                                <Input placeholder="10.0.0.0/16" {...field} />
                            </FormControl>
                            <FormDescription>
                                IP address range for your VPC (e.g.,
                                10.0.0.0/16)
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="tenancy"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Tenancy</FormLabel>
                            <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                            >
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select tenancy option" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="default">
                                        Default
                                    </SelectItem>
                                    <SelectItem value="dedicated">
                                        Dedicated
                                    </SelectItem>
                                    <SelectItem value="host">Host</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormDescription>
                                Hardware isolation for your instances
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="flex flex-col gap-2">
                    <Label className="text-sm font-medium">
                        Additional Options
                    </Label>

                    <div className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            id="enableDnsSupport"
                            {...form.register('enableDnsSupport')}
                        />
                        <Label
                            htmlFor="enableDnsSupport"
                            className="text-sm font-normal"
                        >
                            Enable DNS Support
                        </Label>
                    </div>

                    <div className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            id="enableDnsHostnames"
                            {...form.register('enableDnsHostnames')}
                        />
                        <Label
                            htmlFor="enableDnsHostnames"
                            className="text-sm font-normal"
                        >
                            Enable DNS Hostnames
                        </Label>
                    </div>
                </div>
                <Button type="submit" className="w-full">
                    Create VPC
                </Button>
            </form>
        </Form>
    );
};
