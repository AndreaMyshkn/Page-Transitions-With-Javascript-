import Highway from "../node_modules/@dogstudio/highway";

import Fade from './transition.js';


const H = new Highway.Core({
transitions:{
    default:Fade
}
});