import './stickycta.css';
import Link from 'next/link';
const StickyCta = () => {
  return (
    <>
    <div className='sticky-elm-blk'>
        <div className='call-stck'>
            <Link href="tel:971526780437"><img src="/icons/phone-call.png" width={30} height={30} fetchPriority='high' loading='lazy'/></Link>
        </div>
        <div className='call-stck'>
        <Link href="https://api.whatsapp.com/send?phone=971526780437" target="_blank"><img src="/icons/whatsapp.png" width={30} height={30} fetchPriority='high' loading='lazy'/></Link>
        </div>
    </div>
    </>
  )
}

export default StickyCta