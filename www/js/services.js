angular.module('myNews.services',[])
.service('service1', function($http){
	var url;

//var reminder = {title: "", description: ""};
this.getBlob=function(callbackOK, callbackNOK, storage){
	$http.get(storage).then(funOK, funNOK);
	function funOK(response){
		url=storage;
	//blobID=storage;
	//console.log(response);
	callbackOK(response.data);

}
function funNOK(response){
	
	callbackNOK(response.statusText);

}
};


this.postBlob =function(reminder, callbackOK, callbackNOK){
	//console.log(reminder.title);
	
	$http.post("https://api.myjson.com/bins", reminder).then(funOK, funNOK);
//console.log(reminder);
function funOK(response){
	url = response.data.uri;
	console.log(url);
	localStorage.setItem('url', url);
	callbackOK(response);
	//console.log(response);
}
function funNOK(response){
	callbackNOK(response.statusText);
}
};
this.putBlob=function(callbackOK, callbackNOK, reminder){
	//console.log(reminder.title);
	
	$http.put(url, reminder).then(funOK, funNOK);
	function funOK(response){
		callbackOK(response);
		localStorage.setItem("url", url);
	}
	function funNOK(response){
		callbackNOK(response.statusText);
		//console.log(response.status);
}
};

// // this.deleteBlob =function(callbackOK, callbackNOK){
// // 	//console.log(reminder.title);

// // $http.delete("https://api.myjson.com/bins" + blobID).then(funOK, funNOK);
// // function funOK(response) {
// // 	callbackOK(response);
// // 	//var blobID = response.headers("x-jsonblob");
// // 	console.log(blobID);
// // 	//console.log(response);
// // }
// // function funNOK(response){
// // 	callbackNOK(response.status, response.statusText);
// // 	console.log(response.status);
// // }



// };

});