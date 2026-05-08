import logo from '@/assets/logo.png'
import { format } from 'date-fns';
import Image from 'next/image'
import BreakingNews from './BreakingNews';

const Hero = () => {
    return (
        <div className='text-center container mx-auto space-y-5'>
            <div>
                <Image className='mx-auto' src={logo} width={200} alt="logo" />
                <p> Journalism Without Fear or Favour</p>
                <p>{format(new Date(), "EEEE MMMM d yyyy")}</p>
            </div>
            <BreakingNews></BreakingNews>
        </div>
    );
};

export default Hero;