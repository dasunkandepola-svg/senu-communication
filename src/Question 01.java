public class Student {
    String name;
    double marks;

    public Student(String name, double marks) {
        this.name = name;
        this.marks = marks;
    }

    public void displayDetails() {
        System.out.println("Name: " + name + ", Marks: " + marks);
        if (marks >= 50) {
            System.out.println("Status: Passed");
        } else {
            System.out.println("Status: Failed");
        }
    }

    public static void main(String[] args) {
        Student s1 = new Student("Alice", 75.5);
        s1.displayDetails();
    }
}