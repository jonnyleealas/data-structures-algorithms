# Linked Lists
- There is a thing/Node
    - The node will have a value and a pointer to next
        - Value -> number or string
        - Next Pointer -> points to the next node or to null
- We assign property according to the  properties in our constructor. 
    - If our constructor has a head, we can assign a head because it is in the constructor
    - When we use a node we can also assign the properties in its constructor.

# Push
- Push usually adds to the end of a data structure. 
    - To add to the end in a Linked List all we have to do is assign the tail's pointer to our newNode and the assign the tail to be our newNode.
        - We do this so we don't accidentelty lose our previous tail in memory when we add our newNode to the end of the list.
        - We first have to take our current tail's next pointer and assign it to something, then take our new something and assign that as our new tail.