var sample={};
(function(window,$,_){
	var initsuccess=false;
	 sample={
		templatebind:function(){
			var targetelem=$('#printtext');
			var childelem=_.template($('#underscore-container').html().trim());
			var output=childelem({
				"items":sampleobj
			})
			targetelem.append(output);
		},
		init:function(){
			if(typeof $ != "function" || typeof _ != "function" || initsuccess) return;
			this.templatebind();
			initsuccess=true;
		}		
	}
	sample.init();
}(this,jQuery || $,_));

$(document).ready(function(){
	sample.init();
})