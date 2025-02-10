import mrBean from '../../../../shared/asserts/images/image/mrbean.jpg';
import Avatar from '../avatar/Avatar';
const HomeHeader = () => {
    return (
        <div className="flex w-full bg-[#FAEEFC] md:bg-transparent p-3">
            <div className='flex flex-1 w-full'>
            <h1 className="md:text-[24px] text-[16px] font-semibold text-[#2F2F2F]">Task Management</h1>
            </div>
            <div className='flex'>
                <Avatar src={mrBean} alt={'user'} size={30} />
            </div>
        </div>
    )
};

export default HomeHeader;