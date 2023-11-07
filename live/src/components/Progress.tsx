import TypeWriterTitle from "./TypeWriter"

const Progress = () => {
  return (
    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <h1 className='font-semibold text-xl text-center'>
          Currently Working on the Project , With the most modern stack..... <br />
          <span className='text-green-600 font-bold'> Will Be Deployed </span>  Very Soon and Accessible for Everyone.
        </h1>
        <div className="mt-4"></div>
        <div className="font-semibold text-xl text-center text-yellow-400">
            <TypeWriterTitle />
        </div>
        

        
    </div>
  )
}

export default Progress