import mrBean from '../../../../shared/asserts/images/image/mrbean.jpg';
import { useThemeContext } from '../../../../shared/themes/ThemeContext';
import Avatar from '../avatar/Avatar';
import ButtonWithIcon from '../button/ButtonWithIcon';
const HomeHeader = () => {
    const {toggleTheme, themeStyles} = useThemeContext()
    return (
        <div className="flex w-full bg-[#FAEEFC] md:bg-transparent p-3">
            <div className='flex flex-1 w-full'>
            <h1 className="md:text-[24px] text-[16px] font-semibold" style={{
                color: themeStyles?.textColor
            }}>Task Management</h1>
            </div>
            <div className='flex'>
                <ButtonWithIcon title='light' onClick={toggleTheme} />
                <Avatar src={mrBean} alt={'user'} size={30} />
            </div>
        </div>
    )
};

export default HomeHeader;