import './home.css';
import Calendar from './calendar.js';
import Nextworkout from './nextworkout.js';
import Progress from './progress.js';

function Home() {
  return (
    <div class="grid-container">
        <div class="left">
          <Calendar></Calendar>
        </div>
        <div class="rightTop">
          <Nextworkout></Nextworkout>
        </div>
        <div class="rightLow">
          <Progress></Progress>
        </div>
    </div>
  
  );
}

export default Home;
