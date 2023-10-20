export default function Button({ text }) {
  return (
    <div className='pb-10 grid place-items-center md:place-content-start'>
      <button className='py-3 px-10 border-2 border-primary text-primary rounded-sm hover:bg-primary hover:text-white hover:font-bold hover:cursor-pointer'>
        {text}
      </button>
    </div>
  );
}
