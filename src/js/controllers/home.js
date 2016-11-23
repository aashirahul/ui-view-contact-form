function HomeController($http){
	let vm = this;
	 vm.forms = {};
	 function getdata(){
	   		$http({
	   			method: 'GET',
				 url: 'https://class-server.herokuapp.com/collections/arielcontacts'
				}).then(function (response){
					vm.forms = response.data;
					console.log(vm.forms);	
				})
	   	}
	   	getdata();
}


HomeController.$inject = ['$http']
export { HomeController };