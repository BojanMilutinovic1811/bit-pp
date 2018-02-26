function WebApp(name, url, licence, stars) {
    this.name = name;
    this.url = url;
    this.technologies = [];
    this.licence = licence;
    this.stars = stars;
}

function MobileApp(name, licence, stars) {
    this.name = name;
    this.platforms = [];
    this.licence = licence;
    this.stars = stars;
}
WebApp.prototype.addTEchnologies = function(technology) {
    this.technologies.push(technology);
}
WebApp.prototype.getData = function() {
    return this.name + " " + this.url + " " + this.stars + " " + this.licence;
}
WebApp.prototype.reactBased = function() {

    // if(this.technologies.indexOf('React') == -1){
    //     return false;
    // }

    // return true;


    for (var i in this.technologies) {
        if (this.technologies[i] == "React") {
            return true;
        } else { return false; }
    }
}
MobileApp.prototype.addPlatforms = function(platform) {
    this.platforms.push(platform);
}

MobileApp.prototype.getData = function() {
    return this.name + " " + this.licence + " " + this.stars;
}

MobileApp.prototype.forAndroid = function() {
    for (var i in this.platforms) {
        if (this.platforms[i] == "Android") {
            return true;
        } else {
            return false;
        }
    }
}

var sharedMethods = {
    isCCLicence: function() {
        if (this.licence == "CC") {
            return true;
        } else {
            return false;
        }
    },
    like: function() {
        this.stars++;
    },
    showStars: function() {
        console.log(this.stars);
    }
}

WebApp.prototype.__proto__ = sharedMethods;
MobileApp.prototype.__proto__ = sharedMethods;

// WebApp(name, url, licence, stars)
// MobileApp(name, licence, stars)

var newApp = new WebApp("Moj Auto", "someurl.com", "CC", 3);
// console.log(newApp);
var newMobile = new MobileApp("Moj Mobilni", "s", 2);
// console.log(newMobile);
newApp.addTEchnologies("React");

newMobile.addPlatforms("IOS");
newMobile.addPlatforms("Windows");


console.log(newApp.isCCLicence(), newMobile.isCCLicence(), newMobile.forAndroid());