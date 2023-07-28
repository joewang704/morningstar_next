import Image from 'next/image'
import Navbar from './navbar'

export default function Home() {
  return (
    <>
      <Navbar />
        <div className="relative">
          <h1 style={{ fontFamily: 'Belgiano', letterSpacing: '3px' }} className="fade-in-text uppercase absolute left-24 -top-20 text-headlineorg font-semibold text-6xl whitespace-nowrap">MorningStar Dance</h1>
          <h1 style={{ fontFamily: 'Belgiano', letterSpacing: '3px' }} className="fade-in-text uppercase absolute left-24 -top-7 text-headlineorg font-semibold text-6xl whitespace-nowrap">Academy of Atlanta</h1>
          <button style={{ fontWeight: 300 }} className="fade-in-text absolute top-12 left-20 text-lg text-white uppercase py-4 px-4 hover:underline">View Our Performances {'>'}{'>'}</button>
          <img
            src="/bg.jpg"
            alt="Hero Image"
            className="mt-40"
          />
        </div>
    </>
  )
}
