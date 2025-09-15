class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
a = Node(1)
b = Node(2)
c = Node(3)
d = Node(4)
e = Node(5)

a.next =b 
b.next = c
c.next = d
d.next = e
e.next = None



def print_linked_list(head):
    current = head
    while current:
        print(current.data, end=" -> ")
        current = current.next
    print("None")
print_linked_list(a)