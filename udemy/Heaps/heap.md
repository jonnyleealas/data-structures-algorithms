# Binary Heaps
- Another category of tree, but different rules
- Min and max heaps
- Not ordered other than parent being larger or child being larger. 
- Used in priority queue --> importance level --> graph traversal


# Max Binary Heaps
- Parent nodes are always larger than child nodes.
- Children are smaller than parents.
- Parents have at most two nodes.
- Every left and right is filled before we move out.
- Highest at the top lowest at the bottom.

## Using an array to store L and R 
Finding the parents children 
- For any index of an array n
    - The left child is stored at 2n + 1 --> or the (currentIndex * 2) + 1
    - The right child is stored at 2n + 1 --> or the (currentIndex * 2) + 2
    - If we are on index 6 --> (6 * 2) + 1 means that its left child is at index 13
    - If we are on index 6 --> (6 * 2) + 2 means that its right index is at index 14

    ## Finding the childs parent
    - (n - 1) / 2 --> will give us the index location of its parent. (floored)

# Min Binary Heaps
- Parent nodes are smaller than child nodes.
- Children are larger than parents.
- Lowest at the top highest at the bottom.

# Notes 
- We always need something to hold our data like an array or a list
