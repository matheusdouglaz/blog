import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

type PostCoverImageProps = {
    ImageProps: React.ComponentProps<typeof Image>;
    linkProps: React.ComponentProps<typeof Link>;
}

export function PostCoverImage({ ImageProps, linkProps }: PostCoverImageProps) {
    return (
        <Link {...linkProps} className={clsx(
            'w-full',
            'h-full',
            'overflow-hidden',
            'rounded-xl',
            linkProps.className
        )}>
            <Image {...ImageProps}
                className={clsx(
                    'h-full',
                    'w-full',
                    'object-cover',
                    'object-center',
                    'group-hover:scale-105',
                    'transition',
                    ImageProps.className
                )}
                alt={ImageProps.alt}
            />
        </Link>
    )
}