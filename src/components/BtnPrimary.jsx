function BtnPrimary({ text, className }) {
  return (
    <button
      className={`${className} px-12 py-3 bg-primary text-white 
      border-primary border-2 rounded-3xl hover:bg-white 
      hover:text-primary hover:shadow-lg`}
    >
      {text}
    </button>
  );
}

export default BtnPrimary;
