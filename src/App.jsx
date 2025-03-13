import './App.css'

const App = () => {
  return (
    <>
      <main className="main relative z-10 flex flex-col items-center w-[1425px] h-[843px]">
        <h1 className="title text-6xl py-4">The Kris Kurzawa Group Plays Asia</h1>
        <h2 className="subtitle text-5xl py-4">And Other</h2>
        <img src="/BandName.png" className='w-[50%] relative bottom-52' />
        <h2 className='date relative bottom-[34rem] text-5xl'>April 4,  2025 at The Cadieux Cafe</h2>
        <h2 className='time relative bottom-[32rem] text-5xl'>8:30pm</h2>
        <h2 className='price relative bottom-[30rem] text-5xl'>20 Dollars</h2>
      </main>
      <img src='/bandone.jpg' className='band-photo absolute w-[1425px] h-[843px] top-0'></img>
    </>
  )
}

export default App