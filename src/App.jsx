import { cards } from './cards'
import { CardsList } from './components'
import style from './app.module.css'

function App() {

  return (

    <section style={style.section}>
      <CardsList cards={cards}></CardsList>
    </section>
  )
}

export default App
