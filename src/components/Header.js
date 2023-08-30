import '../styles/Header.css'

function Header({children}) {
    return(
        <div className='header-banner'>
            {children} 
        </div>
    ) 
}

export default Header