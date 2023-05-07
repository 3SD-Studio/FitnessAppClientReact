import './home.css';

function Home() {
  return (
    <div class="grid-container">
        <Calendar class="left"></Calendar>
        <Nextworkout class="rightTop"></Nextworkout>
        <Progress class="rightLow"></Progress>
    </div>
  
  );
}

export default Home;
