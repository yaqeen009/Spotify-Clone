import collapse from '../assets/icons/collapse.png'
import add from "../assets/icons/check.png"

function CurrentSong() {
  return (
    <div className="relative flex flex-row items-center space-x-2 h-fit max-w-[420px]">
        <span className="relative w-16 h-16 rounded-sm ">
            <img src="" className='w-full h-full'/>
            <span className='absolute top-2 right-2 w-6 h-6 rounded-full bg-primary-300 opacity-75 hover:opacity-90 flex items-center justify-center hover:scale-105'>
                <img src={collapse} className='w-5 h-5' alt="" />
            </span>
        </span>
        <div className='flex flex-col max-w-[400px] overflow-hidden font-open_sans'>
            <h3 className='text-sm text-secondary-100 whitespace-nowrap cursor-pointer hover:underline animate-marquee transform '>PURPLE RAIN (FEAT FUTURE & METRO BOOMIN)</h3>
            <span className='flex text-secondary-200 text-xs space-x-0.5 '>
                <p className='hover:underline cursor-pointer'>Don Toliver,</p>
                <p className='hover:underline cursor-pointer'>Future,</p>
                <p className='hover:underline cursor-pointer' >Metro Boomin</p>
            </span>
        </div>
        <img src={add} alt="Add to playlist" className='w-5 h-5 cursor-pointer' />
    </div>
  )
}

export default CurrentSong