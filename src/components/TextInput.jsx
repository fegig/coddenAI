
const TextInput = ({text, setText, submit}) => {


    const handleKeyDown = (event) => {
        if ((event.metaKey || event.ctrlKey) && event.key === 'Enter') {
            event.preventDefault();
            submit();
          
        }
    };
    return (<>
        <div className='mx-auto max-w-screen-lg my-5 px-4 py-2 bg-neutral-800 rounded-3xl  max-md:mx-4 flex space-x-2'>
            <textarea
                aria-multiline 
                className="w-full md:py-4 px-4 py-2 bg-neutral-800 outline-none  resize-none"
                placeholder="Send messages and generate a response (⌘/Ctrl + Enter)"
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={handleKeyDown}
                rows={1} 
            />
            <button className='  px-6 bg-violet-600 text-white rounded-3xl hover:bg-violet-800 smooth font-semibold' onClick={()=>submit()}>Send</button>
        </div>
    </>);
}

export default TextInput
