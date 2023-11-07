import Typewriter from 'typewriter-effect'

// type Props = {}

const TypeWriterTitle = (props) => {
  return (
    <Typewriter
      options={{
        loop: true,
      }}
      onInit={(typewriter)=>{
        typewriter.typeString("Working on the Project")
        .pauseFor(500).deleteAll()
        .typeString("Will Update with the Deployed Link Soon...")
        .pauseFor(500).deleteAll()
        .typeString("Do visit the site after sometime to check the website running...")
        .pauseFor(500).deleteAll()
        .start()
      }}
    />
  )
}

export default TypeWriterTitle