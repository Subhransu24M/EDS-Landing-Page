import './stickycta.css';
import Image from 'next/image';
import callstickyicon from '../../icons/phone-call.png';
import whatsstickyicon from '../../icons/whatsapp.png'
import Link from 'next/link';
const StickyCta = () => {
  return (
    <>
    <div className='sticky-elm-blk'>
        <div className='call-stck'>
            <Link href="tel:971526780437"><Image src={callstickyicon} width={30} height={30} /></Link>
        </div>
        <div className='call-stck'>
        <Link href="https://api.whatsapp.com/send?phone=971526780437" target="_blank"><Image src={whatsstickyicon} width={30} height={30} /></Link>
        </div>
    </div>
    </>
  )
}

export default StickyCta