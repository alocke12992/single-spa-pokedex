import {registerApplication, start} from 'single-spa';

registerApplication('root', loadingFunction, activityFunction);

start();

function loadingFunction(){
  return import("./src/root.app.js")
}

function activityFunction(){
  return location.pathname === "" || location.pathname === "/"
}