export default function Heading({ children } : { children: React.ReactNode }) {
  return (
    <h1 className='text-center md:text-left text-3xl my-10 font-bold'>
        { children }
    </h1>
  )
}
