export default function Home({name}) {
  return (
      <main>
        <h1>App {name}</h1>
      </main>
  )
}

export const getServerSideProps = () => ({
  props: {
    name: process.env.NAME,
  }
})