import './App.css'
import TeamSection from './components/teamsection';

const App = () => {
  return (
    <div >
      <div className="flex flex-row items-center py-4 px-16">
        <hr className="w-32 bg-white inline-block " style={{height: "1px"}} />
        <h1 className="text-2xl ml-4 font-normal font-Montserrat inline-block">Meet Our team</h1>
      </div>
      <TeamSection />
    </div>
  );
};

export default App;