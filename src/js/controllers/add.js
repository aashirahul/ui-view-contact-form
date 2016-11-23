
function AddController($http,$state){
	 let vm = this;
	 vm.form = {};

	vm.submitForm = function(){
		$http.post('https://class-server.herokuapp.com/collections/arielmessages',vm.form).then(function(response){
			vm.form={}
			$state.go('root.home');

	   		})
	   	}
}

AddController.$inject = ['$http', '$state']
export { AddController };
