import { Navbar, Welcome} from './components';

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-primary">
        <Navbar />
          
      </div>
      <div className ="bg-white">
        <Welcome />
      </div>
      
    </div>
  )
}

export default App