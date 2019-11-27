import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import CanvasApi from '@components/CanvasApi';
import Qiqiaoban from '@components/Qiqiaoban';
import DrawArc from '@components/DrawArc';
import SaveStore from '@components/saveRestore';
import Translating from '@components/Translating';
import Rotating from '@components/Rotating';
import Sacling from '@components/Scaling';
import Clip from '@components/Clip';
import CanvasAnimation from '@components/CanvasAnimation';
import Clock from '@components/Clock';
import DigitClock from './Clock/Clock';
import Progress from '@components/Progress';
import Star from '@components/Star';
import SaveStores from '@components/SaveStore';
import CreateBackgroundCanvas from '@components/createBackgroundCanvas';
import Moon from '@components/Moon';
import ZhiMaScore from '@components/zhimaScore';
import ProgressTrain from './Clock/progress-train';
import AsyncAwait from './Clock/AsyncAwait';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/canvasApi" component={CanvasApi}></Route>
          <Route path="/qiqiaoban" component={Qiqiaoban}></Route>
          <Route path="/arc" component={DrawArc}></Route>
          <Route path="/saveStore1" component={SaveStore}></Route>
          <Route path="/translating" component={Translating}></Route>
          <Route path="/sacling" component={Sacling}></Route>
          <Route path="/clip" component={Clip}></Route>
          <Route path="/canvasAnimation" component={CanvasAnimation}></Route>
          <Route path="/clock" component={Clock}></Route>
          <Route path="/digitClock" component={DigitClock}></Route>
          <Route path="/progress" component={Progress}></Route>
          <Route path="/star" component={Star}></Route>
          <Route path="/saveStore2" component={SaveStores}></Route>
          <Route path="/createBackgroundCanvas" component={CreateBackgroundCanvas}></Route>
          <Route path="/moon" component={Moon}></Route>
          <Route path="/zhiMaScore" component={ZhiMaScore}></Route>
          <Route path="/progressTrain" component={ProgressTrain}></Route>
          <Route path="/asyncawait" component={AsyncAwait}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
