import dynamic from 'next/dynamic'

const DynamicMap = dynamic(() => import('./DynamicMap'), {
  ssr: false
})

const DEFAULT_WIDTH = 600
const DEFAULT_HEIGHT = 600

const Map = (props) => {
  const { width = DEFAULT_WIDTH, height = DEFAULT_HEIGHT } = props
  return (
    <section style={{ aspectRatio: width / height }}>
      <DynamicMap {...props} />
    </section>
  )
}

export default Map
