import firebase from 'firebase';
import MobxFirebaseStore from 'mobx-firebase-store';
const config = {
    apiKey: "AIzaSyBa9CydUPbETIRX76yzZF_8uak9s17RXk8",
    authDomain: "mealnder.firebaseapp.com",
    databaseURL: "https://mealnder.firebaseio.com",
    storageBucket: "mealnder.appspot.com",
    messagingSenderId: "625777706619"
  }
export default class SettingsStore extends MobxFirebaseStore {
	constructor() {
		firebase.initializeApp(config)
	  	super(firebase.database().ref());
	
	  	this.splashTime = 1000;
	  	this.splashImg = require('../../images/splash.jpg');
	  	this.loginBg = require('../../images/login.jpg');
	}
	get LoginBG(){
		return this.loginBg;
	}
	get SplashTime(){
		return this.splashTime;
	}
	get SplashImg(){
		return this.splashImg;
	}

}