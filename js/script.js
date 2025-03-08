const students = [
    {
        name: "Amit",
        roll: 101,
        class: "Class 8th",
        section: "A",
    },
    {
        name: "Priya",
        roll: 102,
        class: "Class 8th",
        section: "B",
    },
    {
        name: "Rahul",
        roll: 103,
        class: "Class 9th",
        section: "A",
    },
    {
        name: "Sonia",
        roll: 104,
        class: "Class 9th",
        section: "D",
    },
    {
        name: "Vikram",
        roll: 105,
        class: "Class 10th",
        section: "A",
    },
    {
        name: "Neha",
        roll: 106,
        class: "Class 10th",
        section: "B",
    },
    {
        name: "Karan",
        roll: 107,
        class: "Class 11th",
        section: "A",
    },
    {
        name: "Simran",
        roll: 108,
        class: "Class 11th",
        section: "C",
    },
    {
        name: "Arjun",
        roll: 109,
        class: "Class 12th",
        section: "A",
    },
    {
        name: "Megha",
        roll: 110,
        class: "Class 12th",
        section: "B",
    },
    {
        name: "Manish Kumar Sharma",
        roll: 212,
        class: "Class 12th",
        section: "A",
    },
    {
        name: "Mansi Kumari",
        roll: 458,
        class: "Class 12th",
        section: "D",
    },
    {
        name: "Suman Kumari",
        roll: 217,
        class: "Class 12th",
        section: "D",
    },
    {
        name: "Pooja Kumari",
        roll: 634,
        class: "Class 12th",
        section: "D",
    },
    {
        name: "Kajal",
        roll: 340,
        class: "Class 12th",
        section: "D",
    },
    {
        name: "Radhika",
        roll: 890,
        class: "Class 12th",
        section: "D",
    },
    {
        name: "Simran Kumari",
        roll: 331,
        class: "Class 12th",
        section: "D",
    },
    {
        name: "Aarti Kumari",
        roll: 555,
        class: "Class 12th",
        section: "D",
    },
    {
        name: "Muskan",
        roll: 550,
        class: "Class 12th",
        section: "D",
    },
    {
        name: "Bharti Kumari",
        roll: 110,
        class: "Class 12th",
        section: "D",
    },
    {
        name: "Neetu Kumari",
        roll: 220,
        class: "Class 12th",
        section: "D",
    },
    {
        name: "Mansi Mishra",
        roll: 202,
        class: "Class 12th",
        section: "D",
    },
    {
        name: "Nancy Singh",
        roll: 312,
        class: "Class 12th",
        section: "D",
    },
    {
        name: "Kiran Kumari",
        roll: 978,
        class: "Class 12th",
        section: "D",
    },
    {
        name: "Pooja Kumari",
        roll: 106,
        class: "Class 12th",
        section: "D",
    },
    {
        name: "Kiran",
        roll: 101,
        class: "Class 12th",
        section: "D",
    },
    {
        name: "Ashi Chaudhary",
        roll: 697,
        class: "Class 12th",
        section: "D",
    }
];

// Sections mapped to classes
const sectionsMap = {
    "Class 8th": ["A", "B", "C", "D"],
    "Class 9th": ["A", "B", "C", "D"],
    "Class 10th": ["A", "B", "C", "D"],
    "Class 11th": ["A", "B", "C", "D"],
    "Class 12th": ["A", "B", "C", "D"],
};

const classDropdown = document.getElementById("class");
const sectionDropdown = document.getElementById("section");
const searchBtn = document.getElementById("btn");
const tableDataBox = document.querySelector(".table-data-box");

// Populate section dropdown dynamically
classDropdown.addEventListener("change", function () {
    const selectedClass = classDropdown.value;
    sectionDropdown.innerHTML = "<option>Select Section</option>"; // Reset sections

    if (sectionsMap[selectedClass]) {
        sectionsMap[selectedClass].forEach((sec) => {
            let option = document.createElement("option");
            option.textContent = sec;
            sectionDropdown.appendChild(option);
        });
    }
});

// Filter and display data
searchBtn.addEventListener("click", function () {
    const selectedClass = classDropdown.value;
    const selectedSection = sectionDropdown.value;

    // Filter students based on selected class & section
    const filteredStudents = students.filter(
        (student) =>
            student.class === selectedClass && student.section === selectedSection
    );

    // Display filtered results
    if (filteredStudents.length > 0) {
        let tableHTML = `<table border="1">
                            <tr>
                                <th>Student Name</th>
                                <th>Roll No.</th>
                                <th>Class</th>
                                <th>Section</th>
                            </tr>`;
        filteredStudents.forEach((student) => {
            tableHTML += `<tr>    
                            <td>${student.name}</td>
                            <td>${student.roll}</td>
                            <td>${student.class}</td>
                            <td>${student.section}</td>
                    </tr>`;
        });

        tableHTML += `</table>`;
        setTimeout(() => {
            tableDataBox.innerHTML = tableHTML;
        }, 1000);
    } else {
        tableDataBox.innerHTML =
            "<p>No data found for the selected class and section.</p>";
    }
});
