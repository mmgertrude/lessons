//we have access to a view object because we loaded the library via
//the CDN link we have in the head. we can create a vue app using 
//the method createApp() of the view object

//constant app to hold the view object
//const app = Vue.createApp()
//the constant app now has a method called mount.
//mount tells the app where in the DOM to mount this application
//app.mount("#app") //will mount it to the element with the id app
//the vue app now controlls anything inside the element selected

/*
const app = Vue.createApp({
    //setup any data or functions to react to events
    //we could also define a template:
        //template: "<h2> I am the template </h2>"
    //the above template can better be put in the index page itself
    //we can create a data function inside this component to help define variables 
    //the data function creates an object and should be returned
})
app.mount("#app")
*/

const app = Vue.createApp({
    data(){
        return{ 
            //demo stuff for showing properties
            showBooks: true,
            title: "Book title 1",
            author: "auther for Book title 1",
            age: 45,
            
            //demo stuff for handleMouseMove
            x: 0,
            y:0,

             //demo staff for showing properties in an array
             showChildren: true,
             //an array of names
             children: [
                 {firstName:"Namusana", lastName:"Christine", age: 20, img:"assets/kate.png", current_school: "St. Mary´s Kitende, Entebbe", current_course:"sciences", isGraduate:false},
                 {firstName:"Nakiwala", lastName:"Catherine", age: 23, img:"assets/kate.png", current_school: "Makerere University", current_course:"Bachelors of Radiography",isGraduate:false},
                 {firstName:"Nalutaaya", lastName:"Windia", age: 18, img:"assets/kate.png", current_school: "St. Mary´s Kitende, Entebbe", current_course:"scioences",isGraduate:false},
                 {firstName:"Demo", lastName:"Demo", age: 24, img:"assets/kate.png", current_school: "St. Mary´s Kitende, Entebbe", current_course:"scioences",isGraduate:true},

             ],
             mother:"Maama Kate",

             //demo: attribute binding
             url: "http://www.thenetninja.co.uk",
            
        }
    },
    methods:{
        toggleShowChildren(){
            this.showChildren = !this.showChildren},
        toggleGrad(child){
            child.isGraduate = !child.isGraduate},

        toggleShowBooks(){
            this.showBooks = !this.showBooks},

        handleEvent(e){
            console.log(e, e.type)},
        handleMouseMove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        }
    },
    //computed property depends on other data
    computed: {
        //function to return filtered graduates
        filteredGrads(){
            //will filter out values where isGraduate = true
            return this.children.filter((child)=> child.isGraduate)
        }
    
    }

})
app.mount("#app")