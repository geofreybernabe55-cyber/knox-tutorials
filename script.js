/* ==========================================================================
   KNOX — Tutorial Data & Interactive Controller
   ========================================================================== */

const TUTORIAL_DATA = {
  html: {
    id: 'html',
    name: 'HTML',
    badge: 'HTML5',
    tagline: 'Standard Markup Language for Web Pages',
    description:
      'Learn how to structure web pages using semantic elements, headings, links, images, lists, tables, and interactive forms.',
    color: '#ea580c',
    colorSoft: 'rgba(234, 88, 12, 0.1)',
    categories: [
      {
        id: 'html-structure',
        title: 'Document Structure',
        filename: 'index.html',
        description:
          'Every HTML document starts with a standard boilerplate structure that tells the browser how to interpret the page.',
        keyPoints: [
          '<code>&lt;!DOCTYPE html&gt;</code> declares the document as HTML5.',
          '<code>&lt;html&gt;</code> is the root element of an HTML page.',
          '<code>&lt;head&gt;</code> contains metadata and the page title.',
          '<code>&lt;body&gt;</code> holds all visible page content.'
        ],
        code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My First Webpage</title>
</head>
<body>
  <h1>Hello, World!</h1>
  <p>Welcome to my first HTML document.</p>
</body>
</html>`,
        outputType: 'Browser Preview',
        isHtmlPreview: true,
        output: `<h2 style="margin:0 0 6px 0;">Hello, World!</h2><p style="margin:0;">Welcome to my first HTML document.</p>`
      },
      {
        id: 'html-headings-text',
        title: 'Headings & Paragraphs',
        filename: 'text.html',
        description:
          'HTML provides six levels of headings (h1 to h6) and paragraph tags to organize and format text content.',
        keyPoints: [
          '<code>&lt;h1&gt;</code> is the main heading; <code>&lt;h6&gt;</code> is the smallest subheading.',
          '<code>&lt;p&gt;</code> defines a paragraph of text.',
          '<code>&lt;strong&gt;</code> makes text bold with strong importance, while <code>&lt;em&gt;</code> emphasizes text in italics.'
        ],
        code: `<h1>Main Article Title (H1)</h1>
<h2>Section Subheading (H2)</h2>
<p>
  HTML makes it easy to format text using <strong>bold importance</strong>
  and <em>italic emphasis</em> inside paragraphs.
</p>`,
        outputType: 'Browser Preview',
        isHtmlPreview: true,
        output: `<h2 style="margin:0 0 4px 0;">Main Article Title (H1)</h2><h3 style="margin:0 0 8px 0;color:#475569;">Section Subheading (H2)</h3><p style="margin:0;">HTML makes it easy to format text using <strong>bold importance</strong> and <em>italic emphasis</em> inside paragraphs.</p>`
      },
      {
        id: 'html-links-images',
        title: 'Links & Images',
        filename: 'media.html',
        description:
          'Hyperlinks connect web pages together using the anchor tag, while images embed visual media into your document.',
        keyPoints: [
          '<code>&lt;a href="..."&gt;</code> creates a clickable hyperlink.',
          'Use <code>target="_blank"</code> to open links in a new browser tab.',
          '<code>&lt;img src="..." alt="..."&gt;</code> embeds an image and provides alternative text for accessibility.'
        ],
        code: `<!-- Hyperlink -->
<p>
  Visit <a href="https://www.w3schools.com" target="_blank">w3schools.com</a>
  to explore more web tutorials.
</p>

<!-- Image with alt text -->
<img src="knox-logo.svg" alt="KNOX HTML5 Logo" width="160" height="52">`,
        outputType: 'Browser Result',
        isHtmlPreview: true,
        previewMarkup: `<p>Visit <a href="https://www.w3schools.com" target="_blank" rel="noopener noreferrer">w3schools.com</a> to explore more web tutorials.</p><img src="data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='52'%3E%3Crect width='160' height='52' rx='8' fill='%23ea580c'/%3E%3Ctext x='80' y='32' font-family='Segoe UI, sans-serif' font-size='16' font-weight='bold' fill='white' text-anchor='middle'%3EKNOX HTML5%3C/text%3E%3C/svg%3E" alt="KNOX HTML5 Logo" width="160" height="52">`
      },
      {
        id: 'html-lists',
        title: 'Ordered & Unordered Lists',
        filename: 'lists.html',
        description:
          'Lists help group related items into bulleted (unordered) or numbered (ordered) sequences.',
        keyPoints: [
          '<code>&lt;ul&gt;</code> creates an unordered (bulleted) list.',
          '<code>&lt;ol&gt;</code> creates an ordered (numbered) list.',
          '<code>&lt;li&gt;</code> defines each individual list item.'
        ],
        code: `<h3>Frontend Technologies (Unordered)</h3>
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>

<h3>Learning Steps (Ordered)</h3>
<ol>
  <li>Read the concept</li>
  <li>Study the sample code</li>
  <li>Practice building</li>
</ol>`,
        outputType: 'Browser Preview',
        isHtmlPreview: true,
        output: `<div style="display:flex;gap:2rem;flex-wrap:wrap;"><div><strong>Frontend Technologies</strong><ul style="margin:6px 0 0 18px;"><li>HTML</li><li>CSS</li><li>JavaScript</li></ul></div><div><strong>Learning Steps</strong><ol style="margin:6px 0 0 18px;"><li>Read the concept</li><li>Study the sample code</li><li>Practice building</li></ol></div></div>`
      },
      {
        id: 'html-tables',
        title: 'Tables & Data Rows',
        filename: 'tables.html',
        description:
          'HTML tables arrange structured data into rows and columns with headers and data cells.',
        keyPoints: [
          '<code>&lt;table&gt;</code> wraps the entire table structure.',
          '<code>&lt;tr&gt;</code> defines a table row.',
          '<code>&lt;th&gt;</code> defines a header cell and <code>&lt;td&gt;</code> defines a standard data cell.'
        ],
        code: `<table border="1" cellpadding="8">
  <thead>
    <tr>
      <th>Student</th>
      <th>Course</th>
      <th>Grade</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Geofrey M. Bernabe</td>
      <td>HTML Basics</td>
      <td>98%</td>
    </tr>
    <tr>
      <td>Irish Kate T. Mercado</td>
      <td>Web Design</td>
      <td>96%</td>
    </tr>
    <tr>
      <td>Princess Roxanne M. Quitola</td>
      <td>Frontend Lab</td>
      <td>97%</td>
    </tr>
  </tbody>
</table>`,
        outputType: 'Browser Result',
        isHtmlPreview: true,
        output: ``
      },
      {
        id: 'html-forms',
        title: 'Forms & User Input',
        filename: 'form.html',
        description:
          'Forms collect user input using text fields, checkboxes, dropdowns, and submit buttons.',
        keyPoints: [
          '<code>&lt;form&gt;</code> wraps interactive input controls.',
          '<code>&lt;label&gt;</code> binds a descriptive label to an input field.',
          '<code>&lt;input type="..."&gt;</code> supports text, email, password, checkbox, and more.',
          '<code>&lt;button type="submit"&gt;</code> submits the form data.'
        ],
        code: `<form action="/submit" method="POST">
  <label for="username">Username:</label><br>
  <input type="text" id="username" name="username" placeholder="Enter username" required><br><br>

  <label for="email">Email Address:</label><br>
  <input type="email" id="email" name="email" placeholder="you@example.com"><br><br>

  <button type="submit">Register Account</button>
</form>`,
        outputType: 'Browser Preview',
        isHtmlPreview: true,
        output: `<div style="display:flex;flex-direction:column;gap:8px;max-width:260px;"><label style="font-weight:600;font-size:0.85rem;">Username: <input type="text" placeholder="Enter username" style="width:100%;padding:5px 8px;margin-top:3px;border:1px solid #94a3b8;border-radius:4px;"></label><label style="font-weight:600;font-size:0.85rem;">Email Address: <input type="email" placeholder="you@example.com" style="width:100%;padding:5px 8px;margin-top:3px;border:1px solid #94a3b8;border-radius:4px;"></label><button type="button" style="background:#f97316;color:#fff;border:none;padding:7px 12px;border-radius:4px;font-weight:600;cursor:pointer;">Register Account</button></div>`
      }
    ]
  },

  css: {
    id: 'css',
    name: 'CSS',
    badge: 'CSS3',
    tagline: 'Styling, Layouts & Responsive Design',
    description:
      'Master Cascading Style Sheets to control colors, typography, the box model, Flexbox, Grid, and smooth animations.',
    color: '#2563eb',
    colorSoft: 'rgba(37, 99, 235, 0.1)',
    categories: [
      {
        id: 'css-selectors',
        title: 'Selectors & Colors',
        filename: 'selectors.css',
        description:
          'CSS selectors target HTML elements by tag name, class (.class), or ID (#id) to apply visual rules.',
        keyPoints: [
          'Element selectors target tags directly (e.g., <code>p</code>, <code>h1</code>).',
          'Class selectors start with a dot (e.g., <code>.card</code>) and can be reused.',
          'ID selectors start with a hash (e.g., <code>#main-header</code>) for a unique element.'
        ],
        code: `/* Element Selector */
h1 {
  color: #2563eb;
  font-family: sans-serif;
}

/* Class Selector */
.highlight-badge {
  background-color: #dbeafe;
  color: #1e40af;
  padding: 6px 12px;
  border-radius: 6px;
}`,
        outputType: 'Styled Result',
        isHtmlPreview: true,
        demoHtml: `<h1>Styled Heading Element</h1><span class="highlight-badge">.highlight-badge class</span>`
      },
      {
        id: 'css-box-model',
        title: 'The Box Model',
        filename: 'box-model.css',
        description:
          'Every element in CSS is a rectangular box made up of content, padding, border, and outer margin.',
        keyPoints: [
          '<code>padding</code> adds space inside the border around the content.',
          '<code>border</code> wraps around the padding and content.',
          '<code>margin</code> creates space outside the border between elements.',
          '<code>box-sizing: border-box</code> includes padding and border in the element width.'
        ],
        code: `.profile-card {
  box-sizing: border-box;
  width: 260px;
  padding: 16px;
  border: 2px solid #3b82f6;
  border-radius: 10px;
  margin: 8px;
  background-color: #eff6ff;
}`,
        outputType: 'Styled Result',
        isHtmlPreview: true,
        demoHtml: `<div class="profile-card"><strong>Profile Card Box</strong><p style="margin:4px 0 0;font-size:0.88rem;">16px Padding + 2px Solid Border</p></div>`
      },
      {
        id: 'css-flexbox',
        title: 'Flexbox Layout',
        filename: 'flexbox.css',
        description:
          'Flexbox makes it simple to align and distribute space among items in a row or column.',
        keyPoints: [
          '<code>display: flex</code> turns a container into a flex context.',
          '<code>justify-content</code> aligns items along the main axis (e.g., <code>space-between</code>, <code>center</code>).',
          '<code>align-items</code> aligns items vertically along the cross axis.',
          '<code>gap</code> sets consistent spacing between flex children.'
        ],
        code: `.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: #e2e8f0;
  border-radius: 8px;
}

.flex-item {
  background: #3b82f6;
  color: white;
  padding: 10px 16px;
  border-radius: 6px;
}`,
        outputType: 'Styled Result',
        isHtmlPreview: true,
        demoHtml: `<div class="flex-container"><div class="flex-item">Item 1</div><div class="flex-item">Item 2</div><div class="flex-item">Item 3</div></div>`
      },
      {
        id: 'css-grid',
        title: 'CSS Grid Layout',
        filename: 'grid.css',
        description:
          'CSS Grid is a two-dimensional layout system ideal for building responsive multi-column galleries and dashboards.',
        keyPoints: [
          '<code>display: grid</code> enables CSS Grid on a container.',
          '<code>grid-template-columns</code> defines column tracks (e.g., <code>repeat(3, 1fr)</code>).',
          '<code>gap</code> controls row and column gutters.'
        ],
        code: `.grid-gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.grid-card {
  background-color: #1d4ed8;
  color: #ffffff;
  padding: 14px;
  text-align: center;
  border-radius: 6px;
}`,
        outputType: 'Styled Result',
        isHtmlPreview: true,
        demoHtml: `<div class="grid-gallery"><div class="grid-card">Col 1</div><div class="grid-card">Col 2</div><div class="grid-card">Col 3</div></div>`
      },
      {
        id: 'css-transitions',
        title: 'Hover & Transitions',
        filename: 'transitions.css',
        description:
          'Smoothly animate property changes when a user hovers or interacts with an element.',
        keyPoints: [
          '<code>:hover</code> pseudo-class triggers styles when the cursor is over an element.',
          '<code>transition</code> defines which property to animate and the duration (e.g., <code>0.3s ease</code>).',
          '<code>transform: scale()</code> or <code>translateY()</code> creates responsive motion.'
        ],
        code: `.btn-interactive {
  background-color: #2563eb;
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s ease, background-color 0.2s ease;
}

.btn-interactive:hover {
  background-color: #1e40af;
  transform: translateY(-3px);
}`,
        outputType: 'Styled Result',
        isHtmlPreview: true,
        demoHtml: `<button type="button" class="btn-interactive">Hover Over Button (Interactive)</button>`
      }
    ]
  },

  java: {
    id: 'java',
    name: 'Java',
    badge: 'Java SE',
    tagline: 'Object-Oriented Programming & Enterprise Applications',
    description:
      'Explore Java syntax, variables, control flow, loops, methods, and Object-Oriented Programming (classes and objects).',
    color: '#dc2626',
    colorSoft: 'rgba(220, 38, 38, 0.1)',
    categories: [
      {
        id: 'java-hello-world',
        title: 'Basic Syntax & Hello World',
        filename: 'Main.java',
        description:
          'Every Java application begins execution inside a class and the public static void main(String[] args) method.',
        keyPoints: [
          'Java code must reside inside a <code>class</code> whose name matches the filename.',
          '<code>public static void main(String[] args)</code> is the entry point of the program.',
          '<code>System.out.println()</code> prints a line of text to the console.'
        ],
        code: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, Java World!");
        System.out.println("Welcome to Object-Oriented Programming.");
    }
}`,
        outputType: 'Console Output',
        isHtmlPreview: false,
        output: `Hello, Java World!
Welcome to Object-Oriented Programming.`
      },
      {
        id: 'java-variables',
        title: 'Variables & Data Types',
        filename: 'VariablesDemo.java',
        description:
          'Java is a strongly-typed language where every variable must be declared with its specific data type.',
        keyPoints: [
          '<code>int</code> stores whole integers (e.g., <code>25</code>).',
          '<code>double</code> stores floating-point decimals (e.g., <code>99.5</code>).',
          '<code>boolean</code> stores <code>true</code> or <code>false</code>.',
          '<code>String</code> stores sequences of text inside double quotes.'
        ],
        code: `public class VariablesDemo {
    public static void main(String[] args) {
        String studentName = "Geofrey M. Bernabe";
        int age = 20;
        double gpa = 3.95;
        boolean isEnrolled = true;

        System.out.println("Student: " + studentName);
        System.out.println("Age: " + age + " | GPA: " + gpa);
        System.out.println("Enrolled: " + isEnrolled);
    }
}`,
        outputType: 'Console Output',
        isHtmlPreview: false,
        output: `Student: Geofrey M. Bernabe
Age: 20 | GPA: 3.95
Enrolled: true`
      },
      {
        id: 'java-conditionals',
        title: 'Conditionals (If / Else)',
        filename: 'GradeChecker.java',
        description:
          'Use if, else if, and else statements to execute different blocks of code based on boolean conditions.',
        keyPoints: [
          'Conditions inside <code>if (...)</code> must evaluate to a <code>boolean</code>.',
          '<code>else if</code> tests additional conditions when the previous check is false.',
          'Comparison operators include <code>&gt;=</code>, <code>&lt;=</code>, <code>==</code>, and <code>!=</code>.'
        ],
        code: `public class GradeChecker {
    public static void main(String[] args) {
        int score = 92;

        if (score >= 90) {
            System.out.println("Grade: A (Excellent!)");
        } else if (score >= 80) {
            System.out.println("Grade: B (Good Job!)");
        } else {
            System.out.println("Grade: C (Keep Practicing!)");
        }
    }
}`,
        outputType: 'Console Output',
        isHtmlPreview: false,
        output: `Grade: A (Excellent!)`
      },
      {
        id: 'java-loops',
        title: 'For & While Loops',
        filename: 'LoopsDemo.java',
        description:
          'Loops allow you to repeat a block of statements multiple times or iterate over arrays.',
        keyPoints: [
          'A <code>for</code> loop combines initialization, condition, and increment in one header.',
          'An enhanced <code>for-each</code> loop (<code>for (Type item : array)</code>) cleanly iterates through arrays.'
        ],
        code: `public class LoopsDemo {
    public static void main(String[] args) {
        String[] languages = {"HTML", "CSS", "Java", "Python", "SQL"};

        System.out.println("Course Roadmap:");
        for (int i = 0; i < languages.length; i++) {
            System.out.println((i + 1) + ". " + languages[i]);
        }
    }
}`,
        outputType: 'Console Output',
        isHtmlPreview: false,
        output: `Course Roadmap:
1. HTML
2. CSS
3. Java
4. Python
5. SQL`
      },
      {
        id: 'java-oop',
        title: 'Classes & Objects (OOP)',
        filename: 'CarDemo.java',
        description:
          'Classes act as blueprints for creating objects that bundle attributes (fields) and behaviors (methods).',
        keyPoints: [
          'A constructor initializes a new object when <code>new ClassName()</code> is called.',
          'Instance variables hold state specific to each object.',
          'Methods define actions that the object can perform.'
        ],
        code: `class Course {
    String title;
    int lessons;

    // Constructor
    Course(String title, int lessons) {
        this.title = title;
        this.lessons = lessons;
    }

    void displayInfo() {
        System.out.println(title + " (" + lessons + " interactive lessons)");
    }
}

public class CarDemo {
    public static void main(String[] args) {
        Course javaCourse = new Course("Java Masterclass", 12);
        javaCourse.displayInfo();
    }
}`,
        outputType: 'Console Output',
        isHtmlPreview: false,
        output: `Java Masterclass (12 interactive lessons)`
      }
    ]
  },

  python: {
    id: 'python',
    name: 'Python',
    badge: 'Python 3',
    tagline: 'Readable, Versatile Scripting & Data Science',
    description:
      'Learn Python fundamentals with clean syntax: variables, lists, dictionaries, loops, functions, and list comprehensions.',
    color: '#ca8a04',
    colorSoft: 'rgba(202, 138, 4, 0.12)',
    categories: [
      {
        id: 'python-basics',
        title: 'Variables & Print Formatting',
        filename: 'basics.py',
        description:
          'Python uses dynamic typing and clean f-strings to format and display variables without boilerplate.',
        keyPoints: [
          'No type declarations or semicolons are required.',
          '<code>print()</code> outputs values to the terminal.',
          '<code>f"..."</code> (f-strings) let you embed expressions directly inside curly braces <code>{}</code>.'
        ],
        code: `# Python Variables & f-strings
name = "Irish Kate T. Mercado"
completed_modules = 4
score = 96.5

print(f"Learner: {name}")
print(f"Completed Modules: {completed_modules}")
print(f"Average Score: {score}%")`,
        outputType: 'Terminal Output',
        isHtmlPreview: false,
        output: `Learner: Irish Kate T. Mercado
Completed Modules: 4
Average Score: 96.5%`
      },
      {
        id: 'python-lists-dicts',
        title: 'Lists & Dictionaries',
        filename: 'collections.py',
        description:
          'Lists store ordered sequences of items, while dictionaries store key-value pairs for fast lookups.',
        keyPoints: [
          'Lists use square brackets <code>[...]</code> and support <code>.append()</code>.',
          'Dictionaries use curly braces <code>{"key": value}</code>.',
          'Access items by index <code>skills[0]</code> or by key <code>student["major"]</code>.'
        ],
        code: `# List of skills
skills = ["Python", "SQL", "HTML"]
skills.append("CSS")

# Dictionary of student info
student = {
    "name": "Princess Roxanne M. Quitola",
    "level": "Intermediate",
    "skills": skills
}

print("Student:", student["name"])
print("Skills List:", student["skills"])
print("Current Level:", student["level"])`,
        outputType: 'Terminal Output',
        isHtmlPreview: false,
        output: `Student: Princess Roxanne M. Quitola
Skills List: ['Python', 'SQL', 'HTML', 'CSS']
Current Level: Intermediate`
      },
      {
        id: 'python-loops',
        title: 'Conditionals & For Loops',
        filename: 'loops.py',
        description:
          'Python uses indentation (4 spaces) to define code blocks inside if statements and loops.',
        keyPoints: [
          'Indentation replaces curly braces <code>{}</code> in Python.',
          '<code>for item in sequence:</code> loops directly over elements.',
          '<code>range(1, 6)</code> generates numbers from 1 up to 5.'
        ],
        code: `scores = [78, 92, 85, 96]

for score in scores:
    if score >= 90:
        status = "Honors"
    else:
        status = "Passed"
    print(f"Score: {score} -> {status}")`,
        outputType: 'Terminal Output',
        isHtmlPreview: false,
        output: `Score: 78 -> Passed
Score: 92 -> Honors
Score: 85 -> Passed
Score: 96 -> Honors`
      },
      {
        id: 'python-functions',
        title: 'Functions & Return Values',
        filename: 'functions.py',
        description:
          'Functions organize reusable logic using the def keyword and can accept default parameters.',
        keyPoints: [
          'Define a function with <code>def function_name(params):</code>.',
          'Use <code>return</code> to send a result back to the caller.',
          'Default parameter values make arguments optional.'
        ],
        code: `def calculate_total(price, tax_rate=0.10):
    """Calculate total price including tax."""
    total = price + (price * tax_rate)
    return round(total, 2)

book_total = calculate_total(45.00)
course_total = calculate_total(100.00, tax_rate=0.05)

print(f"Book Total: \${book_total}")
print(f"Course Total: \${course_total}")`,
        outputType: 'Terminal Output',
        isHtmlPreview: false,
        output: `Book Total: $49.5
Course Total: $105.0`
      },
      {
        id: 'python-comprehensions',
        title: 'List Comprehensions',
        filename: 'comprehension.py',
        description:
          'List comprehensions provide a concise, Pythonic way to create and filter lists in a single line.',
        keyPoints: [
          'Syntax: <code>[expression for item in iterable if condition]</code>.',
          'More readable and faster than building a list with a manual loop.'
        ],
        code: `numbers = [1, 2, 3, 4, 5, 6]

# Square only the even numbers
even_squares = [n ** 2 for n in numbers if n % 2 == 0]

print("Original:", numbers)
print("Even Squares:", even_squares)`,
        outputType: 'Terminal Output',
        isHtmlPreview: false,
        output: `Original: [1, 2, 3, 4, 5, 6]
Even Squares: [4, 16, 36]`
      }
    ]
  },

  sql: {
    id: 'sql',
    name: 'SQL',
    badge: 'SQL Database',
    tagline: 'Relational Database Queries & Data Management',
    description:
      'Learn how to create tables, insert records, filter rows with WHERE, aggregate metrics, and join relational tables.',
    color: '#059669',
    colorSoft: 'rgba(5, 150, 105, 0.1)',
    categories: [
      {
        id: 'sql-select',
        title: 'SELECT & WHERE Filtering',
        filename: 'select_query.sql',
        description:
          'The SELECT statement retrieves columns from a database table, and WHERE filters rows that match a condition.',
        keyPoints: [
          '<code>SELECT col1, col2 FROM table_name</code> specifies which columns to fetch.',
          '<code>WHERE</code> filters rows before returning results.',
          '<code>ORDER BY ... DESC</code> sorts results in descending order.'
        ],
        code: `SELECT student_id, full_name, course, score
FROM students
WHERE score >= 90
ORDER BY score DESC;`,
        outputType: 'Query Result',
        isHtmlPreview: false,
        output: `student_id | full_name                   | course | score
-----------+-----------------------------+--------+------
101        | Geofrey M. Bernabe          | SQL    | 98
102        | Irish Kate T. Mercado       | Python | 95
103        | Princess Roxanne M. Quitola | HTML   | 93`
      },
      {
        id: 'sql-create-insert',
        title: 'CREATE TABLE & INSERT INTO',
        filename: 'schema.sql',
        description:
          'Define a new database table schema with CREATE TABLE and add new rows using INSERT INTO.',
        keyPoints: [
          '<code>PRIMARY KEY</code> uniquely identifies each record in a table.',
          '<code>VARCHAR(n)</code> stores variable-length text strings.',
          '<code>INSERT INTO table (cols) VALUES (...)</code> appends new records.'
        ],
        code: `CREATE TABLE courses (
    course_id INT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    language VARCHAR(30),
    lessons INT
);

INSERT INTO courses (course_id, title, language, lessons)
VALUES
    (1, 'Web Foundations', 'HTML', 8),
    (2, 'Database Mastery', 'SQL', 10);`,
        outputType: 'Query Result',
        isHtmlPreview: false,
        output: `Query OK, Table 'courses' created.
2 rows inserted successfully:
course_id | title            | language | lessons
----------+------------------+----------+--------
1         | Web Foundations  | HTML     | 8
2         | Database Mastery | SQL      | 10`
      },
      {
        id: 'sql-update-delete',
        title: 'UPDATE & DELETE Records',
        filename: 'modify_data.sql',
        description:
          'Modify existing rows with UPDATE or remove specific rows with DELETE using a safe WHERE clause.',
        keyPoints: [
          'Always include a <code>WHERE</code> clause in <code>UPDATE</code> and <code>DELETE</code> to avoid affecting every row in the table!',
          '<code>SET column = value</code> assigns the new value during an update.'
        ],
        code: `-- Update lesson count for course_id = 2
UPDATE courses
SET lessons = 12
WHERE course_id = 2;

-- Remove archived test course
DELETE FROM courses
WHERE course_id = 99;`,
        outputType: 'Query Result',
        isHtmlPreview: false,
        output: `UPDATE 1 — 1 row affected (course_id = 2 updated to 12 lessons).
DELETE 0 — 0 archived rows removed.`
      },
      {
        id: 'sql-aggregate',
        title: 'Aggregate Functions & GROUP BY',
        filename: 'aggregates.sql',
        description:
          'Summarize data across groups using COUNT(), AVG(), SUM(), MIN(), and MAX() with GROUP BY.',
        keyPoints: [
          '<code>COUNT(*)</code> counts the number of rows in each group.',
          '<code>AVG(column)</code> computes the average numeric value.',
          '<code>GROUP BY</code> groups rows that share the same column value.'
        ],
        code: `SELECT
    course,
    COUNT(*) AS total_students,
    ROUND(AVG(score), 1) AS average_score
FROM students
GROUP BY course
ORDER BY average_score DESC;`,
        outputType: 'Query Result',
        isHtmlPreview: false,
        output: `course | total_students | average_score
-------+----------------+--------------
SQL    | 24             | 93.4
Python | 31             | 91.2
Java   | 19             | 88.7`
      },
      {
        id: 'sql-joins',
        title: 'INNER JOIN Across Tables',
        filename: 'joins.sql',
        description:
          'Combine related rows from two or more tables based on a shared foreign key column.',
        keyPoints: [
          '<code>INNER JOIN</code> returns rows when there is a match in both tables.',
          '<code>ON tableA.id = tableB.id</code> specifies how the tables are linked.',
          'Table aliases (like <code>s</code> and <code>e</code>) make queries shorter and cleaner.'
        ],
        code: `SELECT
    s.full_name,
    c.title AS course_title,
    e.enrolled_date
FROM enrollments e
INNER JOIN students s ON e.student_id = s.student_id
INNER JOIN courses c ON e.course_id = c.course_id;`,
        outputType: 'Query Result',
        isHtmlPreview: false,
        output: `full_name                   | course_title     | enrolled_date
----------------------------+------------------+--------------
Geofrey M. Bernabe          | Database Mastery | 2026-10-15
Irish Kate T. Mercado       | Web Foundations  | 2026-10-18
Princess Roxanne M. Quitola | Database Mastery | 2026-10-20`
      }
    ]
  },

  cpp: {
    id: 'cpp',
    name: 'C++',
    badge: 'Modern C++',
    tagline: 'High-Performance Systems & Object-Oriented Programming',
    description:
      'Master C++ fundamentals including standard input/output streams, variables, control flow, STL vectors, references, and classes.',
    color: '#7c3aed',
    colorSoft: 'rgba(124, 58, 237, 0.1)',
    categories: [
      {
        id: 'cpp-hello-io',
        title: 'Basic Syntax & Standard I/O',
        filename: 'hello.cpp',
        description:
          'C++ programs start inside the main() function and use the <iostream> library to read and print data.',
        keyPoints: [
          '<code>#include &lt;iostream&gt;</code> imports standard input and output stream objects.',
          '<code>int main()</code> is the required starting point of every C++ program.',
          '<code>std::cout &lt;&lt;</code> sends text or values to the console output.',
          '<code>return 0;</code> signals that the program finished without errors.'
        ],
        code: `#include <iostream>

int main() {
    std::cout << "Hello, C++ World!" << std::endl;
    std::cout << "Fast, powerful, and compiled." << std::endl;
    return 0;
}`,
        outputType: 'Console Output',
        isHtmlPreview: false,
        output: `Hello, C++ World!
Fast, powerful, and compiled.`
      },
      {
        id: 'cpp-variables',
        title: 'Variables & Data Types',
        filename: 'variables.cpp',
        description:
          'C++ provides static typing for integers, floating-point numbers, characters, booleans, and std::string.',
        keyPoints: [
          '<code>int</code> stores whole numbers; <code>double</code> stores high-precision decimals.',
          '<code>char</code> holds a single character inside single quotes (e.g., <code>\'A\'</code>).',
          '<code>std::string</code> (from <code>&lt;string&gt;</code>) stores text sequences.',
          '<code>const</code> declares a constant value that cannot be modified.'
        ],
        code: `#include <iostream>
#include <string>

int main() {
    std::string language = "C++20";
    int releaseYear = 2020;
    double speedScore = 9.9;
    char tier = 'S';

    std::cout << "Language: " << language << " (" << releaseYear << ")\\n";
    std::cout << "Performance: " << speedScore << " | Tier: " << tier << "\\n";
    return 0;
}`,
        outputType: 'Console Output',
        isHtmlPreview: false,
        output: `Language: C++20 (2020)
Performance: 9.9 | Tier: S`
      },
      {
        id: 'cpp-conditionals',
        title: 'If / Else & Switch Statements',
        filename: 'conditions.cpp',
        description:
          'Control program decisions in C++ using if-else chains or switch-case blocks for discrete values.',
        keyPoints: [
          '<code>if</code>, <code>else if</code>, and <code>else</code> evaluate boolean expressions.',
          'Logical operators include <code>&amp;&amp;</code> (AND), <code>||</code> (OR), and <code>!</code> (NOT).',
          'Remember <code>break;</code> inside <code>switch</code> cases to prevent fall-through.'
        ],
        code: `#include <iostream>

int main() {
    int points = 88;

    if (points >= 90) {
        std::cout << "Rank: Grandmaster\\n";
    } else if (points >= 80) {
        std::cout << "Rank: Diamond\\n";
    } else {
        std::cout << "Rank: Gold\\n";
    }
    return 0;
}`,
        outputType: 'Console Output',
        isHtmlPreview: false,
        output: `Rank: Diamond`
      },
      {
        id: 'cpp-vectors-loops',
        title: 'Loops & std::vector',
        filename: 'vectors.cpp',
        description:
          'std::vector is a dynamic array from the C++ Standard Template Library (STL) that pairs cleanly with range-based for loops.',
        keyPoints: [
          'Include <code>&lt;vector&gt;</code> to create resizable arrays: <code>std::vector&lt;T&gt;</code>.',
          '<code>.push_back(val)</code> appends a new element to the end of the vector.',
          '<code>for (const auto&amp; item : list)</code> iterates safely without copying elements.'
        ],
        code: `#include <iostream>
#include <vector>
#include <string>

int main() {
    std::vector<std::string> topics = {"Pointers", "Vectors", "Classes"};
    topics.push_back("Templates");

    std::cout << "C++ Modules (" << topics.size() << " total):\\n";
    for (const auto& topic : topics) {
        std::cout << " - " << topic << "\\n";
    }
    return 0;
}`,
        outputType: 'Console Output',
        isHtmlPreview: false,
        output: `C++ Modules (4 total):
 - Pointers
 - Vectors
 - Classes
 - Templates`
      },
      {
        id: 'cpp-functions-refs',
        title: 'Functions & References',
        filename: 'references.cpp',
        description:
          'Pass arguments by reference (&) in C++ to modify caller variables directly or avoid expensive copies.',
        keyPoints: [
          'Passing by value copies the argument; passing by reference (<code>int&amp; x</code>) aliases the original variable.',
          'Use <code>const std::string&amp;</code> to read large objects efficiently without modifying them.'
        ],
        code: `#include <iostream>

void swapValues(int& a, int& b) {
    int temp = a;
    a = b;
    b = temp;
}

int main() {
    int x = 10, y = 25;
    std::cout << "Before swap: x = " << x << ", y = " << y << "\\n";

    swapValues(x, y);
    std::cout << "After swap:  x = " << x << ", y = " << y << "\\n";
    return 0;
}`,
        outputType: 'Console Output',
        isHtmlPreview: false,
        output: `Before swap: x = 10, y = 25
After swap:  x = 25, y = 10`
      },
      {
        id: 'cpp-oop',
        title: 'Classes & Constructors (OOP)',
        filename: 'classes.cpp',
        description:
          'C++ classes encapsulate private data members and expose public constructors and member functions.',
        keyPoints: [
          '<code>private:</code> restricts direct access to internal fields.',
          '<code>public:</code> exposes constructors and methods to outside code.',
          'Member initializer lists (<code>: name(n), hp(h)</code>) initialize fields cleanly.'
        ],
        code: `#include <iostream>
#include <string>

class Student {
private:
    std::string name;
    int level;

public:
    Student(std::string n, int lvl) : name(n), level(lvl) {}

    void levelUp() {
        level++;
        std::cout << name << " leveled up to Level " << level << "!\\n";
    }
};

int main() {
    Student s1("Geofrey M. Bernabe", 5);
    Student s2("Irish Kate T. Mercado", 5);
    Student s3("Princess Roxanne M. Quitola", 5);
    s1.levelUp();
    s2.levelUp();
    s3.levelUp();
    return 0;
}`,
        outputType: 'Console Output',
        isHtmlPreview: false,
        output: `Geofrey M. Bernabe leveled up to Level 6!
Irish Kate T. Mercado leveled up to Level 6!
Princess Roxanne M. Quitola leveled up to Level 6!`
      }
    ]
  }
};

/* ==========================================================================
   Practice Validation & Output Simulation Helpers
   ========================================================================== */
function stripCodeComments(code, lang = 'c') {
  if (lang === 'python') {
    return code.replace(/"""[\s\S]*?"""|'''[\s\S]*?'''|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|#[^\n]*/g, (m) =>
      m.startsWith('#') ? '' : m
    );
  }
  if (lang === 'sql') {
    return code.replace(/'(?:''|[^'])*'|"(?:\\.|[^"\\])*"|--[^\n]*|\/\*[\s\S]*?\*\//g, (m) =>
      m.startsWith('--') || m.startsWith('/*') ? ' ' : m
    );
  }
  return code.replace(/"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\/\/[^\n]*|\/\*[\s\S]*?\*\//g, (m) =>
    m.startsWith('//') || m.startsWith('/*') ? ' ' : m
  );
}

const SAMPLE_SQL_STUDENTS = [
  { student_id: 101, full_name: 'Geofrey M. Bernabe', course: 'SQL', score: 98 },
  { student_id: 102, full_name: 'Irish Kate T. Mercado', course: 'Python', score: 95 },
  { student_id: 103, full_name: 'Princess Roxanne M. Quitola', course: 'HTML', score: 93 },
  { student_id: 104, full_name: 'Alex Rivera', course: 'C++', score: 86 },
  { student_id: 105, full_name: 'Sam Cruz', course: 'Java', score: 78 }
];

function formatSqlResultTable(cols, rows) {
  if (!rows.length) {
    return '(0 rows matched your filter condition — query syntax is valid!)';
  }
  const widths = cols.map((col) =>
    Math.max(col.length, ...rows.map((r) => String(r[col] ?? '').length))
  );
  const header = cols.map((c, i) => c.padEnd(widths[i])).join(' | ');
  const sep = widths.map((w) => '-'.repeat(w)).join('-+-');
  const body = rows
    .map((r) => cols.map((c, i) => String(r[c] ?? '').padEnd(widths[i])).join(' | '))
    .join('\n');
  return `${header}\n${sep}\n${body}`;
}

function compareValues(left, op, right) {
  switch (op) {
    case '>=': return left >= right;
    case '<=': return left <= right;
    case '>': return left > right;
    case '<': return left < right;
    case '==':
    case '=': return left == right;
    case '!=':
    case '<>': return left != right;
    default: return false;
  }
}

/* ==========================================================================
   Practice Exercises Data (4 Progressive Challenges per Language)
   ========================================================================== */
const PRACTICE_DATA = {
  html: [
    {
      id: 'html-prac-1',
      title: 'Heading & Paragraph',
      filename: 'exercise1.html',
      prompt: 'Practice creating a main heading and a descriptive paragraph inside a full HTML5 page.',
      taskDetail:
        'Using the full HTML structure below, write <strong>any heading text or numbers you want</strong> inside <code>&lt;h1&gt;...&lt;/h1&gt;</code> and <strong>any message you want</strong> inside <code>&lt;p&gt;...&lt;/p&gt;</code>.',
      starterCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Heading & Paragraph</title>
</head>
<body>
  <!-- Write anything you want inside <h1> and <p> -->
  <h1></h1>
  <p></p>
</body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Heading & Paragraph</title>
</head>
<body>
  <h1>My First Webpage</h1>
  <p>Welcome to interactive HTML coding!</p>
</body>
</html>`,
      hint: 'Type any heading text between <h1> and </h1>, and any paragraph text between <p> and </p>.',
      previewMode: 'html',
      validate(code) {
        const clean = code.replace(/<!--[\s\S]*?-->/g, '');
        const hasH1 = /<h1\b[^>]*>[\s\S]*?\S[\s\S]*?<\/h1>/i.test(clean);
        const hasP = /<p\b[^>]*>[\s\S]*?\S[\s\S]*?<\/p>/i.test(clean);
        if (!hasH1) {
          return { ok: false, message: 'Write any non-empty text or numbers inside <h1>...</h1>.' };
        }
        if (!hasP) {
          return { ok: false, message: 'Almost there! Write any non-empty message inside <p>...</p>.' };
        }
        return { ok: true, message: 'Great job! Your heading and paragraph rendered properly.' };
      }
    },
    {
      id: 'html-prac-2',
      title: 'Create a Hyperlink',
      filename: 'exercise2.html',
      prompt: 'Links connect pages on the web using the anchor (<a>) tag and href attribute.',
      taskDetail:
        'Inside the <code>&lt;a&gt;</code> tag below, put <strong>any URL you want</strong> inside <code>href=""</code> (for example <code>https://example.com</code>) and write <strong>any clickable text</strong> between <code>&lt;a&gt;...&lt;/a&gt;</code>.',
      starterCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Create a Hyperlink</title>
</head>
<body>
  <p>
    <!-- Put any URL in href="" and any link text inside <a>...</a> -->
    <a href=""></a>
  </p>
</body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Create a Hyperlink</title>
</head>
<body>
  <p>
    <a href="https://www.w3schools.com">Visit My Favorite Site</a>
  </p>
</body>
</html>`,
      hint: 'Example: <a href="https://google.com">Click Here</a> — any URL and any link text will work!',
      previewMode: 'html',
      validate(code) {
        const clean = code.replace(/<!--[\s\S]*?-->/g, '');
        const aMatch = /<a\b([^>]*)>([\s\S]*?)<\/a>/i.exec(clean);
        if (!aMatch) {
          return { ok: false, message: 'Keep the <a href="...">...</a> anchor tag in your HTML.' };
        }
        const attrs = aMatch[1];
        const linkText = aMatch[2].replace(/<[^>]*>/g, '').trim();
        const hrefMatch = /href\s*=\s*(["'])\s*(\S[\s\S]*?)\s*\1/i.exec(attrs);
        if (!hrefMatch) {
          return { ok: false, message: 'Add any non-empty link URL inside href="..." (e.g., href="https://example.com").' };
        }
        if (!linkText) {
          return { ok: false, message: 'Write any clickable text between <a href="..."> and </a>.' };
        }
        return { ok: true, message: 'Awesome! Your custom hyperlink is valid and ready to click.' };
      }
    },
    {
      id: 'html-prac-3',
      title: 'Unordered List of Items',
      filename: 'exercise3.html',
      prompt: 'Group items into a bulleted list using <ul> and <li> tags.',
      taskDetail:
        'Fill in the <code>&lt;li&gt;...&lt;/li&gt;</code> list items inside <code>&lt;ul&gt;</code> with <strong>any words or numbers you want</strong> (you can also add or remove <code>&lt;li&gt;</code> items freely).',
      starterCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Unordered List</title>
</head>
<body>
  <h3>My Custom List</h3>
  <ul>
    <!-- Type any text or numbers inside the <li> items below -->
    <li></li>
    <li></li>
    <li></li>
  </ul>
</body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Unordered List</title>
</head>
<body>
  <h3>My Custom List</h3>
  <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>Python</li>
  </ul>
</body>
</html>`,
      hint: 'Type any text or numbers inside each <li>...</li> tag inside <ul>...</ul>.',
      previewMode: 'html',
      validate(code) {
        const clean = code.replace(/<!--[\s\S]*?-->/g, '');
        const ulMatch = /<ul\b[^>]*>([\s\S]*?)<\/ul>/i.exec(clean);
        if (!ulMatch) {
          return { ok: false, message: 'Keep your list items wrapped inside <ul>...</ul>.' };
        }
        const filledItems = ulMatch[1].match(/<li\b[^>]*>[\s\S]*?\S[\s\S]*?<\/li>/gi) || [];
        const emptyItems = ulMatch[1].match(/<li\b[^>]*>\s*<\/li>/gi) || [];
        if (filledItems.length === 0) {
          return { ok: false, message: 'Type any text or numbers inside the <li>...</li> tags!' };
        }
        if (emptyItems.length > 0) {
          return { ok: false, message: `Fill in (or remove) the ${emptyItems.length} empty <li></li> tag(s) so every bullet has content.` };
        }
        return { ok: true, message: `Well done! Your unordered list with ${filledItems.length} item(s) renders cleanly.` };
      }
    },
    {
      id: 'html-prac-4',
      title: 'Build a Sign-Up Form',
      filename: 'exercise4.html',
      prompt: 'Forms collect user details with <input> controls and a submit <button>.',
      taskDetail:
        'Inside the <code>&lt;form&gt;</code> structure below, set <strong>any input type</strong> you want (e.g. <code>email</code>, <code>text</code>, <code>number</code>, <code>password</code>) and write <strong>any label text</strong> inside the submit <code>&lt;button&gt;</code>.',
      starterCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Sign-Up Form</title>
</head>
<body>
  <form>
    <label>Enter Value:</label>
    <!-- Set any input type (text, email, number, password) and write any button text -->
    <input type="" placeholder="Type here...">
    <button type="submit"></button>
  </form>
</body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Sign-Up Form</title>
</head>
<body>
  <form>
    <label>Enter Email:</label>
    <input type="email" placeholder="you@example.com" required>
    <button type="submit">Submit Form</button>
  </form>
</body>
</html>`,
      hint: 'Set type="email" (or "text", "number", etc.) on <input> and put any label inside <button type="submit">Send</button>.',
      previewMode: 'html',
      validate(code) {
        const clean = code.replace(/<!--[\s\S]*?-->/g, '');
        const hasForm = /<form\b[^>]*>[\s\S]*?<\/form>/i.test(clean);
        const hasInput = /<input\b[^>]*type\s*=\s*(["'])\s*\S+?\s*\1[^>]*>/i.test(clean);
        const hasBtn = /<button\b[^>]*>[\s\S]*?\S[\s\S]*?<\/button>/i.test(clean);
        if (!hasForm) {
          return { ok: false, message: 'Keep your controls inside the <form>...</form> element.' };
        }
        if (!hasInput) {
          return { ok: false, message: 'Give your <input> any valid type="..." (such as "text", "email", or "number").' };
        }
        if (!hasBtn) {
          return { ok: false, message: 'Write any button text between <button type="submit"> and </button>.' };
        }
        return { ok: true, message: 'Excellent! Your custom HTML form is complete.' };
      }
    }
  ],

  css: [
    {
      id: 'css-prac-1',
      title: 'Style Heading Color & Size',
      filename: 'style1.css',
      prompt: 'Apply any color and any font-size number to a CSS class selector.',
      taskDetail:
        'Inside <code>.banner-title</code>, enter <strong>any CSS color</strong> (like <code>#2563eb</code>, <code>crimson</code>, or <code>rgb(16, 185, 129)</code>) and <strong>any font-size number</strong> (like <code>28px</code>, <code>36px</code>, or <code>2rem</code>).',
      starterCode: `.banner-title {
  font-family: sans-serif;
  margin: 0;
  /* Put any color and any font-size number below */
  color: ;
  font-size: ;
}`,
      solutionCode: `.banner-title {
  font-family: sans-serif;
  margin: 0;
  color: #2563eb;
  font-size: 28px;
}`,
      hint: 'Example: color: royalblue; and font-size: 30px; — any color and any size number work!',
      previewMode: 'css',
      previewHtml: `<h2 class="banner-title">Custom Styled Heading</h2>`,
      validate(code) {
        const clean = stripCodeComments(code, 'c');
        const block = /\.banner-title\s*\{([\s\S]*?)\}/.exec(clean);
        if (!block) return { ok: false, message: 'Keep the .banner-title { ... } selector block.' };
        const hasColor = /(?:^|;|\s)color\s*:\s*([^\s;{}][^;{}]*)\s*;/i.test(block[1]);
        const hasSize = /font-size\s*:\s*\d+(?:\.\d+)?\s*(?:px|rem|em|%|pt|vw|vh)\s*;/i.test(block[1]);
        if (!hasColor) return { ok: false, message: 'Enter any valid color after color: (e.g., color: #2563eb; or color: red;).' };
        if (!hasSize) return { ok: false, message: 'Enter any number with a unit after font-size: (e.g., font-size: 28px;).' };
        return { ok: true, message: 'Nice styling! Your custom color and font size are applied.' };
      }
    },
    {
      id: 'css-prac-2',
      title: 'Card Padding & Rounded Corners',
      filename: 'style2.css',
      prompt: 'Use Box Model properties with any spacing numbers and colors you prefer.',
      taskDetail:
        'Inside <code>.info-box</code>, fill in <strong>any number</strong> for <code>padding</code> (e.g. <code>20px</code>), <strong>any number</strong> for <code>border-radius</code> (e.g. <code>12px</code>), and <strong>any color</strong> for <code>background-color</code>.',
      starterCode: `.info-box {
  font-family: sans-serif;
  color: #1e293b;
  border: 2px solid #3b82f6;
  /* Put any numbers for padding & border-radius, and any background color */
  padding: ;
  border-radius: ;
  background-color: ;
}`,
      solutionCode: `.info-box {
  font-family: sans-serif;
  color: #1e293b;
  border: 2px solid #3b82f6;
  padding: 20px;
  border-radius: 12px;
  background-color: #eff6ff;
}`,
      hint: 'Example: padding: 18px; border-radius: 14px; background-color: #eff6ff; (any numbers & color work!).',
      previewMode: 'css',
      previewHtml: `<div class="info-box"><strong>Custom Box Card</strong> — Styled with your own spacing and colors!</div>`,
      validate(code) {
        const clean = stripCodeComments(code, 'c');
        const block = /\.info-box\s*\{([\s\S]*?)\}/.exec(clean);
        if (!block) return { ok: false, message: 'Keep the .info-box { ... } selector block.' };
        const hasPadding = /padding\s*:\s*\d+(?:\.\d+)?(?:px|rem|em|%)?(?:\s+\d+(?:\.\d+)?(?:px|rem|em|%)?)*\s*;/i.test(block[1]);
        const hasRadius = /border-radius\s*:\s*\d+(?:\.\d+)?(?:px|rem|em|%)?(?:\s+\d+(?:\.\d+)?(?:px|rem|em|%)?)*\s*;/i.test(block[1]);
        const hasBg = /background(?:-color)?\s*:\s*([^\s;{}][^;{}]*)\s*;/i.test(block[1]);
        if (!hasPadding) return { ok: false, message: 'Enter any number & unit for padding (e.g., padding: 20px;).' };
        if (!hasRadius) return { ok: false, message: 'Enter any number & unit for border-radius (e.g., border-radius: 12px;).' };
        if (!hasBg) return { ok: false, message: 'Enter any color for background-color (e.g., background-color: #eff6ff;).' };
        return { ok: true, message: 'Spot on! Your custom padding, corner radius, and background look great.' };
      }
    },
    {
      id: 'css-prac-3',
      title: 'Flexbox Row Alignment',
      filename: 'style3.css',
      prompt: 'Arrange items horizontally using Flexbox and any alignment or gap spacing.',
      taskDetail:
        'Inside <code>.nav-row</code>, set <code>display: flex;</code>, choose <strong>any alignment</strong> for <code>justify-content</code> (such as <code>space-between</code>, <code>center</code>, or <code>space-around</code>), and use <strong>any gap number</strong>.',
      starterCode: `.nav-row {
  padding: 12px;
  background-color: #f1f5f9;
  border-radius: 8px;
  /* Set display: flex;, any justify-content value, and any gap number */
  display: ;
  justify-content: ;
  gap: 12px;
}

.pill {
  background-color: #2563eb;
  color: #ffffff;
  padding: 6px 12px;
  border-radius: 6px;
  font-family: sans-serif;
}`,
      solutionCode: `.nav-row {
  padding: 12px;
  background-color: #f1f5f9;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  gap: 12px;
}

.pill {
  background-color: #2563eb;
  color: #ffffff;
  padding: 6px 12px;
  border-radius: 6px;
  font-family: sans-serif;
}`,
      hint: 'Set display: flex; and justify-content: space-between; (or center, space-around, space-evenly, flex-start, flex-end).',
      previewMode: 'css',
      previewHtml: `<div class="nav-row"><span class="pill">Item 1</span><span class="pill">Item 2</span><span class="pill">Item 3</span></div>`,
      validate(code) {
        const clean = stripCodeComments(code, 'c');
        const block = /\.nav-row\s*\{([\s\S]*?)\}/.exec(clean);
        if (!block) return { ok: false, message: 'Keep the .nav-row { ... } selector block.' };
        const hasFlex = /display\s*:\s*(?:inline-)?flex\s*;/i.test(block[1]);
        const hasJustify = /justify-content\s*:\s*(flex-start|flex-end|center|space-between|space-around|space-evenly|start|end|left|right)\s*;/i.test(block[1]);
        if (!hasFlex) return { ok: false, message: 'Set display: flex; inside .nav-row.' };
        if (!hasJustify) {
          return {
            ok: false,
            message: 'Set justify-content to any alignment (e.g., space-between, center, space-around, or flex-start).'
          };
        }
        return { ok: true, message: 'Perfect Flexbox layout!' };
      }
    },
    {
      id: 'css-prac-4',
      title: 'Multi-Column CSS Grid',
      filename: 'style4.css',
      prompt: 'Build a multi-column layout using CSS Grid with any column count and gap size.',
      taskDetail:
        'Inside <code>.grid-box</code>, set <code>display: grid;</code>, define <strong>any column layout</strong> for <code>grid-template-columns</code> (e.g. <code>repeat(3, 1fr)</code> or <code>repeat(2, 1fr)</code>), and enter <strong>any number</strong> for <code>gap</code>.',
      starterCode: `.grid-box {
  /* Set display: grid;, any grid-template-columns, and any gap number */
  display: ;
  grid-template-columns: ;
  gap: ;
}

.cell {
  background-color: #dbeafe;
  color: #1e40af;
  padding: 12px;
  text-align: center;
  border-radius: 6px;
  font-family: sans-serif;
  font-weight: bold;
}`,
      solutionCode: `.grid-box {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.cell {
  background-color: #dbeafe;
  color: #1e40af;
  padding: 12px;
  text-align: center;
  border-radius: 6px;
  font-family: sans-serif;
  font-weight: bold;
}`,
      hint: 'Example: display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; (any column count and gap number work!).',
      previewMode: 'css',
      previewHtml: `<div class="grid-box"><div class="cell">1</div><div class="cell">2</div><div class="cell">3</div><div class="cell">4</div><div class="cell">5</div><div class="cell">6</div></div>`,
      validate(code) {
        const clean = stripCodeComments(code, 'c');
        const block = /\.grid-box\s*\{([\s\S]*?)\}/.exec(clean);
        if (!block) return { ok: false, message: 'Keep the .grid-box { ... } selector block.' };
        const hasGrid = /display\s*:\s*(?:inline-)?grid\s*;/i.test(block[1]);
        const hasCols = /grid-template-columns\s*:\s*([^\s;{}][^;{}]*)\s*;/i.test(block[1]);
        const hasGap = /(?:grid-)?gap\s*:\s*\d+(?:\.\d+)?(?:px|rem|em|%)?(?:\s+\d+(?:\.\d+)?(?:px|rem|em|%)?)*\s*;/i.test(block[1]);
        if (!hasGrid) return { ok: false, message: 'Set display: grid; inside .grid-box.' };
        if (!hasCols) return { ok: false, message: 'Define any columns in grid-template-columns (e.g., repeat(3, 1fr) or 1fr 1fr).' };
        if (!hasGap) return { ok: false, message: 'Enter any spacing number for gap (e.g., gap: 10px;).' };
        return { ok: true, message: 'Awesome! Your custom CSS Grid is responsive and clean.' };
      }
    }
  ],

  java: [
    {
      id: 'java-prac-1',
      title: 'Print a Console Message',
      filename: 'Practice1.java',
      prompt: 'Output any message or number to the console inside Java\'s main method.',
      taskDetail:
        'Using the complete Java class structure below, write <strong>any text (inside quotes) or any number</strong> inside <code>System.out.println(...)</code>.',
      starterCode: `public class Practice1 {
    public static void main(String[] args) {
        // Put any message in quotes or any number inside println(...)
        System.out.println("");
    }
}`,
      solutionCode: `public class Practice1 {
    public static void main(String[] args) {
        System.out.println("Hello, Java World!");
    }
}`,
      hint: 'Write any text like System.out.println("My Custom Message!"); or any number like System.out.println(2026);',
      simulatedOutput: 'Hello, Java World!',
      validate(code) {
        const clean = stripCodeComments(code, 'c');
        if (!/class\s+\w+/.test(clean) || !/main\s*\(\s*String\s*\[\s*\]\s*\w+\s*\)/.test(clean)) {
          return { ok: false, message: 'Keep the class and public static void main(String[] args) structure.' };
        }
        const regex = /System\.out\.print(ln)?\s*\(([\s\S]*?)\)\s*;/g;
        const outputs = [];
        let m;
        while ((m = regex.exec(clean)) !== null) {
          const isLn = Boolean(m[1]);
          const arg = m[2].trim();
          if (!arg) continue;
          const strMatch = /^"(.*)"$/s.exec(arg);
          if (strMatch) {
            if (!strMatch[1].trim()) continue;
            outputs.push(strMatch[1] + (isLn ? '\n' : ''));
          } else {
            outputs.push(arg.replace(/^"|"$/g, '') + (isLn ? '\n' : ''));
          }
        }
        const finalOut = outputs.join('').replace(/\n$/, '');
        if (!finalOut) {
          return { ok: false, message: 'Type any non-empty text or number inside System.out.println("...");' };
        }
        return { ok: true, message: `Compiled & executed! Printed "${finalOut}".`, output: finalOut };
      }
    },
    {
      id: 'java-prac-2',
      title: 'Add Any Two Numbers',
      filename: 'Practice2.java',
      prompt: 'Assign any two numbers to variables and print their calculated sum.',
      taskDetail:
        'Enter <strong>any numbers you want</strong> for <code>a</code> and <code>b</code> (integers or decimals, positive or negative), and run the program to calculate and print their sum.',
      starterCode: `public class Practice2 {
    public static void main(String[] args) {
        // Put any two numbers you want for a and b!
        int a = ;
        int b = ;
        int sum = a + b;

        System.out.println(sum);
    }
}`,
      solutionCode: `public class Practice2 {
    public static void main(String[] args) {
        int a = 15;
        int b = 25;
        int sum = a + b;

        System.out.println(sum);
    }
}`,
      hint: 'Fill in any two numbers like int a = 45; and int b = 55; (or use double for decimals!).',
      simulatedOutput: '40',
      validate(code) {
        const clean = stripCodeComments(code, 'c');
        const varRegex = /\b(?:int|double|float|long)\s+(\w+)\s*=\s*(-?\d+(?:\.\d+)?)\s*;/g;
        const vars = [];
        let m;
        while ((m = varRegex.exec(clean)) !== null) {
          vars.push({ name: m[1], val: Number(m[2]) });
        }
        if (vars.length < 2) {
          return { ok: false, message: 'Enter any number for both variables (for example: int a = 10; and int b = 20;).' };
        }
        const [v1, v2] = vars;
        const hasAdd = new RegExp(`\\b${v1.name}\\s*\\+\\s*${v2.name}\\b|\\b${v2.name}\\s*\\+\\s*${v1.name}\\b`).test(clean);
        const printMatch = /System\.out\.print(ln)?\s*\(([\s\S]+?)\)\s*;/.exec(clean);
        if (!hasAdd) {
          return { ok: false, message: `Add your two variables together using ${v1.name} + ${v2.name}.` };
        }
        if (!printMatch) {
          return { ok: false, message: 'Keep System.out.println(...) to display the sum.' };
        }
        const sumVal = Number((v1.val + v2.val).toFixed(6));
        const prefixMatch = /^"([^"]*)"\s*\+/.exec(printMatch[2].trim());
        const outText = prefixMatch ? `${prefixMatch[1]}${sumVal}` : String(sumVal);
        return {
          ok: true,
          message: `Correct! ${v1.val} + ${v2.val} = ${sumVal}.`,
          output: outText
        };
      }
    },
    {
      id: 'java-prac-3',
      title: 'Pass / Fail Conditional',
      filename: 'Practice3.java',
      prompt: 'Use an if-else statement in Java with any score and threshold numbers you want.',
      taskDetail:
        'Enter <strong>any number</strong> for <code>score</code> (and feel free to customize the <code>if</code> cutoff number and the printed messages inside <code>if</code> and <code>else</code>!).',
      starterCode: `public class Practice3 {
    public static void main(String[] args) {
        // Put any score number, any cutoff number, and any messages!
        int score = ;

        if (score >= 75) {
            System.out.println("Passed");
        } else {
            System.out.println("Try Again");
        }
    }
}`,
      solutionCode: `public class Practice3 {
    public static void main(String[] args) {
        int score = 85;

        if (score >= 75) {
            System.out.println("Passed");
        } else {
            System.out.println("Try Again");
        }
    }
}`,
      hint: 'Give score any number, such as int score = 90; or int score = 60;, then click Run & Check Answer!',
      simulatedOutput: 'Passed',
      validate(code) {
        const clean = stripCodeComments(code, 'c');
        const scoreMatch = /\b(?:int|double|float)\s+(\w+)\s*=\s*(-?\d+(?:\.\d+)?)\s*;/.exec(clean);
        if (!scoreMatch) {
          return { ok: false, message: 'Enter any number for your variable (e.g., int score = 85;).' };
        }
        const varName = scoreMatch[1];
        const varVal = Number(scoreMatch[2]);
        const ifElseMatch = new RegExp(
          `if\\s*\\(\\s*${varName}\\s*(>=|<=|==|!=|>|<)\\s*(-?\\d+(?:\\.\\d+)?)\\s*\\)\\s*\\{([\\s\\S]*?)\\}\\s*else\\s*\\{([\\s\\S]*?)\\}`
        ).exec(clean);
        if (!ifElseMatch) {
          return { ok: false, message: `Keep an if (${varName} >= ...) { ... } else { ... } structure with any cutoff number.` };
        }
        const op = ifElseMatch[1];
        const cutoff = Number(ifElseMatch[2]);
        const ifPrint = /System\.out\.print(?:ln)?\s*\(\s*"([^"]*)"\s*\)\s*;/.exec(ifElseMatch[3]);
        const elsePrint = /System\.out\.print(?:ln)?\s*\(\s*"([^"]*)"\s*\)\s*;/.exec(ifElseMatch[4]);
        if (!ifPrint || !elsePrint) {
          return { ok: false, message: 'Include System.out.println("..."); messages in both the if and else blocks.' };
        }
        const passed = compareValues(varVal, op, cutoff);
        const chosenOut = passed ? ifPrint[1] : elsePrint[1];
        return {
          ok: true,
          message: `Great conditional logic! (${varVal} ${op} ${cutoff} is ${passed}) -> "${chosenOut}".`,
          output: chosenOut
        };
      }
    },
    {
      id: 'java-prac-4',
      title: 'Custom For Loop Counter',
      filename: 'Practice4.java',
      prompt: 'Use a Java for loop to count between any start and end numbers you choose.',
      taskDetail:
        'Enter <strong>any start integer</strong> and <strong>any end integer</strong> in the <code>for</code> loop header below to print every number in your range.',
      starterCode: `public class Practice4 {
    public static void main(String[] args) {
        // Put any start number and any end number in the loop header!
        for (int i = ; i <= ; i++) {
            System.out.println(i);
        }
    }
}`,
      solutionCode: `public class Practice4 {
    public static void main(String[] args) {
        for (int i = 1; i <= 5; i++) {
            System.out.println(i);
        }
    }
}`,
      hint: 'Example: for (int i = 1; i <= 10; i++) — you can use any start and end numbers!',
      simulatedOutput: '1\n2\n3\n4\n5',
      validate(code) {
        const clean = stripCodeComments(code, 'c');
        const forMatch = /for\s*\(\s*(?:int\s+)?(\w+)\s*=\s*(-?\d+)\s*;\s*\1\s*(<=|<|>=|>)\s*(-?\d+)\s*;\s*([^)]+)\)\s*\{([\s\S]*?)\}/.exec(clean);
        if (!forMatch) {
          return { ok: false, message: 'Fill in start and end integers in your for loop (e.g., for (int i = 1; i <= 5; i++)).' };
        }
        const [, v, startStr, op, endStr, stepExpr, body] = forMatch;
        if (!new RegExp(`System\\.out\\.print(?:ln)?\\s*\\([^)]*\\b${v}\\b[^)]*\\)\\s*;`).test(body)) {
          return { ok: false, message: `Inside the loop, print the loop variable with System.out.println(${v});` };
        }
        let step = 1;
        const incMatch = /\+=\s*(\d+)|\+\s*(\d+)/.exec(stepExpr);
        const decMatch = /-=\s*(\d+)|-\s*(\d+)/.exec(stepExpr);
        if (stepExpr.includes('--')) step = -1;
        else if (decMatch) step = -Number(decMatch[1] || decMatch[2]);
        else if (incMatch) step = Number(incMatch[1] || incMatch[2]);

        const start = Number(startStr);
        const end = Number(endStr);
        if (step === 0 || (step > 0 && (op === '>' || op === '>=') && start > end && !compareValues(start + step, op, end) === false)) {
          // Guard infinite direction
        }
        const lines = [];
        let cur = start;
        let guard = 0;
        while (compareValues(cur, op, end) && guard < 100) {
          lines.push(String(cur));
          cur += step;
          guard++;
          if ((step > 0 && (op === '>' || op === '>=') && cur > end + 100) || (step < 0 && (op === '<' || op === '<=') && cur < end - 100)) {
            return { ok: false, message: 'Your loop step moves away from the end condition (infinite loop). Adjust <= / >= or i++ / i--.' };
          }
        }
        const out = lines.length
          ? lines.join('\n') + (compareValues(cur, op, end) ? '\n... (output capped at 100 lines)' : '')
          : '(Loop ran 0 times because the start value already failed the condition)';
        return { ok: true, message: `Loop executed cleanly starting at ${start}!`, output: out };
      }
    }
  ],

  python: [
    {
      id: 'py-prac-1',
      title: 'Variables & f-String Output',
      filename: 'practice1.py',
      prompt: 'Store any value in a Python variable and format it inside an f-string.',
      taskDetail:
        'Put <strong>any text or number</strong> inside the variable below and customize the <code>f"..."</code> message however you like!',
      starterCode: `# Put any text or number in your variable and customize the f-string!
name = ""
message = f"Welcome, {name}!"

print(message)`,
      solutionCode: `name = "KNOX Learner"
message = f"Welcome, {name}!"

print(message)`,
      hint: 'Type any text or number inside name = "..." (for example: name = "Alex" or name = 100).',
      simulatedOutput: 'Welcome, KNOX Learner!',
      validate(code) {
        const clean = stripCodeComments(code, 'python');
        const vars = {};
        const assignRegex = /^[ \t]*(\w+)[ \t]*=[ \t]*(?:"([^"]*)"|'([^']*)'|(-?\d+(?:\.\d+)?))[ \t]*$/gm;
        let m;
        while ((m = assignRegex.exec(clean)) !== null) {
          const val = m[2] ?? m[3] ?? m[4];
          if (String(val).trim() !== '') {
            vars[m[1]] = String(val);
          }
        }
        if (Object.keys(vars).length === 0) {
          return { ok: false, message: 'Assign any non-empty text or number to a variable (e.g., name = "Alex").' };
        }
        const fMatch = /f(?:"([^"]*\{(\w+)\}[^"]*)"|'([^']*\{(\w+)\}[^']*)')/.exec(clean);
        if (!fMatch) {
          return { ok: false, message: 'Use an f-string containing {variable_name}, such as f"Welcome, {name}!".' };
        }
        const template = fMatch[1] ?? fMatch[3];
        if (!/\bprint\s*\(/.test(clean)) {
          return { ok: false, message: 'Call print(...) to display your formatted f-string.' };
        }
        const rendered = template.replace(/\{(\w+)\}/g, (_, k) => (k in vars ? vars[k] : `{${k}}`));
        if (/\{\w+\}/.test(rendered)) {
          return { ok: false, message: 'Make sure the variable inside {...} has a non-empty value assigned above it.' };
        }
        return { ok: true, message: `Clean Pythonic f-string! Output: ${rendered}`, output: rendered };
      }
    },
    {
      id: 'py-prac-2',
      title: 'Append to a List',
      filename: 'practice2.py',
      prompt: 'Modify a Python list dynamically using .append() with any text or number.',
      taskDetail:
        'Customize the list with <strong>any items or numbers</strong>, pass <strong>any value you want</strong> into <code>.append(...)</code>, and print the updated list.',
      starterCode: `# Customize the list and pass any string or number into .append(...)!
topics = ["HTML", "CSS", "Python"]

topics.append()

print(topics)`,
      solutionCode: `topics = ["HTML", "CSS", "Python"]

topics.append("SQL")

print(topics)`,
      hint: 'Put any string or number inside .append(...), such as topics.append("Java") or topics.append(99).',
      simulatedOutput: "['HTML', 'CSS', 'Python', 'SQL']",
      validate(code) {
        const clean = stripCodeComments(code, 'python');
        const listMatch = /(\w+)\s*=\s*\[([^\]]*)\]/.exec(clean);
        if (!listMatch) {
          return { ok: false, message: 'Define a list using square brackets, e.g., topics = ["HTML", "CSS"].' };
        }
        const listVar = listMatch[1];
        const rawItems = listMatch[2]
          .split(',')
          .map((s) => s.trim())
          .filter(Boolean);

        const appendRegex = new RegExp(`\\b${listVar}\\.append\\s*\\(\\s*([^)]*?)\\s*\\)`, 'g');
        const appended = [];
        let m;
        while ((m = appendRegex.exec(clean)) !== null) {
          if (m[1] !== '') appended.push(m[1]);
        }
        if (appended.length === 0) {
          return { ok: false, message: `Put any text (in quotes) or any number inside ${listVar}.append(...)!` };
        }
        if (!new RegExp(`\\bprint\\s*\\(\\s*${listVar}\\s*\\)`).test(clean)) {
          return { ok: false, message: `Call print(${listVar}) to output your updated list.` };
        }
        const formatItem = (tok) => {
          const strM = /^["'](.*)["']$/.exec(tok);
          if (strM) return `'${strM[1]}'`;
          return tok;
        };
        const allFormatted = [...rawItems, ...appended].map(formatItem);
        const out = `[${allFormatted.join(', ')}]`;
        return { ok: true, message: `Great work! Appended value(s) to ${listVar}.`, output: out };
      }
    },
    {
      id: 'py-prac-3',
      title: 'Write a Reusable Function',
      filename: 'practice3.py',
      prompt: 'Define a Python function with def and pass any number you want into it.',
      taskDetail:
        'Using the function structure below, feel free to customize the math formula in <code>return</code> and pass <strong>any number you want</strong> into <code>square(...)</code>!',
      starterCode: `# Customize the formula if you want, and put any number inside square(...)!
def square(n):
    return n * n

result = square()
print(result)`,
      solutionCode: `def square(n):
    return n * n

result = square(6)
print(result)`,
      hint: 'Put any number inside square(...), for example: result = square(9) or print(square(12)).',
      simulatedOutput: '36',
      validate(code) {
        const clean = stripCodeComments(code, 'python');
        const defMatch = /def\s+(\w+)\s*\(\s*(\w+)\s*\)\s*:\s*\n\s+return\s+([^\n]+)/.exec(clean);
        if (!defMatch) {
          return { ok: false, message: 'Keep a function header def name(n): followed by an indented return expression.' };
        }
        const [, fnName, param, expr] = defMatch;
        const callMatch = new RegExp(`\\b${fnName}\\s*\\(\\s*(-?\\d+(?:\\.\\d+)?)\\s*\\)`).exec(clean);
        if (!callMatch) {
          return { ok: false, message: `Pass any number inside ${fnName}(...), for example ${fnName}(8)!` };
        }
        if (!/\bprint\s*\(/.test(clean)) {
          return { ok: false, message: 'Call print(...) to display the returned result.' };
        }
        const argVal = Number(callMatch[1]);
        let calcOut = String(argVal * argVal);
        const safeExpr = expr.trim().replace(new RegExp(`\\b${param}\\b`, 'g'), `(${argVal})`);
        if (/^[0-9+\-*/%().\s]+$/.test(safeExpr)) {
          try {
            const evaluated = Function(`"use strict"; return (${safeExpr});`)();
            if (typeof evaluated === 'number' && Number.isFinite(evaluated)) {
              calcOut = String(Number(evaluated.toFixed(6)));
            }
          } catch {
            // fallback
          }
        }
        return { ok: true, message: `Awesome! ${fnName}(${argVal}) returned ${calcOut}.`, output: calcOut };
      }
    },
    {
      id: 'py-prac-4',
      title: 'Filter Numbers with a Loop',
      filename: 'practice4.py',
      prompt: 'Combine a Python for loop and an if condition using any numbers you want.',
      taskDetail:
        'Put <strong>any numbers you want</strong> inside the <code>nums</code> list and enter <strong>any comparison number</strong> in the <code>if</code> line to filter and print matching values.',
      starterCode: `# Put any numbers in nums and enter any cutoff number after > (or <, >=, <=)!
nums = [12, 25, 8, 34, 50]

for n in nums:
    if n > :
        print(n)`,
      solutionCode: `nums = [12, 25, 8, 34, 50]

for n in nums:
    if n > 20:
        print(n)`,
      hint: 'Enter any number after >, for example: if n > 15: (you can also edit the numbers in nums!).',
      simulatedOutput: '25\n34\n50',
      validate(code) {
        const clean = stripCodeComments(code, 'python');
        const listMatch = /(\w+)\s*=\s*\[([^\]]+)\]/.exec(clean);
        if (!listMatch) {
          return { ok: false, message: 'Define a list of numbers, such as nums = [10, 25, 40].' };
        }
        const listName = listMatch[1];
        const numbers = listMatch[2]
          .split(',')
          .map((s) => Number(s.trim()))
          .filter((n) => !Number.isNaN(n));
        if (numbers.length === 0) {
          return { ok: false, message: `Put at least one number inside ${listName} = [...].` };
        }
        const forMatch = new RegExp(`for\\s+(\\w+)\\s+in\\s+${listName}\\s*:`).exec(clean);
        if (!forMatch) {
          return { ok: false, message: `Keep the loop header: for n in ${listName}:` };
        }
        const v = forMatch[1];
        const ifMatch = new RegExp(`if\\s+${v}\\s*(>=|<=|==|!=|>|<)\\s*(-?\\d+(?:\\.\\d+)?)\\s*:`).exec(clean);
        if (!ifMatch) {
          return { ok: false, message: `Enter any number in your condition, e.g., if ${v} > 20:` };
        }
        if (!new RegExp(`print\\s*\\(\\s*${v}\\s*\\)`).test(clean)) {
          return { ok: false, message: `Print matching numbers inside the if block with print(${v}).` };
        }
        const [, op, cutoffStr] = ifMatch;
        const cutoff = Number(cutoffStr);
        const matched = numbers.filter((num) => compareValues(num, op, cutoff));
        const out = matched.length
          ? matched.join('\n')
          : `(0 numbers in [${numbers.join(', ')}] matched ${v} ${op} ${cutoff})`;
        return { ok: true, message: `Spot on! Filtered ${listName} where ${v} ${op} ${cutoff}.`, output: out };
      }
    }
  ],

  sql: [
    {
      id: 'sql-prac-1',
      title: 'Select Columns from a Table',
      filename: 'query1.sql',
      prompt: 'Retrieve any columns (or *) from the students table using SELECT.',
      taskDetail:
        'Using the SQL structure below, choose <strong>any column(s)</strong> from <code>student_id</code>, <code>full_name</code>, <code>course</code>, <code>score</code> — or write <code>*</code> for all columns!',
      starterCode: `-- Available columns in students: student_id, full_name, course, score
SELECT 
FROM students;`,
      solutionCode: `SELECT full_name, course, score
FROM students;`,
      hint: 'Write SELECT * FROM students; or choose any columns like SELECT full_name, score FROM students;',
      simulatedOutput: `full_name                   | course | score\n----------------------------+--------+------\nGeofrey M. Bernabe          | SQL    | 98`,
      validate(code) {
        const clean = stripCodeComments(code, 'sql').trim();
        const m = /^SELECT\s+([\s\S]+?)\s+FROM\s+students\s*;?$/i.exec(clean);
        if (!m) {
          return { ok: false, message: 'Specify column(s) or * between SELECT and FROM students;' };
        }
        const validCols = ['student_id', 'full_name', 'course', 'score'];
        const rawSel = m[1].trim();
        let chosenCols = [];
        if (rawSel === '*') {
          chosenCols = validCols;
        } else {
          const parts = rawSel.split(',').map((c) => c.trim().toLowerCase());
          if (parts.some((p) => !validCols.includes(p))) {
            return {
              ok: false,
              message: 'Choose * or valid columns from students: student_id, full_name, course, score.'
            };
          }
          chosenCols = parts;
        }
        return {
          ok: true,
          message: `Query executed! Returned ${SAMPLE_SQL_STUDENTS.length} student rows.`,
          output: formatSqlResultTable(chosenCols, SAMPLE_SQL_STUDENTS)
        };
      }
    },
    {
      id: 'sql-prac-2',
      title: 'Filter Rows with WHERE',
      filename: 'query2.sql',
      prompt: 'Filter students using a WHERE clause with any score number or condition.',
      taskDetail:
        'Enter <strong>any score number</strong> (such as <code>85</code>, <code>90</code>, or <code>50</code>) and any comparison operator (<code>&gt;=</code>, <code>&gt;</code>, <code>&lt;=</code>, <code>&lt;</code>, <code>=</code>) in the <code>WHERE</code> clause!',
      starterCode: `-- Sample scores in students range from 78 to 98
-- Put any number you want in the WHERE condition below!
SELECT *
FROM students
WHERE score >= ;`,
      solutionCode: `SELECT *
FROM students
WHERE score >= 90;`,
      hint: 'Enter any number after WHERE score >=, for example: WHERE score >= 85; or WHERE score < 95;',
      simulatedOutput: `student_id | full_name | course | score`,
      validate(code) {
        const clean = stripCodeComments(code, 'sql').trim();
        const m = /^SELECT\s+([\s\S]+?)\s+FROM\s+students\s+WHERE\s+(student_id|full_name|course|score)\s*(>=|<=|!=|<>|=|>|<)\s*(-?\d+(?:\.\d+)?|'[^']*'|"[^"]*")\s*;?$/i.exec(clean);
        if (!m) {
          return {
            ok: false,
            message: 'Complete the WHERE condition with any number or text (e.g., WHERE score >= 85;).'
          };
        }
        const [, selPart, colRaw, op, valRaw] = m;
        const validCols = ['student_id', 'full_name', 'course', 'score'];
        const cols =
          selPart.trim() === '*'
            ? validCols
            : selPart
                .split(',')
                .map((s) => s.trim().toLowerCase())
                .filter((c) => validCols.includes(c));
        if (!cols.length) {
          return { ok: false, message: 'Select * or valid column names from students.' };
        }
        const col = colRaw.toLowerCase();
        const targetVal = /^['"]/.test(valRaw) ? valRaw.slice(1, -1) : Number(valRaw);
        const filtered = SAMPLE_SQL_STUDENTS.filter((row) => {
          const left = typeof targetVal === 'string' ? String(row[col]).toLowerCase() : row[col];
          const right = typeof targetVal === 'string' ? targetVal.toLowerCase() : targetVal;
          return compareValues(left, op, right);
        });
        return {
          ok: true,
          message: `Great filtering! Matched ${filtered.length} row(s) where ${col} ${op} ${valRaw}.`,
          output: formatSqlResultTable(cols, filtered)
        };
      }
    },
    {
      id: 'sql-prac-3',
      title: 'Insert a New Course Row',
      filename: 'query3.sql',
      prompt: 'Add a new record into the courses table with any ID number and any title.',
      taskDetail:
        'Inside <code>VALUES (...)</code>, enter <strong>any course_id number</strong> and <strong>any course title text</strong> inside quotes!',
      starterCode: `-- Table: courses (course_id, title)
-- Put any ID number and any course name inside VALUES (...)!
INSERT INTO courses (course_id, title)
VALUES (, '');`,
      solutionCode: `INSERT INTO courses (course_id, title)
VALUES (3, 'Modern C++');`,
      hint: "Put any number and any non-empty title, e.g.: VALUES (10, 'Web Development');",
      simulatedOutput: `INSERT 0 1 — 1 row inserted into 'courses'`,
      validate(code) {
        const clean = stripCodeComments(code, 'sql').trim();
        const m = /^INSERT\s+INTO\s+courses\s*(?:\(\s*course_id\s*,\s*title\s*\))?\s*VALUES\s*\(\s*(-?\d+)\s*,\s*(?:'([^']*)'|"([^"]*)")\s*\)\s*;?$/i.exec(clean);
        if (!m) {
          return {
            ok: false,
            message: "Enter any integer ID and quoted title inside VALUES (id, 'Title');"
          };
        }
        const idNum = m[1];
        const titleText = (m[2] ?? m[3] ?? '').trim();
        if (!titleText) {
          return { ok: false, message: "Write any non-empty course title inside the quotes (e.g., 'Game Design')." };
        }
        return {
          ok: true,
          message: `Row (course_id: ${idNum}, title: '${titleText}') inserted cleanly into courses!`,
          output: `INSERT 0 1 — 1 row inserted into 'courses':\ncourse_id: ${idNum} | title: '${titleText}'`
        };
      }
    },
    {
      id: 'sql-prac-4',
      title: 'Aggregate with GROUP BY',
      filename: 'query4.sql',
      prompt: 'Summarize student records using an aggregate function and GROUP BY.',
      taskDetail:
        'Complete <code>GROUP BY course;</code> (and feel free to try <code>COUNT(*)</code>, <code>AVG(score)</code>, <code>MAX(score)</code>, or <code>MIN(score)</code>!).',
      starterCode: `-- Table: students (student_id, full_name, course, score)
-- Complete the GROUP BY column (e.g. course) below:
SELECT course, COUNT(*)
FROM students
GROUP BY ;`,
      solutionCode: `SELECT course, COUNT(*)
FROM students
GROUP BY course;`,
      hint: 'Add course after GROUP BY so it reads: GROUP BY course;',
      simulatedOutput: `course | count\n-------+------\nSQL    | 24\nPython | 31\nC++    | 18`,
      validate(code) {
        const clean = stripCodeComments(code, 'sql').trim();
        const m = /^SELECT\s+([\s\S]+?)\s+FROM\s+students\s+GROUP\s+BY\s+(course|student_id|full_name|score)\s*;?$/i.exec(clean);
        if (!m || !/\b(COUNT|AVG|SUM|MIN|MAX)\s*\(/i.test(m[1])) {
          return {
            ok: false,
            message: 'Include an aggregate (like COUNT(*) or AVG(score)) and finish GROUP BY course;'
          };
        }
        const aggMatch = /\b(COUNT|AVG|SUM|MIN|MAX)\s*\(/i.exec(m[1]);
        const aggFn = aggMatch[1].toUpperCase();
        const sampleRows =
          aggFn === 'COUNT'
            ? [
                { course: 'SQL', count: 24 },
                { course: 'Python', count: 31 },
                { course: 'HTML', count: 27 },
                { course: 'C++', count: 18 }
              ]
            : [
                { course: 'SQL', [aggFn.toLowerCase()]: 98 },
                { course: 'Python', [aggFn.toLowerCase()]: 95 },
                { course: 'HTML', [aggFn.toLowerCase()]: 93 },
                { course: 'C++', [aggFn.toLowerCase()]: 86 }
              ];
        const metricCol = aggFn === 'COUNT' ? 'count' : aggFn.toLowerCase();
        return {
          ok: true,
          message: `Aggregation (${aggFn}) with GROUP BY executed cleanly!`,
          output: formatSqlResultTable(['course', metricCol], sampleRows)
        };
      }
    }
  ],

  cpp: [
    {
      id: 'cpp-prac-1',
      title: 'Console Output with std::cout',
      filename: 'practice1.cpp',
      prompt: 'Use the C++ output stream operator (<<) to print any message or number.',
      taskDetail:
        'Inside <code>main()</code>, write <strong>any message (in quotes) or any number</strong> inside the <code>std::cout</code> statement!',
      starterCode: `#include <iostream>

int main() {
    // Type any message in quotes or any number to print!
    std::cout << "" << std::endl;
    return 0;
}`,
      solutionCode: `#include <iostream>

int main() {
    std::cout << "Welcome to C++!" << std::endl;
    return 0;
}`,
      hint: 'Type any text inside the quotes like std::cout << "Hello C++!" << std::endl; or print any number!',
      simulatedOutput: 'Welcome to C++!',
      validate(code) {
        const clean = stripCodeComments(code, 'c');
        if (!/\bint\s+main\s*\(/.test(clean)) {
          return { ok: false, message: 'Keep the int main() { ... } function structure.' };
        }
        const coutRegex = /(?:std::)?cout\s*<<([\s\S]*?);/g;
        const pieces = [];
        let m;
        while ((m = coutRegex.exec(clean)) !== null) {
          const parts = m[1].split('<<').map((p) => p.trim());
          for (const part of parts) {
            if (!part) continue;
            if (/^(?:std::)?endl$/.test(part) || part === '"\\n"' || part === "'\\n'") {
              pieces.push('\n');
            } else {
              const strM = /^"(.*)"$/s.exec(part);
              if (strM) {
                if (strM[1].trim() !== '') pieces.push(strM[1].replace(/\\n/g, '\n'));
              } else {
                pieces.push(part);
              }
            }
          }
        }
        const out = pieces.join('').replace(/\n+$/, '').trim();
        if (!out) {
          return { ok: false, message: 'Write any non-empty text or number in std::cout << "..." << std::endl;' };
        }
        return { ok: true, message: `Compiled with g++! Output: ${out}`, output: out };
      }
    },
    {
      id: 'cpp-prac-2',
      title: 'Multiply Any Two Numbers',
      filename: 'practice2.cpp',
      prompt: 'Assign any two numbers in C++ and output their calculated product.',
      taskDetail:
        'Enter <strong>any numbers you want</strong> for <code>width</code> and <code>height</code> (integers or decimals) to calculate and display <code>width * height</code>.',
      starterCode: `#include <iostream>

int main() {
    // Put any two numbers you want for width and height!
    int width = ;
    int height = ;
    int area = width * height;

    std::cout << area << std::endl;
    return 0;
}`,
      solutionCode: `#include <iostream>

int main() {
    int width = 8;
    int height = 5;
    int area = width * height;

    std::cout << area << std::endl;
    return 0;
}`,
      hint: 'Enter any numbers, such as int width = 12; and int height = 10; (or double for decimals!).',
      simulatedOutput: '40',
      validate(code) {
        const clean = stripCodeComments(code, 'c');
        const varRegex = /\b(?:int|double|float|long)\s+(\w+)\s*=\s*(-?\d+(?:\.\d+)?)\s*;/g;
        const vars = [];
        let m;
        while ((m = varRegex.exec(clean)) !== null) {
          vars.push({ name: m[1], val: Number(m[2]) });
        }
        if (vars.length < 2) {
          return { ok: false, message: 'Enter any number for both width and height (e.g., int width = 8; int height = 5;).' };
        }
        const [v1, v2] = vars;
        const hasMult = new RegExp(`\\b${v1.name}\\s*\\*\\s*${v2.name}\\b|\\b${v2.name}\\s*\\*\\s*${v1.name}\\b`).test(clean);
        if (!hasMult) {
          return { ok: false, message: `Multiply your two variables using ${v1.name} * ${v2.name}.` };
        }
        if (!/(?:std::)?cout\s*<</.test(clean)) {
          return { ok: false, message: 'Use std::cout << to display the calculated product.' };
        }
        const prod = Number((v1.val * v2.val).toFixed(6));
        return { ok: true, message: `Nice work! ${v1.val} * ${v2.val} = ${prod}.`, output: String(prod) };
      }
    },
    {
      id: 'cpp-prac-3',
      title: 'Push Element to std::vector',
      filename: 'practice3.cpp',
      prompt: 'Use std::vector::push_back() with any numbers you want and print the vector size.',
      taskDetail:
        'Customize the numbers inside <code>scores</code> if you like, pass <strong>any number</strong> into <code>scores.push_back(...)</code>, and output <code>scores.size()</code>.',
      starterCode: `#include <iostream>
#include <vector>

int main() {
    // Customize the initial numbers and push_back any number you want!
    std::vector<int> scores = {85, 90, 95};

    scores.push_back();

    std::cout << scores.size() << std::endl;
    return 0;
}`,
      solutionCode: `#include <iostream>
#include <vector>

int main() {
    std::vector<int> scores = {85, 90, 95};

    scores.push_back(100);

    std::cout << scores.size() << std::endl;
    return 0;
}`,
      hint: 'Put any number inside scores.push_back(...), for example: scores.push_back(100); or scores.push_back(42);',
      simulatedOutput: '4',
      validate(code) {
        const clean = stripCodeComments(code, 'c');
        const vecMatch = /vector\s*<\s*(?:int|double|float|long)\s*>\s+(\w+)\s*(?:=\s*\{([^}]*)\})?/.exec(clean);
        if (!vecMatch) {
          return { ok: false, message: 'Keep your std::vector<int> declaration in main().' };
        }
        const vecName = vecMatch[1];
        const initItems = (vecMatch[2] || '')
          .split(',')
          .map((s) => s.trim())
          .filter(Boolean);
        const pushRegex = new RegExp(`\\b${vecName}\\.push_back\\s*\\(\\s*(-?\\d+(?:\\.\\d+)?)\\s*\\)\\s*;`, 'g');
        const pushed = [];
        let m;
        while ((m = pushRegex.exec(clean)) !== null) {
          pushed.push(m[1]);
        }
        if (pushed.length === 0) {
          return { ok: false, message: `Pass any number into ${vecName}.push_back(...); (e.g., ${vecName}.push_back(100);).` };
        }
        if (!new RegExp(`(?:std::)?cout[\\s\\S]*?\\b${vecName}\\.size\\s*\\(\\s*\\)`).test(clean)) {
          return { ok: false, message: `Output the vector size using std::cout << ${vecName}.size();` };
        }
        const totalSize = initItems.length + pushed.length;
        return {
          ok: true,
          message: `Awesome! Pushed ${pushed.join(', ')} — ${vecName}.size() is now ${totalSize}.`,
          output: String(totalSize)
        };
      }
    },
    {
      id: 'cpp-prac-4',
      title: 'Pass-by-Reference Modifier',
      filename: 'practice4.cpp',
      prompt: 'Modify a number in-place using a C++ reference parameter (int&) with any values.',
      taskDetail:
        'Put <strong>any multiplier/offset number</strong> inside <code>updateValue(int&amp; n)</code> and <strong>any starting number</strong> for <code>val</code> in <code>main()</code>!',
      starterCode: `#include <iostream>

void updateValue(int& n) {
    // Multiply, add, or subtract any number in-place (e.g., n = n * 2; or n += 10;)
    n = n * ;
}

int main() {
    // Put any starting number you want for val!
    int val = 21;
    updateValue(val);
    std::cout << val << std::endl;
    return 0;
}`,
      solutionCode: `#include <iostream>

void updateValue(int& n) {
    n = n * 2;
}

int main() {
    int val = 21;
    updateValue(val);
    std::cout << val << std::endl;
    return 0;
}`,
      hint: 'Put any number after *, such as n = n * 3; (or n *= 5; or n += 10;), and try any number for val!',
      simulatedOutput: '42',
      validate(code) {
        const clean = stripCodeComments(code, 'c');
        const fnMatch = /void\s+(\w+)\s*\(\s*(?:int|double|float)\s*&\s*(\w+)\s*\)\s*\{([\s\S]*?)\}/.exec(clean);
        if (!fnMatch) {
          return { ok: false, message: 'Keep the pass-by-reference function signature: void updateValue(int& n) { ... }' };
        }
        const [, fnName, param, fnBody] = fnMatch;
        const compound = new RegExp(`\\b${param}\\s*(\\*=|\\+=|-=|\\/=)\\s*(-?\\d+(?:\\.\\d+)?)\\s*;`).exec(fnBody);
        const binaryRight = new RegExp(`\\b${param}\\s*=\\s*${param}\\s*([*+\\-/])\\s*(-?\\d+(?:\\.\\d+)?)\\s*;`).exec(fnBody);
        const binaryLeft = new RegExp(`\\b${param}\\s*=\\s*(-?\\d+(?:\\.\\d+)?)\\s*([*+])\\s*${param}\\s*;`).exec(fnBody);

        let op = null;
        let num = null;
        if (compound) {
          op = compound[1][0];
          num = Number(compound[2]);
        } else if (binaryRight) {
          op = binaryRight[1];
          num = Number(binaryRight[2]);
        } else if (binaryLeft) {
          op = binaryLeft[2];
          num = Number(binaryLeft[1]);
        }
        if (!op || num === null) {
          return { ok: false, message: `Enter any number to modify ${param} inside ${fnName} (e.g., ${param} = ${param} * 2; or ${param} += 10;).` };
        }

        const valMatch = /\b(?:int|double|float)\s+(\w+)\s*=\s*(-?\d+(?:\.\d+)?)\s*;/.exec(clean);
        if (!valMatch) {
          return { ok: false, message: 'Assign any starting number to val inside main() (e.g., int val = 21;).' };
        }
        const valVar = valMatch[1];
        let val = Number(valMatch[2]);
        if (!new RegExp(`\\b${fnName}\\s*\\(\\s*${valVar}\\s*\\)\\s*;`).test(clean)) {
          return { ok: false, message: `Call ${fnName}(${valVar}); inside main().` };
        }
        if (op === '*') val *= num;
        else if (op === '+') val += num;
        else if (op === '-') val -= num;
        else if (op === '/' && num !== 0) val = Math.trunc(val / num);
        val = Number(val.toFixed(6));

        return {
          ok: true,
          message: `Reference mastered! ${valVar} was updated in-place to ${val}.`,
          output: String(val)
        };
      }
    }
  ]
};

/* ==========================================================================
   Application State, Storage & DOM Elements
   ========================================================================== */
let currentLangId = null;
let currentMode = 'learn'; // 'learn' | 'practice'
let currentCategoryIndex = 0;
let currentChallengeIndex = 0;
let solvedChallenges = loadSolvedState();

function loadSolvedState() {
  try {
    const raw = localStorage.getItem('knox_solved_challenges');
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveSolvedState() {
  try {
    localStorage.setItem('knox_solved_challenges', JSON.stringify(solvedChallenges));
  } catch {
    // Ignore storage quota / sandbox restrictions
  }
}

const dashboardView = document.getElementById('dashboardView');
const tutorialView = document.getElementById('tutorialView');
const languageGrid = document.getElementById('languageGrid');
const navLanguagePills = document.getElementById('navLanguagePills');
const backToDashboardBtn = document.getElementById('backToDashboardBtn');
const brandHome = document.getElementById('brandHome');

const sidebarLanguageHeader = document.getElementById('sidebarLanguageHeader');
const mobileSidebarToggleBtn = document.getElementById('mobileSidebarToggleBtn');
const sidebarCollapsibleBody = document.getElementById('sidebarCollapsibleBody');
const tabLearnBtn = document.getElementById('tabLearnBtn');
const tabPracticeBtn = document.getElementById('tabPracticeBtn');
const learnSidebarPanel = document.getElementById('learnSidebarPanel');
const practiceSidebarPanel = document.getElementById('practiceSidebarPanel');

const categorySearchInput = document.getElementById('categorySearchInput');
const categoryList = document.getElementById('categoryList');
const practiceList = document.getElementById('practiceList');
const practiceProgressText = document.getElementById('practiceProgressText');
const practiceProgressFill = document.getElementById('practiceProgressFill');

// Learn Content Elements
const lessonContent = document.getElementById('lessonContent');
const lessonBreadcrumbs = document.getElementById('lessonBreadcrumbs');
const goToPracticeFromLessonBtn = document.getElementById('goToPracticeFromLessonBtn');
const lessonTitle = document.getElementById('lessonTitle');
const lessonDescription = document.getElementById('lessonDescription');
const lessonKeyPoints = document.getElementById('lessonKeyPoints');
const codeFilename = document.getElementById('codeFilename');
const sampleCodeBlock = document.getElementById('sampleCodeBlock');
const copyCodeBtn = document.getElementById('copyCodeBtn');
const outputTypeBadge = document.getElementById('outputTypeBadge');
const outputBody = document.getElementById('outputBody');
const prevTopicBtn = document.getElementById('prevTopicBtn');
const nextTopicBtn = document.getElementById('nextTopicBtn');

// Practice Content Elements
const practiceContent = document.getElementById('practiceContent');
const practiceBreadcrumbs = document.getElementById('practiceBreadcrumbs');
const practiceStatusPill = document.getElementById('practiceStatusPill');
const practiceTitle = document.getElementById('practiceTitle');
const practicePrompt = document.getElementById('practicePrompt');
const practiceTaskDetail = document.getElementById('practiceTaskDetail');
const practiceFilename = document.getElementById('practiceFilename');
const practiceCodeInput = document.getElementById('practiceCodeInput');
const resetPracticeBtn = document.getElementById('resetPracticeBtn');
const hintPracticeBtn = document.getElementById('hintPracticeBtn');
const solutionPracticeBtn = document.getElementById('solutionPracticeBtn');
const practiceHintBox = document.getElementById('practiceHintBox');
const practiceHintText = document.getElementById('practiceHintText');
const runCheckBtn = document.getElementById('runCheckBtn');
const practiceFeedback = document.getElementById('practiceFeedback');
const practiceOutputBadge = document.getElementById('practiceOutputBadge');
const practiceOutputBody = document.getElementById('practiceOutputBody');
const prevChallengeBtn = document.getElementById('prevChallengeBtn');
const nextChallengeBtn = document.getElementById('nextChallengeBtn');

/* ==========================================================================
   Initialization & Event Listeners
   ========================================================================== */
function initApp() {
  renderNavPills();
  renderDashboardCards();

  backToDashboardBtn.addEventListener('click', showDashboard);
  brandHome.addEventListener('click', showDashboard);
  brandHome.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      showDashboard();
    }
  });

  tabLearnBtn.addEventListener('click', () => setMode('learn'));
  tabPracticeBtn.addEventListener('click', () => setMode('practice'));
  goToPracticeFromLessonBtn.addEventListener('click', () => {
    setMode('practice');
    scrollContentOnMobile(practiceContent);
  });

  if (mobileSidebarToggleBtn) {
    mobileSidebarToggleBtn.addEventListener('click', toggleMobileSidebar);
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth > 960 && sidebarCollapsibleBody) {
      setMobileSidebarExpanded(true);
    }
  });

  categorySearchInput.addEventListener('input', (e) => {
    renderCategorySidebar(e.target.value.trim().toLowerCase());
  });

  copyCodeBtn.addEventListener('click', handleCopyCode);

  prevTopicBtn.addEventListener('click', () => {
    if (currentCategoryIndex > 0) {
      selectCategory(currentCategoryIndex - 1, true);
    }
  });

  nextTopicBtn.addEventListener('click', () => {
    const lang = TUTORIAL_DATA[currentLangId];
    if (lang && currentCategoryIndex < lang.categories.length - 1) {
      selectCategory(currentCategoryIndex + 1, true);
    }
  });

  // Practice Controls
  practiceCodeInput.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const start = practiceCodeInput.selectionStart;
      const end = practiceCodeInput.selectionEnd;
      practiceCodeInput.value =
        practiceCodeInput.value.substring(0, start) +
        '  ' +
        practiceCodeInput.value.substring(end);
      practiceCodeInput.selectionStart = practiceCodeInput.selectionEnd = start + 2;
    }
  });

  resetPracticeBtn.addEventListener('click', () => {
    const challenge = getCurrentChallenge();
    if (!challenge) return;
    practiceCodeInput.value = challenge.starterCode;
    practiceFeedback.classList.add('hidden');
    practiceHintBox.classList.add('hidden');
  });

  hintPracticeBtn.addEventListener('click', () => {
    practiceHintBox.classList.toggle('hidden');
  });

  solutionPracticeBtn.addEventListener('click', () => {
    const challenge = getCurrentChallenge();
    if (!challenge) return;
    practiceCodeInput.value = challenge.solutionCode;
  });

  runCheckBtn.addEventListener('click', handleRunAndCheck);

  prevChallengeBtn.addEventListener('click', () => {
    if (currentChallengeIndex > 0) {
      selectChallenge(currentChallengeIndex - 1, true);
    }
  });

  nextChallengeBtn.addEventListener('click', () => {
    const challenges = PRACTICE_DATA[currentLangId] || [];
    if (currentChallengeIndex < challenges.length - 1) {
      selectChallenge(currentChallengeIndex + 1, true);
    }
  });
}

function toggleMobileSidebar() {
  if (!sidebarCollapsibleBody) return;
  const isHidden = sidebarCollapsibleBody.classList.contains('hidden');
  setMobileSidebarExpanded(isHidden);
}

function setMobileSidebarExpanded(expanded) {
  if (!sidebarCollapsibleBody || !mobileSidebarToggleBtn) return;
  const topRow = mobileSidebarToggleBtn.closest('.sidebar-top-row');
  const labelWord = currentMode === 'practice' ? 'Exercises' : 'Topics';
  if (expanded) {
    sidebarCollapsibleBody.classList.remove('hidden');
    mobileSidebarToggleBtn.setAttribute('aria-expanded', 'true');
    mobileSidebarToggleBtn.innerHTML = `Hide ${labelWord} &#9650;`;
    if (topRow) topRow.classList.remove('collapsed');
  } else {
    sidebarCollapsibleBody.classList.add('hidden');
    mobileSidebarToggleBtn.setAttribute('aria-expanded', 'false');
    mobileSidebarToggleBtn.innerHTML = `Show ${labelWord} &#9660;`;
    if (topRow) topRow.classList.add('collapsed');
  }
}

function scrollContentOnMobile(targetEl) {
  if (window.innerWidth <= 960 && targetEl) {
    targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function getCurrentChallenge() {
  const list = PRACTICE_DATA[currentLangId];
  return list ? list[currentChallengeIndex] : null;
}

function getSolvedCountForLang(langId) {
  const list = PRACTICE_DATA[langId] || [];
  return list.filter((ch) => solvedChallenges[ch.id]).length;
}

function renderNavPills() {
  navLanguagePills.innerHTML = '';
  let activePill = null;
  Object.values(TUTORIAL_DATA).forEach((lang) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    const isActive = currentLangId === lang.id;
    btn.className = `lang-pill ${isActive ? 'active' : ''}`;
    btn.textContent = lang.name;
    btn.addEventListener('click', () => selectLanguage(lang.id, currentMode));
    navLanguagePills.appendChild(btn);
    if (isActive) activePill = btn;
  });

  if (activePill && window.innerWidth <= 960) {
    activePill.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }
}

function renderDashboardCards() {
  languageGrid.innerHTML = '';
  Object.values(TUTORIAL_DATA).forEach((lang) => {
    const card = document.createElement('div');
    card.className = 'language-card';
    card.style.setProperty('--card-accent', lang.color);
    card.style.setProperty('--card-accent-soft', lang.colorSoft);

    const previewTagsHtml = lang.categories
      .slice(0, 4)
      .map((cat) => `<span class="preview-tag">${cat.title}</span>`)
      .join('');

    const totalPrac = (PRACTICE_DATA[lang.id] || []).length;
    const solvedPrac = getSolvedCountForLang(lang.id);

    card.innerHTML = `
      <div>
        <div class="card-top">
          <div class="lang-icon-box">${lang.name}</div>
          <span class="topic-count-badge">${lang.categories.length} Topics &bull; ${solvedPrac}/${totalPrac} Solved</span>
        </div>
        <h2>${lang.name} Tutorial</h2>
        <p>${lang.description}</p>
        <div class="card-categories-preview">
          ${previewTagsHtml}
        </div>
      </div>
      <div class="card-actions-row">
        <button type="button" class="card-cta" data-action="learn">
          <span>Learn ${lang.name}</span>
          <span>&#8594;</span>
        </button>
        <button type="button" class="card-practice-btn" data-action="practice">
          Practice
        </button>
      </div>
    `;

    card.addEventListener('click', (e) => {
      const practiceBtn = e.target.closest('[data-action="practice"]');
      if (practiceBtn) {
        e.stopPropagation();
        selectLanguage(lang.id, 'practice');
      } else {
        selectLanguage(lang.id, 'learn');
      }
    });

    languageGrid.appendChild(card);
  });
}

function selectLanguage(langId, mode = 'learn') {
  const lang = TUTORIAL_DATA[langId];
  if (!lang) return;

  currentLangId = langId;
  currentCategoryIndex = 0;
  currentChallengeIndex = 0;
  categorySearchInput.value = '';

  // Apply language accent color to root
  document.documentElement.style.setProperty('--accent', lang.color);
  document.documentElement.style.setProperty('--accent-soft', lang.colorSoft);

  dashboardView.classList.add('hidden');
  tutorialView.classList.remove('hidden');
  backToDashboardBtn.classList.remove('hidden');

  updateSidebarHeader();
  setMobileSidebarExpanded(true);
  renderNavPills();
  renderCategorySidebar('');
  selectCategory(0, false);
  renderPracticeSidebar();
  selectChallenge(0, false);
  setMode(mode);

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateSidebarHeader() {
  const lang = TUTORIAL_DATA[currentLangId];
  if (!lang) return;
  const pracCount = (PRACTICE_DATA[currentLangId] || []).length;
  sidebarLanguageHeader.innerHTML = `
    <div class="sidebar-lang-badge">${lang.name}</div>
    <div class="sidebar-lang-info">
      <h3>${lang.name}</h3>
      <span>${lang.categories.length} Topics &bull; ${pracCount} Exercises</span>
    </div>
  `;
}

function setMode(mode) {
  currentMode = mode === 'practice' ? 'practice' : 'learn';
  const lang = TUTORIAL_DATA[currentLangId];

  if (currentMode === 'practice') {
    tabPracticeBtn.classList.add('active');
    tabPracticeBtn.setAttribute('aria-selected', 'true');
    tabLearnBtn.classList.remove('active');
    tabLearnBtn.setAttribute('aria-selected', 'false');

    learnSidebarPanel.classList.add('hidden');
    practiceSidebarPanel.classList.remove('hidden');
    lessonContent.classList.add('hidden');
    practiceContent.classList.remove('hidden');

    if (lang) document.title = `KNOX — Practice ${lang.name}`;
    renderPracticeSidebar();
  } else {
    tabLearnBtn.classList.add('active');
    tabLearnBtn.setAttribute('aria-selected', 'true');
    tabPracticeBtn.classList.remove('active');
    tabPracticeBtn.setAttribute('aria-selected', 'false');

    practiceSidebarPanel.classList.add('hidden');
    learnSidebarPanel.classList.remove('hidden');
    practiceContent.classList.add('hidden');
    lessonContent.classList.remove('hidden');

    if (lang) document.title = `KNOX — ${lang.name} Tutorial`;
  }

  if (sidebarCollapsibleBody) {
    const isOpen = !sidebarCollapsibleBody.classList.contains('hidden');
    setMobileSidebarExpanded(isOpen);
  }
}

function renderCategorySidebar(filterQuery = '') {
  const lang = TUTORIAL_DATA[currentLangId];
  if (!lang) return;

  categoryList.innerHTML = '';

  lang.categories.forEach((cat, idx) => {
    if (filterQuery && !cat.title.toLowerCase().includes(filterQuery)) {
      return;
    }

    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `category-item ${idx === currentCategoryIndex ? 'active' : ''}`;
    btn.innerHTML = `
      <span class="category-num">0${idx + 1}</span>
      <span>${cat.title}</span>
    `;
    btn.addEventListener('click', () => selectCategory(idx, true));
    li.appendChild(btn);
    categoryList.appendChild(li);
  });
}

function selectCategory(index, shouldScroll = false) {
  const lang = TUTORIAL_DATA[currentLangId];
  if (!lang || !lang.categories[index]) return;

  currentCategoryIndex = index;
  const category = lang.categories[index];

  renderCategorySidebar(categorySearchInput.value.trim().toLowerCase());

  lessonBreadcrumbs.textContent = `${lang.name}  /  Part ${index + 1} of ${lang.categories.length}`;
  goToPracticeFromLessonBtn.innerHTML = `Practice ${lang.name} &#8594;`;
  lessonTitle.textContent = category.title;
  lessonDescription.textContent = category.description;

  lessonKeyPoints.innerHTML = category.keyPoints
    .map((point) => `<li>${point}</li>`)
    .join('');

  codeFilename.textContent = category.filename;
  sampleCodeBlock.textContent = category.code;
  copyCodeBtn.textContent = 'Copy Code';

  renderLessonOutput(lang.id, category);

  prevTopicBtn.disabled = index === 0;
  nextTopicBtn.disabled = index === lang.categories.length - 1;

  if (shouldScroll) {
    scrollContentOnMobile(lessonContent);
  }
}

function renderLessonOutput(langId, category) {
  if (!outputBody || !outputTypeBadge) return;

  outputTypeBadge.textContent = category.outputType || 'Result';
  outputBody.innerHTML = '';

  if (category.isHtmlPreview) {
    const previewContainer = document.createElement('div');
    previewContainer.className = 'output-browser-preview';
    outputBody.appendChild(previewContainer);

    const shadow = previewContainer.attachShadow({ mode: 'open' });
    if (langId === 'css') {
      shadow.innerHTML = `
        <style>
          :host { display: block; font-family: 'Segoe UI', system-ui, sans-serif; color: #0f172a; }
          ${category.code}
        </style>
        ${category.demoHtml || category.output || ''}
      `;
    } else {
      let htmlMarkup = category.previewMarkup || category.code;
      const bodyMatch = htmlMarkup.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
      if (bodyMatch) {
        htmlMarkup = bodyMatch[1].trim();
      }
      shadow.innerHTML = `
        <style>
          :host { display: block; font-family: 'Segoe UI', system-ui, sans-serif; color: #0f172a; }
        </style>
        ${htmlMarkup}
      `;
      shadow.querySelectorAll('form').forEach((formEl) => {
        formEl.addEventListener('submit', (e) => e.preventDefault());
      });
    }
  } else {
    const term = document.createElement('div');
    term.className = 'output-terminal';
    term.textContent = category.output;
    outputBody.appendChild(term);
  }
}

/* ==========================================================================
   Practice Mode Rendering & Code Checker
   ========================================================================== */
function renderPracticeSidebar() {
  const challenges = PRACTICE_DATA[currentLangId] || [];
  const solvedCount = getSolvedCountForLang(currentLangId);
  const pct = challenges.length ? Math.round((solvedCount / challenges.length) * 100) : 0;

  practiceProgressText.textContent = `${solvedCount} / ${challenges.length}`;
  practiceProgressFill.style.width = `${pct}%`;

  practiceList.innerHTML = '';
  challenges.forEach((ch, idx) => {
    const isSolved = Boolean(solvedChallenges[ch.id]);
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `category-item ${idx === currentChallengeIndex ? 'active' : ''}`;
    btn.innerHTML = `
      <span class="category-num">0${idx + 1}</span>
      <span>${ch.title}</span>
      ${isSolved ? '<span class="check-badge">&#10003;</span>' : ''}
    `;
    btn.addEventListener('click', () => selectChallenge(idx, true));
    li.appendChild(btn);
    practiceList.appendChild(li);
  });
}

function selectChallenge(index, shouldScroll = false) {
  const lang = TUTORIAL_DATA[currentLangId];
  const challenges = PRACTICE_DATA[currentLangId] || [];
  const ch = challenges[index];
  if (!lang || !ch) return;

  currentChallengeIndex = index;
  renderPracticeSidebar();

  practiceBreadcrumbs.textContent = `${lang.name} Practice  /  Exercise ${index + 1} of ${challenges.length}`;
  practiceTitle.textContent = ch.title;
  practicePrompt.textContent = ch.prompt;
  practiceTaskDetail.innerHTML = ch.taskDetail;
  practiceFilename.textContent = ch.filename;
  practiceCodeInput.value = ch.starterCode;

  practiceHintText.textContent = ch.hint;
  practiceHintBox.classList.add('hidden');
  practiceFeedback.classList.add('hidden');

  updateChallengeStatusBadge(ch.id);

  practiceOutputBadge.textContent = 'Ready';
  practiceOutputBody.innerHTML = `
    <p class="output-placeholder">
      Write your ${lang.name} solution above and click <strong>Run &amp; Check Answer</strong>.
    </p>
  `;

  prevChallengeBtn.disabled = index === 0;
  nextChallengeBtn.disabled = index === challenges.length - 1;

  if (shouldScroll) {
    scrollContentOnMobile(practiceContent);
  }
}

function updateChallengeStatusBadge(challengeId) {
  if (solvedChallenges[challengeId]) {
    practiceStatusPill.textContent = 'Solved ✓';
    practiceStatusPill.classList.add('solved');
  } else {
    practiceStatusPill.textContent = 'Not Solved Yet';
    practiceStatusPill.classList.remove('solved');
  }
}

function handleRunAndCheck() {
  const ch = getCurrentChallenge();
  if (!ch) return;

  const userCode = practiceCodeInput.value;
  const result = ch.validate(userCode);

  practiceFeedback.classList.remove('hidden', 'success', 'error');
  if (result.ok) {
    practiceFeedback.classList.add('success');
    practiceFeedback.textContent = `✓ ${result.message}`;
    solvedChallenges[ch.id] = true;
    saveSolvedState();
    updateChallengeStatusBadge(ch.id);
    renderPracticeSidebar();
    renderDashboardCards();
  } else {
    practiceFeedback.classList.add('error');
    practiceFeedback.textContent = `✕ ${result.message}`;
  }

  // Render live output / simulation
  if (ch.previewMode === 'html') {
    practiceOutputBadge.textContent = 'Live Browser Render';
    practiceOutputBody.innerHTML = '';
    const frame = document.createElement('iframe');
    frame.className = 'live-preview-frame';
    frame.setAttribute('sandbox', '');
    const baseStyle = `<style>body{font-family:sans-serif;color:#0f172a;padding:12px;margin:0;}</style>`;
    if (/<html[\s>]/i.test(userCode)) {
      frame.srcdoc = /<\/head>/i.test(userCode)
        ? userCode.replace(/<\/head>/i, `${baseStyle}</head>`)
        : `${baseStyle}${userCode}`;
    } else {
      frame.srcdoc = `<!DOCTYPE html><html><head>${baseStyle}</head><body>${userCode}</body></html>`;
    }
    practiceOutputBody.appendChild(frame);
  } else if (ch.previewMode === 'css') {
    practiceOutputBadge.textContent = 'Live Styled Render';
    practiceOutputBody.innerHTML = '';
    const frame = document.createElement('iframe');
    frame.className = 'live-preview-frame';
    frame.setAttribute('sandbox', '');
    frame.srcdoc = `<!DOCTYPE html><html><head><style>${userCode}</style></head><body style="padding:12px;margin:0;">${ch.previewHtml}</body></html>`;
    practiceOutputBody.appendChild(frame);
  } else {
    practiceOutputBadge.textContent = result.ok ? 'Execution Output' : 'Check Failed';
    practiceOutputBody.innerHTML = `<div class="output-terminal"></div>`;
    const term = practiceOutputBody.querySelector('.output-terminal');
    term.textContent = result.ok
      ? (result.output ?? ch.simulatedOutput)
      : `Fix the issue above and run again to see your program's output.`;
  }
}

function showDashboard() {
  currentLangId = null;
  currentMode = 'learn';
  document.title = 'KNOX — Interactive Coding Tutorials';
  document.documentElement.style.setProperty('--accent', '#2563eb');
  document.documentElement.style.setProperty('--accent-soft', 'rgba(37, 99, 235, 0.1)');

  tutorialView.classList.add('hidden');
  dashboardView.classList.remove('hidden');
  backToDashboardBtn.classList.add('hidden');

  renderNavPills();
  renderDashboardCards();
}

function handleCopyCode() {
  const codeText = sampleCodeBlock.textContent;
  navigator.clipboard.writeText(codeText).then(() => {
    copyCodeBtn.textContent = 'Copied!';
    setTimeout(() => {
      copyCodeBtn.textContent = 'Copy Code';
    }, 1800);
  });
}

// Start the app
document.addEventListener('DOMContentLoaded', initApp);

