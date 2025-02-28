import { useState, type ReactNode } from 'react';

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/shared/ui/shadcn/sheet';

interface ConfigSheetProps {
    title: string;
    description: string;
    trigger: ReactNode; // button
    renderForm: ({
        onOpenChangeSheet,
    }: {
        onOpenChangeSheet: (open: boolean) => void;
    }) => ReactNode;
}

export const ConfigSheet = (props: ConfigSheetProps) => {
    const { title, description, trigger, renderForm } = props;

    const [open, setOpen] = useState(false);

    const handleOpenChange = (open: boolean) => setOpen(open);

    return (
        <Sheet open={open} onOpenChange={handleOpenChange}>
            <SheetTrigger asChild>{trigger}</SheetTrigger>
            <SheetContent side="right">
                <SheetHeader>
                    <SheetTitle>{title}</SheetTitle>
                    <SheetDescription>{description}</SheetDescription>
                </SheetHeader>
                <div className="mt-6">
                    {renderForm({
                        onOpenChangeSheet: handleOpenChange,
                    })}
                </div>
            </SheetContent>
        </Sheet>
    );
};
