import Typewriter from 'typewriter-effect'

// type Props = {}

const TypeWriterTitle = (props) => {
  return (
    <Typewriter
      options={{
        loop: true,
      }}
      onInit={(typewriter)=>{
        typewriter.typeString("| Working on the Project |")
        .pauseFor(500).deleteAll()
        .typeString("| Will Update with the Deployed Link Soon... |")
        .pauseFor(500).deleteAll()
        .start()
      }}
    />
  )
}

export default TypeWriterTitle