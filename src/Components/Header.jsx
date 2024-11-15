import moment from 'moment';
import logo from '../assets/logo.png'

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='pt-6'>

                <img className='w-[400px] h-[60-px]' src={logo} alt="" />
            </div>
            <div>
                
            <p className='text-gray-400 font-semibold'>Journalism Without Fear or Favour</p>
            </div>

            <div>
            <p>{moment().format('MMMM Do YYYY')}</p>
            </div>
        </div>
    );
};

export default Header;