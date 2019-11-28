import React from 'react';
import Shortnovel from './Js/Shortnovel';
import Novel from './Js/Novel';
import Knowledge from './Js/Knowledge';
import Essay from './Js/Essay';
import Cover from './Js/Cover';
import Award from './Js/Award';
import Love from './Js/Love';
import Funny from './Js/Funny';
import Biography from './Js/Biography';
import Damah from './Js/Damah';
import Thei from './Js/Thei';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const styles = {
    paperContainer: {
        backgroundImage: 'url("./image/ml.JPG")'
    }
};

  return (
  
    <Router>     

            <div class="row container-fluid">
              <div class="col-2">
              <h3 className="head" style={styles.paperContainer}>စာပေမြင့်မှ လူမျိုးတင့်မည်</h3>
              <div className="title-bound" >
                
                <hr></hr>
           <h3><Link to={'/'} >ဝတ္ထုတို</Link></h3>
           <hr></hr>
           <h3> <Link to={'/novel'} >ဝတ္ထုရှည်</Link></h3>
           <hr></hr>
           <h3><Link to={'/knowledge'} > သုတ</Link></h3> 
           <hr></hr>
           <h3><Link to={'/essay'} > ရသ/အက်ဆေး</Link></h3> 
           <hr></hr>
           <h3><Link to={'/cover'} > ဘာသာပြန်</Link></h3> 
           <hr></hr>
           <h3><Link to={'/award'} > ဆုရစာအုပ်များ</Link></h3> 
           <hr></hr>
           <h3><Link to={'/love'} > အချစ်ဝတ္ထု</Link></h3> 
           <hr></hr>
           <h3><Link to={'/funny'} > ဟာသစာအုပ်</Link></h3> 
           <hr></hr>
           <h3><Link to={'/biography'} >အတ္ထုပတ္တိစာအုပ်</Link></h3> 
           <hr></hr>
           <h3><Link to={'/damah'} > တရားစာအုပ်</Link></h3> 
           <hr></hr>
           <h3><Link to={'/thei'} > သိုင်းစာအုပ်</Link></h3> 
         {/* သုတ
ရသ/အက်ဆေး
ဘာသာပြန်
ဆုရစာအုပ်များ
အချစ်ဝတ္ထု
ဟာသစာအုပ်
သိုင်းစာအုပ်
အတ္ထုပတ္တိစာအုပ်
တရားစာအုပ် */}
          </div>
          </div>
          <Switch>
            <div class="col-9">
              <div className="showpage">
              <Route exact path='/' component={Shortnovel} />
              <Route exact path='/novel' component={Novel} />
              <Route exact path='/knowledge' component={Knowledge} />
              <Route exact path='/essay' component={Essay} />
              <Route exact path='/cover' component={Cover} />
              <Route exact path='/award' component={Award} />
              <Route exact path='/love' component={Love} />
              <Route exact path='/funny' component={Funny} />
              <Route exact path='/biography' component={Biography} />
              <Route exact path='/damah' component={Damah} />
              <Route exact path='/thei' component={Thei} />
              </div>
              </div>
          </Switch>
          </div>
          
      </Router>
    
  );
}




