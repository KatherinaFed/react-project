import reportWebVitals from './reportWebVitals';

import { rerender } from './render'
import state from './redux/state';
import { addPost } from './redux/state'

rerender(state, addPost);

reportWebVitals();
