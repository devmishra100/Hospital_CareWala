import Hero from '../components/Hero'
import StatsBand from '../components/StatsBand'
import Departments from '../components/Departments'
import Doctors from '../components/Doctors'
import MessageForm from '../components/MessageForm'
import QuickBook from '../components/QuickBook'

function Home() {
  return (
    <div>
      <Hero />
      <StatsBand />
      <QuickBook />
      <Departments />
      <Doctors />
      <MessageForm />
    </div>
  )
}

export default Home