({
	filterContactsData : function(component){
          // create a one-time use instance of the fetchContactList action
        // in the server-side controller
        var action = component.get('c.filteredContactList');
        
        var recordId=component.get('v.recordId');
        
        //set data to be passed to the server-side controller
        action.setParams({'accountId':recordId , 'key' : component.get('v.searchKey') });
        
        // Create a callback that is executed after 
        // the server-side action returns
        action.setCallback(this, function (response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                
                component.set('v.mydata', response.getReturnValue());
                console.log(component.get('v.mydata'));
            } else if (state === "ERROR") {
                var errors = response.getError();
                console.error(errors);
            }
        });
        
         // A client-side action could cause multiple events, 
        // which could trigger other events and 
        // other server-side action calls.
        // $A.enqueueAction adds the server-side action to the queue.
        $A.enqueueAction(action);
    }
})