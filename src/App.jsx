import MarkdownSyntax from './components/MarkDown'

function App() {
  return (
    <>
      <div className=''>
        <div className='mx-auto max-w-screen-lg my-10 p-8 bg-neutral-800 rounded-3xl mb-28 max-md:mx-4'>
          <MarkdownSyntax />
        </div>
        <div className=' fixed bottom-0 w-full bg-gray-950'>
          <div className='mx-auto max-w-screen-lg my-5 px-4 py-2 bg-neutral-800 rounded-3xl  max-md:mx-4'>
            <input className='w-full py-4 px-4 bg-neutral-800 outline-none' placeholder='Send messages and generate a response (⌘/Ctrl + Enter)' />
          </div>
        </div>
      </div>


    </>
  )
}

export default App
