Object.defineProperty(exports,"__esModule",{value:true});function isFunction(obj){
return!!(obj&&obj.constructor&&obj.call&&obj.apply);
}

function createActionHandler(ignore){

return function handleAction(reducer){var actions=arguments.length>1&&arguments[1]!==undefined?arguments[1]:[];
var predicate=isFunction(actions)?
actions:
function(action){return actions.indexOf(action.type)>=0;};

var initialState=reducer(undefined,{});

return function(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:initialState;var action=arguments[1];
if(predicate(action)){
return ignore?state:reducer(state,action);
}

return ignore?reducer(state,action):state;
};
};
}

var ignoreActions=exports.ignoreActions=createActionHandler(true);
var filterActions=exports.filterActions=createActionHandler(false);exports.default=

ignoreActions;