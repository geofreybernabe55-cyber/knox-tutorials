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
   Practice Exercises Data (4 Progressive Challenges per Language)
   ========================================================================== */
const PRACTICE_DATA = {
  html: [
    {
      id: 'html-prac-1',
      title: 'Heading & Paragraph',
      filename: 'exercise1.html',
      prompt: 'Practice creating a main heading and a descriptive paragraph in HTML.',
      taskDetail:
        'Add an <code>&lt;h1&gt;</code> element containing the text <code>KNOX Academy</code> and a <code>&lt;p&gt;</code> element with any welcome message.',
      starterCode: `<!-- Write your HTML below -->\n\n`,
      solutionCode: `<h1>KNOX Academy</h1>\n<p>Welcome to interactive HTML coding!</p>`,
      hint: 'Use <h1>KNOX Academy</h1> on the first line, followed by <p>Your text here</p>.',
      previewMode: 'html',
      validate(code) {
        const hasH1 = /<h1[^>]*>[\s\S]*?knox\s+academy[\s\S]*?<\/h1>/i.test(code);
        const hasP = /<p[^>]*>[\s\S]+?<\/p>/i.test(code);
        if (!hasH1) {
          return { ok: false, message: 'Make sure you include an <h1> tag containing "KNOX Academy".' };
        }
        if (!hasP) {
          return { ok: false, message: 'Almost there! Add a non-empty <p>...</p> paragraph below your heading.' };
        }
        return { ok: true, message: 'Great job! Your heading and paragraph are structured properly.' };
      }
    },
    {
      id: 'html-prac-2',
      title: 'Create a Hyperlink',
      filename: 'exercise2.html',
      prompt: 'Links connect pages on the web using the anchor (<a>) tag and href attribute.',
      taskDetail:
        'Create an <code>&lt;a&gt;</code> element with <code>href="https://www.w3schools.com"</code> and clickable text <code>Visit W3Schools</code>.',
      starterCode: `<!-- Create your hyperlink here -->\n<p>\n  \n</p>`,
      solutionCode: `<p>\n  <a href="https://www.w3schools.com">Visit W3Schools</a>\n</p>`,
      hint: 'Write <a href="https://www.w3schools.com">Visit W3Schools</a> inside or alongside the paragraph.',
      previewMode: 'html',
      validate(code) {
        const hasHref = /<a\s+[^>]*href\s*=\s*["']https?:\/\/(www\.)?w3schools\.com\/?["'][^>]*>[\s\S]*?visit\s+w3schools[\s\S]*?<\/a>/i.test(code);
        if (!hasHref) {
          return {
            ok: false,
            message: 'Include an <a> tag with href="https://www.w3schools.com" and the text "Visit W3Schools".'
          };
        }
        return { ok: true, message: 'Awesome! Your anchor hyperlink to w3schools.com is valid and ready to click.' };
      }
    },
    {
      id: 'html-prac-3',
      title: 'Unordered List of Skills',
      filename: 'exercise3.html',
      prompt: 'Group related items into a bulleted list using <ul> and <li> tags.',
      taskDetail:
        'Create a <code>&lt;ul&gt;</code> unordered list with at least <strong>3</strong> <code>&lt;li&gt;</code> list items (for example: HTML, CSS, Python).',
      starterCode: `<h3>My Coding Stack</h3>\n<!-- Add your <ul> and 3 <li> items below -->\n`,
      solutionCode: `<h3>My Coding Stack</h3>\n<ul>\n  <li>HTML</li>\n  <li>CSS</li>\n  <li>Python</li>\n</ul>`,
      hint: 'Wrap three <li>Item</li> tags inside an opening <ul> and closing </ul>.',
      previewMode: 'html',
      validate(code) {
        const hasUl = /<ul[^>]*>[\s\S]*<\/ul>/i.test(code);
        const liMatches = code.match(/<li[^>]*>[\s\S]+?<\/li>/gi) || [];
        if (!hasUl) {
          return { ok: false, message: 'Remember to wrap your list items inside <ul>...</ul>.' };
        }
        if (liMatches.length < 3) {
          return { ok: false, message: `Found ${liMatches.length} <li> item(s). Add at least 3 <li> items!` };
        }
        return { ok: true, message: 'Well done! Your unordered list renders cleanly.' };
      }
    },
    {
      id: 'html-prac-4',
      title: 'Build a Sign-Up Form',
      filename: 'exercise4.html',
      prompt: 'Forms collect user details with <input> controls and a submit <button>.',
      taskDetail:
        'Inside the <code>&lt;form&gt;</code>, add an <code>&lt;input type="email"&gt;</code> field and a <code>&lt;button type="submit"&gt;</code> button.',
      starterCode: `<form>\n  <label>Email:</label>\n  <!-- Add email input and submit button -->\n\n</form>`,
      solutionCode: `<form>\n  <label>Email:</label>\n  <input type="email" placeholder="you@knox.dev" required>\n  <button type="submit">Join KNOX</button>\n</form>`,
      hint: 'Include <input type="email"> and <button type="submit">Join</button> inside <form>...</form>.',
      previewMode: 'html',
      validate(code) {
        const hasEmail = /<input[^>]*type\s*=\s*["']email["'][^>]*>/i.test(code);
        const hasBtn = /<button[^>]*type\s*=\s*["']submit["'][^>]*>[\s\S]+?<\/button>/i.test(code);
        if (!hasEmail) {
          return { ok: false, message: 'Add an <input type="email"> element inside the form.' };
        }
        if (!hasBtn) {
          return { ok: false, message: 'Add a <button type="submit">...</button> with label text.' };
        }
        return { ok: true, message: 'Excellent! Your HTML sign-up form is complete.' };
      }
    }
  ],

  css: [
    {
      id: 'css-prac-1',
      title: 'Style Heading Color & Size',
      filename: 'style1.css',
      prompt: 'Apply color and typography properties to a CSS class selector.',
      taskDetail:
        'Target <code>.banner-title</code> and set <code>color: #2563eb;</code> and <code>font-size: 26px;</code>.',
      starterCode: `.banner-title {\n  /* Add color and font-size below */\n  \n}`,
      solutionCode: `.banner-title {\n  color: #2563eb;\n  font-size: 26px;\n}`,
      hint: 'Inside .banner-title { }, write color: #2563eb; and font-size: 26px;',
      previewMode: 'css',
      previewHtml: `<h2 class="banner-title" style="margin:0;font-family:sans-serif;">KNOX Styled Title</h2>`,
      validate(code) {
        const hasSelector = /\.banner-title\s*\{[\s\S]*\}/.test(code);
        const hasColor = /color\s*:\s*#2563eb\s*;/i.test(code);
        const hasSize = /font-size\s*:\s*26px\s*;/i.test(code);
        if (!hasSelector) return { ok: false, message: 'Keep the .banner-title { ... } selector block.' };
        if (!hasColor) return { ok: false, message: 'Set color: #2563eb; inside .banner-title.' };
        if (!hasSize) return { ok: false, message: 'Set font-size: 26px; inside .banner-title.' };
        return { ok: true, message: 'Nice styling! Both color and font-size are applied.' };
      }
    },
    {
      id: 'css-prac-2',
      title: 'Card Padding & Rounded Corners',
      filename: 'style2.css',
      prompt: 'Use Box Model properties to give a card breathing room and smooth corners.',
      taskDetail:
        'Style <code>.info-box</code> with <code>padding: 20px;</code>, <code>border-radius: 12px;</code>, and <code>background: #eff6ff;</code>.',
      starterCode: `.info-box {\n  border: 2px solid #3b82f6;\n  /* Add padding, border-radius, and background */\n  \n}`,
      solutionCode: `.info-box {\n  border: 2px solid #3b82f6;\n  padding: 20px;\n  border-radius: 12px;\n  background: #eff6ff;\n}`,
      hint: 'Add padding: 20px; border-radius: 12px; and background: #eff6ff; (or background-color).',
      previewMode: 'css',
      previewHtml: `<div class="info-box" style="font-family:sans-serif;color:#1e293b;"><strong>KNOX Card</strong> — Clean Box Model Spacing</div>`,
      validate(code) {
        const hasPadding = /padding\s*:\s*20px\s*;/i.test(code);
        const hasRadius = /border-radius\s*:\s*12px\s*;/i.test(code);
        const hasBg = /background(-color)?\s*:\s*#eff6ff\s*;/i.test(code);
        if (!hasPadding) return { ok: false, message: 'Add padding: 20px; to .info-box.' };
        if (!hasRadius) return { ok: false, message: 'Add border-radius: 12px; for rounded corners.' };
        if (!hasBg) return { ok: false, message: 'Add background: #eff6ff; (or background-color: #eff6ff;).' };
        return { ok: true, message: 'Spot on! Your card spacing and rounded corners look crisp.' };
      }
    },
    {
      id: 'css-prac-3',
      title: 'Flexbox Row Alignment',
      filename: 'style3.css',
      prompt: 'Arrange navigation pills horizontally with space between them using Flexbox.',
      taskDetail:
        'In <code>.nav-row</code>, set <code>display: flex;</code> and <code>justify-content: space-between;</code>.',
      starterCode: `.nav-row {\n  padding: 12px;\n  background: #f1f5f9;\n  /* Enable flexbox and space-between */\n  \n}\n.pill { background: #2563eb; color: #fff; padding: 6px 12px; border-radius: 6px; font-family: sans-serif; }`,
      solutionCode: `.nav-row {\n  padding: 12px;\n  background: #f1f5f9;\n  display: flex;\n  justify-content: space-between;\n}\n.pill { background: #2563eb; color: #fff; padding: 6px 12px; border-radius: 6px; font-family: sans-serif; }`,
      hint: 'Add display: flex; and justify-content: space-between; inside .nav-row.',
      previewMode: 'css',
      previewHtml: `<div class="nav-row"><span class="pill">KNOX</span><span class="pill">Tutorials</span><span class="pill">Practice</span></div>`,
      validate(code) {
        const hasFlex = /display\s*:\s*flex\s*;/i.test(code);
        const hasJustify = /justify-content\s*:\s*space-between\s*;/i.test(code);
        if (!hasFlex) return { ok: false, message: 'Add display: flex; inside .nav-row.' };
        if (!hasJustify) return { ok: false, message: 'Add justify-content: space-between; to distribute the items.' };
        return { ok: true, message: 'Perfect Flexbox layout!' };
      }
    },
    {
      id: 'css-prac-4',
      title: 'Three-Column CSS Grid',
      filename: 'style4.css',
      prompt: 'Build an equal 3-column layout using CSS Grid.',
      taskDetail:
        'Inside <code>.grid-box</code>, set <code>display: grid;</code>, <code>grid-template-columns: repeat(3, 1fr);</code>, and <code>gap: 10px;</code>.',
      starterCode: `.grid-box {\n  /* Define 3-column CSS Grid with 10px gap */\n  \n}\n.cell { background: #dbeafe; color: #1e40af; padding: 12px; text-align: center; border-radius: 6px; font-family: sans-serif; font-weight: bold; }`,
      solutionCode: `.grid-box {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n}\n.cell { background: #dbeafe; color: #1e40af; padding: 12px; text-align: center; border-radius: 6px; font-family: sans-serif; font-weight: bold; }`,
      hint: 'Write display: grid; grid-template-columns: repeat(3, 1fr); and gap: 10px;',
      previewMode: 'css',
      previewHtml: `<div class="grid-box"><div class="cell">1</div><div class="cell">2</div><div class="cell">3</div></div>`,
      validate(code) {
        const hasGrid = /display\s*:\s*grid\s*;/i.test(code);
        const hasCols = /grid-template-columns\s*:\s*(repeat\(\s*3\s*,\s*1fr\s*\)|1fr\s+1fr\s+1fr)\s*;/i.test(code);
        const hasGap = /gap\s*:\s*10px\s*;/i.test(code);
        if (!hasGrid) return { ok: false, message: 'Set display: grid; on .grid-box.' };
        if (!hasCols) return { ok: false, message: 'Set grid-template-columns: repeat(3, 1fr); for 3 equal columns.' };
        if (!hasGap) return { ok: false, message: 'Add gap: 10px; between grid cells.' };
        return { ok: true, message: 'Awesome! Your 3-column CSS Grid is responsive and clean.' };
      }
    }
  ],

  java: [
    {
      id: 'java-prac-1',
      title: 'Print a Welcome Message',
      filename: 'Practice1.java',
      prompt: 'Output text to the standard console inside Java\'s main method.',
      taskDetail:
        'Use <code>System.out.println(...)</code> to print the exact message <code>Hello KNOX</code>.',
      starterCode: `public class Practice1 {\n    public static void main(String[] args) {\n        // Print "Hello KNOX" below\n        \n    }\n}`,
      solutionCode: `public class Practice1 {\n    public static void main(String[] args) {\n        System.out.println("Hello KNOX");\n    }\n}`,
      hint: 'Write System.out.println("Hello KNOX"); (remember the semicolon at the end!).',
      simulatedOutput: 'Hello KNOX',
      validate(code) {
        if (!/System\.out\.print(ln)?\s*\(\s*"Hello KNOX"\s*\)\s*;/.test(code)) {
          return {
            ok: false,
            message: 'Use System.out.println("Hello KNOX"); with exact capitalization and a trailing semicolon (;).'
          };
        }
        return { ok: true, message: 'Compiled & executed! Output matches "Hello KNOX".' };
      }
    },
    {
      id: 'java-prac-2',
      title: 'Sum Two Integers',
      filename: 'Practice2.java',
      prompt: 'Declare integer variables and print their calculated sum.',
      taskDetail:
        'Declare <code>int a = 15;</code> and <code>int b = 25;</code>, then print their sum using <code>System.out.println(a + b);</code>.',
      starterCode: `public class Practice2 {\n    public static void main(String[] args) {\n        // Declare int a = 15 and int b = 25, then print a + b\n        \n    }\n}`,
      solutionCode: `public class Practice2 {\n    public static void main(String[] args) {\n        int a = 15;\n        int b = 25;\n        System.out.println(a + b);\n    }\n}`,
      hint: 'Declare int a = 15; int b = 25; and call System.out.println(a + b);',
      simulatedOutput: '40',
      validate(code) {
        const hasA = /int\s+a\s*=\s*15\s*;/.test(code);
        const hasB = /int\s+b\s*=\s*25\s*;/.test(code);
        const hasPrint = /System\.out\.print(ln)?\s*\(\s*(a\s*\+\s*b|sum)\s*\)\s*;/.test(code);
        if (!hasA || !hasB) return { ok: false, message: 'Declare both int a = 15; and int b = 25;' };
        if (!hasPrint) return { ok: false, message: 'Print the result using System.out.println(a + b);' };
        return { ok: true, message: 'Correct! 15 + 25 outputs 40.' };
      }
    },
    {
      id: 'java-prac-3',
      title: 'Pass / Fail Conditional',
      filename: 'Practice3.java',
      prompt: 'Use an if-else statement in Java to check whether a student passed.',
      taskDetail:
        'Write an <code>if (score &gt;= 75)</code> block that prints <code>"Passed"</code>, and an <code>else</code> block that prints <code>"Try Again"</code>.',
      starterCode: `public class Practice3 {\n    public static void main(String[] args) {\n        int score = 85;\n        // Write your if-else check here\n        \n    }\n}`,
      solutionCode: `public class Practice3 {\n    public static void main(String[] args) {\n        int score = 85;\n        if (score >= 75) {\n            System.out.println("Passed");\n        } else {\n            System.out.println("Try Again");\n        }\n    }\n}`,
      hint: 'Use if (score >= 75) { System.out.println("Passed"); } else { System.out.println("Try Again"); }',
      simulatedOutput: 'Passed',
      validate(code) {
        const hasIf = /if\s*\(\s*score\s*>=\s*75\s*\)/.test(code);
        const hasPassed = /System\.out\.print(ln)?\s*\(\s*"Passed"\s*\)\s*;/.test(code);
        const hasElse = /\belse\b/.test(code);
        if (!hasIf) return { ok: false, message: 'Check the condition using if (score >= 75).' };
        if (!hasPassed || !hasElse) {
          return { ok: false, message: 'Make sure you print "Passed" in the if block and include an else branch.' };
        }
        return { ok: true, message: 'Great conditional logic! Since score is 85, it prints "Passed".' };
      }
    },
    {
      id: 'java-prac-4',
      title: 'For Loop 1 to 5',
      filename: 'Practice4.java',
      prompt: 'Use a standard Java for loop to count from 1 through 5.',
      taskDetail:
        'Write a <code>for</code> loop starting at <code>int i = 1</code> while <code>i &lt;= 5</code> with <code>i++</code>, printing <code>i</code> each iteration.',
      starterCode: `public class Practice4 {\n    public static void main(String[] args) {\n        // Loop i from 1 to 5 and print i\n        \n    }\n}`,
      solutionCode: `public class Practice4 {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 5; i++) {\n            System.out.println(i);\n        }\n    }\n}`,
      hint: 'Write for (int i = 1; i <= 5; i++) { System.out.println(i); }',
      simulatedOutput: '1\n2\n3\n4\n5',
      validate(code) {
        const hasFor = /for\s*\(\s*int\s+i\s*=\s*1\s*;\s*i\s*(<=\s*5|<\s*6)\s*;\s*(i\+\+|\+\+i|i\s*\+=\s*1)\s*\)/.test(code);
        const hasPrint = /System\.out\.print(ln)?\s*\(\s*i\s*\)\s*;/.test(code);
        if (!hasFor) return { ok: false, message: 'Write a for loop header: for (int i = 1; i <= 5; i++).' };
        if (!hasPrint) return { ok: false, message: 'Inside the loop, call System.out.println(i);' };
        return { ok: true, message: 'Loop executed cleanly from 1 to 5!' };
      }
    }
  ],

  python: [
    {
      id: 'py-prac-1',
      title: 'Variables & f-String Output',
      filename: 'practice1.py',
      prompt: 'Store a string in a Python variable and display it with an f-string.',
      taskDetail:
        'Assign <code>platform = "KNOX"</code> and use <code>print(f"Welcome to {platform}")</code>.',
      starterCode: `# Assign platform and print the f-string\n`,
      solutionCode: `platform = "KNOX"\nprint(f"Welcome to {platform}")`,
      hint: 'Set platform = "KNOX" on line 1, then print(f"Welcome to {platform}") on line 2.',
      simulatedOutput: 'Welcome to KNOX',
      validate(code) {
        const hasVar = /platform\s*=\s*["']KNOX["']/.test(code);
        const hasPrint = /print\s*\(\s*f["']Welcome to \{platform\}["']\s*\)/.test(code);
        if (!hasVar) return { ok: false, message: 'Define the variable platform = "KNOX".' };
        if (!hasPrint) return { ok: false, message: 'Use print(f"Welcome to {platform}") to format the output.' };
        return { ok: true, message: 'Clean Pythonic f-string! Output: Welcome to KNOX.' };
      }
    },
    {
      id: 'py-prac-2',
      title: 'Append to a List',
      filename: 'practice2.py',
      prompt: 'Modify a Python list dynamically using the .append() method.',
      taskDetail:
        'Use <code>topics.append("SQL")</code> to add <code>"SQL"</code> to the list, then call <code>print(topics)</code>.',
      starterCode: `topics = ["HTML", "CSS", "Python"]\n# Append "SQL" and print topics\n`,
      solutionCode: `topics = ["HTML", "CSS", "Python"]\ntopics.append("SQL")\nprint(topics)`,
      hint: 'Call topics.append("SQL") and then print(topics).',
      simulatedOutput: "['HTML', 'CSS', 'Python', 'SQL']",
      validate(code) {
        const hasAppend = /topics\.append\s*\(\s*["']SQL["']\s*\)/.test(code);
        const hasPrint = /print\s*\(\s*topics\s*\)/.test(code);
        if (!hasAppend) return { ok: false, message: 'Call topics.append("SQL") to add "SQL" to the list.' };
        if (!hasPrint) return { ok: false, message: 'Call print(topics) on the final line.' };
        return { ok: true, message: 'Great work! "SQL" was appended to the topics list.' };
      }
    },
    {
      id: 'py-prac-3',
      title: 'Write a Reusable Function',
      filename: 'practice3.py',
      prompt: 'Define a Python function with def and return the square of a number.',
      taskDetail:
        'Define <code>def square(n):</code> that returns <code>n * n</code> (or <code>n ** 2</code>), then call <code>print(square(6))</code>.',
      starterCode: `# Define square(n) and print square(6)\n`,
      solutionCode: `def square(n):\n    return n ** 2\n\nprint(square(6))`,
      hint: 'Write def square(n): followed by an indented return n * n, then print(square(6)).',
      simulatedOutput: '36',
      validate(code) {
        const hasDef = /def\s+square\s*\(\s*n\s*\)\s*:/.test(code);
        const hasReturn = /return\s+(n\s*\*\s*n|n\s*\*\*\s*2)/.test(code);
        const hasCall = /print\s*\(\s*square\s*\(\s*6\s*\)\s*\)/.test(code);
        if (!hasDef) return { ok: false, message: 'Start your function with def square(n):' };
        if (!hasReturn) return { ok: false, message: 'Return n * n or n ** 2 inside square(n).' };
        if (!hasCall) return { ok: false, message: 'Test your function with print(square(6)).' };
        return { ok: true, message: 'Awesome! square(6) returned 36.' };
      }
    },
    {
      id: 'py-prac-4',
      title: 'Filter Numbers with a Loop',
      filename: 'practice4.py',
      prompt: 'Combine a Python for loop and an if condition to filter values.',
      taskDetail:
        'Loop through <code>nums</code> with <code>for n in nums:</code> and print only numbers where <code>n &gt; 20</code>.',
      starterCode: `nums = [12, 25, 8, 34]\n# Loop through nums and print values > 20\n`,
      solutionCode: `nums = [12, 25, 8, 34]\nfor n in nums:\n    if n > 20:\n        print(n)`,
      hint: 'Use for n in nums: then indent if n > 20: and indent print(n).',
      simulatedOutput: '25\n34',
      validate(code) {
        const hasFor = /for\s+(\w+)\s+in\s+nums\s*:/.exec(code);
        if (!hasFor) return { ok: false, message: 'Write a loop like: for n in nums:' };
        const v = hasFor[1];
        const hasIf = new RegExp(`if\\s+${v}\\s*>\\s*20\\s*:`).test(code);
        const hasPrint = new RegExp(`print\\s*\\(\\s*${v}\\s*\\)`).test(code);
        if (!hasIf) return { ok: false, message: `Add an indented condition: if ${v} > 20:` };
        if (!hasPrint) return { ok: false, message: `Print the matching variable with print(${v}).` };
        return { ok: true, message: 'Spot on! Only 25 and 34 are printed.' };
      }
    }
  ],

  sql: [
    {
      id: 'sql-prac-1',
      title: 'Select Specific Columns',
      filename: 'query1.sql',
      prompt: 'Retrieve specific columns from the students table using SELECT.',
      taskDetail:
        'Write a SQL query to <code>SELECT full_name, course FROM students;</code>.',
      starterCode: `-- Fetch full_name and course from students\n`,
      solutionCode: `SELECT full_name, course\nFROM students;`,
      hint: 'Write SELECT full_name, course FROM students;',
      simulatedOutput: `full_name                   | course\n----------------------------+-------\nGeofrey M. Bernabe          | SQL\nIrish Kate T. Mercado       | Python\nPrincess Roxanne M. Quitola | HTML`,
      validate(code) {
        const ok = /SELECT\s+full_name\s*,\s*course\s+FROM\s+students\s*;?/i.test(code);
        if (!ok) {
          return { ok: false, message: 'Write: SELECT full_name, course FROM students;' };
        }
        return { ok: true, message: 'Query executed! 3 student rows returned.' };
      }
    },
    {
      id: 'sql-prac-2',
      title: 'Filter Rows with WHERE',
      filename: 'query2.sql',
      prompt: 'Filter high-scoring students using a WHERE clause.',
      taskDetail:
        'Select all columns (<code>*</code>) from <code>students</code> where <code>score &gt;= 90</code>.',
      starterCode: `-- Select all columns from students with score >= 90\n`,
      solutionCode: `SELECT *\nFROM students\nWHERE score >= 90;`,
      hint: 'Use SELECT * FROM students WHERE score >= 90;',
      simulatedOutput: `student_id | full_name                   | score\n-----------+-----------------------------+------\n101        | Geofrey M. Bernabe          | 98\n102        | Irish Kate T. Mercado       | 95\n103        | Princess Roxanne M. Quitola | 93`,
      validate(code) {
        const ok = /SELECT\s+\*\s+FROM\s+students\s+WHERE\s+score\s*>=\s*90\s*;?/i.test(code);
        if (!ok) {
          return { ok: false, message: 'Make sure your query matches: SELECT * FROM students WHERE score >= 90;' };
        }
        return { ok: true, message: 'Great filtering! Only students scoring 90+ were returned.' };
      }
    },
    {
      id: 'sql-prac-3',
      title: 'Insert a New Course Row',
      filename: 'query3.sql',
      prompt: 'Add a new record into the courses table using INSERT INTO.',
      taskDetail:
        'Insert into <code>courses (course_id, title)</code> the values <code>(3, \'C++ Basics\')</code>.',
      starterCode: `-- Insert (3, 'C++ Basics') into courses (course_id, title)\n`,
      solutionCode: `INSERT INTO courses (course_id, title)\nVALUES (3, 'C++ Basics');`,
      hint: "Write INSERT INTO courses (course_id, title) VALUES (3, 'C++ Basics');",
      simulatedOutput: `INSERT 0 1 — 1 row inserted into 'courses':\ncourse_id: 3 | title: 'C++ Basics'`,
      validate(code) {
        const ok = /INSERT\s+INTO\s+courses\s*\(\s*course_id\s*,\s*title\s*\)\s*VALUES\s*\(\s*3\s*,\s*'C\+\+\s+Basics'\s*\)\s*;?/i.test(code);
        if (!ok) {
          return {
            ok: false,
            message: "Use INSERT INTO courses (course_id, title) VALUES (3, 'C++ Basics');"
          };
        }
        return { ok: true, message: 'Row inserted cleanly into courses!' };
      }
    },
    {
      id: 'sql-prac-4',
      title: 'Count Students per Course',
      filename: 'query4.sql',
      prompt: 'Aggregate records per group using COUNT(*) and GROUP BY.',
      taskDetail:
        'Select <code>course</code> and <code>COUNT(*)</code> from <code>students</code>, grouped with <code>GROUP BY course</code>.',
      starterCode: `-- Count students in each course using GROUP BY\n`,
      solutionCode: `SELECT course, COUNT(*)\nFROM students\nGROUP BY course;`,
      hint: 'Write SELECT course, COUNT(*) FROM students GROUP BY course;',
      simulatedOutput: `course | count\n-------+------\nSQL    | 24\nPython | 31\nC++    | 18`,
      validate(code) {
        const ok = /SELECT\s+course\s*,\s*COUNT\s*\(\s*\*\s*\).*FROM\s+students\s+GROUP\s+BY\s+course\s*;?/is.test(code);
        if (!ok) {
          return { ok: false, message: 'Include SELECT course, COUNT(*) FROM students GROUP BY course;' };
        }
        return { ok: true, message: 'Aggregation complete! Grouped counts calculated.' };
      }
    }
  ],

  cpp: [
    {
      id: 'cpp-prac-1',
      title: 'Console Output with std::cout',
      filename: 'practice1.cpp',
      prompt: 'Use the C++ output stream operator (<<) to print a message.',
      taskDetail:
        'Inside <code>main()</code>, use <code>std::cout</code> to output <code>"Welcome to KNOX C++"</code>.',
      starterCode: `#include <iostream>\n\nint main() {\n    // Output "Welcome to KNOX C++" using std::cout\n    \n    return 0;\n}`,
      solutionCode: `#include <iostream>\n\nint main() {\n    std::cout << "Welcome to KNOX C++" << std::endl;\n    return 0;\n}`,
      hint: 'Write std::cout << "Welcome to KNOX C++"; inside main().',
      simulatedOutput: 'Welcome to KNOX C++',
      validate(code) {
        const ok = /(std::)?cout\s*<<\s*"Welcome to KNOX C\+\+"[\s\S]*?;/.test(code);
        if (!ok) {
          return { ok: false, message: 'Use std::cout << "Welcome to KNOX C++"; (don\'t forget the semicolon!).' };
        }
        return { ok: true, message: 'Compiled with g++! Output: Welcome to KNOX C++.' };
      }
    },
    {
      id: 'cpp-prac-2',
      title: 'Calculate Rectangle Area',
      filename: 'practice2.cpp',
      prompt: 'Declare C++ integer variables and output their product.',
      taskDetail:
        'Declare <code>int width = 8;</code> and <code>int height = 5;</code>, then output <code>width * height</code> with <code>std::cout</code>.',
      starterCode: `#include <iostream>\n\nint main() {\n    // Declare width = 8, height = 5 and print width * height\n    \n    return 0;\n}`,
      solutionCode: `#include <iostream>\n\nint main() {\n    int width = 8;\n    int height = 5;\n    std::cout << width * height << std::endl;\n    return 0;\n}`,
      hint: 'Write int width = 8; int height = 5; std::cout << width * height;',
      simulatedOutput: '40',
      validate(code) {
        const hasW = /int\s+width\s*=\s*8\s*;/.test(code);
        const hasH = /int\s+height\s*=\s*5\s*;/.test(code);
        const hasOut = /(std::)?cout\s*<<\s*(width\s*\*\s*height|area)/.test(code);
        if (!hasW || !hasH) return { ok: false, message: 'Declare both int width = 8; and int height = 5;' };
        if (!hasOut) return { ok: false, message: 'Print the area using std::cout << width * height;' };
        return { ok: true, message: 'Nice work! Rectangle area 40 printed.' };
      }
    },
    {
      id: 'cpp-prac-3',
      title: 'Push Element to std::vector',
      filename: 'practice3.cpp',
      prompt: 'Use STL std::vector::push_back() to append a new score and display the vector size.',
      taskDetail:
        'Call <code>scores.push_back(100);</code> and output <code>scores.size()</code> using <code>std::cout</code>.',
      starterCode: `#include <iostream>\n#include <vector>\n\nint main() {\n    std::vector<int> scores = {85, 90, 95};\n    // Push 100 into scores and output scores.size()\n    \n    return 0;\n}`,
      solutionCode: `#include <iostream>\n#include <vector>\n\nint main() {\n    std::vector<int> scores = {85, 90, 95};\n    scores.push_back(100);\n    std::cout << scores.size() << std::endl;\n    return 0;\n}`,
      hint: 'Call scores.push_back(100); then std::cout << scores.size();',
      simulatedOutput: '4',
      validate(code) {
        const hasPush = /scores\.push_back\s*\(\s*100\s*\)\s*;/.test(code);
        const hasSize = /(std::)?cout\s*<<\s*scores\.size\s*\(\s*\)/.test(code);
        if (!hasPush) return { ok: false, message: 'Add 100 using scores.push_back(100);' };
        if (!hasSize) return { ok: false, message: 'Output the vector length using std::cout << scores.size();' };
        return { ok: true, message: 'Awesome! Vector now holds 4 elements.' };
      }
    },
    {
      id: 'cpp-prac-4',
      title: 'Pass-by-Reference Doubler',
      filename: 'practice4.cpp',
      prompt: 'Modify an integer in-place using a C++ reference parameter (int&).',
      taskDetail:
        'Inside <code>void doubleValue(int&amp; n)</code>, multiply <code>n</code> by 2 (<code>n = n * 2;</code> or <code>n *= 2;</code>).',
      starterCode: `#include <iostream>\n\nvoid doubleValue(int& n) {\n    // Multiply n by 2 in-place\n    \n}\n\nint main() {\n    int val = 21;\n    doubleValue(val);\n    std::cout << val << std::endl;\n    return 0;\n}`,
      solutionCode: `#include <iostream>\n\nvoid doubleValue(int& n) {\n    n *= 2;\n}\n\nint main() {\n    int val = 21;\n    doubleValue(val);\n    std::cout << val << std::endl;\n    return 0;\n}`,
      hint: 'Inside doubleValue(int& n), write n *= 2; or n = n * 2;',
      simulatedOutput: '42',
      validate(code) {
        const hasRef = /void\s+doubleValue\s*\(\s*int\s*&\s*n\s*\)/.test(code);
        const hasMult = /(n\s*\*=\s*2|n\s*=\s*(n\s*\*\s*2|2\s*\*\s*n))\s*;/.test(code);
        if (!hasRef) return { ok: false, message: 'Keep the reference signature: void doubleValue(int& n).' };
        if (!hasMult) return { ok: false, message: 'Multiply n by 2 using n *= 2; or n = n * 2;' };
        return { ok: true, message: 'Reference mastered! val was doubled in-place to 42.' };
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
    frame.srcdoc = `<!DOCTYPE html><html><body style="font-family:sans-serif;color:#0f172a;padding:12px;margin:0;">${userCode}</body></html>`;
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
      ? ch.simulatedOutput
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

