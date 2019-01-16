import Link from 'next/link'

export default () => (
  <div className='text-center'>
    <Link href='/login'>
      <a>Login</a>
    </Link>
    <Link href='/register'>
      <a>Register</a>
    </Link>
  </div>
)
