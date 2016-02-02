Rownd.templates = {
	404: {"v":3,"t":["Sorry this page was not found."]},
	footer: {"v":3,"t":[{"t":7,"e":"footer","a":{"class":"info"},"f":[{"t":7,"e":"p","f":["Double-click to edit a todo"]}," ",{"t":7,"e":"p","f":["Template by ",{"t":7,"e":"a","a":{"href":"http://sindresorhus.com"},"f":["Sindre Sorhus"]}]}," ",{"t":7,"e":"p","f":["Created by ",{"t":7,"e":"a","a":{"href":"https://twitter.com/silverlight513"},"f":["Jack Rimell"]}]}," ",{"t":7,"e":"p","f":["Part of ",{"t":7,"e":"a","a":{"href":"http://todomvc.com"},"f":["TodoMVC"]}]}]}]},
	index: {"v":3,"t":[{"t":7,"e":"section","a":{"class":"todoapp"},"f":[{"t":7,"e":"header","a":{"class":"header"},"f":[{"t":7,"e":"h1","f":["todos"]}," ",{"t":7,"e":"input","a":{"class":"new-todo","placeholder":"What needs to be done?","autofocus":0,"value":[{"t":2,"r":"newTodo"}]},"v":{"keyup":{"n":"createTodo","d":[{"t":2,"r":"newTodo"}]}}}]}," ",{"t":7,"e":"section","a":{"class":"main"},"f":[{"t":7,"e":"input","a":{"class":"toggle-all","type":"checkbox"}}," ",{"t":7,"e":"label","a":{"for":"toggle-all"},"f":["Mark all as complete"]}," ",{"t":7,"e":"ul","a":{"class":"todo-list"},"f":[{"t":4,"f":[{"t":4,"f":[{"t":7,"e":"li","a":{"class":[{"t":2,"x":{"r":["./completed"],"s":"_0?\"completed\":\"\""}}," ",{"t":2,"x":{"r":["./editing"],"s":"_0?\"editing\":\"\""}}," ",{"t":2,"x":{"r":["path","./completed"],"s":"_0===\"/active\"&&_1?\"hidden\":\"\""}}," ",{"t":2,"x":{"r":["path","./completed"],"s":"_0===\"/completed\"&&!_1?\"hidden\":\"\""}}]},"f":[{"t":7,"e":"div","a":{"class":"view"},"f":[{"t":7,"e":"input","a":{"class":"toggle","type":"checkbox","checked":[{"t":2,"r":"./completed"}]},"v":{"change":"updateCompletion"}}," ",{"t":7,"e":"label","v":{"dblclick":"editTodo"},"f":[{"t":2,"r":"./value"}]}," ",{"t":7,"e":"button","a":{"class":"destroy"},"v":{"click":{"n":"destroyTodo","d":[{"t":2,"r":"index"}]}}}]}," ",{"t":7,"e":"input","a":{"class":"edit","value":[{"t":2,"r":"./value"}]},"v":{"keyup":"editingValue"}}]}],"n":52,"i":"index","r":"todos"}],"n":50,"r":"todos"}," ",{"t":7,"e":"li","f":[]}]}]}," ",{"t":4,"f":[{"t":7,"e":"footer","a":{"class":"footer"},"f":[" ",{"t":7,"e":"span","a":{"class":"todo-count"},"f":[{"t":7,"e":"strong","f":[{"t":2,"r":"notCompletedCount"}]}," item",{"t":4,"f":["s"],"n":50,"x":{"r":["todos.length"],"s":"_0!==1"}}," left"]}," ",{"t":7,"e":"ul","a":{"class":"filters"},"f":[{"t":7,"e":"li","f":[{"t":7,"e":"a","m":[{"t":4,"f":["class=\"selected\""],"n":50,"x":{"r":["path"],"s":"_0===\"/\""}}],"a":{"href":"#/"},"f":["All"]}]}," ",{"t":7,"e":"li","f":[{"t":7,"e":"a","m":[{"t":4,"f":["class=\"selected\""],"n":50,"x":{"r":["path"],"s":"_0===\"/active\""}}],"a":{"href":"#/active"},"f":["Active"]}]}," ",{"t":7,"e":"li","f":[{"t":7,"e":"a","m":[{"t":4,"f":["class=\"selected\""],"n":50,"x":{"r":["path"],"s":"_0===\"/completed\""}}],"a":{"href":"#/completed"},"f":["Completed"]}]}]}," ",{"t":7,"e":"button","a":{"class":"clear-completed"},"v":{"click":"clearCompleted"},"f":["Clear completed"]}]}],"n":50,"r":"todos"}]}," ",{"t":8,"r":"footer"}]}
}