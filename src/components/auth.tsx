import { useAccount } from '@/data'
import Link from 'next/link'

export default function Auth({ children }: { children: JSX.Element }) {
  const { data, isLoading } = useAccount()
  return isLoading ? null : <Link href={data ? '/console' : '/api/auth'}>{data ? data.userName : children}</Link>
}
