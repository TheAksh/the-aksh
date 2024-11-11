export default function Home() {
  return (
    <div className='center flex flex-col items-center justify-center items-center h-screen'>
      <button
        type='button'
        className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2'
      >
        Fancy
      </button>
      <button
        type='button'
        className='text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2'
      >
        Elegant
      </button>
    </div>
  );
}
