import BtnPrimary from "./BtnPrimary";

function Heros() {
  return (
    <main className='flex flex-center'>
      <div className='flex flex-col flex-center w-1/3 max-lg:w-1/2 max-md:w-2/3 max-sm:w-3/4 gap-5 mt-20'>
        <h1 className='text-theme-color text-2xl font-black'>House Tree Person</h1>
        <p className='text-paragraph mb-10'>
          Some text will be put here to briefly talk about the project and maybe describe
          some aspects of it. Vision of the project can be stated here.
        </p>
        <BtnPrimary text={"Login"} />
      </div>
    </main>
  );
}

export default Heros;
