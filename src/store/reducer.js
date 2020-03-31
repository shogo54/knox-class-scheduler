import * as actionTypes from './actions';

const initialState = {
  currCourses: [],
  currCredits: 0,
  subjects: [
    {
      subject: "Africana Studies",
      subjectCode: "AFST",
    },
    {
      subject: "American Studies",
      subjectCode: "AMST",
    },
    {
      subject: "Anthoropology & Sociology",
      subjectCode: "ANSO",
    },
    {
      subject: "Art and Art History",
      subjectCode: "ART",
    },
    {
      subject: "Arts Administration",
      subjectCode: "AADM",
    },
    {
      subject: "Asian Studies",
      subjectCode: "ASIA",
    },
    {
      subject: "Biochemistry",
      subjectCode: "BCHM",
    },
    {
      subject: "Biology",
      subjectCode: "BIOL",
    },
    {
      subject: "Business and Management",
      subjectCode: "BUS",
    },
    {
      subject: "Chemistry",
      subjectCode: "CHEM",
    },
    {
      subject: "Chinese",
      subjectCode: "CHIN",
    },
    {
      subject: "Classics",
      subjectCode: "CLAS",
    },
    {
      subject: "Computer Science",
      subjectCode: "CS",
    },
    {
      subject: "Center for Teaching and Learning",
      subjectCode: "CTL",
    },
    {
      subject: "Dance",
      subjectCode: "DANC",
    },
    {
      subject: "Economics",
      subjectCode: "ECON",
    },
    {
      subject: "Educational Studies",
      subjectCode: "EDUC",
    },
  ], 

  courses: [
    {
      subject: "BUS",
      name: "Business Spanish",
      code: "BUS 209",
      img: "images/avatars/fgomez.jpg",
      faculty: "Fernando Gomez",
      credit: ".5",
      period: "5s",
      days: "Th",
    },
    {
      subject: "BUS",
      name: "Strategic Princ of Arts Admin",
      code: "BUS 215",
      img: "images/avatars/elizmetz.jpg",
      faculty: "Elizabeth Carlin Metz & John Spittell",
      credit: "1",
      period: "2",
      days: "MWF",
    },
    {
      subject: "BUS",
      name: "Intermediate Accounting I",
      code: "BUS 301",
      img: "images/avatars/jgomer.jpg",
      faculty: "Jeffrey Gomer",
      credit: "1",
      period: "3s",
      days: "TT",
    },
    {
      subject: "BUS",
      name: "Advanced Managerial Accounting",
      code: "BUS 312",
      img: "images/avatars/jgomer.jpg",
      faculty: "Jeffrey Gomer",
      credit: "1",
      period: "5s",
      days: "TT",
    },
    {
      subject: "BUS",
      name: "Managerial Finance",
      code: "BUS 333",
      img: "images/avatars/jspittell.jpg",
      faculty: "John Spittell",
      credit: "1",
      period: "4",
      days: "MWF",
    },
    {
      subject: "BUS",
      name: "Senior Seminar in Business & Management",
      code: "BUS 399",
      img: "images/avatars/jspittell.jpg",
      faculty: "John Spittell",
      credit: "1",
      period: "2s",
      days: "TT",
    },
    {
      subject: "CS",
      name: "Program Design & Methodology",
      code: "CS 142",
      img: "images/avatars/dbunde.jpg",
      faculty: "David Bunde",
      credit: "1",
      period: "2",
      days: "MWF",
      description: "A continued study of principles of computer science and programming. This course teaches students how to design increasingly complex programs in a manageable way, using abstract data structures, data encapsulation, and other software engineering concepts. It also addresses some of the classic algorithms in computer science and begins studying how to analyze their complexity. This course is currently taught using Java. QSR; Prerequisite(s): CS 141 or permission of the instructor; QL; QR; Offered every winter and spring; Staff",
    },
    {
      subject: "CS",
      name: "Applied Data Structures",
      code: "CS 220",
      img: "images/avatars/jspacco.jpg",
      faculty: "Jaime Spacco",
      credit: "1",
      period: "6",
      days: "MWTF",
      description: "Solve real-world problems by applying the keydata structures covered in CS 142 to real worlddata. Some possible problems to solve includedetecting likely plagiarism in a large collection ofdocuments, evaluating possible outcomes in boardgames using graphs, determining the likelihoodan email message is \"spam\", and building a datamodel for a database. Prereq: CS 142 or permissionof the instructor; Offered every year; J. Spacco",
    },
    {
      subject: "CS",
      name: "Software Engineering",
      code: "CS 322",
      img: "images/avatars/mmcgill.jpg",
      faculty: "Monica McGill",
      credit: "1",
      period: "5s",
      days: "TT",
      description: "Building large-scale computing systems usesrequirements analysis, project planning, extensivedocumentation, cooperative teamwork, anddesign techniques to decompose a system intoindependent units. The course covers all the phases of large-scale system development: software process, estimation and scheduling, configuration management, and project manage-ment. Students typically work together in teamsto build a term-long project, gaining practicalexperience with developing larger systems. Prereq:CS 292; O; W; QL; Typically offered alternate years;M. McGill",
    },
    {
      subject: "CS",
      name: "Cryptography & Computer Security",
      code: "CS 330",
      img: "images/avatars/dbunde.jpg",
      faculty: "David Bunde",
      credit: "1",
      period: "3",
      days: "MWF",
      description: "With the increasing ubiquity of computers andcomputer networks, issues of privacy and securityare becoming increasingly important for comput-ing professionals. This course introduces studentsto a number of related areas in computer security.Topics covered include classical cryptography,public-key cryptography, block and streamciphers, file system security, network security,Internet and web-based security, and design principles behind cryptographic systems. In addition, the course examines social, political,legal, and ethical issues related to security systems.Prereq: CS 214; O; QL; Typically offered alternateyears; STAFF",
    },
    {
      subject: "CS",
      name: "Interactive Design",
      code: "CS 335",
      img: "images/avatars/jspacco.jpg",
      faculty: "Jaime Spacco & Tim Stedman",
      credit: "1",
      period: "3,4",
      days: "MW",
    },
    {
      subject: "CS",
      name: "Full-stack Web Dev Practicum",
      code: "CS 395E",
      img: "",
      faculty: "Staff",
      credit: "1",
      period: "2:40-5pm",
      days: "TT",
    },
  ],

};

const reducer = (state = initialState, action) => {
  switch (action.type){
    case actionTypes.ADD_COURSE:
      const addedCourse = state.courses.find(course => course.code === action.courseCode);

      if(addedCourse.added === true){
        return state;
      }else{
        addedCourse.added = true;
        return {
          ...state,
          currCredits: state.currCredits + parseFloat(addedCourse.credit),
          courses: state.courses.map((course) => {
            if(course.code === action.courseCode){
              return {
                ...course,
                added: true,
              }
            }else{
              return course
            }
          }),
          currCourses: state.currCourses.concat(addedCourse),
        }
      }
    
    case actionTypes.REMOVE_COURSE:
      return {
        ...state,
        currCredits: state.currCredits - parseFloat(state.currCourses.find(course => course.code===action.courseCode).credit),
        courses: state.courses.map((course) => {
          if(course.code === action.courseCode){
            return {
              ...course,
              added: false,
            }
          }else{
            return course
          }
        }),
        currCourses: state.currCourses.filter(course => course.code !== action.courseCode)
      }
      
    case actionTypes.REMOVE_ALL_COURSES:
      return {
        ...state,
        currCredits: 0,
        courses: state.courses.map((course) => {
          if(course.added === true){
            return {
              ...course,
              added: false,
            }
          }else{
            return course
          }
        }),
        currCourses: [],
      }

    default: 
      return{
        ...state,
    }
  }
}

export default reducer;