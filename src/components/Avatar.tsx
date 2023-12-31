'use client'
import * as Avatar from '@radix-ui/react-avatar'

export function AvatarHome() {
  return (
    <div className="flex gap-5">
      <Avatar.Root className="bg-blackA3 inline-flex h-[32px] w-[32px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
        <Avatar.Image
          className="h-full w-full rounded-[inherit] object-cover"
          src="https://github.com/Felipe8297.png"
          alt="Felipe Silva"
        />
        <Avatar.Fallback
          className="text-violet11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium"
          delayMs={600}
        ></Avatar.Fallback>
      </Avatar.Root>
    </div>
  )
}
