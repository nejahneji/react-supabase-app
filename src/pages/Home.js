import supabase from '../config/supabaseClient'
const Home = () => {
  console.log(supabase,'*****');
 console.log(process.env);
  return (
    <div className="page home">
      <h2>Home</h2>
    </div>
  )
}

export default Home