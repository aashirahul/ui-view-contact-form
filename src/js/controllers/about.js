function AboutController($http,$state,$stateParams){
let vm = this;
vm.form= {};
 function getdata(){
	   		$http({
	   			method: 'GET',
				 url: 'https://class-server.herokuapp.com/collections/arielmessages/'+$stateParams._id
				}).then(function (response){
					vm.form = response.data;
					console.log(vm.form);	
				})
	   	}
	   	getdata();

vm.back = function(){
	$state.go('root.home');
}


}
AboutController.$inject = ['$http', '$state','$stateParams']
export { AboutController };
