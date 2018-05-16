import Route from '@ember/routing/route';

export default Route.extend({

	model(){

	},

  	actions:{
	
		clickMeToPage1:function(){
			location.replace("page1")
		},

		clickMeToPage2:function(){
			location.replace("page2")
		},

		clickMeToPage3:function(){
			location.replace("page3")
		}
	
	}
});
