import TypeWriterTitle from "./TypeWriter"
import wip from '../../public/under-construction90s-90s.gif'

const Progress = () => {
  return (
    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <img className="mx-auto" src={wip} alt="Work in progress image" width={120} />
        <h1 className='font-semibold text-xl text-center mt-10'>
          Currently Working on the Project....<br /> Will Be &nbsp;
          <span className='text-green-500 font-bold'>Deployed </span>  Very Soon.
        </h1>
        <div className="mt-4"></div>
        <div className="font-semibold text-xl text-center text-yellow-500">
            <TypeWriterTitle />
        </div>
        

        
    </div>
  )
}

export default Progress