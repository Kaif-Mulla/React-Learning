import Naturecard from './Naturecard'

const NatureContainer = () => {
  return (
    <div style={{
      display: 'flex',
      gap: '35px',
      justifyContent: 'center',
      padding: '50px'
    }}>

      <Naturecard 
        img="https://th.bing.com/th/id/R.ebae826b12b22427bc1e5ada46ef69c9?rik=rL2R25EvXyx1vw&riu=http%3a%2f%2fstatic.boredpanda.com%2fblog%2fwp-content%2fuploads%2f2015%2f04%2fnight-sky-stars-milky-way-photography-23__880.jpg&ehk=0xsjQipZeoMxna43Zk4U2Zv7RRfJwDsOjDrfw73SSno%3d&risl=&pid=ImgRaw&r=0"
        name="A Starry Night"
        content="Look up at the night sky, and find yourself immersed in the amazing mountain range of Aspen."
      />

      <Naturecard
        img="https://tse1.explicit.bing.net/th/id/OIP.JMoy8qyQgkcYUA9nykdgzgHaFq?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
        name="Misty Mornings"
        content="Capture the stunning essence of the early morning sunrise in Californian wilderness."
      />

      <Naturecard
        img="https://jeffreyfavero.com/wp-content/uploads/2013/03/JFP-SMC-134.jpg"
        name="Utah Sunsets"
        content="Sunsets over the stunning Utah canyons. It's truly something much more than incredible."
      />

    </div>
  )
}

export default NatureContainer