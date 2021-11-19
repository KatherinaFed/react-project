import reportWebVitals from './reportWebVitals';

import { rerender } from './render'
import state from './redux/state';
import { functions } from './redux/state'

rerender(state, functions);

reportWebVitals();
