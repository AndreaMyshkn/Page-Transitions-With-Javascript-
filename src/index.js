// import highway from "@dogstudio/highway"

import Highway from '../node_modules/@dogstudio/highway/build/highway.js';

import Fade from './transition.js';


const H = new Highway.Core({
transitions:{
    default:Fade
}
});