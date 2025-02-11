import BtnThemeToggler from "./BtnThemeToggler";

function Navbar() {
  return (
    <nav className='flex justify-between p-common'>
      <div className='flex gap-2'>
        <img src='Logo.svg' className='-translate-y-0.5'></img>
        <h1 className='text-theme-color text-md'>
          House <span className='text-primary'>Tree</span> Person
        </h1>
      </div>
      <div className='flex lg:gap-8 gap-5 text-theme-color text-sm'>
        <h1 className='cursor-pointer'>About</h1>
        <h1 className='cursor-pointer'>Data & Samples</h1>
        <h1 className='cursor-pointer'>Publications</h1>
        <h1 className='cursor-pointer'>Contact</h1>
        <BtnThemeToggler />
      </div>
    </nav>
  );
}

export default Navbar;
