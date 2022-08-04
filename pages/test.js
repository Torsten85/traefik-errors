export default function Test({ name }) {
  return (
      <main>
        <h1>Test {name}</h1>
      </main>
  )
}

export const getServerSideProps = () => ({
  props: {
    name: process.env.NAME,
  }
})