## type:

This property returns the type of event (e.g., click, keydown, mouseover).
Example: event.type will return 'click' if a click event occurred.

## timestamp:

This property returns the time (in milliseconds) at which the event was created. It helps in tracking when an event occurred.
Example: event.timestamp could return 1626873245321.

## defaultPrevented:

A boolean property that indicates whether the event's default behavior has been prevented.
Example: event.defaultPrevented returns true if event.preventDefault() has been called to prevent the default action.

## target:

This property returns a reference to the element that triggered the event (the originating element).
Example: event.target could refer to a button if that button was clicked.

## toElement (Deprecated):

This property is used during a mouseover or mouseout event and refers to the element the pointer is moving to.
Example: event.toElement during a mouseout event tells which element the mouse is moving toward.

## srcElement (Deprecated):

Similar to target, it returns the element that initiated the event. It's the older version of target but still supported in some browsers.
Example: event.srcElement.

## currentTarget:

This returns the element that is currently handling the event. It can differ from target if event delegation is used.
Example: event.currentTarget could be the parent element if event delegation is used, even if a child element triggered the event.

## clientX & clientY:

These properties return the horizontal (clientX) and vertical (clientY) coordinates of the mouse pointer relative to the visible part of the web page (the viewport).
Example: event.clientX returns the X-coordinate, and event.clientY returns the Y-coordinate.

## screenX & screenY:

These properties return the horizontal (screenX) and vertical (screenY) coordinates of the mouse pointer relative to the user's screen.
Example: event.screenX gives the X-coordinate on the screen.

## altKey, ctrlKey, shiftKey:

These boolean properties indicate whether the Alt, Ctrl, or Shift key was pressed during the event.
Example: event.altKey will return true if the Alt key was pressed during a click or keyboard event.

## keyCode (Deprecated):

This property returns the numeric code of the key pressed. It's deprecated in favor of event.code or event.key.
Example: event.keyCode could return 13 for the Enter key.

These properties help track various aspects of user interactions with the page, such as mouse clicks, key presses, and the specific elements involved in those interactions