import * as React from 'react';

import { cn } from '@/lib/utils';

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
    return (
        <textarea
            data-slot="textarea"
            className={cn(
                'flex justify-between w-full rounded-[4px] border border-[#EEEEEE] px-4 py-3 text-base placeholder-[#9BA0A4] font-inter font-[400] text-[14px] text-[#293D4C] focus:outline-none focus:border-black disabled:cursor-not-allowed disabled:opacity-50',
                className
            )}
            {...props}
        />
    );
}

export { Textarea };
