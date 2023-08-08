import Image from 'next/image'
import { AvatarHome } from './Avatar'
import { useRouter } from 'next/navigation'

export function Header() {
  const router = useRouter()
  return (
    <header className="h-16 flex items-center justify-between px-4 text-white">
      <div className="flex items-center">
        <Image
          src="https://home.hardworkmedicina.com.br/static/media/HardworkLogo.50e635e796c3ad08558b07d42f199f4c.svg"
          width={120}
          height={30}
          alt=""
        />
      </div>

      <div className="flex items-center space-x-4">
        <button onClick={() => router.push('/')}>Home</button>
        <AvatarHome />
      </div>
    </header>
  )
}
